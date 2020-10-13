import React from 'react';
import TRH2 from './comps/TRH2';
import './css/Description.scss';


export const body = {
    title: 'Overview',
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
    content: (
        <>
            <div>
                <p>Modeling is an essential aspect of every iGEM project. The mathematical model can deepen our team&#39;s understanding of the work, and can also carry out calculations to assist the selection of construction conditions of engineering bacteria such as promoters and plasmids.</p>
                <p>Our aim is to establish a systematic model to reflect the in vivo metabolic processes of alcohol and the influence of engineered bacteria on alcohol metabolism after alcohol intake. With this systematic model, we can determine the therapeutic window of anti-inflammatory factors, antimicrobial peptides, the therapeutic dose of engineered bacteria, and the transcription efficiency required by engineered bacteria, among other key parameters. In this model, alcohol is divided into three main stages according to the time and space process of in vivo metabolism, namely, the pre-enteral stage, the enteral stage and the metabolic elimination stage.</p>
                <p>The pre-enteral stage is the first stage in the body before alcohol is ingested into the intestine. In the first stage, alcohol undergoes a spatial shift from the mouth to the esophagus and then to the stomach. At this stage, the alcohol does not reach the intestinal tract, does not change the permeability of the intestinal epithelium to cause enterococcus faecalis to metastasize, and does not stimulate the protective effect of the engineered bacteria on the liver. Before alcohol enters the intestine, it is absorbed into the blood through the esophagus and stomach, and the alcohol after entering the blood will not pass through the liver first under the driving of blood circulation. In other words, the first stage is the first resorptive and metabolic stage of alcohol in the body, in which its resorptive metabolism will completely conform to the classical pharmacokinetic model. In the first stage, we can calculate the alcohol concentration in the blood before entering and leaving the intestine and the alcohol concentration in the digestive tract when entering the intestine, which will provide the calculation basis for the model in the following two stages.</p>
                <p>Enteral stage is the second stage, which is the internal stage of alcohol in the intestine. In the second stage, alcohol completes the spatial transfer of the intestine. During this stage, alcohol reaches the intestine, alters the permeability of the intestinal epithelium, and stimulates the transcription and translation of engineered bacteria, thus achieving a protective effect on the liver. Intestinal alcohol concentration, as a signal, starts from the group sense system, undergoes amplification system, and then leads to the expression of antimicrobial peptides, plasmid transduction in order to control the enteral enterococci concentration, and through the expression of anti-inflammatory factors, balances the signal of inflammatory factors in the liver. When alcohol enters the intestine, it is absorbed into the blood stream, and when it enters the blood circulation, it passes first through the liver through the portal vein. In the second stage, the parameters related to the absorption and metabolism of alcohol in the intestine will be changed, and we will modify them. In this stage, we were able to calculate the changes in blood alcohol concentration, the therapeutic window for anti-inflammatory factors and antimicrobial peptides, the therapeutic amount of engineered bacteria, and the transcription efficiency required by engineered bacteria, among other key parameters.</p>
                <p>Metabolic elimination stage is the third stage, in which alcohol is absorbed in the digestive tract but not metabolized and eliminated in the blood. In the third stage, there is no alcohol in the digestive tract, engineering bacteria are no longer activate transcription. The concentration of anti-inflammatory factors in the blood will decrease if not supplemented. It is necessary to plan the expression level of anti-inflammatory factors through calculation to ensure the balance between anti-inflammatory factors and inflammatory factors in the third stage, and ensure that the remaining alcohol in the blood will not lead to severe inflammation of the liver.</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>
        </>
    )
};
