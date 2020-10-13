import React from 'react';

import { Icon } from 'office-ui-fabric-react/lib/Icon';

import { context } from '../event/context';
import { assets } from 'assets-path.json'
import { locaCtrl } from '../event/loca-ctrl';

import { HeaderNavItem, HeaderNarrowNavItem } from './HeaderNavItem';

import './css/Header.scss';
import './css/Header-wide.scss';
import './css/Header-narrow.scss';

// const assets = {
//    TeamLogo$png: TeamLogo,
// }

const links = [
   {
      h1: { text: 'Project' },
      h2: [
         { text: 'Project DDDDDD', url: '/Description' },
         { text: 'Project Design', url: '/Design' },
         { text: 'Experiments', url: '/Experiments' },
         { text: 'Notebook', url: '/Notebook' },
         // { text: 'Contribution', url: '/Contribution' },
         // { text: 'Result', url: '/Result' },
         // { text: 'Demonstrate', url: '/Demonstrate' },
         // { text: 'Improve', url: '/Improve' },
      ],
   },
   {
      h1: { text: 'Human Practices' },
      h2: [
         { text: 'Human Practices', url: '/Human_Practices' },
         { text: 'Education & Engagement', url: '/Education_Engagement' },
      ],
   },
   {
      h1: { text: 'Modeling' },
      h2: [
         { text: 'Overview', url: '/Modeling_Overview' },
      ],
   },
   {
      h1: {
         text: 'Safety',
         plainText: 'Safety',
      }
   },
   {
      h1: { text: 'Team' },
      h2: [
         { text: 'Members', url: '/Member' },
         { text: 'Attributions', url: '/Attributions' },
         { text: 'Collaborations', url: '/Collaborations' },
         { text: 'Sponsors', url: '/Sponsors' },
      ],
   },
   {
      h1: { text: 'Parts' },
      h2: [
         { text: 'Overview', url: '/Parts_Overview' },
         { text: 'Basic Part', url: '/Basic_Part' },
         { text: 'Composite Part', url: '/Composite_Part' },
      ],
   },
   {
      h1: {
         text: <div style={{ display: 'flex', alignItems: 'center', fontSize: '.9em' }}>
            <div>Judging<br />Form</div>
            <Icon
               iconName='ArrowUpRight'
               style={{ width: 18, height: 18, fontSize: 18, marginLeft: 6 }} />
         </div>,
         plainText: 'Judging Form',
         icon: 'ArrowUpRight',
         url: '/Judging_Form',
      },
   },
];

export default class Header extends React.Component {
   public render() {
      const logo = (
         <div className='header-logo' onClick={() => locaCtrl.navTo('/')}>
            <img src={assets.logos.TeamLogo$png} alt='Team Logo' />
            {/* <div className='header-logo-txt'>
               <div>ALGAE</div>
               <div>TERMINATOR</div>
            </div> */}
            <div className='header-logo-bg'></div>
            <div className='header-logo-mask'></div>
         </div>
      );
      const wide = (
         <div id='header-wide'>
            {logo}
            <nav id='header-nav'>
               {links.map((link, i) =>
                  <HeaderNavItem
                     key={i}
                     h1={link.h1}
                     h2={link.h2}
                  />
               )}
            </nav>
         </div>
      );

      const narrow = (
         <div id='header-narrow'>
            {logo}
            <HeaderNarrowNavItem links={links} />
         </div>
      );

      return (
         <div id='header-container' ref={el => this.$headerContainer = el}>
            <header id='header' ref={el => this.$header = el}>
               <div id='header-content'>
                  {wide}
                  {narrow}
               </div>
            </header>
         </div>
      );
   }
   public $headerContainer?: HTMLDivElement | null;
   public $header?: HTMLHeadElement | null;
   private isHeaderFixed = false;

   private onPageScroll = () => {
      const { $headerContainer } = this;
      if ($headerContainer!.getBoundingClientRect().top <= 18) {
         if (!this.isHeaderFixed) {
            $headerContainer!.classList.add('fixed-header');
            this.isHeaderFixed = true;
            context.emit('headerFixed', true);
         }
      } else if (this.isHeaderFixed) {
         $headerContainer!.classList.remove('fixed-header');
         this.isHeaderFixed = false;
         context.emit('headerFixed', false);
      }
   }

   public componentDidMount() {
      context.on('scroll', this.onPageScroll);
   }
   public componentWillUnmount() {
      context.removeListener('scroll', this.onPageScroll);
   }
}
