import React from 'react';

import H2 from './comps/TRH2';
import { assets } from '../../assets-path.json';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Link } from './comps/Link';
import { DocOrderedList, DocUnorderedList } from './comps/DocList';
// import './css/Description.scss';

const des = assets.pages.Description;

export const body = {
   hasInfobar: true,
   hasRating: true,
   translatable: true,

   title: '',
   hasAside: true,
   content: (
      <>
         <div>

            <h1>Description and inspiration</h1>
            <H2>Our inspiration</H2>
            <p>At the very beginning of the project, when we first held the spear of synthetic biology and thought about where our arrow shall point, the most important traditional Chinese festival, the Spring Festival, come in time. People sat together with family and friends( a much smaller scale than usual, of course, due to COVID-19), had their hearty drink to celebrate this festival. Yet at the same time, many tragedies caused by drinking had frequently come to our sights, with social discussions around the notorious social norm known as <strong>wine table culture</strong> reaching its peak as well. Statistics witness a sharp increase in the number of cases sent to the emergency department due to alcoholic liver disease (ALD) at this very period, which drew our concern.</p>

            <H2>First glance at the very probelm</H2>
            <p>We started to initiate researches to investigate the current actuality, and what we got was disquieting.</p>
            <p>At the welcome party for new employees, these newcomers are compelled to drink by the company leader. If they refused to drink, this action would be regarded as disrespect to the boss.  In one case, a new employee actually got slapped in the face by a program leader after refusing to drink, though the refusal is due to physical reasons. In another case, a college tutor abused his power, demanded the student to drink and eventually led to the student being hospitalized due to excessive drinking. </p>
            <p>There are also many merchants whose business was affected by the pandemic, and people who lost their jobs facing financial difficulties, taking excessive drinking as a way to relieve stress and depression. Some of these people gradually grew dependent on alcohol and eventually got addicted to it, finally diagnosed with alcoholic liver diseases.</p>
            <p>We were sad to find that there had been countless similar cases in the past few decades: people being forced to drink due to social norms and people getting alcohol addiction for different reasons, their health is seriously threatened by ALD.</p>
            <p><strong>This investigation results made us determined to do something to help with this situation.</strong></p>

            <H2>Importance of early intervention and our early conception</H2>
            <p>We continued investigating epidemiology information of ALD in China also the pathology and current therapy of ALD. We found surprisingly, China is already the country with the most deaths from drinking in the world, with 709,000 deaths caused by drinking every year, while people still perform disproportionate indifference to the harm of drinking and the prevention of ALD, thus ALD develops quickly into later stages such as liver steatosis, liver cirrhosis even liver cancer, at which point the damage done to the liver can hardly get healed. What’s worse, the current therapies even medication for ALD are not working well. That’s why we focus on the early stage of ALD, hoping to bring up a new therapy to intervene the development of ALD at the early stage and prevent further liver damage. </p>
            <p>After browsing through a huge amount of papers and reports, we found that almost half of the Chinese have a congenital deficiency in alcohol metabolism, which is an important cause of ALD as the incompletely metabolized acetaldehyde accumulates excessively in liver then causes hepatotoxicity. Another important and direct pathogenesis is the inflammation induced by the damaged liver, which is way more harmful. </p>
            <p>Based on this knowledge, we constructed our first conception: an engineered system that is able to assist acetaldehyde metabolism and secrete anti-inflammation cytokine IL-22 at the same time. IL-22 was reported by an up to date review to be a promising molecule that exhibits high anti-inflammation activity and is currently under clinical trials for ALD treatment.</p>
            
            <H2>Feedback from human practices and improvement in design</H2>
            <p>We communicate with <strong>Alcoholic Anonymous</strong>, a community for people to help each other realize abstinence from alcohol. They had given us precious advice on project design. The member of <strong>Alcoholic Anonymous</strong> told us that there were many de-alcoholic drugs in the market, which mechanism is similar to the acetaldehyde metabolism assisting design in our conception. Though helpful for the decomposition of alcohol and acetaldehyde, those de-alcoholic drugs were not able to alleviate the damage of alcohol and could even make it worse, for people who take the drugs are likely to blindly trust the effect of the drugs, which results in them drinking even more than they usually do, thus the harm of alcohol is not only not relieved but also get worse on the contrary.</p>
            <p>Based on this important feedback, we decided to call off the acetaldehyde decomposition assisting design and started to seek other important factors fundamental for the development of ALD.</p>

            <H2>The discovery of new entry point: Enterococcus Faecalis and ALD</H2>
            <p>We had interviewed with professor RuiWen Wang, who kindly pointed us to the cutting edge research: Bacteriophage targeting of gut bacterium attenuates alcoholic liver disease, composed by Duan Y, Llorente C, Lang S, et al.</p>
            <p>In this research, scholars made a breaking discovery that <em>Enterococcus faecalis</em>(<em>E. faecalis</em>), which has always been regarded as an important kind of probiotic in human intestines, was found to be a main contributor to liver inflammation. The density of <em>E. faecalis</em> in the intestine would increase aberrantly in the presence of alcohol, disturbing the balance of intestinal flora. More importantly, the over-reproduced <em>E. faecalis</em> would secrete a kind of toxic protein called cytolysin, which would enter the bloodstream then reach the liver and cause the lysis of hepatocyte. High concentration of alcohol would also produce wounds on the intestinal wall, make it possible for even <em>E. faecalis</em> to enter the bloodstream. <em>E. faecalis</em> would get to liver first due to First Pass Effect and colonized some part of liver, thus create wounds on liver and at the same time induce local inflammation on liver, further exacerbate the damage.   </p>
            <p>Based on these researches, we reshaped our project, taking <em>E. faecalis</em> density control and balancing intestinal flora as our new goal, and secretion of anti-inflammation cytokine IL-22 as another aim function to achieve.</p>

            <H2>The final structure of our design</H2>
            <p>Continuous improvement and changes have been made to our project design. The final structure we constructed is as follows:</p>

            <p>Our engineered bacteria has two main functions: </p>
            <DocOrderedList items={[
               <p>Secreting bacteriocins JM79, plwα, plwβto reduce the aberrantly high <em>E. faecalis</em> density in intestines, these three bacteriocins selected all have high specificity towards <em>E. faecalis</em>. The expression of bacteriocins is controlled by quorum sensing system, which further enhances the specificity of our system.</p>,
               <p>Secreting anti-inflammatory cytokine IL-22. The secreted IL-22 has a penetrating peptide attached at its N-terminal to ensure its absorption rate from the intestinal track into the bloodstream. We also take advantage of the First Pass Effect, as IL-22 would get to liver first after its absorption from the intestinal track, which helps guarantee its concentration in the inflamed liver. As IL-22 is highly effective, constitutive expression of IL-22 may cause an undesired immunosuppressive effect. Hence, we decided to use an alcohol-inducible promoter palcA to control the expression of IL-22.</p>
            ]}></DocOrderedList>
            <p>We selected <em>E. coli</em> Nissle 1917 which is a well-studied probiotic as our chassis. We expected it to assist the anti-<em>E. faecalis</em> process while competing with <em>E. faecalis</em> for living resources, which will accelerate the restoration of the balance of intestinal flora.</p>
            <ImageWithShadow noShadow width="55%" src={des.fig2$png}/>
            <ImageWithShadow noShadow width="46%" src={des.fig3$png}/>

            
            <H2>Further improvement of design details</H2>
            <DocOrderedList items={[
               <p> As the alcohol-inducible promoter palcA is relatively inefficient, we decided to apply a T7 system downstream of it, to amplify the expression level of IL-22. But many reports have given warnings about the application of T7 RNA polymerase(T7RP) in <em>E. coli</em>, as its expression efficiency is so high that it might disturb and inhibit the expression of necessary structural proteins required for the survival and reproduction of chassis. To prevent this undesired consequence, we originally planned to introduce an anti-sense RNA into chassis which targets the T7RP sequence and was supposed to reduce the expression of T7RP to the proper level. To predict the final efficiency of this expression system, we performed mathematic modelling, and we found that due to the inefficiency of palcA promoter, the anti-sense RNA design is actually unnecessary. So we abandoned this design eventually.</p>,
               <p>We were kindly suggested by professor Weihua Chu that the transfer of quorum-sensing system from <em>E. faecalis</em> to <em>E. coli</em> has underlying uncertainties as the FsrC protein, which is an important component of the quorum-sensing system is a membrane protein, and due to the structural difference of cell wall between Gram-positive and Gram-negative bacteria, more evidence is required to support this design. To solve this question, we collaborated with NJMU and did a deeper investigation upon this question, we also established a mathematic model to predict the feasibility of this design. The results indicated that the design is actually feasible.</p>,
               <p>In spite of the current design we have, we are also interested in exploring milder new approaches to balance the intestinal flora. We are especially interested in combining  CRISPR-CAS9 system and plasmid transfer, which is a natural existed system, together, and wondered the possible anti-<em>E. faecalis</em> efficiency it might be able to reach. So that we established a mathematic model to make a predicted determination of the efficiency of this CRISPR-plasmid transfer system.</p>

            ]}></DocOrderedList>
            <ImageWithShadow noShadow width="45%" src={des.fig1$jpg} />

            <H2>Modeling</H2>
            <p>Most of our modelling work is closely connected with our wet lab results.</p>
            <h3>Part Ⅰ</h3>
            <p>This part of modelling provides data on the alcohol concentration in the blood with time and the alcohol concentration in the digestive tract with time. The alcohol concentration in the intestine is used as an input signal, which affects the efficiency of transcription initiating and then changes the expression of IL-22. It provides a reference for the experimental conditions of our wet lab and also serves as an important parameter for our dosage determination.</p>

            <h3>Part Ⅱ</h3>
            <p>By stimulating the expression of bacteriocin, the results of this part of the model provide the expression amount of unit engineered bacteria bacteriocin over time and the population of engineered bacteria needed in the intestine. We confirm the safety design of our engineered bacteria and calculate the antibacterial effect towards <em>E. faecalis</em> in ALD patients and normal people. This model also provides support for our treatment strategy and dosing regimen.</p>
            <h3>Part Ⅲ</h3>
            <p>Through the simulation of IL-22 secretion by our model, we calculated the minimum concentration of engineered bacteria that can secrete sufficient IL-22 to achieve therapeutic effect, which may not be acquired by wet lab experiments. We also find out that asRNA component is unnecessary to be constructed into engineered bacteria, further simplifying the experimental design.</p>
            <h3>Part Ⅳ</h3>
            <p>The model provides the mathematical expectation of sterilizing efficiency of plasmid transfer system. The result of this model could help us get the accurate bactericidal ratio together with the results of the bacteriocin model. What&#39;s more, it verifies whether the plasmid transduction system we constructed can achieve the antibacterial efficiency expectations. This will provide guidance for the design of our wet lab experiment.</p>
         </div>
      </>
   )
};
