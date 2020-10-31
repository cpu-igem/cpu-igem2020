import React from 'react';
import { locaCtrl } from '../event/loca-ctrl';
import { EventEmitter } from '../util';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Nav, INavLink } from 'office-ui-fabric-react/lib/Nav';
import { lightTheme } from '../theme';
import { Menu, Dropdown, message } from 'antd';
import 'antd/es/menu/style/css';
import 'antd/es/dropdown/style/css';

// import { DownOutlined } from '@ant-design/icons';

const dissmiss = new EventEmitter<{
   press: [],
}>();

window.addEventListener('mousedown', e => {
   dissmiss.emit('press');
});
window.addEventListener('touchstart', e => {
   dissmiss.emit('press');
});

interface NavItem {
   text: any;
   url?: string;
}

interface IHeaderNavItemProps {
   h1: NavItem;
   h1style?: any;
   h2?: NavItem[];
}

interface IHeaderNavItemState {
   rotate: boolean;
   visible: boolean,
   // current: string,
}

export class HeaderNavItem extends React.PureComponent<IHeaderNavItemProps, IHeaderNavItemState> {
   public componentDidMount() {
      dissmiss.on('press', this.onWindowPress);
   }
   public componentWillUnmount() {
      dissmiss.removeListener('press', this.onWindowPress);
   }

   public state = {
      rotate: false,
      visible: false,
   };

   private shouldDismiss = true;
   private onNavPress = () => {
      this.shouldDismiss = false;
   }
   private onWindowPress = () => {
      if (!this.shouldDismiss) {
         this.shouldDismiss = true;
         return;
      }
      this.setState({
         rotate: false,
      });
   }
   private onNavOneClick = () => {
      if (!this.props.h2) {
         locaCtrl.navTo(this.props.h1.url!);
         return;
      }
      this.setState({
         rotate: true,
      });
   }
   private onNavTwoClick = (url: string) => {
      this.setState({
         rotate: false,
      });
      locaCtrl.navTo(url);
   };

   private handleMenuClick = (e: any) => {
      this.setState({ visible: false });
      setTimeout(function(){locaCtrl.navTo(e.key);},500);
      
   };

   private handleVisibleChange = (flag: boolean) => {
      this.setState({
         visible: flag
      });
   };

   // private handleClick = (e:any) => {
   //    console.log('click ', e);
   //    this.setState({ current: e.key });
   //  };

   public render() {
      const { h1, h2 } = this.props;
      const menu = (
         <>
            {h2 && <Menu onClick={this.handleMenuClick}>
               {
                  h2.map((item, i) => <Menu.Item key={item.url}>{item.text}</Menu.Item>)
               }
            </Menu>
            }
            {/* <Menu onClick={this.onClick}>
               <Menu.Item key="1">1st menu item</Menu.Item>
               <Menu.Item key="2">2nd memu item</Menu.Item>
               <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu> */}
         </>
      );
      return (
         <>
            <Dropdown
               overlay={menu}
               onVisibleChange={this.handleVisibleChange}
               visible={this.state.visible}>
               <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  <div id='nav-container'>
                     <div id='nav-item' onClick={() => locaCtrl.navTo(h1.url)}>
                        {h1.text}
                     </div>
                  </div>
               </a>
            </Dropdown>
         </>
         // <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
         //    <Menu.SubMenu key="SubMenu" title="Navigation Three - Submenu">
         //       <Menu.ItemGroup title="Item 1">
         //          <Menu.Item key="setting:1">Option 1</Menu.Item>
         //          <Menu.Item key="setting:2">Option 2</Menu.Item>
         //       </Menu.ItemGroup>
         //       <Menu.ItemGroup title="Item 2">
         //          <Menu.Item key="setting:3">Option 3</Menu.Item>
         //          <Menu.Item key="setting:4">Option 4</Menu.Item>
         //       </Menu.ItemGroup>
         //    </Menu.SubMenu>
         // </Menu>

      // <div className='header-nav-3d-container'>
      //    <div
      //       className={'header-nav-item' + (this.state.rotate ? ' rotate' : '')}
      //       onMouseDown={this.onNavPress}
      //       onTouchStart={this.onNavPress}
      //    >
      //       <div
      //          className='header-nav-1'
      //          style={this.props.h1style && this.props.h1style.root}
      //          onClick={this.onNavOneClick}
      //       >
      //          <div>{h1.text}</div>
      //       </div>
      //       {h2 &&
      //          <div className='header-nav-2'>
      //             {
      //                h2.map((item, i) => <div
      //                   key={i}
      //                   className='header-nav-2-item'
      //                   onClick={() => this.onNavTwoClick(item.url!)}
      //                >
      //                   <div>{item.text}</div>
      //                </div>)
      //             }
      //          </div>
      //       }
      //    </div>
      // </div>
      );
   }
}

