import React from 'react';

import H2 from './comps/TRH2';
import { assets } from '../../assets-path.json';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Link } from './comps/Link';
import { DocOrderedList, DocUnorderedList } from './comps/DocList';
// import './css/Description.scss';

import { Table } from './comps/Table';

const items = [
    [
        {
            url: '',
            text: 'Weixuan Lu'
        },
        {
            url: '',
            text: 'He is the team leader and the chief designer of the project. He arranges the works of team members and is also specifically in charge of the wet lab group. He is also the president of CPU Bio-X Club, a club introduces synthetic biology to our school. He participates in the manuscript work team collaboration. He is the main leader of ELISA related characterization and quantitative experiment completion.'
        }
    ],
    [
        {
            url: '',
            text: 'Roujin An'
        },
        {
            url: '',
            text: 'She is the team leader and the chief designer of the project, who picked the topic and constructed the project. She arranges the works of team members and is also specifically in charge of the wet lab group. She is also the main wet lab experimenter who is responsible for eukaryocyte culture and related experiments involving the efficiency determination of JTi2 promoter and IL-22 function detection. She also assisted all other experiments in the project and participated in all text works involved in the project. '
        }
    ],
    [
        {
            url: '',
            text: 'Yilin Li'
        },
        {
            url: '',
            text: 'She is the leader and treasurer of wet lab group, head of the cell experiment. She ensures the propitious progress of the experiment. She also participates in project design, visiting doctors and patients, wiki paperwork. She ensured the smooth running of all parts of the experiment.'
        }
    ],
    [
        {
            url: '',
            text: 'Ziyan Zhu'
        },
        {
            url: '',
            text: 'She completes the design of the bacteria-killing control circuit of the project, responsible for organizing and completing all experiments related to bacteria. She participates in all the experiments. We wouldn’t have any data if it is not for her.'
        }
    ],
    [
        {
            url: '',
            text: 'Yanfeng Liu'
        },
        {
            url: '',
            text: 'He completes the project design of killing *Enterococcus faecalis* by secreting bacteriocin. He is responsible for collecting and analyzing experimental data. He also helps to complete the wiki paperwork.'
        }
    ],
    [
        {
            url: '',
            text: 'Hongfa Qian'
        },
        {
            url: '',
            text: 'He researches and designs two parts of IL-22 and related experiments. The whole team experimented with data processing is his work. We wouldn’t have any data graphs if it is not for him.'
        }
    ],
    [
        {
            url: '',
            text: 'Jingjing Huang'
        },
        {
            url: '',
            text: 'She designed a circuit with QS related protein to complete the AND gate in the engineered bacteria and examed the effect of the output protein.All in all, She is responsible for the quorum sensing(QS) part in this project.'
        }
    ],
    [
        {
            url: '',
            text: 'Yue He'
        },
        {
            url: '',
            text: 'She is responsible for the work of human practices, such as the design and schedule of human practices. She completes psychological research and enterprise interviews. She also finishes some contact for collaboration, manuscript writing and revision.'
        }
    ],
    [
        {
            url: '',
            text: 'Jie Cheng'
        },
        {
            url: '',
            text: 'She is in charge of the Human Practices section and contributes greatly to the Public Engagement section, participating in research for Alcoholics Anonymous and the design and testing of the card game. She also participated in the planning and holding of the 7th CCiC conference.'
        }
    ],
    [
        {
            url: '',
            text: 'Yu Gao'
        },
        {
            url: '',
            text: 'She devotes herself to human practices. Her duty is to contact different parts and thinking about many other ways to make our research impact society, such as integrated human practice, surveys, and public education.'
        }
    ],
    [
        {
            url: '',
            text: 'Min Hai'
        },
        {
            url: '',
            text: 'As a loving girl with a lively mind, she spends most of her time working on Human Practices and comes up with many ideas... that never go through. She devotes herself to the organization of the 7th CCiC, high school education, doctor and patient questionnaires, public education brochure, wiki paperwork, and so on.'
        }
    ],
    [
        {
            url: '',
            text: 'Junlin Shi'
        },
        {
            url: '',
            text: 'As an active member of Human Practices, she undertook most of the work of co-organizing the 7th CCiC conference. She was independently responsible for the work of entrepreneurship and finished the business plan. She also passionately participated in other parts of the work such as designing questionnaires, etc.'
        }
    ],
    [
        {
            url: '',
            text: 'Tong Lyu'
        },
        {
            url: '',
            text: 'She carries out the design of the project logo. She follows up on promotion videos (ideas, scripting, photography, people contacts, video clips) throughout. She decides wiki style, color determination and drawing, poster production, and ppt production and video editing. HP’s game card design and instructions design and production also can’t be separated from her help. In short, all the flat non-plane designs in the competition are supervised by her.'
        }
    ],
    [
        {
            url: '',
            text: 'Xiaoying Li'
        },
        {
            url: '',
            text: 'She completes the team logo design, responsible for the promotion video from the initial idea to scripting, photography, personnel contact, and final specific video editing; designs wiki style, standardized page design, completes layout production, and image modification. She completes poster production and presentation ppt production, video editing, and HP flow chart and graph design.'
        }
    ],
    [
        {
            url: '',
            text: 'Xin Liu'
        },
        {
            url: '',
            text: 'He has great interest in programming languages, and is proficient in using multiple programming languages. Since he is responsible for programming the wiki, his skills regarding the software are irreplaceable.'
        }
    ],
    [
        {
            url: '',
            text: 'Zhiyang Dou'
        },
        {
            url: '',
            text: 'He focuses on modeling. He leads the model programming and establishes the alcohol metabolism model and the anti-inflammatory factor model. Without his model, project practice applications would not be guaranteed and supported.'
        }
    ],
    [
        {
            url: '',
            text: 'Boyang Lin'
        },
        {
            url: '',
            text: 'He contributes to the modeling. He focuses on parameters and equations, making simulations to be more precise.'
        }
    ],
    [
        {
            url: '',
            text: 'Huandi Xu'
        },
        {
            url: '',
            text: 'He is the instructor of our team. He plays a crucial role in the team and nearly involves in every idecision-making of our team. He gave us a lot of guidance in wiki design and manuscript writing.'
        }
    ],
    [
        {
            url: '',
            text: 'Bangyan Kong'
        },
        {
            url: '',
            text: 'He guides the ELISA experiment and helps the propitious progress of anti-inflammatory experiment. He also participates in and assists HP work, reviews and revises paper work. He uses his knowledge and experience to help our team go much further.'
        }

    ],
    [
        {
            url: '',
            text: 'Qiming Luo'
        },
        {
            url: '',
            text: 'He is responsible for guidance of modeling.'
        }
    ],
]


