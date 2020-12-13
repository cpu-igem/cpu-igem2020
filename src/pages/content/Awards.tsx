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
   hasAside: false,
   content: (
      <>
                  <div style={
                     {
                        margin:'0',
                        width:'100%'
                     }}>
                     <img style={{width:'100%'}} src="https://2020.igem.org/wiki/images/3/3b/T--CPU_CHINA--95382cab.png" alt=""/>
                  </div>
      </>
   )
};
