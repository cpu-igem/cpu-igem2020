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
            <TRH2 TRkey=" " prefix="">This is first title</TRH2>
            <p>Modeling is an essential aspect of every iGEM project. The mathematical model can deepen our team&#39;s understanding of the work, and can also carry out calculations to assist the selection of construction conditions of engineering bacteria such as promoters and plasmids.</p>
                <p>Our aim is to establish a systematic model to reflect the in vivo metabolic processes of alcohol and the influence of engineered bacteria on alcohol metabolism after alcohol intake. With this systematic model, we can determine the therapeutic window of anti-inflammatory factors, antimicrobial peptides, the therapeutic dose of engineered bacteria, and the transcription efficiency required by engineered bacteria, among other key parameters. In this model, alcohol is divided into three main stages according to the time and space process of in vivo metabolism, namely, the pre-enteral stage, the enteral stage and the metabolic elimination stage.</p>
                <p>The pre-enteral stage is the first stage in the body before alcohol is ingested into the intestine. In the first stage, alcohol undergoes a spatial shift from the mouth to the esophagus and then to the stomach. At this stage, the alcohol does not reach the intestinal tract, does not change the permeability of the intestinal epithelium to cause enterococcus faecalis to metastasize, and does not stimulate the protective effect of the engineered bacteria on the liver. Before alcohol enters the intestine, it is absorbed into the blood through the esophagus and stomach, and the alcohol after entering the blood will not pass through the liver first under the driving of blood circulation. In other words, the first stage is the first resorptive and metabolic stage of alcohol in the body, in which its resorptive metabolism will completely conform to the classical pharmacokinetic model. In the first stage, we can calculate the alcohol concentration in the blood before entering and leaving the intestine and the alcohol concentration in the digestive tract when entering the intestine, which will provide the calculation basis for the model in the following two stages.</p>
                <p>Enteral stage is the second stage, which is the internal stage of alcohol in the intestine. In the second stage, alcohol completes the spatial transfer of the intestine. During this stage, alcohol reaches the intestine, alters the permeability of the intestinal epithelium, and stimulates the transcription and translation of engineered bacteria, thus achieving a protective effect on the liver. Intestinal alcohol concentration, as a signal, starts from the group sense system, undergoes amplification system, and then leads to the expression of antimicrobial peptides, plasmid transduction in order to control the enteral enterococci concentration, and through the expression of anti-inflammatory factors, balances the signal of inflammatory factors in the liver. When alcohol enters the intestine, it is absorbed into the blood stream, and when it enters the blood circulation, it passes first through the liver through the portal vein. In the second stage, the parameters related to the absorption and metabolism of alcohol in the intestine will be changed, and we will modify them. In this stage, we were able to calculate the changes in blood alcohol concentration, the therapeutic window for anti-inflammatory factors and antimicrobial peptides, the therapeutic amount of engineered bacteria, and the transcription efficiency required by engineered bacteria, among other key parameters.</p>
                <p>Metabolic elimination stage is the third stage, in which alcohol is absorbed in the digestive tract but not metabolized and eliminated in the blood. In the third stage, there is no alcohol in the digestive tract, engineering bacteria are no longer activate transcription. The concentration of anti-inflammatory factors in the blood will decrease if not supplemented. It is necessary to plan the expression level of anti-inflammatory factors through calculation to ensure the balance between anti-inflammatory factors and inflammatory factors in the third stage, and ensure that the remaining alcohol in the blood will not lead to severe inflammation of the liver.</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>

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