const titles = [
    'Name',
    'Attributions'
]

const caption = 'Team Members'

export const body = {
    hasInfobar: true,
    hasRating: true,
    translatable: true,

    title: 'Attributions',
    hasAside: true,
    content: (
        <>
            <div>
                <h1>Attributions</h1>
                <Table textAlign={['center', '']} titles={titles} caption={caption} items={items} ></Table>

                <H2>General Support</H2>
                <p>Thank our advisors, Mr. Hui Huang, for helping us for a long time. He helps us to communicate with the leaders of our school. We also thank College of Life Science and Technology for providing lab for daily work.</p>

                <H2>Lab support</H2>
                <DocUnorderedList items={[
                    <p>Our first PI, Dr. Hanmei Xu provides us with support of experiment platform, materials and equipments. She arranges the overall experimental plan. She also helped us to formulate the experimental outline and provides theoretical guidance.</p>,
                    <p>Our secondary PI, Dr. Ming Ding provides us with technical guidance and help.</p>,
                    <p>Peiwei Yang, Xinmin Wang, Zhuoyi Ma, Xin Li, Dong Wang, Wenting Lai, Xindi Xu, Sen Zhang are students in prof.Xu’s lab and they provided us lots of help for wet lab.</p>

                ]}></DocUnorderedList>


                <H2>Human practices support</H2>
                <DocUnorderedList items={[
                    <p>Thanks to Dr. Weihua Chu, Associate Professor, Department of Microbiology, School of Life Science and Technology, China Pharmaceutical University, he gives us an analysis and guidance on our ideas about <em>Enterococcus faecalis</em>.</p>,
                    <p>Thanks to Dr. Lirui Wang, Distinguishes Professor of Jiangsu Province, School of Basic Medicine and Clinical Pharmacy, China Pharmaceutical University, she put forward her opinions on the design concept of our project and helped us improve the experimental scheme.</p>,
                    <p>Thanks to Dr. Hanmei Xu, Professor of China Pharmaceutical University, Director of the Engineering Research Center for Peptide Drugs of China Pharmaceutical University, Head of Marine Pharmacy, Member of the National Pharmacopoeia Committee, she give us guidance on the design direction of our project.</p>,
                    <p>Thanks to Dr. Wei Libin, Key Laboratory of Cancer Genesis and Intervention of Jiangsu Province and Cancer Pharmacodynamics Platform of the Ministry of Science and Technology, she provided guidance on our project design ideas and experimental design.</p>,
                    <p>Thanks to Dr. Yu Liu, Associate Dean of the School of Life Science and Technology, China Pharmaceutical University, She helpes us simplify the project through mathematical modeling.</p>,
                    <p>Thanks to Dr. Shijie Yu，Chief physician, associate professor, The First Affiliated Hospital of Liaoning University of Traditional Chinese Medicine，he helpes us clarify the positioning of the project and makes an evaluation of the significance of our project.</p>,
                    <p>Thanks to Dr. Lidong Tang, Chief Physician of Gastroenterology Department, Affiliated Hospital of Liaoning University of Traditional Chinese Medicine, he guides us to investigate the current alcohol advertising market and regulatory laws and regulations on alcohol advertising.</p>,
                    <p>Thanks to Dr. Hongwen Zhou,Chief Physician, Department of Endocrinology, Jiangsu Provincial People&#39;s Hospital, she tells us that a new treatment method for alcoholic liver disease is urgently needed.</p>,
                    <p>Thanks to Dr. Jie Meng, National Counselor, Senior Counseling Psychologist, she expressed her approval of our ideas, regarding our advocacy that can combine our adjuvant therapy and psychotherapy, Dr. Jie Meng suggests that the public should be informed of specific ways to seek psychological help.</p>,
                    <p>Thanks to all the people who participated in our public questionnaire, they provided the most authentic and effective basic data for the development of our project and provided support for our development.</p>,
                    <p>Thanks to all the patients who participated in our questionnaire interview, they give us the most authentic clinical data feedback, which provides guidance for the improvement and perfection of our project.</p>,
                    <p>Thanks to head nurse Wang, Department of Drug Dependence of Dali Second People&#39;s Hospital, She helps with the analysis of alcohol withdrawal in our program.</p>,
                    <p>Thanks to the advisors of April 4, 2020 Online Alcoholic Family Mutual Aid Conference, Eddingpharm Group Company Limited, Mr. Ding Chaozhong(the director of the Nanjing office of Eton Pharmaceuticals), Huzhou Industrial Biotechnology Center, Shanghai Institutes for Biological Sciences, Chinese Academy of Sciences, Wu Licheng (a researcher from the Huzhou Biotechnology Center of the Shanghai Academy of Biological Sciences, Chinese Academy of Sciences ) , Hangzhou Jiuyuan Genetic Engineering Co., Ltd, Weihai Baihe Biotechnology Co., Ltd,Wen Cao(NTD Intellectual Property Attorneys),Wang Liang(sales director of Borui Biology), Borui Biomedical (Suzhou) Co., Ltd, Innovent Biologics,Inc, Dr. Wu Dongdong(Director of Pre-clinical Development of Innovent Biologics Inc.), Qide Medical Co., Ltd, Hou Jun (QA Senior Director of Qide Medical Co., Ltd.), Neptune Star&quot;, &quot;People&#39;s Pharmacy&quot;, &quot;Rainbow Pharmacy&quot; and &quot;Happy People&#39;s Pharmacy&quot;, all of which are relatively well-known chain pharmacies in China and five pharmacists of them, they all provided support and help for our project.</p>,
                    <p>Thanks to all the people who participated, visited, helped and guided our project.</p>,
                    <p>Thanks to Nanjing No.13 High School, Nanjing Foreign Language School (NFLS), Youth Synthetic Biology Discussion Meeting, CPU Bio-X Club.</p>,
                    <p>All the people and organizations mentioned above contributed a lot to our project.</p>
                ]}></DocUnorderedList>

                <H2>Other support</H2>

                <p>Thanks to Ms. Leyi Liang, a student at China Pharmaceutical University. She helps us with our group photo shooting.</p>
                <p>Thanks to Ms. Mengdi Liu, Key Laboratory of Cancer Genesis and Intervention of Jiangsu Province, she provides us with <em>THP</em>-<em>1</em> cell to make the successful demonstration.</p>
                <p>Thanks to Lingfeng Guo, a student at China Pharmaceutical University. He helps us about determination of antimicrobial activity vitro.</p>

                <H2>Thank</H2>
                <p>NFLS</p>
                <p>NJMU</p>
                <p>BIT-China</p>
                <p>SZPT-CHINA</p>
                <p>HZAU-China</p>
                <p>Fudan</p>
                <p>NWU-CHINA-A</p>
                <p>NWU-CHINA-B</p>
                <p>for cooperating with our team.</p>

                <H2>Sponsors</H2>
                <p>Thanks to MATLAB and Snapgene for supporting us with wet lab and dry lab works of this competition.</p>


            </div>
        </>
    )
};