export class HeaderNarrowNavItem extends React.Component<{ links: any }, { rotate: boolean; }> {
   public $switchNav: HTMLDivElement;
   public componentDidMount() {
      dissmiss.on('press', this.onWindowPress);
   }
   public componentWillUnmount() {
      dissmiss.removeListener('press', this.onWindowPress);
   }
   public state = {
      rotate: false,
   };
   private shouldDismiss = true;
   private onNavPress = () => {
      this.shouldDismiss = false;
   }
   private onWindowPress = () => {
      if (!this.shouldDismiss) {
         this.shouldDismiss = true;
         return;
      }
      this.setState({
         rotate: false,
      });
   }
   private onNavOneClick = () => {
      this.$switchNav.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
      });
      this.setState({
         rotate: true,
      });
   }
   private onNavTwoClick = () => {
      this.setState({
         rotate: false,
      });
   }
   private onNavItemClick = (ev?: React.MouseEvent<HTMLElement, MouseEvent>, item?: INavLink | undefined) => {
      if (!ev) return;
      if (item && item.url) {
         ev.preventDefault();
         locaCtrl.navTo(item!.url);
         this.setState({
            rotate: false,
         });
      }
   }
   public render() {
      const links = this.props.links.map((link: any, i: number) => {
         if (!link.h2) {
            return {
               name: link.h1.plainText || link.h1.text,
               url: link.h1.url,
               key: 'key' + i,
               target: '_blank',
               icon: link.h1.icon,
            };
         }
         return {
            name: link.h1.plainText || link.h1.text,
            links: link.h2.map((item: any, ii: number) => (
               {
                  name: item.text,
                  url: item.url,
                  key: 'key' + ii,
                  target: '_blank',
               }
            )),
         };
      });
      return (
         <div id='header-narrow-3d'>
            <div id='header-narrow-3dobj'
               className={this.state.rotate ? 'rotate' : ''}
               onMouseDown={this.onNavPress}
               onTouchStart={this.onNavPress}
            >
               <div id='header-switch-nav' ref={e => this.$switchNav = e!} onClick={this.onNavOneClick}>
                  <Icon
                     iconName='GlobalNavButton'
                     style={{
                        width: 55,
                        height: 55,
                        fontSize: 27,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                     }}
                  />
               </div>
               <div id='header-switch-nav-rotated'>
                  <Icon
                     iconName='GlobalNavButton'
                     style={{
                        width: 55,
                        height: 55,
                        fontSize: 27,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#b35a5a ',
                     }}
                     onClick={this.onNavTwoClick}
                  />
                  <div id='header-narrow-nav-container'>
                     <Nav
                        onLinkClick={this.onNavItemClick}
                        ariaLabel='Nav'
                        styles={{
                           root: {
                              width: '100%',
                              maxHeight: 'calc(80vh - 66px)',
                              overflowY: 'auto',
                           },
                        }}
                        groups={[{ links }]}
                        theme={lightTheme}
                     />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
