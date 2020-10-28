import React from 'react';

import H2 from './comps/TRH2';
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
            <div className="no-aside-container">
               <div className="no-aside-content">


                  <h1>Project Description</h1>

                  <div className='doc-refer'>
                     <div className='text'>Reference</div>
                     <div className='text'>
                     </div>
                  </div>

                  
               </div>
            </div>
         </div>
      </>
   )
};
