import React from 'react';

import { TeachingBubble } from 'office-ui-fabric-react/lib/TeachingBubble';
import { ImageFit, Image as MsImage } from 'office-ui-fabric-react/lib/Image';
import TRH2 from './comps/TRH2';
import TRp from './comps/TRp';
import { lightTheme } from '../../theme';
import { assets } from '../../assets-path.json';

import './css/Description.scss';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Link } from './comps/Link';
import { DocOrderedList } from './comps/DocList';
import { title } from 'process';

const WorldmapBtn: React.FC<{
   i: string; x: string; y: string;
   onClick: (i: string) => void;
   componentRef: (el: HTMLDivElement) => void;
}> = props => {
   return <div
      ref={props.componentRef}
      className='worldmap-btn'
      style={{
         left: props.x + '%',
         top: props.y + '%',
      }}
      onTouchStart={() => props.onClick(props.i)}
      onMouseDown={() => props.onClick(props.i)}
   >
      <div></div>
      <div></div>
   </div>;
};

class WorldmapItem extends React.PureComponent<{
   i: string; x: string; y: string; headline: string;
}> {
   private $btn: HTMLDivElement;
   public state = {
      isBubbleVisible: false,
   };
   private onClickBtn = (i: string) => {
      this.setState({
         isBubbleVisible: true,
      });
   }
   private onDismiss = () => {
      this.setState({
         isBubbleVisible: false,
      });
   }
   public componentDidMount() {
      const preload = new Image();
      // preload.src =
      //    (assets as any)
      //       .pages
      //       .Description['pollutedWater' + this.props.i + '$jpg'];
   }
   public render() {
      const { i, x, y, headline } = this.props;
      return <>
         <WorldmapBtn i={i} x={x} y={y} onClick={this.onClickBtn} componentRef={el => this.$btn = el} />
         {this.state.isBubbleVisible &&
            <TeachingBubble
               illustrationImage={{
                  // src: (assets as any).pages.Description['pollutedWater' + i + '$jpg'],
                  alt: '',
                  imageFit: ImageFit.centerCover,
                  width: 364,
                  height: 240,
                  shouldFadeIn: true,
               }}
               primaryButtonProps={{
                  children: 'Got it',
                  onClick: this.onDismiss,
               }}
               headline={headline}
               target={this.$btn}
               onDismiss={this.onDismiss}
               theme={lightTheme}
            >{this.props.children}</TeachingBubble>
         }
      </>;
   }
}

export const body = {
   title: 'Description',
   hasAside: true,
   hasInfobar: true,
   hasRating: true,
   translatable: true,
   pageLocation: [
      { text: 'Home', path: '/' },
      { text: 'Project', path: '/Description' },
      { text: 'Description', path: '/Description' },
   ],
   editors: [
      {
         name: 'XXX XXX', hash: '#XXX-XXX',
         // nameAbbr: 'CF', avatar: assets.avatars.ChengyuFu32x32$png,
      },
   ],
   lastModified: 'July 19, 2020',
   docTitle: 'Project Descrition',
   content: (
      <>
         <div>
            <h1>Project Description</h1>
            <TRH2 TRkey=" " prefix="">我是第一个标题</TRH2>
            <p>Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
            </p>

            <TRH2 TRkey=" " prefix="">我是第二个标题</TRH2>
            <p>Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
            </p>

            <TRH2 TRkey=" " prefix="">我是第三个标题</TRH2>
            <p>Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
            </p>
            <TRH2 TRkey=" " prefix="">我是第四个标题</TRH2>
            <p>Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
            </p>
         </div>
      </>
   )
};
