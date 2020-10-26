import React from 'react';

import { delay } from '@/util';
// import { augmentCanvas } from './augment-canvas';
import { assets } from 'assets-path.json';
import Lottie from 'lottie-web'

// import { Image as MsImage, ImageFit } from 'office-ui-fabric-react/lib/Image';
// import { HomePageSpinner } from './HomePageSpinner';

import { NavBox } from '../../content/comps/NavBox';

// import './css/home.scss';
// import './css/home-1.scss';
// import './css/home-2.scss';
// import './css/home-3.scss';
import './css/homepage.scss';
// import './css/home-nav.scss';
import Data0 from 'C:/Users/刘鑫/Desktop/新建文件夹 (2)/Home Page/线条/output/output/主页动图/ch0(1).json'
import Data1 from 'C:/Users/刘鑫/Desktop/新建文件夹 (2)/Home Page/线条/output/output/主页动图/ch1.json'
import Data2 from 'C:/Users/刘鑫/Desktop/新建文件夹 (2)/Home Page/线条/output/output/主页动图/ch2.json'
import Data3 from 'C:/Users/刘鑫/Desktop/新建文件夹 (2)/Home Page/线条/output/output/主页动图/ch3.json'
import Data4 from 'C:/Users/刘鑫/Desktop/新建文件夹 (2)/Home Page/线条/output/output/主页动图/ch4.json'
import Data5 from 'C:/Users/刘鑫/Desktop/新建文件夹 (2)/Home Page/线条/output/output/主页动图/ch5.json'
import Data6 from 'C:/Users/刘鑫/Desktop/新建文件夹 (2)/Home Page/线条/output/output/主页动图/ch6.json'
import Data7 from 'C:/Users/刘鑫/Desktop/新建文件夹 (2)/Home Page/线条/output/output/主页动图/ch7.json'
import Line56 from 'C:/Users/刘鑫/Desktop/新建文件夹 (2)/Home Page/线条/output/output/主页动图/linedown.json'
import Line234 from 'C:/Users/刘鑫/Desktop/新建文件夹 (2)/Home Page/线条/output/output/主页动图/line.json'
// import { Data0, Data1, Data2, Data3, Data4, Data5, Data6, Data7, Line } from 'C:/Users/刘鑫/Desktop/新建文件夹 (2)/Home Page/线条/output/all.json'


interface IHomePageState {
   ch0: any;
   ch1: any;
   ch2: any;
   ch3: any;
   ch4: any;
   ch5: any;
   ch6: any;
   ch7: any;
   ch2Line: any;
   ch3Line: any;
   ch4Line: any;
   ch5Line: any;
   ch6Line: any;
}

export class HomePageBody extends React.Component<{}, IHomePageState> {
   private ch0: any;
   private ch1: any;
   private ch2: any;
   private ch3: any;
   private ch4: any;
   private ch5: any;
   private ch6: any;
   private ch7: any;
   private ch2Line: any;
   private ch3Line: any;
   private ch4Line: any;
   private ch5Line: any;
   private ch6Line: any;
   private $galleryTrack: HTMLDivElement;
   private $homePage: HTMLDivElement;
   private $title0: HTMLDivElement;
   private $title1: HTMLDivElement;
   private $title2: HTMLDivElement;
   private $title3: HTMLDivElement;
   private $title4: HTMLDivElement;
   private $title5: HTMLDivElement;
   private $title6: HTMLDivElement;
   private $title7: HTMLDivElement;

   private $content0: HTMLDivElement;
   private $content1: HTMLDivElement;
   private $content2: HTMLDivElement;
   private $content3: HTMLDivElement;
   private $content4: HTMLDivElement;
   private $content5: HTMLDivElement;
   private $content6: HTMLDivElement;
   private $content7: HTMLDivElement;

   private $titles: HTMLDivElement[];
   private $contents: HTMLDivElement[];

   private $heading1: HTMLDivElement;

