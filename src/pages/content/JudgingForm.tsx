import React from 'react';

import H2 from './comps/TRH2';
import { assets } from '../../assets-path.json';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Link } from './comps/Link';
import { DocOrderedList, DocUnorderedList } from './comps/DocList';

export const body = {
    hasInfobar: true,
    hasRating: true,
    translatable: true,

    title: 'Judging Form',
    hasAside: true,
    content: (<>
        <div>
            <h1>Judging Form</h1>
            <h2>Bronze</h2>
            <h3>1.Competition Deliverables: Convince the judges that you have completed the following Competition Deliverables:</h3>
            <DocOrderedList items={[
                <p>Wiki</p>,
                <p>Poster</p>,
                <p>Presentation Video</p>,
                <p>Project Promotion Video</p>,
                <p>Judging Form</p>,
            ]}>

            </DocOrderedList>
            <h4><span>All completed!</span></h4>


            <h3>2.Attributions: Describe what work your team members did and what other people did for your project.</h3>


            <p>Yes! We have created a page on our team wiki with clear attribution of each aspect of our project. See our page <Link href='https://2020.igem.org/Team:CPU_CHINA/Attributions'>here</Link>.</p>

            <h3>3.Project Description: Describe how and why you chose your iGEM project.</h3>
            <p> We have created a page on our team wiki and document how and why we chose Alcoholic liver disease (ALD) as our iGEM project, and described how we will achieve our goals <a href='https://2020.igem.org/Team:CPU_CHINA/Description'>here</a>.</p>


            <h3>4.Contribution: Make a useful contribution for future iGEM teams.</h3>
            <p>We’ve done it! Please click our  Contribution page <a href='https://2020.igem.org/Team:CPU_CHINA/Contribution'>here</a>!</p>
            <p> If your team added information to an existing Part for this criterion, enter the existing Part Number below. Clearly document the contribution on that Part&#39;s Main Page on the Registry (see the Registry Document Parts page for instructions).</p>
            <p>We successfully added quantification characterization results of existing BioBrick Parts: <a href='http://parts.igem.org/Part:BBa_K2539500'>BBa_K2539500</a></p>


            <h2>Silver</h2>
            <h3>1.Engineering Success: Demonstrate engineering success in at least one aspect of your project. This achievement should be distinct from your Contribution for Bronze.</h3>

            <p>Done! See our Engineering Success page <a href=' https://2020.igem.org/Team:CPU_CHINA/Engineering'>here</a>!</p>
            <p> If your team created a new Part for this criterion, enter the new Part Number you have characterized below. Clearly document the contribution on that Part&#39;s Main Page on the Registry (see the Registry Document Parts page for instructions).</p>
            <p>We have submitted these three BioBrick Parts on the Judging Form：</p>
            <DocUnorderedList items={[
                <p><Link href='http://parts.igem.org/Part:BBa_K3661001'>BBa_K3661001</Link></p>,
                <p><Link href='http://parts.igem.org/Part:BBa_K3661002'>BBa_K3661002</Link></p>,
                <p><Link href='http://parts.igem.org/Part:BBa_K3661005'>BBa_K3661005</Link></p>
            ]}></DocUnorderedList>


            <h3>2.Collaboration: Collaborate with one (or more) 2020 iGEM team(s) in a meaningful way.</h3>

            <p>We’ve done it! Please click our Collaborations page <a href='https://2020.igem.org/Team:CPU_CHINA/Collaborations'>here</a>!</p>


            <h3>3.Human Practices: Explain how you have determined your work is responsible and good for the world.</h3>
            <p>Done! See our Human Practices page <a href='https://2020.igem.org/Team:CPU_CHINA/Human_Practices'>here</a>!</p>


            <p>4.Proposed Implementation: Explain how you would implement your project in the real world.</p>
            <p>We’ve done it! Please click our Implementation page [here]<a href='https://2020.igem.org/Team:CPU_CHINA/Implementation'>https://2020.igem.org/Team:CPU_CHINA/Implementation</a>!</p>


            <h2>Gold</h2>
            <h3>1.Integrated Human Practices: Demonstrate how your team responded to your human practices reflections, research, and/or engagement. You should show how your activities impacted your project purpose, design and/or execution.</h3>

            <p>Done! See our page <a href='https://2020.igem.org/Team:CPU_CHINA/Human_Practices'>here</a>.</p>

            <h3>2.Improvement of an Existing Part: Make a new Part that improves the function of an existing Part. This improvement must be distinct from your work for Bronze and Silver medals.</h3>

            <p>Done! We have functional improved part <a href='http://parts.igem.org/Part:BBa_K2976009'>BBa_K2976009</a> into <a href='http://parts.igem.org/Part:BBa_K3661006'>BBa_K3661006</a>.</p>

            <h3>3.Project Modeling: Use modeling to gain insight into how your project works or should be implemented. Explain your model&#39;s assumptions, data, parameters, and results in a way that anyone could understand.</h3>
            <p>Done! We selected ideal TLR receptors through structural bioinformatic analysis, screened out anti-bacterial agents through in vitro bacteria growth model, and stimulated in vivo immune dynamic change of anti-bacteria process. Click <a href='https://2020.igem.org/Team:CPU_CHINA/Model'>here</a></p>


            <h3>4.Proof of Concept: Expand upon your Silver medal work for Proposed Implementation and develop a proof of concept for your project.</h3>
            <p>Done! See our page <a href='https://2020.igem.org/Team:CPU_CHINA/Proof_Of_Concept'>here</a>.</p>


            <h3>5.Partnership: Collaborate throughout the year with at least one other 2020 iGEM team on a set of shared objectives related to both of your projects. This partnership should go beyond a Silver medal collaboration.</h3>
            <p>Done! See our Partnership page <a href='https://2020.igem.org/Team:CPU_CHINA/Partnership'>here</a>!</p>


            <h3>6.Science Communications: Develop and implement science communication, education, and/or outreach materials related to synthetic biology. All activities must follow Safety policies for Human Subjects Research.</h3>
            <p>Done! See our page <a href='https://2020.igem.org/Team:CPU_CHINA/Education'>here</a>.</p>
        </div>
    </>)
}