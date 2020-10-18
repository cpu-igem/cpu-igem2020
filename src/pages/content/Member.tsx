import React from 'react';
import TRH2 from './comps/TRH2';
import './css/Member.scss';
// import { assets } from '../../assets-path.json';
// import { MemberListPeoplePicker } from 'office-ui-fabric-react';


const members = [
    {
        section: { text: 'Student Members' },
        content: [
            {
                img: require('../../../assets/members/ChenJie.jpg'),
                name: 'Chen Jie',
                position: 'Human Practices',
                intro: 'Hello everyone, I\'m Jie Cheng from China Pharmaceutical University and I\'m a member of Human Practice at CPU_CHINA.'
            },
            {
                img:require('../../../assets/members/GaoYu.jpg'),
                name: 'Gao Yu',
                position:'Human Practices',
                intro:'Specializes in questionnaire survey and data processing'
            },
            {
                img:require('../../../assets/members/HaiWen.jpg'),
                name: 'Hai Wen',
                position:'Human Practices',
                intro:'Hiiii! This is Marina and I\'m happy to see you here! I spent most of my time working on Human Practices in our team and came up with some ideas... that never went through.'
            },
            {
                img:require('../../../assets/members/HeYue.jpg'),
                name: 'He Yue',
                position:'Human Practices',
                intro:'Hi, I’m Yue He. I’m the human practices member in the team. The best is iGEM, and the second best is sleep.'
            },
            {
                img:require('../../../assets/members/LinBoyang.jpg'),
                name: 'Lin Boyang',
                position:'Modeling',
                intro:'Hi, buddies! Boyang Lin\'s here, responsible for modeling part. Feeling grateful to participate in iGEM 2020, I sincerely wish you guys to enjoy!'
            },
            {
                img:require('../../../assets/members/ShiJunling.jpg'),
                name: 'Shi Junling',
                position:'Human Practices',
                intro:'Time held me green and dying/ Though I sang in my chains like the sea.'
            },
            {
                img:require('../../../assets/members/LiXiaoying.jpg'),
                name: 'Li Xiaoying',
                position:'UI Designer',
                intro:'Hi, buddies! Boyang Lin\'s here, responsible for modeling part. Feeling grateful to participate in iGEM 2020, I sincerely wish you guys to enjoy!'
            },
            {
                img:require('../../../assets/members/HuangJingjing.jpg'),
                name: 'Huang Jingjing',
                position:'Bacteria Famer',
                intro:'I\'m responsible for the quorum sensing（QS） part in this project. I design a circuit with  QS related protein to complete the AND gate in the engineered bacteria and I exame the effect of the output protein. '
            },
            {
                img:require('../../../assets/members/LiYilin.jpg'),
                name: 'Li Yilin',
                position:'Cell Farmer',
                intro:'My name is YILIN LI. I have a boyfriend, his name is science. But…I can have another one.'
            },
            {
                img:require('../../../assets/members/LiuXin.jpg'),
                name: 'Liu Xin',
                position:'Wiki Developer',
                intro:'Hi, buddies! Boyang Lin\'s here, responsible for modeling part. Feeling grateful to participate in iGEM 2020, I sincerely wish you guys to enjoy!'
            },
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
                img:require('../../../assets/members/KongBangyan.jpg'),
                name: 'Kong Bangyan',
                position:'Advisors',
                intro:'iGEMer，2020 CPU CHINA advisor，The dream is to conquer adenocarcinoma or be a fisherman. '
            },
            {
                img:require('../../../assets/members/LuoQiming.jpg'),
                name: 'Luo Qiming',
                position:'Advisors',
                intro:'Hey~guys. I\'m QiMing Luo, I\'m good at playing TaiJi and I love math modeling. Modeling is of great fun. We learn to model and model to learn !'
            },
        ]
    },
]

const content = (<>
    <div id="team" className="team content-section">
        <div className="team-family-photos">
            <img src={require('C:/Users/刘鑫/Desktop/iGEM/cpu-igem2020/assets/members/Team.jpg')} alt="" />
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
