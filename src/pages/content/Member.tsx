import React from 'react';
import TRH2 from './comps/TRH2';
import './css/Member.scss';
import { assets } from '../../assets-path.json';
import { MemberListPeoplePicker } from 'office-ui-fabric-react';


const pp = assets;
const members = [
    {
        section: { text: 'Student Members' },
        content: [
            {
                img: 'http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg',
                name: 'Liu Xin',
                position: 'Wiki Develop',
                intro: 'My name is Liu Xin, I am very like programing, this wiki is my work.'
            },
            {
                img: 'http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg',
                name: 'Liu Xin',
                position: 'Wiki Develop',
                intro: 'My name is Liu Xin, I am very like programing, this wiki is my work.'
            },
            {
                img: 'http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg',
                name: 'Liu Xin',
                position: 'Wiki Develop',
                intro: 'My name is Liu Xin, I am very like programing, this wiki is my work.'
            },
            {
                img: 'http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg',
                name: 'Liu Xin',
                position: 'Wiki Develop',
                intro: 'My name is Liu Xin, I am very like programing, this wiki is my work.'
            },
            {
                img: 'http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg',
                name: 'Liu Xin',
                position: 'Wiki Develop',
                intro: 'My name is Liu Xin, I am very like programing, this wiki is my work.'
            },
            {
                img: 'http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg',
                name: 'Liu Xin',
                position: 'Wiki Develop',
                intro: 'My name is Liu Xin, I am very like programing, this wiki is my work.'
            },
            {
                img: 'http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg',
                name: 'Liu Xin',
                position: 'Wiki Develop',
                intro: 'My name is Liu Xin, I am very like programing, this wiki is my work.'
            },
            {
                img: 'http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg',
                name: 'Liu Xin',
                position: 'Wiki Develop',
                intro: 'My name is Liu Xin, I am very like programing, this wiki is my work.'
            },
            {
                img: 'http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg',
                name: 'Liu Xin',
                position: 'Wiki Develop',
                intro: 'My name is Liu Xin, I am very like programing, this wiki is my work.'
            },
            {
                img: 'http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg',
                name: 'Liu Xin',
                position: 'Wiki Develop',
                intro: 'My name is Liu Xin, I am very like programing, this wiki is my work.'
            },
            {
                img: 'http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg',
                name: 'Liu Xin',
                position: 'Wiki Develop',
                intro: 'My name is Liu Xin, I am very like programing, this wiki is my work.'
            },
            {
                img: 'http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg',
                name: 'Liu Xin',
                position: 'Wiki Develop',
                intro: 'My name is Liu Xin, I am very like programing, this wiki is my work.'
            },
            {
                img: 'http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg',
                name: 'Liu Xin',
                position: 'Wiki Develop',
                intro: 'My name is Liu Xin, I am very like programing, this wiki is my work.'
            }
        ]
    },
    {
        section: { text: 'Principle Investigators' },
        content: [
            {
                img: 'http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg',
                name: 'Liu Xin',
                position: 'Wiki Develop',
                intro: 'My name is Liu Xin, I am very like programing, this wiki is my work.'
            },
            {
                img: 'http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg',
                name: 'Liu Xin',
                position: 'Wiki Develop',
                intro: 'My name is Liu Xin, I am very like programing, this wiki is my work.'
            }
        ]
    },
    {
        section: { text: 'Instructor and Advisors' },
        content: [
            {
                img: 'http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg',
                name: 'Liu Xin',
                position: 'Wiki Develop',
                intro: 'My name is Liu Xin, I am very like programing, this wiki is my work.'
            },
            {
                img: 'http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg',
                name: 'Liu Xin',
                position: 'Wiki Develop',
                intro: 'My name is Liu Xin, I am very like programing, this wiki is my work.'
            },{
                img: 'http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg',
                name: 'Liu Xin',
                position: 'Wiki Develop',
                intro: 'My name is Liu Xin, I am very like programing, this wiki is my work.'
            },
        ]
    },
]

const content = (<>
    <div id="team" className="team content-section">
        <div className="team-family-photos">
            <img src={require('C:/Users/刘鑫/Desktop/iGEM/cpu-igem2020/assets/members/team1.jpg')} alt="" />
        </div>
        {members && members.map((member, i) => <>
            <div className="team-section">
                <div className="team-section-title">
                    <span>{member.section.text}</span>
                </div>
                <div className="team-section-container">
                    {member.content.map((item, i) => <>
                        <div className="col-md-4">
                            <div className="team-member">
                                <figure>
                                    <img src={item.img} alt="" className="img-responsive" />
                                    <figcaption>
                                        <p>{item.intro}</p>
                                    </figcaption>
                                </figure>
                                <div className="member-intro">
                                    <h4>{item.name}</h4>
                                    <span>{item.position}</span>
                                </div>
                            </div>
                        </div>
                    </>)}
                </div>
            </div>
        </>
        )}
    </div>

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
