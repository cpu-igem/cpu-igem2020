import React from 'react';
import { NavBox } from './comps/NavBox';

const navboxs = [
    {
        title: 'Integrated Human Practices',
        content: '',
        url: '/Integrated_HP'
    },
    {
        title: 'Education & Public Engagement',
        content: '',
        url: '/Education'
    },
    {
        title: 'Entrepreneurship',
        content: '',
        url: '/Entrepreneurship'
    },
]
// import './css/Description.scss';

export const body = {
    hasInfobar: true,
    hasRating: true,
    translatable: true,

    title: '',
    hasAside: false,
    content: (
        <>
            <div className="no-aside-container">
                <div className="no-aside-content">
                    <h1>Overview</h1>
                    <p>The inspiration for our project is based on a phenomenon that is related to almost everyone.</p>
                    <p>At the initial stage, we conducted literature research, public and doctor interviews, and visited pharmacies to understand the current framework and the need for alcoholic liver disease treatment. </p>
                    <p>In order to understand the market situation of alcoholic liver disease drugs, we visited several companies to obtain information about intellectual property rights and clarified our product positioning. Then, we communicated with psychologists and experts from the Alcoholics Anonymous and hoped to combine our adjuvant therapy with psychology.</p>
                    <p>In the design phase of the project, our experimental protocol was guided by professors in related fields and made the corresponding optimization to make mathematical models more reasonable. We participated in several iGEMers&#39; meetings, got the guidance of professors and iGEMer, improved our experimental design, and continued to optimize the mathematical model design.</p>
                    <p>In the later stage of the project development, we conducted detailed research and interacted with pharmaceutical companies to get their feedback to understand the commercial feasibility of our project. We are ready to further accelerate industrial transformation, optimize production processes, and prepare patent applications in the future. </p>
                    <p>Our human practices have been well integrated throughout the project, which greatly broadened our vision on the subject of alcoholic liver injury, and more importantly, improved our project by considering the opinions of different stakeholders.</p>
                    <NavBox width='33.33%' titleSize='1.6em' items={navboxs}></NavBox>
                </div>
            </div>
        </>
    )
};
