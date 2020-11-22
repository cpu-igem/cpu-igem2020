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
            <H2>Bronze Criterion</H2>
            <h4><span>We achieved all the requirements for the bronze prize as follows:</span></h4>
            <h3>Competition Deliverables</h3>
            <DocOrderedList items={[
                <p>Wiki  <Link href='/'> Wiki Page</Link></p>,
                <p>Poster  <Link href='/'> Poster Page</Link> </p>,
                <p>Presentation Video  <Link href='/'> Presentation Video Page</Link></p>,
                <p>Project Promotion Video  <Link href='/'> Project Promotion Video Page</Link></p>,
                <p>Judging Form  <Link href='/'> Judgin Form Page</Link></p>,
            ]}>
            </DocOrderedList>

            <h3>Attributions</h3>


            <p>Yes! We have created a page on our team wiki with clear attribution of each aspect of our project.
            <br /> 
                See our <Link href='/Attributions'>Attributions Page!</Link></p>

            <h3>Project Description</h3>
            <p> We have created a page on our team wiki and document how and why we chose Alcoholic liver disease (ALD) as our iGEM project, and described how we will achieve our goals.
            <br />
                See our <Link href='/Description'>Description Page!</Link></p>


            <h3>Contribution</h3>
            <p>We've done it! Please click our <Link href='/Contribution'>Contribution Page!</Link></p>
            <p> If your team added information to an existing Part for this criterion, enter the existing Part Number below. Clearly document the contribution on that Part&#39;s Main Page on the Registry (see the Registry Document Parts page for instructions).</p>
            <p>We successfully added quantification characterization results of existing BioBrick Parts: <Link href='http://parts.igem.org/Part:BBa_K2539500'>BBa_K2539500</Link></p>



            <H2>Silver Criterion</H2>
            <h4><span>We also met all the needs for silver medals:</span></h4>

            <h3>Engineering Success</h3>

            <p>Done! See our <Link href='/Engineering'>Engineering Success Page!</Link></p>
            <p> If your team created a new Part for this criterion, enter the new Part Number you have characterized below. Clearly document the contribution on that Part&#39;s Main Page on the Registry (see the Registry Document Parts page for instructions).</p>
            <p>We have submitted these three BioBrick Parts on the Judging Form：</p>
            <DocUnorderedList items={[
                <p><Link href='http://parts.igem.org/Part:BBa_K3661001'>BBa_K3661001</Link></p>,
                <p><Link href='http://parts.igem.org/Part:BBa_K3661002'>BBa_K3661002</Link></p>,
                <p><Link href='http://parts.igem.org/Part:BBa_K3661005'>BBa_K3661005</Link></p>
            ]}></DocUnorderedList>


            <h3>Collaboration</h3>
            <p>We've done it! Please click our <Link href='/Collaborations'>Collaborations Page!</Link></p>


            <h3>Human Practices</h3>
            <p>Done! See our <Link href='/Human_Practices'> Human_Practices Page!</Link></p>


            <h3>Proposed Implementation</h3>
            <p>We've done it! Please click our <Link href='/Implementation'>Proposed Implementation Page!</Link></p>


            <H2>Gold Criterion</H2>
            <h4><span>We met five gold criteria, exceeding the required two:</span></h4>
            <h3>Integrated Human Practices</h3>

            <p>Done! See our <Link href='/Human_Practices'>Integrated Human Practices Page!</Link></p>

            <h3>Improvement of an Existing Part</h3>

            <p>Done! We have functional improved part <Link href='http://parts.igem.org/Part:BBa_K2976009'>BBa_K2976009</Link> into <Link href='http://parts.igem.org/Part:BBa_K3661006'>BBa_K3661006</Link>.</p>

            <h3>Project Modeling</h3>
            <p>Done! We selected ideal TLR receptors through structural bioinformatic analysis, screened out anti-bacterial agents through in vitro bacteria growth model, and stimulated in vivo immune dynamic change of anti-bacteria process. Click see our <Link href='/Model'>Project Modeling Page!</Link></p>


            <h3>Proof of Concept</h3>
            <p>Done! See our <Link href='/Proof_Of_Concept'>Proof of Concept Page!</Link></p>


            {/* <h3>Partnership</h3>
            <p>Done! See our <Link href='/Partnership'>Partnership </Link> Page!</p> */}


            <h3>Science Communications</h3>
            <p>Done! See our <Link href='/Education'>Science Communications Page!</Link></p>
        </div>
    </>)
}