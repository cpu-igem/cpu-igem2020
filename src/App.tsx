import React from "react";

import { locaCtrl } from "./event/loca-ctrl";
import { queryPage, Page } from "./page";
import { context } from "./event/context";
import { initTheme } from "./theme";

import "./css/reset.css";
import "./css/fonts.scss";
import "./css/root.scss";


import Header from "./comps/Header";
import Loading from "./comps/Loading";
import Footer from "./comps/Footer";

import { InitialPage } from "./pages/Initial";
// import { analysis } from "./analysis";
import { AlertSafari } from "./comps/AlertSafari";

interface IAppState {
   BeforeHeader: React.ComponentType<any> | false;
   BeforeHeaderProps: any;
   Body: React.ComponentType<any> | false;
   BodyProps: any;
   showLoading: boolean;
   showFooter: boolean;
   alertSafari: boolean;
}

export default class App extends React.Component<{}, IAppState> {
   public $beforeHeader: any;
   public $header: Header;
   public $body: any;
   public $footer: Footer;
   public $fixedBelowHeader: HTMLDivElement;

   public state: IAppState = {
      BeforeHeader: false,
      BeforeHeaderProps: {},
      Body: false,
      BodyProps: {},
      showLoading: true,
      showFooter: false,
      alertSafari: false,
   };
   public currPage: Page = InitialPage;
   public nextPage: Page | null = null;

   public componentDidMount() {
      if (
         navigator.userAgent.match(/Trident\/7\./) ||
         navigator.userAgent.match(/Edge/)
      ) {
         window.addEventListener &&
            window.addEventListener("mousewheel", (e) => {
               e.preventDefault();
               const wd = (e as any).wheelDelta;
               const csp = window.pageYOffset;
               window.scrollTo(0, csp - wd);
            });
      }

      if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
         if (
            document.cookie.replace(
               /(?:(?:^|.*;\s*)alertSafariOnce\s*=\s*([^;]*).*$)|^.*$/,
               "$1"
            ) !== "true"
         ) {
            this.setState({
               alertSafari: true,
            });
            document.cookie =
               "alertSafariOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
         }
      }

      initTheme();

      this.currPage.init({ App: this });

      this.watchPageBehavior();
   }

   /**
    * 组件挂载完成后，对各种事件【headerFixed、scroll、pathDidUpdate】进行监听
    * headerFixed事件            文档页面中的固定
    * scroll事件                 浏览器监听到滚动事件时，触发自定义的滚动事件
    * pathDidUpdate事件          路由导航功能
    */
   public watchPageBehavior() {
      context.on("headerFixed", (isFixed) => {
         if (isFixed) {
            this.$fixedBelowHeader.classList.add("on-header-fixed");
         } else {
            this.$fixedBelowHeader.classList.remove("on-header-fixed");
         }
      });

      window.addEventListener("scroll", () => {
         context.emit("scroll");
      });

      // locaCtrl.on("pathDidUpdate", analysis.logVisit);
      // 组件中的 navTo 触发 pathDidUpdate 事件，并且把 path 传给navToPaht函数
      locaCtrl.on("pathDidUpdate", this.navToPath);
      
   }

   /**
    * 通过 path 导航到对应的 page 中
    * nextPage 先初始化【在初始化的过程中，通过改变this.state的状态实现组件的更新】
    * currPage 后离开
    */
   public navToPath = (path: string) => {
      const newPage = queryPage(path);
      if (newPage === this.nextPage) return;
      else if (this.nextPage === null && this.currPage === newPage) return;
      else {
         this.nextPage = newPage;
         this.nextPage.init({ App: this });
         this.currPage.exit();
      }
   };

   public render() {
      // BeforHeader Body 为组件，动态修改
      const { BeforeHeader, BeforeHeaderProps, Body, BodyProps } = this.state;
      return (
         <div id="App">
            <div id="App-before-header">
               {BeforeHeader ? (
                  <BeforeHeader
                     ref={(el: any) => (this.$beforeHeader = el)}
                     {...BeforeHeaderProps}
                  />
               ) : (
                  this.state.showLoading && (
                     <div id="bh-loading-placeholder"></div>
                  )
               )}
            </div>
            <Header ref={(el) => (this.$header = el!)} />

            <div id="App-body">
               <Loading showLoading={this.state.showLoading} />
               <div
                  id="fixed-below-header"
                  ref={(el) => (this.$fixedBelowHeader = el!)}
               ></div>
               {Body && (
                  <Body
                     ref={(el: any) => (this.$body = el)}
                     $header={this.$header}
                     $fixedBelowHeader={this.$fixedBelowHeader}
                     {...BodyProps}
                  />
               )}
            </div>

            <AlertSafari
               show={this.state.alertSafari}
               hide={() => {
                  this.setState({ alertSafari: false });
               }}
            />

            <Footer
               ref={(el) => (this.$footer = el!)}
               showFooter={this.state.showFooter}
            />
         </div>
      );
   }
}
