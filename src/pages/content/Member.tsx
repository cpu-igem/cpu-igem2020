import React from 'react';
import TRH2 from './comps/TRH2';
import './css/Member.scss';
import { assets } from '../../assets-path.json';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { Popover, Button } from 'antd';
import 'antd/es/popover/style/css';
import 'antd/es/button/style/css';

const pp = assets;
const intro = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
const content = (<>
    <div className='m-1'>
        
        <div className='m-2'>

            <div className='p-1'>
                <div className='p-l'>
                    <Image src={pp.CPUWithText$png}
                        imageFit={ImageFit.cover}
                        styles={{ root: { width: '100%', height: '100%' } }} />
                </div>
                <div className='p-r'>
                    <div className='pr1'>HanMei Xu</div>
                    <div className='pr2'>Principle Investigator, Professor of School of Biological Science and medical Engineering, Southeast University</div>
                    {/* <div className='pr3'>Abcde test test</div> */}
                </div>
            </div>


        </div>
    </div>
    <Popover content={intro} title="Introduction" trigger="focus">
      <img src="https://avatars0.githubusercontent.com/u/12101536?s=280&v=4" alt=""/>
    </Popover>

    
</>);

export const body = {
    title: 'Member',
    hasAside: false,
    hasInfobar: true,
    hasRating: true,
    translatable: true,
    pageLocation: [
        { text: 'Home', path: '/' },
        { text: 'Member', path: '/Member' },
        { text: 'Member', path: '/Member' },
    ],
    editors: [
        {
            name: 'XXX XXX', hash: '#XXX-XXX',
            // nameAbbr: 'CF', avatar: assets.avatars.ChengyuFu32x32$png,
        },
    ],
    lastModified: 'July 19, 2020',
    docTitle: '',
    content,
};
