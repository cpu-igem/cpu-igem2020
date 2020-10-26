import React from 'react';
import H2 from './comps/TRH2';
import { Image as MsImage } from 'office-ui-fabric-react/lib/Image';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { assets } from 'assets-path.json'

import './css/HumanPractices.scss'
import { DocOrderedList } from './comps/DocList';

const Overview = (<>
    <h1>Integrated Human Practices</h1>
    <H2>Overview</H2>
    <p>The inspiration for our project is rooted in social phenomena and social drinking culture. We must understand the feasibility, potential and value of our project in the interaction with various roles in society. We must also consider how to successfully apply our projects to society. To this end, we conducted literature research, public interviews and doctor interviews in the early stage, and visited pharmacies to understand the current framework and current needs of alcoholic liver disease treatment. We understand the professor's opinion to improve our project. It cannot be ignored that alcoholic liver injury and drinking habits are inseparable from the social drinking culture. Therefore, we communicated with psychologists and experts from the Alcoholics Anonymous. We hope to combine our adjuvant therapy with psychology. The combination of treatment can achieve the effect of jointly reducing dependence on alcohol, reducing alcohol consumption, maintaining a low-risk drinking pattern or gradual abstinence to avoid severe alcohol withdrawal syndrome. In order to understand the commercial feasibility of our project, we conducted detailed research and interacted with pharmaceutical companies to get their feedback. Our human practices have been well integrated throughout the project, which greatly broadened our vision on the subject of alcoholic liver injury, and more importantly, improved our project by considering the opinions of different stakeholders.</p>
</>);

