import React from 'react';
import { assets } from '../assets-path.json';

import './css/Footer.scss';
import { svgMail } from './assets/svg-mail';
import { svgTwi } from './assets/svg-twi';

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
               <div id='footer-strip-set'>
                  <div id='footer-strip-1' className='footer-strip'></div>
                  <div id='footer-strip-2' className='footer-strip'></div>
                  <div id='footer-strip-3' className='footer-strip'></div>
               </div>
            </div>
            <div id='footer-1'>
               <div id='footer-2'>
                  <div className='footer-space'></div>
                  <div id='footer-content'>
                     <div id='footer-cont-logo'>
                        <div id='footer-cta'>
                           <div id='footer-cta-inner'>
                              <h3>Contact us</h3>
                              <div className='footer-cta-btnbar'>
                                 <div className='footer-cta-btn' onClick={() => this.onClickLogoBtn('mailto:iGEMTEAMCPU@163.com')}>
                                    <div>{svgMail}</div>
                                    <div>iGEMTEAMCPU@163.com</div>
                                 </div>
                                 <div className='footer-cta-btn' onClick={() => this.onClickLogoBtn('https://instagram.com/igem_cpu2019')}>
                                    <div>{svgTwi}</div>
                                    <div>@Lico~Health</div>
                                 </div>
                                 <div className='footer-cta-btn' onClick={() => this.onClickLogoBtn('https://weibo.com/u/6856701868')}>
                                        <div>
                                          {/* {svgWb} */}
                                        </div>
                                        <div>@CPU_CHINA_2019</div>
                                    </div>
                              </div>
                           </div>
                        </div>
                        <div id='footer-logo'>
                           <div className='footer-logo-btn' onClick={() => this.onClickLogoBtn('https://international.cpu.edu.cn/')}>
                              <img
                                 src={assets.CPUWithText$png}
                                 alt='China Pharmaceutical University Logo'
                                 style={{ height: '4.8em' }}
                              />
                           </div>
                           <div className='footer-logo-btn' onClick={() => this.onClickLogoBtn('https://sky.cpu.edu.cn/')}>
                              <img
                                 src={assets.SkyLogoWhite$png}
                                 alt='State Key Laboratory of Bioelectronics'
                                 style={{
                                    height: '4.5em',
                                    position: 'relative',
                                    left: '.6em',
                                 }}
                              />
                           </div>
                           <div id='footer-github-container' className='footer-logo-btn' onClick={() => this.onClickLogoBtn('https://github.com/cpu-igem/cpu-igem2020')}>
                              <img
                                 src={assets.github.GitHubMarkLight64px$png}
                                 alt='Star this website on Github'
                                 style={{ height: '3.2em' }}
                              />
                              <div style={{ width: '1.2em' }}></div>
                              <div id='footer-github-msg'>
                                 <h2>Like our website?</h2>
                                 <p>
                                    It is open sourced under GPLv2 License on Github.
                           </p>
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
