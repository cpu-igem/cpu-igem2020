import { DocPage } from './templates/DocPage';
import { lazy } from '@/util';
import { assets } from '@/assets-path.json';

export const Improved_Part = new DocPage(
   {
      imgUrl: assets.cover.Description$jpg,
      tbimgUrl: assets.cover.tnDescription$jpg,
      title: 'Description',
      hasfooter: true,

   },
   lazy(() => import('./content/Improved_Part'))
);
