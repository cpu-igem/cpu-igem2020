import React from 'react';
import TRH2 from './comps/TRH2';
import './css/Member.scss';
import { assets } from '../../assets-path.json';
// import { MemberListPeoplePicker } from 'office-ui-fabric-react';


const members = [
    {
        section: { text: 'Student Members' },
        content: [
            {
                img: assets.members.LuWeixuan$jpg,
                name: 'Weixuan Lu',
                position: 'Student leader',
                intro: 'Student leader and team baby-sitter. Life is a miracle and science is art.'
            },
            {
                img: assets.members.AnRoujing$jpg,
                name: 'Roujing An',
                position: 'Student leader',
                intro: 'I am the team leader and the chief designer of the project, who picked the topic and constructed the project. I arrange the works of team members and is also specifically in charge of the web lab group. I am also the main web lab experimenter.                 '
            },
            {
                img:assets.members.LiYilin$jpg,
                name: 'Yilin Li',
                position:'Wet lab Leader',
                intro:'My name is YILIN LI. I have a boyfriend, his name is science. But…I can have another one.'
            },
            {
                img:assets.members.HuangJingjing$jpg,
                name: 'Jingjing Huang',
                position:'Wet lab',
                intro:'Hi~I\'m Huang Jingjing, a normal bacteria famer in the team.'
            },
            {
                img:assets.members.ZhuZiyan$jpg,
                name: 'Ziyan Zhu',
                position:'Wet lab',
                intro:'Hi, I’m Zhu Ziyan, a member of 2020 CPU_CHINA, responsible for parts characterization and functional verification.'
            },
            {
                img:assets.members.LiuYanfeng$jpg,
                name: 'Yanfeng Liu',
                position:'Wet lab',
                intro:'Hey there. My name is Yanfeng Liu. I devote myself to solving diseases and helping others.  It is so lucky of me to get an opportunity to take part in the iGEM competition.'
            },
            {
                img:assets.members.QianHongfa$jpg,
                name: 'Hongfa Qian',
                position:'Wet lab',
                intro:'Hi, everybody! I\'m Qian Hongfa, and in this project, I\'m mainly responsible for doing experiments. It\'s good to meet you here after crossing thousands of rivers and mountains!'
            },
            {
                img: assets.members.ChenJie$jpg,
                name: 'Jie Cheng',
                position: 'Human Practices',
                intro: 'Hello everyone, I\'m Jie Cheng from China Pharmaceutical University and I\'m a member of Human Practice at CPU_CHINA.'
            },
            {
                img:assets.members.GaoYu$jpg,
                name: 'Yu Gao',
                position:'Human Practices',
                intro:'Specializes in questionnaire survey and data processing'
            },
            {
                img:assets.members.HaiWen$jpg,
                name: 'Min Hai',
                position:'Human Practices',
                intro:'Hiiii! This is Marina and I\'m happy to see you here! I spent most of my time working on Human Practices in our team and came up with some ideas... that never went through.'
            },
            {
                img:assets.members.HeYue$jpg,
                name: 'Yue He',
                position:'Human Practices',
                intro:'Hi, I’m Yue He. I’m the human practices member in the team. The best is iGEM, and the second best is sleep.'
            },
            {
                img:assets.members.ShiJunling$jpg,
                name: 'Junlin Shi',
                position:'Human Practices',
                intro:'Time held me green and dying/ Though I sang in my chains like the sea.'
            },
            {
                img:assets.members.LinBoyang$jpg,
                name: 'Boyang Lin',
                position:'Modeling',
                intro:'Hi, buddies! Boyang Lin\'s here, responsible for modeling part. Feeling grateful to participate in iGEM 2020, I sincerely wish you guys to enjoy!'
            },
            {
                img:assets.members.DouZhiyang$jpg,
                name: 'Zhiyang Dou',
                position:'Modeling',
                intro:'I am Dou Zhiyang and focus on modeling. I led the model programming and established the alcohol metabolism model and the anti-inflammatory factor model.'
            },
            {
                img:assets.members.lvtong$jpg,
                name: 'Tong Lyu',
                position:'UI Designer',
                intro:'Design for FUUUUUUN！——Cu_Al'
            },
            {
                img:assets.members.LiXiaoying$jpg,
                name: 'Xiaoying Li',
                position:'UI Designer',
                intro:'Design is a bridge connecting the world and us.'
            },
            {
                img:assets.members.LiuXin$jpg,
                name: 'Xin Liu',
                position:'Wiki Developer',
                intro:'I am Xin Liu, mainly responsible for wiki production in the team. In this process, I feel the joy of programming'
            },
        ]
    },
    {
        section: { text: 'Principle Investigators' },
        content: [
            {
                img:assets.members.XuHanmei$png,
                name: 'Hanmei Xu',
                position: 'Primary PI',
                intro: 'Primary PI, Hanmei Xu'
            },
            {
                img:assets.members.DingMing$png,
                name: 'Ming Ding',
                position: 'Secondary PI',
                intro: 'Secondary PI, Ming Ding'
            }
        ]
    },
    {
        section: { text: 'Instructor and Advisors' },
        content: [
            {
                img:assets.members.XuHuandi$png,
                name: 'Huandi Xu',
                position:'Instructor',
                intro:'He belongs to CPU_CHINA'
            },
            {
                img:assets.members.KongBangyan$jpg,
                name: 'Bangyan Kong',
                position:'Advisors',
                intro:'iGEMer，2020 CPU CHINA Cadvisor，The dream is to conquer adenocarcinoma or be a fisherman.'
            },
            {
                img:assets.members.LuoQiming$jpg,
                name: 'Qiming Luo',
                position:'Advisors',
                intro:'Hey~guys. I\'m QiMing Luo, I\'m good at playing TaiJi and I love math modeling. Modeling is of great fun. We learn to model and model to learn !'
            },
            {
                img:"https://2019.igem.org/wiki/images/3/3c/T--CPU_CHINA--PhotoHH.jpg",
                name: 'Hui Huang',
                position:'Advisors',
                intro:'Lecturer, assistant for political and ideological work，advisors of iGEM teams at CPU for a long time.'
            },
        ]
    },
]

const content = (<>
    <div id="team" className="team content-section">
        <div className="team-family-photos">
            <img src={assets.members.Team$jpg} alt="" />
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
            // nameAbbr: 'CF', avatar: 'assets.avatars.ChengyuFu32x32$png,
        },
    ],
    lastModified: 'July 19, 2020',
    docTitle: '',
    content,
};
