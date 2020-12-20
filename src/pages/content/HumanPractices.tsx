import React from 'react';
import H2 from './comps/TRH2';
import { Link } from './comps/Link';
import { Image as MsImage } from 'office-ui-fabric-react/lib/Image';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { assets } from 'assets-path.json'
import './css/HumanPractices.scss'
import { DocOrderedList, DocUnorderedList } from './comps/DocList';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Collapse } from 'antd';
import 'antd/es/collapse/style/css';
const { Panel } = Collapse;
const hp = assets.pages.HumanPractices;




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
                    <MsImage shouldFadeIn src={hp.fig1$jpg} />
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
                    <MsImage shouldFadeIn src={hp.fig2$jpg} />
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

        <PivotItem headerText='Dr. Hanmei Xu'>
            <div className='hp-expert'>
                <div>
                    <MsImage shouldFadeIn src={hp.fig3$jpg} />
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
                    <MsImage shouldFadeIn src={hp.fig4$jpg} />
                    <p>Distinguished Professor of Jiangsu Province, School of Basic Medicine and Clinical Pharmacy, China Pharmaceutical University</p>
                    <p>Dr. Lirui Wang’s research focuses on the &quot;gut-liver axis&quot;, exploring the effects of changes in the microbial metabolome and corresponding host intestinal immune environment on the occurrence and development of host liver diseases. We asked Dr. Lirui Wang about the mechanism of alcoholic liver injury and asked her views on our project design ideas.</p>

                    <h4 >
                        <span>
                            We got the following feedback:
                        </span>
                    </h4>
                    <DocOrderedList items={[
                        <p>Dr. Lirui Wang generally recognized our project design ideas. Dr. Lirui Wang mentioned that her mentor Bernd Schnabl had put forward similar ideas. </p>,
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


        <PivotItem headerText='Dr. Libin Wei'>
            <div className='hp-expert'>
                <div>
                    <MsImage shouldFadeIn src={hp.fig5$jpg} />
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
                    <MsImage shouldFadeIn src={hp.fig6$jpg} />
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
    <Pivot>
        <PivotItem headerText='Dr. Shijie Yu'>
            <div className='hp-expert'>
                <div>
                    <MsImage shouldFadeIn src={hp.fig7$jpg} />
                    <p>Chief physician, associate professor. The First Affiliated Hospital of Liaoning University of Traditional Chinese Medicine</p>
                    <p>Dr. Shijie Yu has been engaged in clinical work for nearly 30 years. We hope he will help us clarify the positioning and make an evaluation of the significance of our project.</p>

                    <h4 ><span>We got the following feedback:</span></h4>
                    <DocOrderedList items={[
                        <p>It was quite necessary to prevent alcoholic liver disease at the early stage. Alcoholic liver disease (ALD) has four main stages, namely alcoholic fatty liver, alcoholic hepatitis, alcoholic fibrosis and alcoholic cirrhosis. The progress of these stages is usually irreversible. Alcoholic fatty liver usually has no symptoms and is usually reversible. Mild to moderate fibrosis may be reversible. Persistent fibrosis and inflammation can lead to liver cancer. The permanent and severe damage caused by cirrhosis may mean that patients need liver transplantation to survive. </p>,
                        <p>A considerable proportion of patients of ALD have poor self-control and cannot abstain from alcohol successfully. At the same time, only a few patients can keep in touch with the doctor.</p>,
                        <p>He hopes to increase the awareness of patients with ALD and seek medical treatment in time once they feel sick so that subsequent complications may be avoided.</p>,
                        <p>Western medicines mainly consist of hepatoprotective drugs, and blood lipid-lowering drugs, which can easily be assisted by Chinese medicines. Combination therapies are often clinically proven to be beneficial.</p>,
                    ]}>
                    </DocOrderedList>
                    <h4><span>What we learned:</span></h4>

                    <DocOrderedList items={[
                        <p>We modified the experimental design. Tumor necrosis factor-alpha (TNF-α) is an inflammatory cytokine that plays an important role in host defence against infections and in immune responses. We plan to use the double antibody sandwich ABC-ELISA method to detect the content of TNF-α in THP-1 cells. Verify that the project can exert its anti-inflammatory function as expected.</p>,
                        <p>After the meeting with NJMU, they advised us to look for some literatures. We checked and found: The Agr system belongs to Staphylococcus aureus which is gram-positive bacteria. The Agr quorum sensing system can successfully express in E. coli. Based on this evidence, we can believe that E. coli can express the Fsr quorum sensing system of Enterococcus faecalis.</p>
                    ]}>
                    </DocOrderedList>
                    {/* <p><Link src={}>Interview transcript (pdf)</Link> </p> */}
                    {/* <p><Link src={}>Audio file-Dr.Yu.m4a</Link> </p> */}
                </div>
            </div>
        </PivotItem>


        <PivotItem headerText='Dr. Lidong Tang'>
            <div className='hp-expert'>
                <div>
                    <MsImage shouldFadeIn src={hp.fig8$jpg} />
                    <p>Chief Physician of Gastroenterology Department, Affiliated Hospital of Liaoning University of Traditional Chinese Medicine </p>

                    <h4 ><span>We got the following feedback:</span></h4>
                    <DocOrderedList items={[
                        <p>The current medicines are mainly hepatoprotective medicines, and there are many Chinese patent medicine health products with certain effects. Many patients need to take medicine for a long time, so the safety of medicine is very important.</p>,
                        <p>The patient is not very cooperative to keep in touch with the doctor.</p>,
                        <p>The publicity and promotion of the project is very important. The society is not paying enough attention to alcoholic liver disease. It can be promoted through public service advertisements.</p>
                    ]}>

                    </DocOrderedList>
                    <h4><span>What we learned:</span></h4>

                    <DocOrderedList items={[
                        <p>We should strengthen the advertising of alcoholic liver disease. In particular, it should be promoted as soon as possible to prevent and seek medical treatment in order to achieve better treatment results. We embodied this in the popular science manual we started editing.</p>,
                        <p>We modified the experimental design.Tumor necrosis factor - alpha(TNF - α) is an inflammatory cytokine that plays an important role in host defence against infections and in immune responses.We plan to use the double antibody sandwich ABC - ELISA method to detect the content of TNF - α in THP - 1 cells.Verify that the project can exert its anti - inflammatory function as expected.</p>,
                        <p>After the meeting with NJMU, they advised us to look for some literatures. We checked and found: The Agr system belongs to Staphylococcus aureus which is gram-positive bacteria. The Agr quorum sensing system can successfully express in E. coli. Based on this evidence, we can believe that E. coli can express the Fsr quorum sensing system of Enterococcus faecalis.</p>
                    ]}>
                    </DocOrderedList>
                    {/* <p><Link src={}>Interview transcript (pdf)</Link></p> */}
                    {/* <p><Link src={}>Audio file-Dr.Tang.m4a</Link> </p> */}
                </div>
            </div>
        </PivotItem>

        <PivotItem headerText='Dr. Hongwen Zhou'>
            <div className='hp-expert'>
                <div>
                    <MsImage shouldFadeIn src={hp.fig9$jpg} />
                    <p>Chief Physician, Department of Endocrinology, Jiangsu Provincial People&#39;s Hospital </p>

                    <h4 ><span>We got the following feedback:</span></h4>
                    <DocOrderedList items={[
                        <p>A new treatment method for alcoholic liver disease is urgently needed. Our treatment method coule base on intestinal flora.</p>,
                        <p>The most popular aspect of alcoholic liver disease is its regulation by intestinal flora. Alcoholic liver disease needs more research than obese liver disease.</p>,
                        <p>There are currently no listed alcoholic liver drugs, and drugs that protect liver are not targeted drugs for the treatment of alcoholic liver, because the mechanism of alcoholic liver is not very clear. There are currently no drugs on the market for alcoholic hepatitis, which is a grand plan for drug development. </p>,
                        <p>Fatty liver changes from hepatitis to cirrhosis to liver cancer. According to the law of development, alcoholic fatty liver must be the most common in terms of disease probability. According to our statistics, more and more people have bleeding from alcoholic cirrhosis in the past five years. Therefore, our idea of preventing and linking alcoholic liver disease is reasonable.</p>
                    ]}>

                    </DocOrderedList>
                    <h4><span>What we learned:</span></h4>

                    <DocOrderedList items={[
                        <p>The positioning of our project is more clear, aiming at preventing and delaying the development of alcoholic liver disease.</p>,
                        <p>It is very important to inhibit inflammation in alcoholic liver disease, because inhibiting inflammation can effectively prevent the further development of alcoholic liver disease. After literature research, we selected IL-22 to achieve the function of inhibiting inflammation.</p>,
                        <p>We have made it clear that our project is aimed at people who have a drinking habit and want to gradually stop drinking or adopt a low-risk drinking mode. In our early vision, we hope to achieve the function of metabolizing alcohol.</p>
                    ]}>
                    </DocOrderedList>

                    {/* <p><Link src={hp.}>Interview transcript (pdf)</Link></p>
                    <p><Link src={}>Audio file-Dr.Tang.m4a</Link> </p> */}
                    <ImageWithShadow noShadow src={hp.fig13$jpg} />
                </div>
            </div>
        </PivotItem>
    </Pivot>

    <h3>Psychological research</h3>
    <h4><span>Research on Psychology and Sociology Literature</span></h4>
    <p>The initial inspiration for our project comes from the endless emergence of social events with bad influence caused by the &quot;drinking culture&quot;. Later, we learned that alcoholic liver disease is currently an increasingly common problem.  Therefore, we conducted a detailed investigation around the psychology and social culture of drinking.</p>
    <p>Through this research report, you will understand:</p>
    <DocOrderedList items={[
        <p>ALD and the impact of alcohol dependence on ALD</p>,
        <p>Chinese wine table culture and excessive drinking under pressure</p>,
        <p>Alcohol withdrawal syndrome</p>,
        <p>Current treatments for alcoholic liver disease and Alcohol withdrawal syndrome, including medication and psychotherapy</p>,
        <p>Social group: The general situation of Alcoholics Anonymous. The specific situation of AA in China will be listed separately in the &quot;Social Groups&quot; section.</p>
    ]}>
    </DocOrderedList>
    <p>Through literature research, we have learned that it is more feasible to form a &quot;low-risk drinking&quot; model for people who have moderate drinking awareness. For patients who are heavily dependent on alcohol, it is very necessary to quit drinking. In order to avoid severe alcohol withdrawal syndrome, our program can assist in gradual cessation of alcohol. We clarified the project positioning, which is aiming at people who are in the early and middle stages of alcoholic liver injury, have certain drinking habits and cannot accept the goal of complete abstinence, seek low-risk drinking patterns, and seek gradual methods to quit alcohol, and comprehensively improve mental health problems and alcoholism caused by alcohol Liver disease and avoid people with severe alcohol withdrawal syndrome. We will provide a comprehensive approach to prevention and treatment.</p>
    <p><Link href=''>Psychological and sociological research on alcohol dependence that strongly affects ALD.pdf</Link></p>
    <h4><span>Psychology expert interview</span></h4>
    <Pivot>
        <PivotItem headerText='Dr. Jie Meng'>
            <div className='hp-expert'>
                <div>
                    <p>National Counselor, Senior Counseling Psychologist</p>
                    <h4 ><span>We got the following feedback:</span></h4>
                    <DocOrderedList items={[
                        <p>Dr. Jie Meng expressed her approval of our ideas, but she raised concerns that we should not let our propaganda tend to imply that we can drink more freely after using our therapy, but we still have to inform the public about the disadvantages of drinking.</p>,
                        <p>We discussed with Dr. Meng regarding the early design of &quot;directly metabolizing alcohol&quot; that &quot;will psychologically make the public drink more unscrupulously&quot;. Dr. Meng felt that our worries were justified.</p>,
                        <p>Offering counseling on moderation may help convince some problem drinkers to seek help before they suffer painful consequences. Regarding our advocacy that can combine our adjuvant therapy and psychotherapy, Dr. Jie Meng suggested that the public should be informed of specific ways to seek psychological help.</p>
                    ]}>

                    </DocOrderedList>
                    <h4><span>What we learned:</span></h4>

                    <DocOrderedList items={[
                        <p>Demanding abstinence too soon may just end up driving away a patient who is at the brink of dealing with addiction more directly. When a patient expresses a desire to moderate drinking, it can alert the clinician to a teachable moment. Patients who try to limit drinking for a while and find they are unable to do so may then realize that they have already developed dependence. This may be enough to motivate them to try to abstain. For those who are able to drink moderately, it is more feasible to form a &quot;low-risk drinking&quot; model. For patients who are heavily dependent on alcohol, it is very necessary to quit drinking. In order to avoid severe alcohol withdrawal syndrome, our program can assist in gradual cessation of alcohol.</p>,
                        <p>The current situation in our country is that far fewer people seek psychological counseling help than those who need it. Therefore, we will promote possible ways for people to seek psychological help if they are troubled by alcohol use in popular science activities. Generally speaking, it is roughly divided into the following ways:
                        <DocUnorderedList items={[
                            <p>Hospital Psychology Department</p>,
                            <p>Local psychological counseling agencies have websites, convenience hotlines, etc.</p>,
                            <p>The &quot;National Psychological Consultation and Assistance Information Yellow Pages&quot; project includes privately-practised psychological counselors across the country, NGOs involved in psychological assistance, public welfare hotlines, and related government resources. Can easily browse on the web.</p>,
                            <p>Alcoholic Anonymous in China has contact locations and contact information in various cities on the website.</p>
                        ]}>
                        </DocUnorderedList>
                        </p>,
                    ]}>
                    </DocOrderedList>
                    <ImageWithShadow noShadow src={hp.fig14$jpg} />
                </div>
            </div>
        </PivotItem>
    </Pivot>


    <H2>Public survey and patient interviews</H2>
    <h3>Public survey</h3>
    <h4><span>Purpose</span></h4>
    <DocOrderedList items={[
        <p>Obtain valid original data in the questionnaire survey;</p>,
        <p>Through the collection and processing of questionnaire data, analyze the needs of the audience and establish a user model;</p>,
        <p>Revise the development direction of the project based on the established user model.</p>

    ]}></DocOrderedList>
    <p>In summary, in order to promote the research and development of a series of projects and make the projects show a benign development trend, the implementation of this human practice is necessary. This helps us to better improve our work.</p>
    <p>We designed four-part questions and collected 157 valid questionnaires.</p>
    <h4><span>Analysis</span></h4>
    <DocOrderedList items={[
        <p>General information<br />
            <DocUnorderedList items={[
                <p><strong>Purpose:</strong><br /> The basic information part is to have a clear understanding of the surveyed personnel and master basic information in order to classify and analyze the follow-up survey results</p>,
                <p><strong>Result:</strong> <br />In this survey, the number of surveyed persons is large,and the geographical distribution is even, and the number of men and women is almost equal. Most of them are between 19 and 60 years old and have a wide range of occupations, including government employees, technicians, company personnel, business personnel, students, etc.We have classified the occupations of investigators. It can be seen from the chart that among the investigators, the company’s employees, students, and professional and technical personnel account for the largest and average proportions, which will provide very useful information for our project development and listing and project plan improvement. The proportion of commercial personnel is also very large, which is conducive to obtain the product marketing and development direction of related products from the following questions.
                <ImageWithShadow noShadow src={hp.fig15$png} caption='Fig 1. Occupation'/>
                </p>,
            ]}></DocUnorderedList></p>,

        <p>Drinking habits<br />
            <DocUnorderedList items={[
                <p><strong>Purpose:</strong><br />Through random selection of investigators, we can obtain true and accurate data that reflects the proportion of Chinese people drinking in their lives.In conducting relevant background checks on project audiences, we chose a free answer mode to facilitate timely switching of options and save time. It not only reflects the respect for investigators, but also ensures the actual response of the investigators to drinking.</p>,
                <p><strong>Result:</strong><br />
                1.The data shows that the proportion of Chinese people drinking in life is relatively high, which may be related to the cultural habits of Chinese &quot;alcoholics and drinking buddies&quot;.<br />
                The results of the drinking frequency survey showed that 75 people had drinking behavior for more than a month, 31 people never drank alcohol, 23 people had drinking habit for about a week, and the remaining 30 people drank alcohol within 5 days (frequent behavior). In addition, there are 30 people&#39;s frequent drinking behavior data, suggesting that this may be an effective source of data on alcoholic hepatitis patients, and we need to follow up afterwards.<br />
                    <ImageWithShadow noShadow src={hp.fig16$png} caption='Fig 2. Drinking frequency' />
                 2.The number of years of drinking is directly related to the individual&#39;s age.<br />
                 Therefore, we can verify and reclassify personal information to a certain extent.<br />
                 As can be seen from the chart, 23 people are 0-5 years old, 18 people are 6-15 years old,12 people are 16-25 years old, 4 people are 26-35 years old, and 1 person is more than 35 years old. This shows that the age range of our investigators is relatively large, but also relatively concentrated. The reasons may be: the questionnaire is mainly conducted online. The popularization of smart life provides convenience for this, but at the same time it also limits the opportunities for the elderly to participate in the questionnaire.<br />
                 In total, 34 people have been drinking alcohol for more than 6 years. Compared with the age classification in personal information, this is an important sign that alcoholic beverages generally affect people&#39;s lives, and it also provides evidence for alcohol-related diseases (such as alcoholic hepatitis).<br />
                    {/* <ImageWithShadow noShadow src={hp.fig17$png} caption='Fig 3. Drinking years' /> */}<br/>
                 3.The occurrence of alcoholic hepatitis is not only related to the frequency and length of drinking, but also closely related to the purity of alcohol and the amount of alcohol consumed.<br />
                To illustrate this point, we classified the alcohol concentration of the researchers.<br />
                The results show that the alcohol content of 10% by volume is the most common, which also indicates the amount of alcohol consumed per day, the so-called &quot;small drinking&quot;, this is a fact. Among them, 0-100ml is the most, the second is 250-500ml, and the third is 100-250ml, which once again confirms this statement, supplementing and supplementing the data survey of drinking habits and drinking frequency.<br />
                In addition,there are more data results showing that the volume fraction is between 41-50%,which also indicates the existence and damage of high-concentration alcoholic beverages, and provides guidance for future patient data.<br />
                    <ImageWithShadow noShadow src={hp.fig18$png} caption='Fig 3. Alcohol volume versus content' />
                4.The frequency of drinking during dinner is relatively high, and the frequency of drinking in the middle week of the survey respondents is as high as 50%.<br />
                In the investigation on the purpose of drinking and the reasons for supporting drinking, we found that the prevalence of wine table culture led to the need for drinking at work dinner was the important reason for most people to drink alcohol. In addition, Figure 6 shows that the interest in drinking also accounts for a large proportion in the investigation of drinking reasons.Combining with Figure 5, it is not difficult to find that this is related to people&#39;s cognition More people think that proper drinking is a kind of healthy behavior and will not cause harm to human body. This result reveals the necessity, practicality and importance of strengthening public education.<br />
                Drinking frequency was 46.5% above one week, 19.75% never alcohol, 14.65% above interval of one week, 19.11% frequently drinking, two severe differentiation, which was positively correlated with male occupation ratio, occupational investigation and age in our survey, complementing with previous research results. Drinking age and drinking range, and daily average drinking volume all showed long duration, low degree and large alcohol consumption. The main reasons for drinking were 35.98% party atmosphere and 29.17% work entertainment. It shows the necessity and uncontrollability of drinking, while the attitude towards drinking is understandable but does not support active drinking or encouraging appropriate drinking, but does not support excessive drinking, which conforms to the initial design ideas, leads to disease cognition and lays the foundation.<br />
                    <ImageWithShadow noShadow src={hp.fig19$png} caption='Fig 4. Purpose' />
                    <ImageWithShadow noShadow src={hp.fig20$png} caption='Fig 5. Why support drinking' />
                </p>
            ]}></DocUnorderedList></p>

    ]}></DocOrderedList>


    <h3>Disease cognition</h3>
    <p>The results show that the public&#39;s awareness and concern for alcoholic liver disease is still relatively full and wide-ranging,and most of them take positive measures to prevent it, which makes auxiliary performance and display of the significance of our project. At the same time,there are also some people who do not know the disease in place, so it also reflects the necessity of strengthening human practice activities of public education.</p>

    <h3>Cognition of gene therapy</h3>
    <DocUnorderedList items={[
        <p>Purpose:<br />This part is to understand the public&#39;s acceptance of the project (gene engineering therapy), which is also the preliminary investigation basis for the promotion of the project results.<br />
    We want to explain the necessary public acceptance and popularity of our project, indirectly explain the necessity of our human practice, and directly explain the positive significance of our engineering bacteria preparation and genetic engineering treatment project.</p>,
        <p>Result: <br />
    1.For the knowledge of alcoholic hepatitis disease, the survey results showed that 4%thought they knew very well, 31% said they knew relatively understand, 12% said they knew little and 53% did not know at all. It shows that the popularization of alcoholic hepatitis is not enough, which inspires us to strengthen this aspect after human practice.
    <ImageWithShadow noShadow src={hp.fig21$png} caption='Fig 6. Knowledge of alcoholic liver disease' />
    2.We have a simple understanding of the commercial sales and the price accepted by the public after the industrialization of the project.<br />
    The results show that most of the support is within 2-15, followed by more than 50. This shows that, firstly, the public&#39;s understanding of the project cost is not enough, and at the same time, the knowledge of liver disease health is not enough, which leads to wrong judgment and makes itself in the trial stage, that is, low consumption investment;secondly, the public has not fully understood the project cost, The public&#39;s expectation of good products is high, and the recipients above 50 yuan may pursue better quality and effect. However, it will be a major challenge for us to make the pricing of project products generally satisfactory and acceptable to the public, but the data of this questionnaire undoubtedly provide guidance for us to solve the problem.
    <ImageWithShadow noShadow src={hp.fig22$png} caption='Fig 7. Ideal Price' />
    3.The research results show that the most concerned aspect of the product is: Taking the significant curative effect as the obvious indicator, which is also related to the two-level differentiation of price acceptance, that is, low price recipients fear high price but are not practical, which leads to the trend of low consumption purchase; the high price recipients hope that the project investment will be higher, so as to get better product quality and use effect.
    <ImageWithShadow noShadow src={hp.fig23$png} caption='Fig 8. Most concerned aspects about product' />
        </p>
    ]}>
    </DocUnorderedList>

    <h3>Patient interviews</h3>
    <DocUnorderedList items={[
        <p>Our project ultimately serves patients. We conduct patient interviews to achieve:
            <DocOrderedList items={[
                <p>Understand the patients&#39; views on current treatment methods and their needs for the treatment methods proposed by our project.</p>,
                <p>To understand the patient&#39;s acceptance of our proposed treatment methods.</p>,
                <p> Understand current people&#39;s drinking habits and attempts to abstain from drinking.</p>,
                <p>Understand the impact of alcoholic liver disease on patients&#39; lives in order to optimize our project.</p>
            ]}></DocOrderedList>
        </p>,
        <p>We selected two typical alcoholic liver disease patients (or former patients) for in-depth interviews.<br />
        Portraits of two participants:
            <DocOrderedList items={[
                <p>A middle-aged man with alcoholic liver cirrhosis. He drank a lot of alcohol every day before he became ill. He has given up alcohol after he became ill. He had a very vague understanding of alcoholic liver disease before he became ill. He had not tried to give up alcohol before he became ill. The current treatment plan is not available. Achieved good results; relatively strong interest in our products, high acceptance.</p>,
                <p>Elderly men with alcoholic fatty liver (have been cured), drank a lot of alcohol every day before the illness, and stopped drinking after the illness; had very vague knowledge of alcoholic liver disease before the illness, and had not tried to give up alcohol before the illness; The shortcomings of the treatment plan are mainly due to the inconvenience of the treatment methods and the heavy burden of medical expenses; we have shown a very strong interest in our products and have a high degree of acceptance.</p>
            ]}>
            </DocOrderedList>
        </p>,
        <p>What we learned:<br />
            <DocOrderedList items={[
                <p>We understand that it is very common for people who feel health pressure due to excessive drinking to take health care products. At present, there are many types of health care, the price is relatively high, and the effect is not obvious. For our products, we will achieve reasonable pricing through market research and revenue-expense estimates for the price part in the later stage.</p>,
                <p>We understand that it is necessary to abstain from alcohol for alcoholic liver disease. Therefore, it is feasible for our project to assist alcohol withdrawal and relieve alcohol withdrawal syndrome as a goal.</p>,
                <p>A new and more effective product for treating alcoholic liver disease is urgently needed. And patients have relatively high acceptance of genetic engineering products. Therefore, we are more confident in the marketization of our products.</p>
            ]}>
            </DocOrderedList>
        </p>,
        <p>Interview notebook:
            <DocUnorderedList items={[
                // <Link>patient yue.pdf</Link>,
                // <Link>patient wang.pdf</Link>,
                // <Link>Audio file of patient Bu.m4a</Link>,
                // <Link>Audio file of patient Liu.m4a</Link>
            ]}></DocUnorderedList>
        </p>
    ]}></DocUnorderedList>
    <ImageWithShadow noShadow src={hp.fig24$jpg} caption='Fig 9. Why support drinking' />

    <H2>Social group interaction</H2>
    <h3>Alcoholics Anonymous</h3>
    <p>Alcohol addicts participate in the Anonymous Alcohol Aid Association (AA) when they are sober to help their struggle with alcohol addiction. AA can also provide a platform for abstainers to share relevant experiences and build up healthy friendships.  We hope to get in touch with the local AA to learn about not only their development situation but the achievement and difficulties towards alcohol withdrawal as well.</p>
    <p>In order to understand their operation mode of AA in China, we hope to participate in AA activities to learn about alcohol addiction and withdrawal and have a deeper understanding of people&#39;s needs.</p>
    <p>Interview: Head Nurse Wang, Department of Drug Dependence of Dali Second People&#39;s Hospital</p>

    <p>What we learned in summary:</p>
    <DocOrderedList items={[
        <p>Alcohol‐dependent patients seldom stop drinking or get treatment at the mild stage. The moment they finally choose to seek medical treatment to control it, they are much more likely to have heavily dependent on alcoholism with serious and irreversible harm to their health.</p>,
        <p>According to the results of this investigations, alcohol withdrawal can be simply divided into two stages: physical dependence withdrawal and psychological dependence withdrawal.</p>
    ]}></DocOrderedList>
    {/* <ImageWithShadow noShadow src={} caption='Fig 6. Why support drinking' /> */}
    {/* <ImageWithShadow noShadow src={} caption='Fig 6. Why support drinking' /> */}
    <p>Due to the epidemic, offline events are no longer held, and we participated in online events organized by AA.</p>


    <h3>April 4, 2020 Online Alcoholic Family Mutual Aid Conference</h3>
    <p>Summary of meeting process:</p>
    <DocOrderedList items={[
        <p><strong>Moderator:</strong><br />All members pray peacefully and meditate for half a minute.</p>,
        <p><strong>Members:</strong> <br />Find volunteers to read aloud the twelve steps, twelve traditions, today&#39;s warning words (feeling something every day) and the eleventh tradition.</p>,
        <p><strong>Free time sharing</strong> <br />Seven alcoholics&#39; families shared their feelings about &quot;today&#39;s warning words&quot;, self‐reviewed, described their recent changes and progress in mentality and emotion, and said that even though the alcoholics at home had not completely stopped drinking, their families were gradually at peace, and the strength brought by mutual aid society was huge, which made them gradually return to normal life.</p>,
        <p><strong>The host read the concluding remarks</strong></p>
    ]}></DocOrderedList>

    <p>Summary of meeting process:</p>

    <p>We learned about the general process of the AA meeting and experienced firsthand the role of AA in helping alcoholics. The atmosphere of the meeting was good, and we had a deeper understanding of the reasons why it is difficult for participants to quit drinking.</p>
    <ImageWithShadow noShadow src={hp.fig25$jpg} />
    <ImageWithShadow noShadow src={hp.fig26$jpg} />
</>);


const Enterprise_interaction = (<>
    <h3>Enterprise interaction</h3>
    <h4><span> Enterprise interaction</span></h4>
    <Collapse accordion>
        <Panel header="Eddingpharm Group Company Limited" key="1">
            <p>	Eddingpharm is a company focusing on medical nutrition and tumor treatment. Its main business is to find medical products suitable for the Chinese pharmaceutical market on a global scale. Its service areas include global product introduction, product registration, product pricing, bidding, marketing, international pharmaceutical trade, Indications development and construction of a pharmaceutical cooperation platform.</p>
            <p>	We visited Mr. Ding Chaozhong, the director of the Nanjing office of Eton Pharmaceuticals, and hoped that he could give guidance on our subject from the perspective of market orientation and product positioning.</p>
            <ImageWithShadow noShadow src={hp.fig39$jpg} />
            <p><strong>What we learned:</strong></p>
            <p>	At present, the market for anti-alcohol and liver-protecting drugs is diverse. In order to stand out, in addition to ensuring the most basic effectiveness, safety, economy, and medication compliance of the drug, it also needs its own unique positioning and characteristics. Compared with the current solution On the market structure of liquor and medicine, Mr. Ding analyzed the projects of our research group:</p>
            <DocUnorderedList items={[
                <p><strong>Effectiveness: </strong><br />At present, the efficacy of most anti-alcohol drugs on the market is limited. Some diuretics/stimulants/hormones are mainly added to Chinese patent medicines for anti-alcohol and liver protection to temporarily relieve the false positive effect of refreshing; the research team proposed The mechanism of the dual channels of suppressing inflammation and bacteriostasis is very different in theory.</p>,
                <p><strong>Safety: </strong><br />The research team needs to further consider the trade-off between the side effects of gene modification technology and bactericidal drugs and clinical benefits. Although the CRISPR-CAS9 technology has received extensive attention recently due to the Nobel Prize, its practical application is still focused on some clinically refractory diseases such as tumors and Although AIDS, etc., used for bactericidal action will have unexpected targeting and efficacy, the clinical safety of the human body needs to wait for the further maturity of the technology to consider based on benefits.</p>,
                <p><strong>Economy: </strong><br />The prices of similar products on the market are relatively low, and the project team needs to consider market feasibility.</p>,
                <p><strong>Medication compliance:</strong><br />The oral capsule dosage form proposed by the project team is in line with the current popular trend (portable/convenient to take) and is worthy of promotion; based on the purpose of medication (mostly for alcohol use or liver protection), the release speed of the drug is It is hoped that the duration of action can be further studied.</p>,
                <p><strong>Positioning and characteristics:</strong><br />When it comes to genetic modification technology, the products of the project team may not be classified as health products or OTC in the end. Compared with similar products, the convenience of acquisition (prescription required) and promotion (can not advertising) are very important. Challenge: Unless there is a huge advantage in drug efficacy, the market advantage is not big. It is recommended to initially locate this product to groups with severe alcoholic liver and liver cirrhosis (if the product is only used for hangover, it is a little overkill), and the doctor recommends it by prescription.</p>
            ]}></DocUnorderedList>
            <p><strong>Our response:</strong></p>
            <DocOrderedList items={[
                <p>For the study of the drug release rate and action time, we explained that the capsule is to assist the engineered bacteria to reach the intestine, because the stomach pH may not be suitable for the growth and reproduction of the engineered bacteria. As an endogenous drug, we designed a model in the mathematical modeling part, hoping to achieve the following effects:Verify the effective concentration of IL-22 in the human body.Verify that the secretion concentration of the engineered bacteria IL-22 can meet the effective concentration</p>,
                <p>We believe that such technology can be expanded into treatments for more severe ALD to enhance market competitiveness and cost-effectiveness.</p>,
                <p>In response to market competition, we investigated the main drugs currently used for alcoholic liver disease. The specific drug market research results are presented in &quot;Pharmacy Research&quot; and &quot;Business Plan&quot;.</p>,
                <p>We very much agree with Mr. Ding&#39;s concerns about the clinical application of CRISPR-CAS9 technology. In this part, we made a mathematical model. We agree that the clinical safety of the human body needs to be considered based on the benefits after the further maturity of the technology. In the future industrial transformation process, we may not be eager to apply CRISPR-CAS9 technology, but will consider comprehensively based on safety and cost performance.</p>
            ]}></DocOrderedList>
        </Panel>
        <Panel header="Huzhou Industrial Biotechnology Center, Shanghai Institutes for Biological Sciences, Chinese Academy of Sciences" key="2">
            <p>We visited researcher Wu Licheng from the Huzhou Biotechnology Center of the Shanghai Academy of Biological Sciences, Chinese Academy of Sciences and gave the following suggestions:</p>
            <DocOrderedList items={[
                <p>	Affirm our project creativity. Find the problem and solve the key problems in response to the problem. However, there may be several problems in the actual application of the product. The suggestions are as follows:</p>,
                <p>The carrier used is genetically engineered bacteria, and the expression and release of the drug is also precisely controlled by genetic engineering. Taking the drug will have the risk of harm to the normal intestinal flora of the human body and gene transfer.</p>,
                <p>It is difficult for domestic and foreign laws and regulations to directly use genetically engineered bacteria as medicines and health products or foods. At present, wild microorganisms are screened for food safety permission as microecological preparations to inhibit harmful intestinal microorganisms and improve intestinal flora.</p>,
                <p>Compared with ICH and FDA, my country&#39;s regulations on biosimilars started late, and relevant registration specifications are still being explored. Therefore, special attention should be paid to all aspects of product registration and promotion in the future.</p>
            ]}></DocOrderedList>

            <p><strong>Our response:</strong></p>
            <DocOrderedList items={[
                <p>Dr. Lirui Wang also raised the issue of genetically engineered bacteria that are harmful to human normal intestinal flora and the risk of gene transfer. Since we cannot complete this part of the experiment at present, we hope to consider it in the future industrial transformation period.</p>,
                <p>We are aware of the practical difficulties in industrial transformation. We plan to visit relevant companies to learn more about project positioning.</p>
            ]}></DocOrderedList>
        </Panel>


        <Panel header="Hangzhou Jiuyuan Genetic Engineering Co., Ltd." key="3">
            <p>Hangzhou Jiuyuan Genetic Engineering Co., Ltd. is a modern biopharmaceutical enterprise specializing in the research and development, production and sales of genetic engineering drugs, biochemical drugs and medical devices. The company was established in December 1993. As a member company of Hangzhou East China Pharmaceutical Group Holdings Co., Ltd., it is one of the earliest genetic engineering pharmaceutical companies established in Zhejiang Province and even in the whole country.</p>
            <p>We had a conversation with Wang Junyuan, the head of enterprise research and development, and learned:</p>
            <DocOrderedList items={[
                <p>After the patient&#39;s physical examination was diagnosed with alcoholic liver, the plan was adopted for the purpose of preventing deterioration. The subject was well-conceived, and the principle itself was okay. There was a question about the subject: the individual differences in alcohol metabolism are relatively large, and the calculation formula we proposed is uncertain. How big groups can be represented and how to get more prepared data.</p>,
                <p>There is no animal experiment in the intervention measures designed by the subject (it is also difficult to conduct animal experiments), and the explanation of how the dosage formulation is designed is not particularly clear. Of course, the concept design may not be a big problem.</p>
            ]}></DocOrderedList>
        </Panel>

        <Panel header="Weihai Baihe Biotechnology Co., Ltd." key="4">
            <ImageWithShadow noShadow src={hp.fig40$jpg} />
            <p>Weihai Baihe Biotechnology Co., Ltd. is a leading global health food manufacturer. The company has obtained many qualification registrations and certifications including FDA registration in the United States, and its products have obtained market access qualifications in 65 countries including Europe and the United States.</p>
            <p>We interviewed the company’s manager, Sun Pengfei, and learned about the current domestic regulatory knowledge and relevant precautions for the listing of health products.</p>
            <p>What we learned:</p>

            <DocOrderedList items={[
                <p>Health care products must be approved by the State Administration for Market Regulation. The listing of health care products is divided into two forms: registration and filing. Active ingredients obtained by genetic modification must be registered in this form.</p>,
                <p>The process of domestic health care product registration is mainly: provide samples for registration inspection → compile registration materials → fill in the registration information system → submit application materials → national technical review → pass the review and obtain the registration approval</p>,
                <p>Based on the domestic health food registration management requirements, during product development, the safety, health function, production process research and product technical requirements of the product should be focused on, and a demonstration report on these aspects should be formed at the same time.</p>,
                <p>The active ingredients obtained by genetic modification belong to the new raw materials of health food, and should refer to the relevant regulations of the safety review of new food raw materials, and provide safety evaluation materials and toxicological tests such as research reports on new raw materials of health food, research and utilization at home and abroad Report, production process, quality requirements, inspection report.</p>,
                <p>The safety evaluation materials and toxicological test reports of new raw materials for health foods involved, as well as bacterial identification reports, bacterial virulence test reports, product safety evaluation tests, etc., should be comprehensively analyzed to evaluate product safety.</p>,
                <p>At the stage of product formulation and process development, the formula, suitable and unsuitable people, edible methods and amounts, precautions, etc. should also be considered in advance.</p>
            ]}></DocOrderedList>

            <p>Our reponse:</p>
            <p>Although we cannot register health care products in the short term, we have a general understanding of the process. During the project, we focused on the product safety, health care functions, production process research and product technical requirements.</p>

        </Panel>
        <Panel header="NTD Intellectual Property Attorneys" key="5">
            <ImageWithShadow noShadow src={hp.fig42$jpg} />
            <p>What we learned:</p>
            <DocOrderedList items={[
                <p>Search for the Prior art <br />Search for the prior art information is important for the Intellectual Property (IP) strategy for the Project. Both the patent and non-patent documents including scientific paper, journal, textbook or the like should be considered, either in Chinese or other languages.</p>,
                <p>Patent Filing <br />The technical information must be kept confidential before the patent is filed to avoid any undesired disclosure. If necessary, aconfidentiality agreementcould be signed with a third party.<br />A patentshould be filed as early as possible once the technical work has a promising outcome. A priority application(s) could be filed if the finalworkingresults will be obtained step by step.</p>,
                <p>Patent Portfolio<br /> If the project will be promising for the marketing over the world, a global Patent Portfolio shall be considered, that is, not only to file a local application, but also to consider filing corresponding applications in other countries. In this regard,priority applicationand PCT application can be considered.</p>,
                <p>Infringement<br /> The patents of others like a competitor should be watched totake into account any (possible)infringement act.</p>
            ]}></DocOrderedList>

            <p>Our response:</p>
            <p>The communication with Ms. Cao was very effective. We learned more about intellectual property and patent applications. We will pay attention accordingly in future patent applications.</p>

        </Panel>
        <Panel header="Borui Biomedical (Suzhou) Co., Ltd." key="6">
            <p>Borui Biology is a listed company focusing on the research and development of targeted tumor therapy and fatty liver immunotherapy.</p>
            <ImageWithShadow noShadow src={hp.fig44$jpg} />
            <p>What we learned:</p>
            <DocOrderedList items={[
                <p>We understand that the interventional research of microbial agents on the human body is mainly focused on the treatment of cancer and metabolic syndrome-related diseases. For alcoholic hepatitis or alcoholic fatty liver, it is still in a blank market. In the long run, if a microbial therapy is put on the market, it will be included in the category of &quot;Clinical Trials of New Treatment Technologies&quot; in the current clinical research system. As an extension of gene editing technology, how our products face the review of the ethics committee during pre-clinical approval will be a more challenging issue.</p>,
                <p>Through this communication, we have learned that the long clinical trial process in the early stage of the drug’s marketing is of great significance for us to plan the treatment direction of the product and the audience.</p>,
                <p>This is a bold attempt for us to propose ways to modify genes to reduce the risk of alcoholic liver. Mr. Wan pointed out that for alcohol addicts or moderate drinking enthusiasts, they may be concerned about how to maintain their health without changing their lifestyle. Regarding the introduction of modified genetically live bacteria, on the premise of reducing the risk of liver damage, whether there are other side effects on their own bodies is also the focus of consumers&#39; great attention. Relevant research and investment time limit are also issues that manufacturers emphatically consider.</p>,
                <p>At present, alcoholic liver products are mainly concentrated in health products and pharmaceutical products. Among them, pharmaceuticals are mostly small molecule drugs, including glucocorticoids, antioxidants, anti-fibrosis, and products that promote liver cell regeneration, but involve genetic engineering activities. Bacteria products are still relatively scarce in the market, so the project has a certain degree of innovation and forward-looking.</p>

            ]}></DocOrderedList>
        </Panel>
        <Panel header="Innovent Biologics,Inc." key="7">
            <p>Dr. Wu Dongdong, Director of Pre-clinical Development of Innovent Biologics Inc.</p>
            <ImageWithShadow noShadow src={hp.fig45$jpg} />
            <p>Cinda Bio focuses on drug research and development in multiple disease fields such as tumors, metabolic diseases, and autoimmunity. We were fortunate to ask Dr. Wu Dongdong, the preclinical research director of Cinda Biosciences, about the pharmacology and pharmacokinetics of our invention.</p>
            <p>Unlike conventional chemical or biological drugs, our products do not have detection indicators for classic methods. Under normal circumstances, it will choose to have specific treatment indications instead. At the same time, we discussed the feasibility of using microbiota and metabolomics in animal experiments as auxiliary judgment or secondary treatment indicators.</p>
            <p>After consultation, we also realized that in the project, the establishment of the ethanol concentration model in the human body, in practice, due to the difference in the expression of acetaldehyde dehydrogenase in the population, may put new requirements on the sensitivity of the ethanol concentration probe in the product. The universal applicability to people of different genotypes is also an issue that should be considered in our future work.</p>


        </Panel>
        <Panel header="Qide Medical Co., Ltd." key="8">
            <p>Hou Jun, QA Senior Director of Qide Medical Co., Ltd. </p>
            <p>What we learned:</p>
            <DocOrderedList items={[
                <p>When developing drugs, consider the feasibility of industrialization, such as the availability of materials, the versatility of production equipment, the tolerance of production processes, etc. This will have more advantages over other products, including the cost and the output.</p>,
                <p>We need to pay attention to whether there are similar products on the market, what are the advantages of the products we develop compared to them, and we can optimize and improve on their basis.</p>

            ]}></DocOrderedList>
            <p>For the commercialization of our products, Mr. Hou gave us the following guidance:</p>
            <DocOrderedList items={[
                <p>China&#39;s probiotic dietary supplement product market still has huge growth potential. The main driving factors include:<br />continuous growth in consumer awareness;<br />increase in the number of new entrants<br />more newly launched products And health benefits;<br />The rapid growth of online retail channels, etc. Positioning such products as OTC products as much as possible will be a point of sale for the development of Internet medicine in the future; if positioning as prescription drugs, sales will have certain limitations;</p>,
                <p>There are many kinds of probiotics, low-temperature requirements for storage, and a cold chain for transportation. If the final finished formulation can break through this link, the audience&#39;s accessibility will be greatly improved.</p>

            ]}></DocOrderedList>
            <p>Our response:</p>
            <DocOrderedList items={[
                <p>We have considered materials and production equipment in the business plan, and comprehensively considered the cost.</p>,
                <p>We did a competitive product analysis.</p>
            ]}></DocOrderedList>
        </Panel>
    </Collapse>
</>);

const Pharmacy = (<>
    <h3>Pharmacy research</h3>
    <p>In interviews with doctors, the term &quot;hepatoprotective drugs&quot; appeared frequently. To understand the current drug market for ALD, we visited several of the most famous chain pharmacies in China, namely &quot;Neptune Star&quot;, &quot;People&#39;s Pharmacy&quot;, &quot;Rainbow Pharmacy&quot; and &quot;Happy People&#39;s Pharmacy&quot;.</p>
    <p>What we learned:</p>
    <DocOrderedList items={[
        <p>Currently, the first recommendation is Yishanfu (polyene phosphatidylcholine capsules), which indication is to assist in the improvement of toxic liver damage (such as liver damage caused by drugs, poisons, chemicals and alcohol). Other recommendations are Sunflower Brand Liver-Protecting Tablets, which are Chinese traditional medicines. In terms of sales, Yishanfu and various brands of Chinese patent medicine liver-protecting tablets sell well.</p>,
        <p>Some pharmacists are more cautious when recommending Chinese medicines. </p>,
        <p>For popular silymarin and other health products, most pharmacists said that they are not particularly recommended and do not guarantee the effect. </p>,
        <p>Currently, health care products for alcoholic liver injury are quite mixed in China.</p>

    ]}>
    </DocOrderedList>

    <p>We introduced our project to the pharmacists and got the following feedbacks:</p>
    <DocOrderedList items={[
        <p>Three pharmacists expressed their interest, and our treatment methods should have a large market. </p>,
        <p>Three raised concerns about the effectiveness of clinical treatment. At the same time, pharmacists also raised concerns about prices. </p>,
        <p>A pharmacist reminded us that the cycle of R&amp;D, production, and marketing is quite long. We decided to continue in-depth market research and conduct research on pharmaceutical companies to get feedback from companies.</p>

    ]}></DocOrderedList>
    <ImageWithShadow noShadow src={hp.fig31$jpg} />
    <ImageWithShadow noShadow src={hp.fig32$jpg} />
    <ImageWithShadow noShadow src={hp.fig33$jpg} />

</>)

const Government_Association = (<>
    <H2>Government Association</H2>
    <ImageWithShadow noShadow src={hp.fig29$jpg} />
    <p>Our project designed a capsule product for the prevention and treatment of early alcoholic liver disease based on the theory of inhibiting anti-inflammatory factors and killing Enterococcus faecalis and improving the intestinal flora through engineering bacteria modification (gene engineering). To determine whether to declare a health (food) product category (effect: adjuvant treatment of chemical liver injury, regulating intestinal flora) according to probiotic products or to declare a special category of drugs according to biological products (genetic engineering products). Therefore, we sent an email to the National Drug Products Administration, and after further understanding, we found that we should declare special categories of drugs based on biological products (genetic engineering products).</p>
    <ImageWithShadow noShadow src={hp.fig30$png} />
</>);


const content = (<>
    <div>
        {Overview}
        {Expert_visits}
        {Enterprise_interaction}
        {Pharmacy}
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