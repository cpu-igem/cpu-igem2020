import { DocPage } from './templates/DocPage';
import { lazy } from '@/util';
import { assets } from '@/assets-path.json';

export const JudgingForm = new DocPage(
   {
      imgUrl: assets.cover.Description$jpg,
      tbimgUrl: assets.cover.tnDescription$jpg,
      title: 'JudgingForm',
      hasfooter: true,

   },
   lazy(() => import('./content/JudgingForm'))
);