import React from 'react';

import H2 from './comps/TRH2';
// import { assets } from '../../assets-path.json';
// import { ImageWithShadow } from './comps/ImageWithShadow';
// import { Link } from './comps/Link';
import { DocOrderedList, DocUnorderedList } from './comps/DocList';

export const body = {
    hasInfobar: true,
    hasRating: true,
    translatable: true,

    title: 'Implementation',
    hasAside: true,
    content: (<>
        <div>
            <h1>How will our project implement the real world</h1>
            <H2>The proposed end users: patients at the early stages of Alcoholic Liver Disease</H2>
            <p>According to the results of our human practices researches, a controllable intervention method is in strong demand among doctors who wish to treat ALD more effectively. There are two main problems reside in the currently generally applied treatment:</p>
            <DocOrderedList items={[
                <p>The abstinence from alcohol highly relies on patients’ self-control, thus the doctors can hardly manage this process. There are also lots of obstacles faced by a great amount of patients, which makes it impossible for these certain groups of patients to perform abstinence.</p>,
                <p>The current therapy for ALD mainly focus on later pathological stages, when serious lesions as liver steatosis, liver cirrhosis even liver cancer already occur. While the drugs </p>
            ]}></DocOrderedList>


            <p>(Detailed information about current treatment and interview records with doctors is available at Human Practices webpages)</p>
            <p>Our engineered bacteria is rather promising to become an effective, controllable intervention methods which meets the practical medical requirement and can be applied as an adjuvant therapy for ALD in the future.</p>
            <p>The engineered bacteria would be encapsulated in polysaccharide materials and freeze dried to be granule powder, we plan to develop our engineered bacteria to health care product in the future( or it may be approved as drugs as it exhibits immune regulation function, the catagory would be determined by authorities with proper analysis).</p>
            <p>The patients can take our product orally under the advise of doctors.</p>

            <H2>Our engineered bacteria could perform two main functions</H2>
            <DocOrderedList items={[
            <p>To alleviate and control the intense local inflammation on liver, which is the main cause of later pathological progression. </p>,
            <p>Balance the intestinal flora and reduce the aberrantly increased density of Enterococcus faecalis in intestines, which is the source pathogen keeps stimulating local inflammation after getting into bloodstream. With these two main functions, our product would be able to alleviate the damage caused by alcohol consumption, and prevent the local liver inflammation from further exacerbation. The doses and usage of product is tangible and predictable, providing doctors with an available and controllable approach to manage and intervene the development of ALD from the early stage. It can also prevent patients who have difficulties quitting alcohol from further inflammation damage. </p>
            ]}></DocOrderedList>
            <p>To sum up, our project provides doctors with an controllable tool to intervene the development of ALD at the early stages, filling up the current absence of early intervention method. It also provides patients with difficulties quitting alcohol a reliable prevention method. </p>

            <H2>Safety concern</H2>
            <p>There are two main concerns:</p>
            <p>Enterococcus faecalis is a kind of important probiotic in normal condition, but would specifically become harmful when exposed persistently in alcohol environment, thus the dose for intake needs to be carefully managed to avoid the undesired damage to the intestinal flora.</p>
            <p>We have performed function test of bacteriocins.  Mathematic models are also established to predict the possible toxicity of our system. According to the results, the germicidal efficiency of our product is mild and can be considered safe, though systematic safety trials should be hold to further determine the non-toxic therapeutic window.</p>
            <p>The environmental safety:</p>
            <p>The leakage of engineered bacteria into environment may cause pollution, especially water pollution. To avoid the leakage of living engineered bacteria, we applied a temperature-sensitive safety system in the engineered bacteria. Once leaving human body, the temperature drops and the suicide-switch would be turn on, thus the engineered bacteria will initiate suicide program to guarantee no engineered organism would survive in outside environment.</p>
        </div>
    </>)
}