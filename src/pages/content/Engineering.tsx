import React from 'react';
import { Table } from './comps/Table';

const titles = [
    'Part Name',
    'Type',
    'Description',
    'Length'
]

const items = [
    [{
        url: 'http://parts.igem.org/wiki/index.php?title=Part:BBa_K3661001',
        text: 'BBa_K3661001',
    },
    {
        url: '',
        text: 'Coding',
    },
    {
        url: '',
        text: 'Recombinant Human IL-22',
    },
    {
        url: '',
        text: '543',
    }],
    [{
        url: 'http://parts.igem.org/wiki/index.php?title=Part:BBa_K3661002',
        text: 'BBa_K3661002',
    },
    {
        url: '',
        text: 'Composite',
    },
    {
        url: '',
        text: 'YebF-IL 22',
    },
    {
        url: '',
        text: '903',
    }],
    [{
        url: 'http://parts.igem.org/wiki/index.php?title=Part:BBa_K3661005',
        text: 'BBa_K3661005',
    },
    {
        url: '',
        text: 'Composite',
    },
    {
        url: '',
        text: 'YebF-Hiracin JM79-flag',
    },
    {
        url: '',
        text: '600',
    }],
    [{
        url: 'http://parts.igem.org/wiki/index.php?title=Part:BBa_K3661006',
        text: 'BBa_K3661006',
    },
    {
        url: '',
        text: 'Regulatory',
    },
    {
        url: '',
        text: 'JTi2(NF-κb induced promoter)',
    },
    {
        url: '',
        text: '94',
    }],
    [{
        url: 'http://parts.igem.org/wiki/index.php?title=Part:BBa_K3661007',
        text: 'BBa_K3661007',
    },
    {
        url: '',
        text: 'Coding',
    },
    {
        url: '',
        text: 'Hiracin JM79（bacteriocin）',
    },
    {
        url: '',
        text: '222',
    }],
]

export const body = {
    hasInfobar: true,
    hasRating: true,
    translatable: true,

    title: 'Engineering',
    hasAside: false,
    content: (<>
        <div>
            <div className="no-aside-container">
                <div className="no-aside-content">
                    <h4><span>Designed parts:</span></h4>
                    <p>BBa_K3661001, BBa_K3661002,  BBa_K3661005 and BBa_K3661007 has been quantitative characterizated.</p>

                    <h4><span>Improved part:</span></h4>
                    <p>We designed the reconstructed JTi2 promoter,  which was elevated to more than two times of the existed old part (BBa_K2976009).</p>
                    

                    <p>Click the part number to see detailed information of the parts we design!</p>
                    <Table caption='Parts Overview' titles={titles} items={items}></Table>
                </div>
            </div>
        </div>
    </>)
}