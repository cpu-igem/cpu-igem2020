import React from 'react';
import TRH2 from './comps/TRH2';
import './css/Description.scss';


export const body = {
   title: 'Design',
   hasAside: true,
   hasInfobar: true,
   hasRating: true,
   translatable: true,
   pageLocation: [
      { text: 'Home', path: '/' },
      { text: 'Project', path: '/Description' },
      { text: 'Description', path: '/Description' },
   ],
   editors: [
      {
         name: 'XXX XXX', hash: '#XXX-XXX',
         // nameAbbr: 'CF', avatar: assets.avatars.ChengyuFu32x32$png,
      },
   ],
   lastModified: 'July 19, 2020',
   docTitle: 'Hello Everyone',
   content:(
      <>
      <div>
      <h1>Project Design</h1>
         <TRH2 TRkey=" " prefix="">Markdown文档撰写</TRH2>
         <p>Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         </p>

         <TRH2 TRkey=" " prefix="">How To Write Markdown</TRH2>
         <p>Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         </p>

         <TRH2 TRkey=" " prefix="">我是第三个标题</TRH2>
         <p>Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         </p>
         <TRH2 TRkey=" " prefix="">我是第四个标题</TRH2>
         <p>Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         Text  Text  Text  Text  Text  <br />
         </p>
      </div>
      </>
   )
};
