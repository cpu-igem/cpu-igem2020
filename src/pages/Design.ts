import { DocPage } from './templates/DocPage';
import { lazy } from '@/util';
import { assets } from '@/assets-path.json';

export const Design = new DocPage(
   {
      imgUrl: assets.cover.Description$jpg,
      tbimgUrl: assets.cover.tnDescription$jpg,
      title: 'Design',
      hasfooter: true,

   },
   lazy(() => import('./content/Design'))
);
