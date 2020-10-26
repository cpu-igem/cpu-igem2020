import React from 'react';
import H2 from './comps/TRH2';
import { assets } from 'assets-path.json'
import { ImageWithShadow } from './comps/ImageWithShadow'
import { DocOrderedList, DocUnorderedList } from './comps/DocList'

const alcohol = assets.pages.Model.Alcohol;

export const body = {
    hasInfobar: true,
    hasRating: true,
    translatable: true,

    title: 'Model-Alcohol',
    hasAside: true,
    content: (<>
        <div>
            <h1>Alcohol Absorption and Metabolism Model</h1>
            <H2>Ⅰ. Abstract</H2>
            <p>		In this model, alcohol is divided into three main stages according to the time and space process of in vivo metabolism, which are the pre-enteral stage, the enteral stage and the metabolic elimination stage.</p>
            <p>		<strong>Pre-enteral stage</strong> is the first stage in the body before alcohol is ingested into the intestine. In the first stage, alcohol undergoes a spatial shift from the mouth to the esophagus and then to the stomach. At this stage, the alcohol does not reach the intestinal tract, does not change the permeability of the intestinal epithelium to cause Enterococcus faecalis to metastasize, and does not stimulate the protective effect of the engineered bacteria on the liver. Before alcohol enters the intestine, it is absorbed into the blood through the esophagus and stomach, and the alcohol after entering the blood will not pass through the liver first under the driving of blood circulation. In other words, the first stage is the first absorbed and metabolic stage of alcohol in the body, in which its absorbed metabolism will completely conform to the classical pharmacokinetic model. In the first stage, we can calculate the alcohol concentration in the blood before entering and leaving the intestine and the alcohol concentration in the digestive tract when entering the intestine, which will provide the calculation basis for the model in the following two stages.</p>
            <p>		<strong>Enteral stage</strong> is the second stage, which is the internal stage of alcohol in the intestine. In the second stage, alcohol completes the spatial transfer of the intestine. During this stage, alcohol reaches the intestine, alters the permeability of the intestinal epithelium, and stimulates the transcription and translation of engineered bacteria, thus achieving a protective effect on the liver. Intestinal alcohol concentration, as a signal, starts from the group sense system, undergoes amplification system, and then leads to the expression of antimicrobial peptides, plasmid transduction in order to control the population of Enterococcus faecalis, and through the expression of anti-inflammatory factors, balances the signal of inflammatory factors in the liver. When alcohol enters the intestine, it is absorbed into the blood stream, and when it enters the blood circulation, it passes first through the liver through the portal vein. In the second stage, the parameters related to the absorption and metabolism of alcohol in the intestine will be changed, and we will modify them. In this stage, we were able to calculate the changes in blood alcohol concentration, the therapeutic window for anti-inflammatory factors and antimicrobial peptides and the therapeutic amount of engineered bacteria.</p>
            <p>		<strong>Metabolic elimination stage</strong> is the third stage, in which alcohol is absorbed in the digestive tract but not metabolized and eliminated in the blood. In the third stage, there is no alcohol in the digestive tract, engineering bacteria are no longer activate transcription. The concentration of anti-inflammatory factors in the blood will decrease without supplement. It is necessary to get the expression level of anti-inflammatory factors through calculation to ensure the balance between anti-inflammatory factors and inflammatory factors, and ensure that the remaining alcohol in the blood will not lead to severe inflammation of the liver.</p>

            <ImageWithShadow src={alcohol.clip_image000$png} noShadow
                caption={<>Figure.1: The process of alcohol disposal</>} />
            <p></p>
            <H2>Ⅱ. Model preparation</H2>
            <h3>1. One compartment model</h3>
            <ImageWithShadow width='60%' noShadow src={alcohol.clip_image022$jpg} />
            <p>		The absorption of alcohol in the digestive tract and metabolism in the blood are very similar to the absorption and metabolism of oral drugs<sup>[1-2]</sup>, so we approximately equate the transformation process of alcohol in vivo with that of oral drugs in vivo. In order to quantitatively analyze the kinetic process of alcohol in vivo, the compartment model was used to simulate the human body. Since alcohol is a small molecule substance and has a strong ability in membrane transport, its distribution speed throughout the body is fast enough. In order to simplify the model, this part uses the single compartment model.</p>

            <h3>2. Assumptions</h3>
            <DocOrderedList items={[
                <p>In order to make the problem manageable, we have given the following assumptions:</p>,
                <p>It is assumed that the distribution process after alcohol absorption is instantaneous, that is, the influence of distribution on the model is not considered.</p>,
                <p>The absorption rate of drinking on an empty stomach is the same as that of drinking while eating.</p>,
                <p>Individual differences in the metabolic processes of alcohol are not taken into account</p>,
                <p>4When drinking alcohol within a short period of time, it is assumed that the drinking time is almost zero, that is, the absorption and metabolism processes are analyzed without considering the drinking time</p>,
                <p>Alcohol is metabolized in the digestive tract through absorption and distribution to various organs of the digestive tract, that is, the digestive tract cannot directly metabolize alcohol.</p>,
                <p>The engineered bacteria has no effect on the metabolism of alcohol.</p>,
                <p>Alcohol is completely metabolized by the human liver. There is no alcohol eliminated during processes such as inhalation of gas or urine discharge.</p>,
                <p>The volume of the alcohol solvent remains unchanged.</p>,
                <p>From the above hypothesis, it can be known that when drinkers drink in a short time, alcohol can be distributed to the body fluids soon, making its concentration in the blood and various tissues and organs rapidly achieve dynamic balance. The body absorbs and eliminates alcohol at the same time, so the actual concentration of alcohol in the blood is the comprehensive result of the body&#39;s absorption and elimination of alcohol.</p>,
            ]
            }>

            </DocOrderedList>
            <H2>Ⅲ. Variables and Parameters</H2>
            <h3>1. Variables</h3>
            <ImageWithShadow noShadow width='85%' src={alcohol.table1$png} caption={<>Table.1: The variables of model</>} />

            <h3>2. Parameters</h3>
            <p><ImageWithShadow noShadow width='90%' src={alcohol.table2$png} caption={<>Table.2: The parameters of model</>} /></p>

            <H2>Ⅳ. Model establishment</H2>
            <h3>1. Pre-enteral stage</h3>
            <p>		Since alcohol metabolism in the human body includes both absorption and elimination, the model should also include these two aspects.</p>
            <h4><span>
                1.1 Alcohol absorption
            </span>

            </h4>
            <p>		According to the literature, alcohol absorption conforms to the first-order absorption equation:</p>
            <p><ImageWithShadow noShadow width='23%' src={alcohol.clip_image002$png} caption={<>Fomula.1</>} /></p>
            <h4>
                <span>1.2 Metabolism of alcohol</span>
            </h4>
            <p>		Alcohol metabolism is nonlinear, and according to literature, it conforms to Michaelis-Menten rate equation:</p>
            <p><ImageWithShadow noShadow width='20%' src={alcohol.clip_image004$png} caption={<>Fomula.2</>} /></p>
            <h4>
                <span>1.3 Alcohol absorption and metabolism in the pre-intestinal stage</span>
            </h4>
            <p>		The total equation of alcohol absorption and metabolism in the pre-intestinal stage can be obtained from the above absorption and metabolism equation:</p>
            <p><ImageWithShadow noShadow width='35%' src={alcohol.clip_image006$png} caption={<>Fomula.3</>} /></p>
            <p>		Solving the differential equation can be obtained as follows:</p>
            <p><ImageWithShadow noShadow width='80%' src={alcohol.clip_image008$png} caption={<>Fomula.4</>} /></p>
            <h4>
                <span>1.4 Enteral alcohol concentration</span>
            </h4>
            <p>		According to the initial hypothesis, the alcohol concentration into the intestine is the amount of alcohol consumed and the alcohol content in the blood, which is shown in the following equation:</p>
            <p><ImageWithShadow noShadow width='21%' src={alcohol.clip_image010$png} caption={<>Fomula.5</>} /></p>
            <h3>2. Enteral stage</h3>
            <h4>
                <span>2.1 Alcohol absorption</span>
            </h4>
            <p>		The kinetic equation of alcohol absorption does not change in form, but its parameters should change. The equation is shown as following:</p>
            <p><ImageWithShadow noShadow width='30%' src={alcohol.clip_image012$png} caption={<>Fomula.6</>} /></p>
            <h4>
                <span>2.2 Metabolism of alcohol</span>
            </h4>
            <p>		Alcohol absorption through the intestine will first pass through the hepatic portal vein and enter the liver for metabolism<sup>[3-4]</sup>, so the metabolic rate will be greatly improved. The equation is shown as following:</p>
            <p><ImageWithShadow noShadow width='20%' src={alcohol.clip_image014$png} caption={<>Fomula.7</>} /></p>

            <h4>
                <span>2.3 Alcohol absorption and metabolism in the enteral stage</span>
            </h4>
            <p>		The total equation of alcohol absorption and metabolism in the intestinal stage can be obtained from the above absorption and metabolism equation:</p>
            <p><ImageWithShadow noShadow width='35%' src={alcohol.clip_image016$png} caption={<>Fomula.8</>} /></p>

            <p>		Solving the differential equation can be obtained as follows:</p>
            <p><ImageWithShadow noShadow width='80%' src={alcohol.clip_image018$png} caption={<>Fomula.9</>} /></p>

            <h3>3. Metabolic elimination stage</h3>
            <p>		During this stage, there is no digestive tract absorption and only metabolism of residual alcohol in the blood<sup>[5-6]</sup>. Its elimination rate should be:</p>
            <p><ImageWithShadow noShadow width='20%' src={alcohol.clip_image014$png} caption={<>Fomula.7</>} /></p>
            <p>	Solving the differential equation can be obtained as follows:</p>
            <p><ImageWithShadow noShadow width='30%' src={alcohol.clip_image020$png} caption={<>Fomula.10</>} /></p>
            <H2>Ⅴ. Result</H2>
            <p>		Based on the stage division of alcohol disposal in the body, we calculate the numerical decompression of each differential formula through MATLAB software and place the figures of the changes in blood alcohol content in each stage over time.</p>
            <h3>1. Pre-enteral stage</h3>
            <p>		Calculated with the above parameters and differential equations, the results are shown in Figure.3.</p>
            <p><ImageWithShadow noShadow src={alcohol.final1$png} caption={<>Figure.3: The curve of first stage</>} /></p>
            <p>		Under the certain time, the concentration of alcohol in the digestive tract at the end of the first stage can be calculated. It is the intestinal alcohol concentration that we need.</p>
            <p><ImageWithShadow noShadow width='15%' src={alcohol.clip_image024$png} caption={<></>} /></p>
            <p>		Similarly, the concentration of alcohol in the blood before entering the intestine can be calculated as following.</p>
            <p><ImageWithShadow noShadow width='15%' src={alcohol.clip_image026$png} caption={<></>} /></p>
            <h3>2. Enteral stage</h3>
            <p>		Calculated with the above parameters and differential equations, the results are shown in Figure.4.</p>
            <p><ImageWithShadow noShadow src={alcohol.final2$png} caption={<>Figure.4: The curve of second stage</>} /></p>
            <p>		It is worth noting that the value of the remainder of the differential equation at this stage is fixed. This is because the alcohol concentration in the blood changes continuously without mutation. The segmented function needs to be uninterrupted at the segmented point.</p>
            <p>		The indefinite integral can be used to obtain the function of the alcohol concentration in the blood over time and the concentration of alcohol in the blood at the end of the stage.</p>
            <p><ImageWithShadow noShadow width='15%' src={alcohol.clip_image028$png} caption={<></>} /></p>
            <p>		Under the certain time, the concentration of alcohol in the digestive tract at the end of the second stage can be calculated. </p>
            <p><ImageWithShadow noShadow width='15%' src={alcohol.clip_image030$png} caption={<></>} /></p>
            <p>		In addition, the function of alcohol concentration in the intestinal tract can be integrated over time. This function will be used in the &quot;Bacteriocins Model&quot; and &quot;IL-22 Model&quot; parts to calculate the therapeutic window of anti-inflammatory factors and bacteriocins and the therapeutic amount of engineered bacteria. (Refer to part &quot;Bacteriocins Model&quot; and  &quot;IL-22 Model&quot; for detailed calculation)</p>
            <h3>3. Metabolic elimination stage</h3>
            <p>		Calculated with the above parameters and differential equations, the results are shown in Figure.5.</p>
            <p>
                <ImageWithShadow noShadow src={alcohol.final3$png} caption={<>Figure.5: The curve of third stage</>} />
            </p>

            <div className='doc-refer'>
                <div className='text'>Reference</div>
                <div className='text'>
                    [1] Cederbaum, A. I. (2012). Alcohol metabolism. Clin Liver Dis, 16(4), 667-685. doi:10.1016/j.cld.2012.08.002<br />
                    [2] Leeman, R. F., Corbin, W. R., Nogueira, C., Krishnan-Sarin, S., Potenza, M. N., &amp; O&#39;Malley, S. S. (2013). A human alcohol self-administration paradigm to model individual differences in impaired control over alcohol use. Exp Clin Psychopharmacol, 21(4), 303-314. doi:10.1037/a0033438<br />
                    [3] Lieber, C. S. (2005). Metabolism of alcohol. Clin Liver Dis, 9(1), 1-35. doi:10.1016/j.cld.2004.10.005<br />
                    [4] Plawecki, M. H., &amp; Crabb, D. W. (2014). Metabolism. Handb Clin Neurol, 125, 55-69. doi:10.1016/B978-0-444-62619-6.00004-5<br />
                    [5] Singh, J. (2020). Analysis of fractional blood alcohol model with composite fractional derivative. Chaos, Solitons &amp; Fractals, 140. doi:10.1016/j.chaos.2020.110127<br />
                    [6] Hu, B. W., Lai, J. H. (1996). STUDY OF ALCOHOL PHARMACOKINETICS IN HUMAN BODY. Chin J Forensic Med (01),1-5. doi:10.13618/j.issn.1001-5728.1996.01.001.<br />
                </div>
            </div>
        </div>
    </>)
}