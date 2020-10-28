import React from 'react';

import H2 from './comps/TRH2';
import { assets } from '../../assets-path.json';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Link } from './comps/Link';
import { DocOrderedList, DocUnorderedList } from './comps/DocList';
// import './css/Description.scss';

const es = assets.pages.Entrepreneurship;

const content = (<>
    <h1>Entrepreneurship</h1>
    <H2>Pain Points</H2>
    <DocOrderedList items={[
        <p>ALD has become one of the main causes and most popular chronic liver diseases worldwide.</p>,
        <p>Early prevention of ALD plays a particularly important role.</p>,
        <p>It is difficult to abstinence from alcohol completely. </p>,
        <p>Comparing to alcohol-decomposing drug, we are in want of long-term contribution to the prevention of ALD.</p>
    ]}>
    </DocOrderedList>

    <H2>Product—— probiotic oral prescription drug</H2>
    <p>Lico.Health has been designed as a genetic-engineered, probiotic oralprescription drug aimed at preventing
        alcohol liver disease (ALD) at early stage by intestinal colonization.</p>
    <H2>Advantages</H2>

    <DocOrderedList items={[
        <p><strong>Effectiveness</strong>: our directional transformation could enable Lico. Health to target at specific lesions and to give full play to prevent ALD.</p>,
        <p><strong>Quality</strong>: The more sophisticated production process of this cutting-edge technology and corresponding stricter legal supervision, the higher level of quality assurance and controllability for Lico. Health.</p>,
        <p><strong>Innovation</strong>: Our product achieves microbial intestinal colonization through oral medication, which precisely cater to those drinking enthusiasts in want of improving their health while changing their lifestyle as little as possible</p>,
        <p><strong>Compliance</strong>: Freeze-dried (microencapsulation) powder can be preferrable than conventional capsule to soften the resistance as a preventive product.</p>,
        <p><strong>Profitability</strong>: As a gene therapy, Lico.Health can be outstanding in competing for middle and high-end markets, which means more promising profit margin.</p>
    ]}>
    </DocOrderedList>

    <H2>The Market</H2>
    <DocOrderedList items={[
        <p><strong>Market of Cell &amp; Gene Therapy</strong>
            <p>Financing, M&amp;A, and Pipeline Activities are all accelerating. Cell and gene therapy outsourcing is
            compounding at a high rate and the global cell and gene therapy funding amount is growing at a high rate year-over-year.
                </p>
        </p>,
        <p><strong>Market of Food Supplements(Main Competitor)</strong>
            <p>The scale of China&#39;s health products market continues to expand, but the industry structure is
            relatively fragmented. In 2019, China’s nutritional and health food industry has experienced a year of
            drastic adjustments. The industry has been regulated. Many enterprises have fallen into a downturn, and
                the overall growth rate of the industry has slowed down at the same time.</p>
        </p>,
        <p><strong>Market of Probiotic Products</strong>
            <p>The industry&#39;s &quot;rising against the trend&quot; during a special period showed its market value
                related to health.</p>
        </p>,
        <p><strong>Market of medical international trade</strong>
            <p>The international pharmaceutical trade market is growing rapidly.</p>
        </p>
    ]}>
    </DocOrderedList>

    <H2>Marketing Plan</H2>

    <DocOrderedList items={[
        <p>
            <strong>Target group</strong>
            <p>Target group is East Asian market centered on China, people aged 15-49 who have the habit of drinking,
                mainly men.</p>
        </p>,
        <p>
            <strong>Product exposure strategy </strong>
            <p>In order to comply with legal requirements, we will use hospitals to purchase drugs and doctors to issue
            prescriptions as the main sales channels.
            Considering that in addition to alcoholic liver disease, ethanol is also a predisposing factor for many
                other diseases, so our sales plan may not be limited to liver disease departments.</p>
        </p>
    ]}>

    </DocOrderedList>

    <H2>SWOT Analysis</H2>
    <ImageWithShadow noShadow width='92%' src={es.SWOT$png} />

    <H2>Operation cycle</H2>
    <ImageWithShadow  noShadow width='100%' src={es.Progress$png} />
    
    <Link href={es.CPU_CHINA_Entrepreneurship$pdf}>Read More About Entrepreneurship</Link>
</>)



export const body = {
    hasInfobar: true,
    hasRating: true,
    translatable: true,

    title: 'Entrepreneurship',
    hasAside: true,
    content,
};
