import { DocPage } from './templates/DocPage';
import { lazy } from '@/util';
import { assets } from '@/assets-path.json';

export const ProofOfConcept = new DocPage(
   {
      imgUrl: assets.cover.Description$jpg,
      tbimgUrl: assets.cover.tnDescription$jpg,
      title: 'ProofOfConcept',
      hasfooter: true,

   },
   lazy(() => import('./content/ProofOfConcept'))
);