   public state: IHomePageState = {
      ch0: null,
      ch1: null,
      ch2: null,
      ch3: null,
      ch4: null,
      ch5: null,
      ch6: null,
      ch7: null,
      ch2Line: null,
      ch3Line: null,
      ch4Line: null,
      ch5Line: null,
      ch6Line: null,
   };

   render() {
      const footerNavs = [
         {
            title: 'Project',
            content: 'home-block home-blockhome-block home-blockhome-blockhome-blockhome-block',
            url: '/Description'
         },
         {
            title: 'Modeling',
            content: 'home-block home-blockhome-block home-blockhome-blockhome-blockhome-block',
            url: '/Model'
         },
         {
            title: 'Human Practices',
            content: 'home-block home-blockhome-block home-blockhome-blockhome-blockhome-block',
            url: '/Human_Practices'
         },
         {
            title: 'Team',
            content: 'home-block home-blockhome-block home-blockhome-blockhome-blockhome-block',
            url: '/Member'
         }
      ];


      return (<>
         <div className='home-page' ref={e => this.$homePage = e!}>
            <div className="home-block">
               <div className="div-block">
                  <div className="div-block-2">
                     <div className="div-block-4">
                        <div className="div-block-30">
                           <h1 id="heading1"
                           ref={e => this.$heading1 = e!}
                              style={{
                                 transform: 'translate3d(0px, -150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                 transformStyle: 'preserve-3d'
                              }}
                              className="heading">9 Priority Issues Facing<br /><span className="text-span">Our
                                    Environment</span></h1>
                        </div>
                        <div className="div-block-31">
                           <p data-w-id="cd568a61-46fe-e407-4fb7-ab41d4e4e26d"
                              style={{
                                 transform: 'translate3d(0px, 0 %, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                 transformStyle: 'preserve-3d'
                              }}
                              className="body-text">Environment Aotearoa is a report produced by the Ministry for the
                              Environment and Stats NZ. Backed by a team of internationally recognised scientists, it
                              &nbsp;highlights the most important issues affecting the health of our environment.
                              Using the latest data on 60 environmental indicators, the report identifies the most
                                wide-reaching, lasting and escalating problems for our country and culture.<br /></p>
                        </div>
                     </div>
                  </div>
                  <div className="div-block-3">
                     <div id="ch0" className="lottie"></div>
                  </div>
               </div>
            </div>

            <div className="gallery-block desktop">
               <div className="gallery-scroll-track">
                  <div className="gallery-container">
                     <div className="gallery-track" ref={e => this.$galleryTrack = e!}
                        style={{
                           transformStyle: 'preserve-3d',
                           willChange: 'transform'
                        }}>
                        <div id='1' className="issue-div">
                           <div className="text-div">
                              <div className="text-wrapper tw-birds">
                                 <div className="text-block1">
                                    <h1 className="heading" ref={e => this.$title1 = e!}>
                                       Chapter 1, <br />animals, and ecosystems are under threat<br /></h1>
                                 </div>
                                 <div className="text-block2">
                                    <p className="body-text _2" ref={e => this.$content1 = e!}>
                                       Our unique native biodiversity is under significant pressure from introduced
                                       species, pollution,
                                       physical changes to our landscapes and coast, harvesting of wild species, and
                                       other factors.
                                       Almost 4,000 of our native species are currently threatened with or at risk of
                                        extinction.<br />
                                    </p>
                                 </div>
                              </div>
                           </div>
                           <div className="image-wrapper">
                              <img src={assets.homepage.ch1$svg} alt="" className="color"
                                 style={{
                                    willChange: 'filter, opacity',
                                    filter: 'saturate(100%)',
                                    opacity: 1
                                 }} />
                              <div id="ch1" className="lottie"></div>
                           </div>
                        </div>
                        <div className="issue-div">
                           <div className="image-wrapper">
                              <img src={assets.homepage.ch2$svg} alt="" className="color"
                                 style={{
                                    willChange: 'filter, opacity',
                                    filter: 'saturate(100%)',
                                    opacity: 1
                                 }} />
                              <div id="ch2" className="lottie"></div>
                           </div>
                           <div className="text-div">
                              <div className="line-parent">
                                 <div id="ch2-line" className="line"></div>
                              </div>
                              <div className="text-wrapper ">
                                 <div className="text-block1">
                                    <h1 className="heading" ref={e => this.$title2 = e!}>
                                       Chapter 2, <br />animals, and ecosystems are under threat<br /></h1>
                                 </div>
                                 <div className="text-block2">
                                    <p className="body-text _2" ref={e => this.$content2 = e!}>
                                       Our unique native biodiversity is under significant pressure from introduced
                                       species, pollution,
                                       physical changes to our landscapes and coast, harvesting of wild species, and
                                       other factors.
                                       Almost 4,000 of our native species are currently threatened with or at risk of
                                        extinction.<br />
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="issue-div">
                           <div className="image-wrapper">
                              <img src={assets.homepage.ch3$svg} alt="" className="color"
                                 style={{
                                    willChange: 'filter, opacity',
                                    filter: 'saturate(100%)',
                                    opacity: 1
                                 }} />
                              <div id="ch3" className="lottie"></div>
                           </div>
                           <div className="text-div">
                              <div className="line-parent">
                                 <div id="ch3-line" className="line"></div>
                              </div>
                              <div className="text-wrapper ">
                                 <div className="text-block1">
                                    <h1 className="heading" ref={e => this.$title3 = e!}>
                                       Chapter 3, <br />animals, and ecosystems <br />are under threat<br /></h1>
                                 </div>
                                 <div className="text-block2">
                                    <p className="body-text _2" ref={e => this.$content3 = e!}>
                                       Our unique native biodiversity is under significant pressure from introduced
                                       species, pollution,
                                       physical changes to our landscapes and coast, harvesting of wild species, and
                                       other factors.
                                       Almost 4,000 of our native species are currently threatened with or at risk of
                                        extinction.<br />
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="issue-div">
                           <div className="image-wrapper">
                              <img src={assets.homepage.ch4$svg} alt="" className="color"
                                 style={{
                                    willChange: 'filter, opacity',
                                    filter: 'saturate(100%)',
                                    opacity: 1
                                 }} />
                              <div id="ch4" className="lottie"></div>
                           </div>
                           <div className="text-div">
                              <div className="line-parent">
                                 <div id="ch4-line" className="line"></div>
                              </div>
                              <div className="text-wrapper ">
                                 <div className="text-block1">
                                    <h1 className="heading" ref={e => this.$title4 = e!}>
                                       Chapter 4, <br />animals, and ecosystems <br />are under threat<br /></h1>
                                 </div>
                                 <div className="text-block2">
                                    <p className="body-text _2" ref={e => this.$content4 = e!}>
                                       Our unique native biodiversity is under significant pressure from introduced
                                       species, pollution,
                                       physical changes to our landscapes and coast, harvesting of wild species, and
                                       other factors.
                                       Almost 4,000 of our native species are currently threatened with or at risk of
                                        extinction.<br />
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="issue-div">
                           <div className="image-wrapper">
                              <img src={assets.homepage.ch5$svg} alt="" className="color"
                                 style={{
                                    willChange: 'filter, opacity',
                                    filter: 'saturate(100%)',
                                    opacity: 1
                                 }} />
                              <div id="ch5" className="lottie"></div>
                           </div>
                           <div className="text-div">
                              <div className="line-parent">
                                 <div id="ch5-line" className="line"></div>
                              </div>
                              <div className="text-wrapper ">
                                 <div className="text-block1">
                                    <h1 className="heading" ref={e => this.$title5 = e!}>
                                       Chapter 5, <br />animals, and ecosystems <br />are under threat<br /></h1>
                                 </div>
                                 <div className="text-block2">
                                    <p className="body-text _2" ref={e => this.$content5 = e!}>
                                       Our unique native biodiversity is under significant pressure from introduced
                                       species, pollution,
                                       physical changes to our landscapes and coast, harvesting of wild species, and
                                       other factors.
                                       Almost 4,000 of our native species are currently threatened with or at risk of
                                        extinction.<br />
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="issue-div">
                           <div className="image-wrapper">
                              <img src={assets.homepage.ch6$svg} alt="" className="color"
                                 style={{
                                    willChange: 'filter, opacity',
                                    filter: 'saturate(100%)',
                                    opacity: 1
                                 }} />
                              <div id="ch6" className="lottie"></div>
                           </div>
                           <div className="text-div">
                              <div className="line-parent">
                                 <div id="ch6-line" className="line"></div>
                              </div>
                              <div className="text-wrapper ">
                                 <div className="text-block1">
                                    <h1 className="heading" ref={e => this.$title6 = e!}>
                                       Chapter 6, <br />animals, and ecosystems <br />are under threat<br /></h1>
                                 </div>
                                 <div className="text-block2">
                                    <p className="body-text _2" ref={e => this.$content6 = e!}>
                                       Our unique native biodiversity is under significant pressure from introduced
                                       species, pollution,
                                       physical changes to our landscapes and coast, harvesting of wild species, and
                                       other factors.
                                       Almost 4,000 of our native species are currently threatened with or at risk of
                                        extinction.<br />
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="issue-div">
                           <div className="image-wrapper">
                              <img src={assets.homepage.ch7$svg} alt="" className="color"
                                 style={{
                                    willChange: 'filter, opacity',
                                    filter: 'saturate(100%)',
                                    opacity: 1
                                 }} />
                              <div id="ch7" className="lottie"></div>
                           </div>
                           <div className="text-div">
                              <div className="line-parent">
                                 <div id="ch7-line" className="line"></div>
                              </div>
                              <div className="text-wrapper ">
                                 <div className="text-block1">
                                    <h1 className="heading" ref={e => this.$title7 = e!}>
                                       Chapter 7, <br />animals, and ecosystems <br />are under threat<br /></h1>
                                 </div>
                                 <div className="text-block2">
                                    <p className="body-text _2" ref={e => this.$content7 = e!}>
                                       Our unique native biodiversity is under significant pressure from introduced
                                       species, pollution,
                                       physical changes to our landscapes and coast, harvesting of wild species, and
                                       other factors.
                                       Almost 4,000 of our native species are currently threatened with or at risk of
                                        extinction.<br />
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer-nav-intro">
               <h2>
                  Want to find out more?
               </h2>
            </div>
            <NavBox items={footerNavs}></NavBox>
            <div style={
               {
                  width: '100%',
                  height: '6em'
               }
            }>

            </div>
         </div>
      </>)
   }

