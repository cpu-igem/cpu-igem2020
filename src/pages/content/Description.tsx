import React from 'react';

import { TeachingBubble } from 'office-ui-fabric-react/lib/TeachingBubble';
import { ImageFit, Image as MsImage } from 'office-ui-fabric-react/lib/Image';
import TRH2 from './comps/TRH2';
import TRp from './comps/TRp';
import { lightTheme } from '../../theme';
import { assets } from '../../assets-path.json';

import './css/Description.scss';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Link } from './comps/Link';
import { DocOrderedList } from './comps/DocList';
import { title } from 'process';

export const body = {
   hasInfobar: true,
   hasRating: true,
   translatable: true,
   title: 'Description',
   hasAside: true,
   content: (
      <>
         <div>
            <h1>Project Description</h1>
            
         </div>
      </>
   )
};
