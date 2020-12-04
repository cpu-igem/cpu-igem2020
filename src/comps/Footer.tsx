import React from 'react';
import { assets } from '../assets-path.json';

import './css/Footer.scss';

interface IFooterProps {
   showFooter?: boolean;
}

export default class Footer extends React.Component<IFooterProps> {
   private onClickLogoBtn = (url: string) => {
      const tab = window.open()!;
      tab.opener = null;
      tab.location.href = url;
   }

   public render() {
      return (
         <div id='footer' style={{ display: this.props.showFooter ? 'block' : 'none' }}>
            <div id='footer-strip-container'>
               <img id='footer-glass' src={assets.footer.glass$png} alt="" />
               <div id="footer-strip-line">
               </div>
               {/* <div id='footer-strip-set'>
                  <div id='footer-strip-1' className='footer-strip'></div>
                  <div id='footer-strip-2' className='footer-strip'></div>
                  <div id='footer-strip-3' className='footer-strip'></div>
               </div> */}
            </div>
            <div id='footer-1'>
               <div id='footer-2'>
                  <div className='footer-space'></div>
                  <div id='footer-container'>
                     <div id='footer-title-container'>
                        <div id='footer-title'>
                           <div id='footer-text'>
                              <span>
                                 Contact us
                              </span>
                           </div>
                           <div id='footer-divide'></div>
                           <div id='footer-cpu-logo' onClick={() => this.onClickLogoBtn('https://international.cpu.edu.cn/')}>
                              <img src={assets.footer.cpu$png} alt="" />
                           </div>
                        </div>
                     </div>
                     <div id='footer-contact-container1'>
                        <div id='footer-contact-container'>
                           <div className='footer-contact-item' onClick={() => this.onClickLogoBtn('https://twitter.com/HealthLico')}>
                              <div className='footer-contact-img'>
                                 <img src={assets.footer.twitter$png} alt="" />
                              </div>
                              <div className='footer-contact-text'>
                                 @Lico-Health
                           </div>
                           </div>
                           <div className='footer-contact-item' onClick={() => this.onClickLogoBtn('https://weibo.com/u/7485907376')}>
                              <div className='footer-contact-img'>
                                 <img src={assets.footer.weibo$png} alt="" />
                              </div>
                              <div className='footer-contact-text'>
                              @2020CPU_CHINA
                           </div>
                           </div>
                           <div className='footer-contact-item' onClick={() => this.onClickLogoBtn('mailto:igemteamcpu@163.com')}>
                              <div className='footer-contact-img'>
                                 <img src={assets.footer.email$png} alt="" />
                              </div>
                              <div className='footer-contact-text'>
                              igemteamcpu@163.com
                           </div>
                           </div>
                           <div className='footer-contact-item' onClick={() => this.onClickLogoBtn('https://github.com/cpu-igem/cpu-igem2020')}>
                              <div className='footer-contact-img'>
                                 <img src={assets.footer.github$png} alt="" />
                              </div>
                              <div className='footer-contact-text'>
                              Like our Website?
                           </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='footer-space'></div>
               </div>
            </div>
         </div>
      );
   }
}