   private resize = () => {
      console.log("resize");
      this.scroll();
   }
   public componentDidMount() {
      window.addEventListener('resize', this.resize);
      window.addEventListener('scroll', this.scroll);
      this.$contents = [
         this.$content1,
         this.$content2,
         this.$content3,
         this.$content4,
         this.$content5,
         this.$content6,
         this.$content7,
      ];
      this.$titles = [
         this.$title1,
         this.$title2,
         this.$title3,
         this.$title4,
         this.$title5,
         this.$title6,
         this.$title7,
      ];
      this.addLineAnimation();
      this.resize();
      setTimeout(() => { this.ch0.goToAndStop(2000, 0) }, 2000);

      this.$heading1.style.transform = 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';

   }

   public componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
      window.removeEventListener('scroll', this.scroll);
   }

   public scroll = () => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 滚动距离
      let pageHeight = document.documentElement.clientHeight; // 页面高度
      const minWidth = 479; // 小屏宽度

      //动画进度条控制
      let x = (scrollTop / pageHeight); // 相对于滚动条的位置
      let times = 3000 // 动画时长
      let lineTime = 2500
      console.log(x);
      //ch1的变化范围
      if (x > 4) {
         this.ch1.goToAndStop(78, 1);
      }
      if (x > 9) {
         this.ch2.goToAndStop(74, 1);
      }
      if (x > 11) {
         this.ch2Line.goToAndStop(63, 1);
      }
      if (x > 15) {
         this.ch3.goToAndStop(74, 1);
      }
      if (x > 18) {
         this.ch3Line.goToAndStop(63, 1);
      }
      if (x > 22) {
         this.ch4.goToAndStop(76, 1);
      }
      if (x > 25) {
         this.ch4Line.goToAndStop(63, 1);
      }
      if (x > 29) {
         this.ch5.goToAndStop(75, 1);
      }
      if (x > 32) {
         this.ch5Line.goToAndStop(1999, 0);
      }
      if (x > 36) {
         this.ch6.goToAndStop(76, 1);
      }
      if (x > 39) {
         this.ch6Line.goToAndStop(1999, 0);
      }
      if (x > 43) {
         this.ch7.goToAndStop(74, 1);
      }


      let target: number;

      // chapter 1
      if (.12 < x && x < 4) {
         target = Math.ceil(times * (x - 0.12) / 3.88);
         this.ch1.goToAndStop(target, 0);
      }
      // chapter 2
      if (4 < x && x < 9) {
         target = Math.ceil(times * (x - 4) / 5);
         this.ch2.goToAndStop(target, 0);
      }
      if (9 < x && x < 11) {
         target = Math.ceil(lineTime * (x - 9) / 2);
         this.ch2Line.goToAndStop(target, 0);
      }
      // chapter 3
      if (11 < x && x < 15) {
         target = Math.ceil(times * (x - 11) / 4);
         this.ch3.goToAndStop(target, 0);
      }
      if (15 < x && x < 18) {
         target = Math.ceil(lineTime * (x - 15) / 3);
         this.ch3Line.goToAndStop(target, 0);
      }
      // chapter 4
      if (18 < x && x < 22) {
         target = Math.ceil(times * (x - 18) / 4);
         this.ch4.goToAndStop(target, 0);
      }
      if (22 < x && x < 25) {
         target = Math.ceil(lineTime * (x - 22) / 3);
         this.ch4Line.goToAndStop(target, 0);
      }
      // chapter 5
      if (25 < x && x < 29) {
         target = Math.ceil(times * (x - 25) / 4);
         this.ch5.goToAndStop(target, 0);
      }
      if (29 < x && x < 32) {
         target = Math.ceil(1999 * (x - 29) / 3);
         this.ch5Line.goToAndStop(target, 0);
      }
      // chapter 6
      if (32 < x && x < 36) {
         target = Math.ceil(times * (x - 32) / 4);
         this.ch6.goToAndStop(target, 0);
      }
      if (36 < x && x < 39) {
         target = Math.ceil(1999 * (x - 36) / 3);
         this.ch6Line.goToAndStop(target, 0);
      }
      // chapter 7
      if (39 < x && x < 43) {
         target = Math.ceil(times * (x - 39) / 4);
         this.ch7.goToAndStop(target, 0);
      }

      // 文字动效
      // this.textAnimation();

      //滚动条控制
      if (this.$galleryTrack) {
         let index = (x - 4) * 100 / 7;
         if (4 <= x) {
            if (index <= 600) {
               this.$galleryTrack.style.transform = 'translate3d(-' + index +
                  'vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
            } else {
               this.$galleryTrack.style.transform = 'translate3d(-' + 600 +
                  'vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
            }
         }
      }
   }

   public addLineAnimation = () => {
      this.ch0 = Lottie.loadAnimation({
         container: document.getElementById('ch0'),
         renderer: 'svg',
         loop: false,
         autoplay: true,
         animationData: Data0,

      })

      this.ch1 = Lottie.loadAnimation({
         container: document.getElementById('ch1'),
         renderer: 'svg',
         loop: false,
         autoplay: false,
         animationData: Data1,
      })

      this.ch2 = Lottie.loadAnimation({
         container: document.getElementById('ch2'),
         renderer: 'svg',
         loop: false,
         autoplay: false,
         animationData: Data2,
      })

      this.ch2Line = Lottie.loadAnimation({
         container: document.getElementById('ch2-line'),
         renderer: 'svg',
         loop: false,
         autoplay: false,
         animationData: Line234,
      })

      this.ch3 = Lottie.loadAnimation({
         container: document.getElementById('ch3'),
         renderer: 'svg',
         loop: false,
         autoplay: false,
         animationData: Data3,

      })

      this.ch3Line = Lottie.loadAnimation({
         container: document.getElementById('ch3-line'),
         renderer: 'svg',
         loop: false,
         autoplay: false,
         animationData: Line234,
      })

      this.ch4 = Lottie.loadAnimation({
         container: document.getElementById('ch4'),
         renderer: 'svg',
         loop: false,
         autoplay: false,
         animationData: Data4,

      })

      this.ch4Line = Lottie.loadAnimation({
         container: document.getElementById('ch4-line'),
         renderer: 'svg',
         loop: false,
         autoplay: false,
         animationData: Line234,
      })


      this.ch5 = Lottie.loadAnimation({
         container: document.getElementById('ch5'),
         renderer: 'svg',
         loop: false,
         autoplay: false,
         animationData: Data5,

      })

      this.ch5Line = Lottie.loadAnimation({
         container: document.getElementById('ch5-line'),
         renderer: 'svg',
         loop: false,
         autoplay: false,
         animationData: Line56,
      })


      this.ch6 = Lottie.loadAnimation({
         container: document.getElementById('ch6'),
         renderer: 'svg',
         loop: false,
         autoplay: false,
         animationData: Data6,

      })

      this.ch6Line = Lottie.loadAnimation({
         container: document.getElementById('ch6-line'),
         renderer: 'svg',
         loop: false,
         autoplay: false,
         animationData: Line56,
      })

      this.ch7 = Lottie.loadAnimation({
         container: document.getElementById('ch7'),
         renderer: 'svg',
         loop: false,
         autoplay: false,
         animationData: Data7,

      })
   }

   public textAnimation = () => {
      let vh = document.documentElement.clientHeight;
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 滚动距离
      let viewLength = 0;

      if (this.$galleryTrack.style.transform) {
         viewLength = parseInt(this.$galleryTrack.style.transform.split("translate3d(")[1].split("vw, 0px, 0px)")[0]);
      }
      // console.log(viewLength);
      //未开始移动屏幕  第一屏字体效果
      if (viewLength === 0 && scrollTop < vh) {

         for (let i = 0; i < this.$titles.length; i++) {
            if (i === 0) {
               this.$titles[i].style.animation = '0.5s ease-in-out 0s 1 normal none running titleMove';
               this.$contents[i].style.animation = '1.5s ease-in-out 0s 1 normal none running textMove';
            } else {
               this.$titles[i].style.animation = ''
               this.$contents[i].style.animation = ''
            }
         }
      }

      //开始移动屏幕  字体效果
      if (viewLength < -50) {
         var chapter = -Math.ceil((viewLength + 75) / 100) + 1;
         //屏幕未移动前chapter为 0  开始移动为 1
         for (let i = 0; i < this.$titles.length; i++) {
            if (i === chapter) {
               this.$titles[i].style.animation = '0.4s ease-in-out 0s 1 normal none running titleMove';
               this.$contents[i].style.animation = '1.2s ease-in-out 0s 1 normal none running textMove';
            } else {
               this.$titles[i].style.animation = ''
               this.$contents[i].style.animation = ''
            }
         }
      }
   }

   public async enter() {
      document.title = 'Home - CPU-CHINA - iGEM 2020';
      // this.$logoareaSpinner.startLengthening();
      // await delay(800);
      // this.$logoareaSpinner.stopRotating();
      // this.setState({
      //    showLogo: true,
      //    isLogoareaBlue: true,
      // });
      // await delay(100);
      // this.setState({
      //    shouldApproach: true,
      //    showHome1Bg: true,
      // });
      // await delay(1000);
      // this.setState({
      //    showLogoWave: true,
      //    showHome1Slogan: true,
      // });
      // await delay(300);
      // this.setState({
      //    isHome1MaskNotDisplay: true,
      //    showHome23: true,
      // }, () => {
      //    // this.resize();
      // });
   }
   public async exit() {
      // this.setState({
      //    shouldHomePageLeave: true,
      // });
      await delay(300);
      window.scrollTo({
         top: 0,
      });
   }
}
