import React from 'react';
import TRH2 from './comps/TRH2';
import './css/Description.scss';
import { NavBox } from './comps/NavBox';

const navboxs = [
    {
        title: 'Alcohol Disposal',
        content: '',
        url: '/Model/Alcohol'
    },
    {
        title: 'Bacteriocin Expression',
        content: '',
        url: '/Model/Bacteriocin'
    },
    {
        title: 'IL-22 Expression',
        content: '',
        url: '/Model/IL_22'
    },
    {
        title: 'Plasmid Transduction',
        content: '',
        url: '/Model/Transduction'
    }
]

export const body = {
    hasInfobar: true,
    hasRating: true,
    translatable: true,

    title: 'Overview',
    hasAside: false,
    content: (
        <>
            <div className="no-aside-container">
                <div className="no-aside-content">
                    <h1>Summary</h1>
                    <p>Modeling is an essential tool for every iGEM project. The mathematical model can deepen our team&#39;s understanding of the work, and can also carry out calculations to assist the construction of engineered bacteria such as promoters and plasmids.</p>
                    <p>Our aim is to establish a systematic model to demonstrate the <em>in vivo</em> metabolic processes of ethanol and the effect of engineered bacteria after alcohol intake.</p>
                    <p> </p>
                    <p>Part 1：Alcohol Disposal</p>
                    <p>Due to the lack of data on the intestinal and blood alcohol concentration over time after alcohol consumption, and yet these data are required for subsequent calculations, we ought to model the process of alcohol disposal in the body. Since alcohol is ingested orally, its <em>in vivo</em> disposal process is similar to that of drugs. So we use the pharmacokinetics equation to simulate. Based on the strong liposolubility and extremely fast rate of transportation through the membrane of ethanol , we adopted a single-compartment model ignored the distribution stage to construct a comprehensive equation of alcohol absorption and metabolism <em>in vivo</em>. The final results of this part of modeling provided data on the alcohol concentration in the blood and in the digestive tract over time. We could also get the time under a specific alcohol concentration which would help establish a phased dosing regimen. <strong>This model made subsequent calculation results more reliable and provided the basis for determining the time and interval of administration route.</strong></p>
                    <p> </p>
                    <p>Part 2：Bacteriocin Expression</p>
                    <p>In this part, our purpose is to construct a system dynamics model to calculate the expression amount of bacteriocin and determine the population of engineered bacteria in the intestine to fix that given to a person. In addition,  The model adopted the Michaelis-Menten equation and the Ligand Binding equation to simulate the dynamic processes of signal induction, mRNA transcription, bacteriocin translation and so on. Moreover, based on the Simbiology toolbox in MATLAB software, the modeling and calculation of system dynamics were completed. <strong>The results of this model included the expression amount of unit engineered bacteria bacteriocin over time and the population of engineered bacteria needed in the intestine supporting for our treatment strategy.</strong></p>
                    <p> </p>
                    <p>Part 3：IL-22 Expression</p>
                    <p>This part of modeling aimed to construct another dynamics model to calculate the expression amount of IL-22 to prove the reliability of the constructed plasmid. Since the IL-22 expression system designed initially had components which could be adjusted to fix the therapeutic window, we decided to quantitatively calculate the efficacy of each component and used the intestinal alcohol concentration as an input variable which had been calculated in &quot;Part 1：Alcohol Disposal&quot; , and then adjusted the components according to the results. The results of this part of the model provided the expression amount of the unit engineered bacteria IL-22 over time. <strong>This model provides a reliable basis for the expression of plasmid designed for anti-inflammatory factor and verifies the rationality of the constructed plasmid.</strong></p>
                    <p> </p>
                    <p>Part 4：Plasmid Transduction</p>
                    <p>Since the CRISPR system lacked relevant kinetic parameters and the kinetics of plasmid transduction still needed further research, we made a bold and innovative model for the sterilization part of plasmid transduction. Plasmid transduction and plasmid sterilization were two independent events. Their occurrence had reproducibility and macroscopic laws. The estimation of the probability could be completed through the statistics of the probability of the events based on probability space. We adopted a Bayesian probability model which would provide the mathematical expectation of sterilization. <strong>The result of this model could give us the sterilization efficiency of the plasmid transduction system and get the accurate antibacterial ratio together with the results of the bacteriocin model. It also helped us evaluate the effectiveness and rationality of the construction of the plasmid transduction system.</strong> </p>
                    <NavBox items={navboxs}></NavBox>
                </div>
            </div>
        </>
    )
};
