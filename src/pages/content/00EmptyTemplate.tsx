import React from 'react';

import TRH2 from './comps/TRH2';
import { assets } from '../../assets-path.json';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Link } from './comps/Link';
import { DocOrderedList, DocUnorderedList } from './comps/DocList';
// import './css/Description.scss';

export const body = {
   hasInfobar: true,
   hasRating: true,
   translatable: true,

   title: '',
   hasAside: true,
   content: (
      <>
         <div>
            <h1>Project Description</h1>
            
         </div>
      </>
   )
};
