/**
 * 该模块是路由功能，通过对location的监听，实现路由功能，
 * 特点：不请求重新请求url，对history等问题控制很好，结合了hash和history的特点
 */
import { EventEmitter } from '../util';

const { location, history } = window;

class LocationController extends EventEmitter<{
   hrefDidUpdate: [],
   pathDidUpdate: [string],
   hashDidUpdate: [string],
}> {
   private static readonly prefix = '/Team:CPU_CHINA';
   public static readonly inst = new LocationController();

   public href = '';
   public path = '';
   public hash = '';
   constructor() {
      super();
      if (LocationController.inst) return LocationController.inst;

      if (!location.pathname.startsWith(LocationController.prefix + '/')) {
         history.replaceState(
            null,
            '',
            LocationController.prefix + '/' + location.search + location.hash);
      }

      this.on('hrefDidUpdate', () => {
         let path = location.pathname.replace(LocationController.prefix, '');
         if (!path.startsWith('/')) path = '/' + path;

         if (path !== this.path) {
            this.path = path;
            this.emit('pathDidUpdate', this.path);
         }
         if (location.hash !== this.hash) {
            this.hash = location.hash;
            this.emit('hashDidUpdate', this.hash);
         }
      });
      
      //监听popstage，前进和后退实现导航，触发hrefDidUpdate
      window.addEventListener('popstate', () => {
         if (location.href === this.href) return;
         this.href = location.href;
         this.emit('hrefDidUpdate');
      });
   }

   // 导航栏中的导航触发，如果目的href不是当前href，触发事件hrefDidUpdate
   public navTo(path: string | undefined, hash: string = '') {
      path = path || locaCtrl.path;
      history.pushState(
         null,
         '',
         LocationController.prefix + path + location.search + hash);
      if (location.href === this.href) return;
      //pushState后 location.href 已经发生变成目标地址
      this.href = location.href;
      this.emit('hrefDidUpdate');
   }
}

export const locaCtrl = LocationController.inst;

// Trigger the event in next macro task.
setTimeout(() => {
   locaCtrl.emit('hrefDidUpdate');
}, 0);
