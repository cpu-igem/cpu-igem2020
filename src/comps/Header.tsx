import React from 'react';

import { Icon } from 'office-ui-fabric-react/lib/Icon';

import { context } from '../event/context';
import { assets } from 'assets-path.json'
import { locaCtrl } from '../event/loca-ctrl';

import { HeaderNavItem, HeaderNarrowNavItem } from './HeaderNavItem';

import './css/Header.scss';
import './css/Header-wide.scss';
import './css/Header-narrow.scss';

// import { Menu, Dropdown, message } from 'antd';
// import 'antd/es/menu/style/css';
// import 'antd/es/dropdown/style/css';

// const assets = {
//    TeamLogo$png: TeamLogo,
// }

const links = [
   {
      h1: { text: 'Project' },
      h2: [
         { text: 'Description', url: '/Description' },
         { text: 'Design', url: '/Design' },
         { text: 'Demonstrate', url: '/Demonstrate' },
         { text: 'Parts Overview', url: '/Engineering' },
      ],
   },
   {
      h1: { text: 'Lab' },
      h2: [
         { text: 'Experiments', url: '/Experiments' },
         { text: 'Results', url: '/Results' },
         { text: 'Safety', url: '/Safety' },
      ],
   },
   {
      h1: { text: 'Parts' },
      h2: [
         { text: 'Basic Part', url: '/Basic_Part' },
         { text: 'Composite Part', url: '/Composite_Part'},
      ],
   },
   {
      h1: { text: 'Modeling' },
      h2: [
         { text: 'Summary', url: '/Model' },
         { text: 'Alcohol Disposal', url: '/Model/Alcohol' },
         { text: 'Bacteriocins Model', url: '/Model/Bacteriocins' },
         { text: 'IL-22 Model', url: '/Model/IL_22' },
         { text: 'Plasmid Transduction', url: '/Model/Transduction' },
      ],
   },
   {
      h1: { text: 'Human Practices' },
      h2: [
         { text: 'Summary', url: '/Human_Practices/Summary' },
         { text: 'Integrated Human Practices', url: '/Human_Practices' },
         { text: 'Education & Public Engagement', url: '/Public_Engagement' },
         { text: 'Entrepreneurship', url: '/Entrepreneurship' },
      ],
   },
   {
      h1: { text: 'Team' },
      h2: [
         { text: 'Members', url: '/Member' },
         { text: 'Attributions', url: '/Attributions' },
         { text: 'Collaborations', url: '/Collaborations' },
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
   private handleClick = (e:any) => {
      console.log('click ', e);
      this.setState({ current: e.key });
    };

   public render() {
      const logo = (
         <div className='header-logo' onClick={() => locaCtrl.navTo('/')}>
            <img src={assets.logos.TeamLogo$png} alt='Team Logo' />
            <div className='header-logo-bg'></div>
            <div className='header-logo-mask'></div>
         </div>
      );
      const wide = (
         <div id='header-wide'>
            {logo}
             <nav id='header-nav'>
             {/* <div> */}
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
   private current = 'mail';

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
