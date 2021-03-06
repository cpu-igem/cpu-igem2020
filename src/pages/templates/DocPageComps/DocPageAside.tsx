import React from 'react';
import DocPageSetting from './DocPageSetting';

import './css/DocPageAside.scss';
import { Shimmer } from 'office-ui-fabric-react/lib/Shimmer';
import { range } from '@/util';
import { context } from '@/event/context';
import { Anchor, Steps } from 'antd';
import 'antd/es/anchor/style/css'
import 'antd/es/steps/style/css'
import { body } from '@/pages/content/Description';

const { Link } = Anchor;

interface IDocPageAsideProps {
   title: string;
   docTitle: string;
   darkMode: boolean;
   // translatable: boolean;
   // enableTranslate: boolean;
   lang: string;
   headings?: Array<{
      text: string;
      ref: any;
   }>;
}

export default class DocPageAside extends React.Component<IDocPageAsideProps> {
   private $indicator: HTMLDivElement | null;
   private $indicatorSlider: HTMLDivElement | null;
   private item: string = '0';
   private onScroll = (() => {
      let canRun = true;
      const fn = () => {
         if (!canRun) return;
         canRun = false;
         setTimeout(() => {
            canRun = true;
            if (!this.mounted) return;
            fn();
         }, 50);
         const { headings } = this.props;
         if (!headings || headings.length === 0) return;
         const { nth, progress } = this.getPosition();
         this.item = (nth).toString();
         // console.log(progress);
         // this.$indicator!.style.top = (nth * 4.33 + 0.5) + 'em';
         // this.$indicatorSlider!.style.top = progress * 0.5 + 'em';
      };
      return fn;
   })();

   public getPosition() {
      const headings = this.props.headings!;
      const halfViewportHeight = document.documentElement.clientHeight / 2;
      let nth = 0;
      let progress = 0;
      while (nth < headings.length) {
         if (nth + 1 === headings.length) break;
         if (headings[nth + 1].ref.getBoundingClientRect().top >= halfViewportHeight) break;
         nth++;
      }
      if (nth + 1 !== headings.length) {
         const absProgress =
            halfViewportHeight - headings[nth].ref.getBoundingClientRect().top;
         const absLength =
            headings[nth + 1].ref.getBoundingClientRect().top
            - headings[nth].ref.getBoundingClientRect().top;
         progress = 2 * absProgress / absLength - 1;
      }
      if (nth === 0 && progress < 0) progress = 0;
      return {
         nth,
         progress,
      };
   }

   private mounted = false;
   public componentDidMount() {
      this.mounted = true;
      context.on('scroll', this.onScroll);
      this.onScroll();
   }
   public componentDidUpdate() {
      this.onScroll();
   }
   public componentWillUnmount() {
      this.mounted = false;
      context.removeListener('scroll', this.onScroll);
   }

   private resolveText(text: string) {
      if (/^[0-9]+\. /.test(text)) {
         return {
            label: text.split('.')[0],
            text: text.replace(/^[0-9]+\. /, ''),
         };
      }
      if (/^[A-Z]+\. /.test(text)) {
         return {
            label: text.split('.')[0],
            text: text.replace(/^[IVX]+\. /, ''),
         };
      }
      return {
         label: text.charAt(0),
         text: text.substring(1),
      };
   }
   public onClickNav(i: number) {
      const { headings } = this.props;
      if (!headings) return;
      if (i >= headings.length) return;
      headings[i].ref.scrollIntoView({
         behavior: 'smooth',
         block: 'center',
      });
   }

   public handleClick = (
      e: React.MouseEvent<HTMLElement>,
      link: {
         title: React.ReactNode;
         href: string;
      },
   ) => {
      e.preventDefault();
      let target = parseInt(link.href);
      this.onClickNav(target);
   };

   public getCurrentAnchor = () => {
      return this.item;
   };

   public render() {
      const shimmerColors = {
         background: this.props.darkMode ? '#201F1E' : '#EDEBE9',
         shimmer: this.props.darkMode ? '#201F1E' : '#EDEBE9',
         shimmerWave: this.props.darkMode ? '#605e5c' : '#FAF9F8',
      };

      return (<>
         <div id='doc-aside-setting'>
         {/* <div>
               <div>{this.props.docTitle}</div>
            </div> */}
            {/* <DocPageSetting
               darkMode={this.props.darkMode}
               translatable={this.props.translatable}
               enableTranslate={this.props.enableTranslate}
               lang={this.props.lang}
            /> */}
         </div>
         <div id='doc-nav'>
            {/* {!this.props.headings &&
               range(1, 3).map(i =>
                  <Shimmer key={i}
                     shimmerColors={shimmerColors}
                  />)
            } */}
            {/* {this.props.headings && <>
               {this.props.headings.length !== 0 &&
                  <div className='doc-nav-indicator' ref={el => this.$indicator = el}>
                     <div ref={el => this.$indicatorSlider = el}></div>
                  </div>
               }
               {this.props.headings.map((h, i) => {
                  const res = this.resolveText(h.text);
                  return (<div className='doc-nav-item'
                     onMouseDown={() => this.onClickNav(i)}
                     onTouchStart={() => this.onClickNav(i)} key={i}>
                     <div>{res.label}</div>
                     <div>{
                        res.text.length > 45
                           ? truncate(res.text)
                           : res.text
                     }</div>
                  </div>);
               })}
               <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="#444" stroke-width="3" fill="transparent" stroke-dasharray="0, 0, 0, 1000"
                     stroke-linecap="round" stroke-linejoin="round" transform="translate(-0.5, -0.5)" />
               </svg>
            </>} */}
            <Anchor onClick={this.handleClick} getCurrentAnchor={this.getCurrentAnchor}>
               {this.props.headings && <>
                  {this.props.headings.map((h, i) => {
                     const res = this.resolveText(h.text);
                     const index: string = i.toString();
                     return (<Link href={index} title={res.label + res.text} key={i} />)
                  })}
               </>}

               {/* <Link href="1" title="Basic demo" />
               <Link href="2" title="Static demo" />
               <Link href="#components-anchor-demo-basic" title="Basic demo with Target" target="_blank" />
               <Link href="#API" title="API">
                  <Link href="#Anchor-Props" title="Anchor Props" />
                  <Link href="#Link-Props" title="Link Props" />
               </Link> */}
            </Anchor>
         </div>
      </>);
   }
}

function truncate(sentence: string, space = 45) {
   const words = sentence.split(' ');
   const len = words.length;
   let result = words[0];
   space -= words[0].length;
   for (let i = 1; i < len; ++i) {
      const word = words[i];
      if (space - 1 - word.length >= 0) {
         space -= word.length + 1;
         result += ' ' + word;
      } else {
         result += '...';
         return result;
      }
   }
   return result;
}