const Expert_visits = (<>
    <H2>Expert visits</H2>
    <h3>Academic interviews</h3>
    <Pivot>
        <PivotItem headerText='Dr. Tengfei Ma'>
            <div className='hp-expert'>
                <div>
                    <MsImage shouldFadeIn src={assets.members.ChenJie$jpg} />
                    <p>Professor, Department of Pharmacology, Nanjing Medical University.</p>
                    <p>Dr. Tengfei Ma has done excellent work in the research of neuronal circuit mechanism and drug intervention in alcohol addiction.</p>

                    <h4>
                        <span>We got the following feedback:</span>
                    </h4>
                    <DocOrderedList items={[
                        <p>In clinical cases of alcohol addiction, there are not many patients who completely abstain from alcohol, and it is easy to cause alcohol withdrawal syndrome. There are more clinical symptomatic treatments.</p>,
                        <p>If the patient has a mental disorder, anti-psychotic drugs can be used. At present, there is no specific treatment for alcohol addiction, and there are relatively few alternative therapies.</p>,
                        <p>Alcoholic liver injury can be studied in pathology. It is difficult to study anti-inflammatory and addictive properties together. It is better to investigate separately.</p>,
                    ]}>
                    </DocOrderedList>
                    <h4><span>In response to the feedback, we made the following adjustments and designs for the project:</span></h4>
                    <DocOrderedList items={[
                        <p>We get in touch with the Alcoholic Anonymous to learn about the alcohol addiction and alcohol withdrawal syndrome with people who are addicted to alcohol.</p>,
                        <p>After a long time consideration, we finally decided to focus our project on anti-inflammatory to help patients reduce alcohol consumption and maintain a low-risk drinking mode.</p>,
                    ]}>
                    </DocOrderedList>
                </div>
            </div>
        </PivotItem>

        <PivotItem headerText='Dr. Weihua Chu'>
            <div className='hp-expert'>
                <div>
                    <MsImage shouldFadeIn src={assets.members.ChenJie$jpg} />
                    <p>Associate Professor, Department of Microbiology, School of Life Science and Technology, China Pharmaceutical University.</p>
                    <p>Dr. Weihua Chu has done excellent work in the research of bacterial quorum sensing. After further literature research, we learned that Enterococcus faecalis that enters the liver is the main negative impact. So we decided to take more direct measures, that is, to directly target and kill Enterococcus faecalis. We seek the opinion of Dr. Chu Weihua on this.</p>

                    <h4>
                        <span>We got the following feedback:</span>
                    </h4>
                    <DocOrderedList items={[
                        <p>Plasmid transfer from Escherichia coli to Enterococcus faecalis: The membrane binding method can reflect the normal binding status of microorganisms in the body.</p>,
                        <p>The amount of Enterococcus faecalis killed or regulated by the  bacteriocin should be considered. Enterococcus faecalis is a common bacterium in the human body. (In the intestinal tract of normal people, Enterococcus faecalis has an absolute advantage, about 90%~95%), but it will become pathogenic under certain circumstances.</p>,
                        <p>Enterococcus faecalis can cause some infections in some cases.</p>,
                        <p>Enterococcus faecalis has barrier protection function.</p>,
                        <p>At present, most of the articles related to Enterococcus faecalis focus on its drug resistance and postoperative infection.</p>
                    ]}>
                    </DocOrderedList>
                    <h4><span>In response to the feedback, we made the following adjustments and designs for the project:</span></h4>
                    <DocOrderedList items={[
                        <p>The system we designed is to reduce Enterococcus faecalis to a certain level. The concentration of molecules produced by Enterococcus faecalis reaching 1~5nM will activate our chassis bacteria receptors and play a bactericidal effect.</p>,
                        <p>According to the literature, the idea of targeted killing of Enterococcus faecalis is feasible, but attention should be paid to control the quantity level. In order to kill Enterococcus faecalis at an appropriate rate, we introduced a quorum sensing system.</p>,
                        <p>It needs to be considered that killing Enterococcus faecalis will reduce its barrier protection function and we will do experiments to verify it.</p>,
                        <p>We choose three targeted bacteriocins to deal with the Enterococcus faecalis drug resistance.</p>
                    ]}>

                    </DocOrderedList>
                </div>
            </div>
        </PivotItem>

        <PivotItem headerText='Dr. Xu Hanmei'>
            <div className='hp-expert'>
                <div>
                    <MsImage shouldFadeIn src={assets.members.ChenJie$jpg} />
                    <p>Professor of China Pharmaceutical University, Director of the Engineering Research Center for Peptide Drugs of China Pharmaceutical University, Head of Marine Pharmacy, Member of the National Pharmacopoeia Committee</p>
                    <h4 ><span>We got the following feedback:</span></h4>
                    <p>Need to pay attention to the specificity of killing Enterococcus faecalis.</p>
                    <h4>
                        <span>In response to the feedback, we made the following adjustments and designs for the project:</span>
                    </h4>
                    <DocOrderedList items={[
                        <p>We choose narrow-spectrum bacteriocins, which have a good killing effect on Enterococcus faecalis.</p>,
                        <p>We also simulated the method of using plasmid conjugation combined with CRISPR-Cas9 to target key genes related to the growth of Enterococcus faecalis, which further improved the specificity of the project&#39;s sterilization.</p>
                    ]}>
                    </DocOrderedList>
                </div>
            </div>
        </PivotItem>

        <PivotItem headerText='Dr. Lirui Wang'>
            <div className='hp-expert'>
                <div>
                    <MsImage shouldFadeIn src={assets.members.ChenJie$jpg} />
                    <p>Distinguished Professor of Jiangsu Province, School of Basic Medicine and Clinical Pharmacy, China Pharmaceutical University</p>
                    <p>Dr. Lirui Wang’s research focuses on the &quot;gut-liver axis&quot;, exploring the effects of changes in the microbial metabolome and corresponding host intestinal immune environment on the occurrence and development of host liver diseases. We asked Dr. Lirui Wang about the mechanism of alcoholic liver injury and asked her views on our project design ideas.</p>

                    <h4 >
                        <span>
                            We got the following feedback:
                        </span>
                    </h4>
                    <DocOrderedList items={[
                        <p>Dr. Wang Lirui generally recognized our project design ideas. Dr. Lirui Wang mentioned that her mentor Bernd Schnabl had put forward similar ideas. </p>,
                        <p>Dr. Lirui Wang believes that further attention should be paid to the impact of the three bacteriocins produced on other intestinal microbes, and whether they will destroy the gastrointestinal micro-ecology after production.</p>
                    ]}>
                    </DocOrderedList>
                    <h4>
                        <span>
                            In response to the feedback, we made the following adjustments and designs for the project:
                        </span>
                    </h4>

                    <DocOrderedList items={[
                        <p>We pay close attention to this issue in literature research. Coincidentally, we use the method of killing Enterococcus faecalis to improve symptoms is based on her mentor&#39;s literature.</p>,
                        <p>Regarding the problem of intestinal flora imbalance, we plan to further verify it in the future with mathematical modeling. We verified the number control of Enterococcus faecalis through mathematical modeling. Through the induction signal GBAP in the Enterococcus faecalis flora as the start, the downstream signal response is constructed, and finally the bacteriocin is secreted to complete the number control of Enterococcus faecalis. The mathematical model is mainly used to calculate the number of Enterococcus faecalis changes over time and the antibacterial efficiency through the kinetic equation.</p>,
                        <p>We found some relevant literatures, but there are few related to the three bacteriocins. We will continue to pay attention to them and follow up.</p>
                    ]}>
                    </DocOrderedList>

                </div>
            </div>
        </PivotItem>


        <PivotItem headerText='Dr. Wei Libin'>
            <div className='hp-expert'>
                <div>
                    <MsImage shouldFadeIn src={assets.members.ChenJie$jpg} />
                    <p>Associate Dean of the School of Life Science and Technology, China Pharmaceutical University, is currently mainly engaged in the development of monoclonal antibodies and the research of biochemical drug activity and mechanism of action.</p>
                    <h4 ><span>We got the following feedback:</span></h4>

                    <p>Dr. Liu believes that our project can be simplified to improve the overall system efficiency.</p>
                    <h4><span>In response to the feedback, we made the following adjustments and designs for the project:</span></h4>

                    <p>We comprehensively consider the construction of the amplification system plasmid. The increase in alcohol concentration in the intestine will make the ethanol promoter start more efficient, and will enable the engineered bacteria to express a larger amount of IL-22. The adjustment of RBS can affect the expression of T7RNAP, which in turn affects the expression of IL-22. Antisense RNA will bind to mRNA and inhibit translation, which will decrease the expression of IL-22. When constructing the plasmid, we qualitatively considered the influence of each part. It is obvious that there are redundant parts in the components of the amplification system. Therefore, we plan to quantify the above three components through modeling. According to the target expression of IL-22, we delete redundant components.</p>
                </div>
            </div>
        </PivotItem>

        <PivotItem headerText='Dr. Yu Liu'>
            <div className='hp-expert'>
                <div>
                    <MsImage shouldFadeIn src={assets.members.ChenJie$jpg} />
                    <p>Key Laboratory of Cancer Genesis and Intervention of Jiangsu Province and Cancer Pharmacodynamics Platform of the Ministry of Science and Technology</p>
                    <p>Dr. Wei Libin focuses on the anti-tumor effects and mechanisms of natural products. We hope she can provide guidance on our project design ideas and experimental design.</p>
                    <h4 ><span>We got the following feedback:</span></h4>
                    <DocOrderedList items={[
                        <p>Dr. Wei Libin thinks that our project ideas are quite reasonable, but some of the experimental designs are unreasonable. For the establishment of a model of inflammation suppression, it is necessary to re-select the appropriate substance to be tested, and it is necessary to consider a better method of building an inflammation model.</p>,
                        <p>Part of the project is to make E. coli express the membrane proteins fsrA and frsC of Enterococcus faecalis through transfection and it need to be verified. </p>
                    ]}>
                    </DocOrderedList>
                    <h4><span>In response to the feedback, we made the following adjustments and designs for the project:</span></h4>

                    <DocOrderedList items={[
                        <p>We modified the experimental design. Tumor necrosis factor-alpha (TNF-α) is an inflammatory cytokine that plays an important role in host defence against infections and in immune responses. We plan to use the double antibody sandwich ABC-ELISA method to detect the content of TNF-α in THP-1 cells. Verify that the project can exert its anti-inflammatory function as expected.</p>,
                        <p>After the meeting with NJMU, they advised us to look for some literatures. We checked and found: The Agr system belongs to Staphylococcus aureus which is gram-positive bacteria. The Agr quorum sensing system can successfully express in E. coli. Based on this evidence, we can believe that E. coli can express the Fsr quorum sensing system of Enterococcus faecalis.</p>
                    ]}>
                    </DocOrderedList>

                </div>
            </div>
        </PivotItem>

    </Pivot>

    <h3>Doctor interviews</h3>

    

</>);

const Public_survey = (<></>);

const Social_interaction = (<></>);

const Enterprise_interaction = (<></>);

const Government_Association = (<></>);


const content = (<>
    <div>
        {Overview}
        {Expert_visits}
        {Public_survey}
        {Social_interaction}
        {Enterprise_interaction}
        {Government_Association}
    </div>
</>);

export const body = {
    hasInfobar: true,
    hasRating: true,
    translatable: true,

    title: 'HumanPractices',
    hasAside: true,
    content,
}