import React from 'react';
import { ImageWithShadow } from './comps/ImageWithShadow';
import H2 from './comps/TRH2';
import { Link } from './comps/Link';
import { DocOrderedList, DocUnorderedList } from './comps/DocList';
import { assets } from '../../assets-path.json'

const collab = assets.pages.Collaboration;

export const body = {
    hasInfobar: true,
    hasRating: true,
    translatable: true,

    title: 'Collaborations',
    hasAside: true,
    content: (<>
        <div>
            <h1>Collaboration</h1>
            <H2>Assist in hosting: the 7th CCiC</H2>
            <p>The 7th Conference of China <em>iGEM</em>er Community (CCiC), as an important platform for exchanges and cooperation among the participating teams of iGEM, was held online from August 27 to 31, 2020. “From LAB To FAB (Industrialization)” as the theme, participants and scientific research talents in synthetic biology are encouraged to provide high-quality and high-efficiency in the actual production process (Fabrication). Academia, industry heavy guests, and some iGEM committee members were also invited to participate.</p>
            <p>The CPU_CHINA team co-organized this meeting. We made adjustments to the structure and format of the conference, hoping to give the participating teams more harvest and communication opportunities.</p>
            <p>In this year&#39;s CCiC, more than 70 iGEM teams across the country shared their research results and experience through team and poster display at the CCiC online conference. We learned about the work of other teams, found teams doing similar projects, and looked for opportunities for cooperation.</p>
            <p>In response to the feedback from CCiC judges, we made the following adjustments and designs for the project about the quorum sensing model: We have adapted the Michaelis-Menten equation to simulate the process of protein transcription and FsrC autophosphorylation to enhance the simulation effect. And adjusted a large amount of data through the database. About alcohol: We have adjusted the absorption parameters.</p>
            <p><ImageWithShadow width='40%' noShadow src={collab.fig1$png} /></p>
            {/* Add an picture */}
            <p><ImageWithShadow width='70%' noShadow src={collab.fig2$png} /></p>
            <H2>Participation: NCiC</H2>
            <p>Fullerene (Nanjing) Study Abroad Consulting Co., Ltd. and GenScript Biotechnology Co., Ltd. provide a platform for exchanges among participants from several universities started offline exchanges and discussions, and invited the instructor of the last China Pharmaceutical University Gold Award team, Professor Liu Yu, and many senior scientists to the scene. The event was held on August 21st at GenScript Biotechnology Co., Ltd. Each participating team introduced the team project, communicated with each other, and gave suggestions by on-site commentators.</p>
            <p><ImageWithShadow width='70%' noShadow src={collab.fig5$png} /></p>
            <p><ImageWithShadow width='70%' noShadow src={collab.fig6$png} /></p>
            <p>The students arrived at GenScript Biotechnology Co., Ltd. to visit GenScript&#39;s exhibition hall and laboratory, and got a close understanding of the top biotechnology knowledge.</p>
            <p>Through the presentations of other teams, we gained a lot of novel ideas and made new friends in the process of exchanging ideas. Besides, we have reached some new cooperation intentions with other iGEM teams.</p>
            <p> <ImageWithShadow width='70%' noShadow src={collab.fig7$png} /></p>
            <p><ImageWithShadow width='70%' noShadow src={collab.fig8$png} /></p>
            <H2>Friend Team Meetup</H2>
            <p>Since quorum sensing is an important part of our project design, we participated in the friend team meeting held by the SZPT team in August 15, 2020, including the SZPT-CHINA,HZAU-China, BIT-China,Fudan, NWU-CHINA-A, and NWU-CHINA-B.</p>
            <p>The main purpose of this meeting was to improve the communication among iGEM teams about different projects. We also learnt about other teams’ quorum sensing and exchanged modeling information and precautions.</p>
            <p><ImageWithShadow width='70%' noShadow src="https://2020.igem.org/wiki/images/5/54/T--CPU_CHINA--d92c5c68.png" /></p>
            <DocUnorderedList items={[
                <p>SZPT-CHINA:<Link href='https://2020.igem.org/Team:SZPT-CHINA/Collaborations'>https://2020.igem.org/Team:SZPT-CHINA/Collaborations</Link></p>,
                <p>HZAU-China:<Link href='https://2020.igem.org/Team:HZAU-China/Collaborations'>https://2020.igem.org/Team:HZAU-China/Collaborations</Link></p>,
                <p>BIT-China:<Link href='https://2020.igem.org/Team:BIT-China/Collaborations'>https://2020.igem.org/Team:BIT-China/Collaborations</Link></p>,
                <p>Fudan:<Link href='https://2020.igem.org/Team:Fudan/Collaborations'>https://2020.igem.org/Team:Fudan/Collaborations</Link></p>,
                <p>NWU-CHINA-A:<Link href='https://2020.igem.org/Team:NWU-CHINA-A/Collaborations'>https://2020.igem.org/Team:NWU-CHINA-A/Collaborations</Link></p>,
            ]}>
            </DocUnorderedList>

            <p><ImageWithShadow width='70%' noShadow src={collab.fig17$png} /></p>
            <p><ImageWithShadow width='70%' noShadow src={collab.fig19$png} /></p>
            <H2>Eastern China Regional Meet Up</H2>
            <p>On July 11, 2020, the iGEM Eastern China Regional Meet Up hosted by the Jiangnan_China team was successfully held. The CPU_CHINA team made a project presentation and got some useful feedbacks.</p>
            <p>From the suggestion we got, we chose the suitable chassis called: E.coli nissle 1917 and the right way to secrete proteins: YebF to achieve higher transcription and secretion efficiency.</p>
            <p>  <ImageWithShadow width='70%' noShadow src={collab.fig3$png} /></p>
            <p> <ImageWithShadow width='70%' noShadow src={collab.fig4$png} /></p>
            <H2>Team NFLS</H2>
            <p><ImageWithShadow width='35%' noShadow src="https://2020.igem.org/wiki/images/b/b6/T--CPU_CHINA--53cad438.jpg" /></p>
            <p><Link href='https://2020.igem.org/Team:NFLS/Collaborations'>https://2020.igem.org/Team:NFLS/Collaborations</Link></p>
            <h3>Doctor and patient interviews</h3>
            <p>Since we need to conduct detailed interviews with experts in alcoholic liver disease,we have been slow in progress in contacting doctors who are willing to meet with us. Under the recommendation of students from NFLS, we went to Jiangsu Provincial People&#39;s Hospital for a meeting with Dr. Zhou on May 30, 2020. Dr. Zhou has extensive clinical experience in the treatment of alcoholic liver disease and under the guidance of Dr. Zhou, we conducted interviews with two patients.</p>
            <p>Such interviews helped our project to clarify the goals through the doctor’s experience and the need of patients, and Dr. Zhou gave effective guidance to our project in the anti-inflammatory module.</p>
            <p><ImageWithShadow width='70%' noShadow src={collab.fig9$png} /></p>
            <p><ImageWithShadow width='70%' noShadow src={collab.fig10$png} /></p>
            <h3>Provide laboratory and consumables for Team NFLS</h3>
            <p>Since Team NFLS is a team of high school students, there is no laboratory that meets the requirements in their school. The China Pharmaceutical University where team CPU_CHINA is located provided laboratory space and consumables for Team NFLS to ensure their necessary experiments.</p>
            <p>When Team NFLS members entered the laboratory and started working, we provided them with laboratory safety training and guidance on experimental skills when necessary.</p>
            <p> </p>
            <h3>Help in improving the efficacy of an existed part BBa_K2976009</h3>
            <p>BBa_K2976009 is a NF-κB induced promoter designed by team 2019 iGEM Team CPU_CHINA and used by both of our teams. We discussed the information and experimental methods of improving the promoter.</p>
            <H2>Team NJMU-China</H2>
            <p><ImageWithShadow width='35%' noShadow src={collab.fig20$png} /> </p>
            <p><Link href='https://2020.igem.org/Team:NJMU-China/Collaborations'>https://2020.igem.org/Team:NJMU-China/Collaborations</Link></p>
            <p>We meet Team NJMU at Nanjing iGEMer Seminar. Since we discovered that both parties have built a quorum sensing system based on E.coli, we have launched further exchanges and cooperation. We discussed the experimental conditions and design, and optimized the verification method through the discussion.</p>
            <p>We all used quorum sensing, which transferred the membrane protein of Gram-positive bacteria (E. faecalis) to Gram-negative bacteria (E. coli) to sense the signal of Enterococcus faecalis. We exchanged literature and experimental information with NJMU.</p>
            <p>Team NJMU transferred the membrane protein of Gram-negative bacteria to Gram-negative bacteria to sense the signal of Enterococcus faecalis. They suggested us to find whether the membrane protein transferred the membrane protein of Gram-positive bacteria to Gram-negative bacteria related to the Fsr system has been tested or reported in the literature.</p>
            <p>Literature review is needed to verify whether Gram-negative bacteria can  express the membrane protein of Gram-positive bacteria. And we find that the amino acid sequence of FsrA is 38% similar to AgrA. The amino acid sequence of FsrC is 36% similar to AgrC. The literature states that the Fsr regulatory system of Enterobacter faecalis is similar in structure and function to the Agr regulatory system of Staphylococcus. The Agr quorum sensing system used to  express in E. coli (Staphylococcus aureus is a gram-positive bacteria). Based on the evidence, we can believe that E. coli can express the Fsr quorum sensing system of Enterococcus faecalis.</p>
            <p>&nbsp;</p>
            <p> </p>
            <H2>Team BIT-China</H2>
            <p>   <ImageWithShadow width='35%' noShadow src='https://2020.igem.org/wiki/images/b/bb/T--CPU_CHINA--13778462.png' /></p>
            <p><Link href='https://2020.igem.org/Team:BIT-China/Collaborations'>https://2020.igem.org/Team:BIT-China/Collaborations</Link></p>
            <p>Quorum Sensing is widely used in the control and regulation of the cell population. Each team performed different functions according to their design of quorum sensing. The experience could help us design our projects better, it’s worth sharing.</p>
            <p>After the presentation at the Quorum Sensing Theme Meet Up, we found that both of our teams were involved in quorum sensing design, so we exchanged the methods of and precautions for co-cultivation of bacteria (E. coli and Enterococcus faecalis); the methods of culture and rejuvenation of Enterococcus faecalis; the temperature, time of the culture and the specific configuration of the medium.</p>
            <p>In the process of communication, BIT-China gave us some advice on the selection of bacteria. They recommended China General Microbiological Culture Collection Center(CGMCC) to us because we need Escherichia coli Nissle strain.</p>
        </div>
    </>)
}