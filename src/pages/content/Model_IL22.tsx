import React from 'react';

import H2 from './comps/TRH2';
import { assets } from '../../assets-path.json';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Link } from './comps/Link';
import { DocOrderedList, DocUnorderedList } from './comps/DocList';
// import './css/Description.scss';

const IL = assets.pages.Model.IL22;

export const body = {
    hasInfobar: true,
    hasRating: true,
    translatable: true,

    title: '',
    hasAside: true,
    content: (
        <>
            <div>
                <h1>IL-22 Expression Model</h1>
                <H2>Ⅰ. Abstract</H2>
                <p>		We established a system dynamic model, covering proteins’ translation and transcription procedures, to simulate the secretion of IL-22 by alcohol-activated engineered bacteria, further simulate the IL-22 concentration change in blood when engineered bacteria presence in intestine, so as to make up for the insufficiency of <em>in vivo</em> experiment, simulate the secretion ability of IL-22 under different colonization situation, verify the correctness of the experimental design from the perspective of protein secretion pathway.</p>
                <p>		Documented studies have suggested that IL-22, one kind of hepatoprotective cytokine, may have therapeutic potential to treat severe forms of ALD<sup>[1],[2]</sup> ,  meanwhile, researches towards IL-22&#39;s therapeutic potential has been operating for long. Some of the mechanism of IL-22 treating has been revealed, and confirmed by experiments<sup>[3]</sup>.More, though IL-6 has been noticed to have the hepatoprotective effect on alcoholic liver injury, and in vivo experiment confirms the effectiveness of it to treat ameliorates fatty liver, it is still limited by many potential side effects, while IL-10 has effects on hematopoietic lineage. As the in vivo experiment on mice reveals, IL-22 can significantly reduce the level of plasma ALT, AST, and GGT, which confirms its high-efficiency of hepatoprotective<sup>[4]</sup>.</p>
                <p>		Considering these, we introduced IL-22 into our E.coli Nissle 1917 as another means to combat ALD in experimental design. </p>
                <p>		However, unlike simulation of intestinal absorption of small molecule drugs, simulation upon intestinal absorption of proteins secreted by engineered strains haven&#39;t been widely studied. Here, following wet lab experimental design, we present an ordinary differential equations model to simulate the secretion of IL-22 of engineered strain E.coli Nissle 1917. </p>
                <p>		We used Simbiology as platform to simulate the expression of IL-22.</p>
                <p><ImageWithShadow noShadow src={IL.figure1$png} caption='Figure.1: The IL-22 Expression Model' /></p>
                <H2>Ⅱ. Model Preparation</H2>
                <h3>Michaelis-Menten Equation: </h3>
                <p>		For the description of Michaelis-Menten equation, please see <strong>[qrorum sensing]</strong> part.</p>
                <p>		In IL-22 expression model, Michaelis-Menten equation is used in most of the enzymatic reaction, including proteins&#39; transcription. For the transcription procedure, taking stronger starting efficiency of T7 promoter compared to PalcA promoter in to consideration, different <strong>K<sub>m</sub>s</strong> have been applied to represent the differences between transcription rate since multiple promoters was used, leading to different transcription rate.</p>
                <H2>Ⅲ. Model Establishment</H2>
                <p><ImageWithShadow noShadow src={IL.result4$jpg} caption='Figure.2: Diagram without asRNA' /></p>
                <H2>Ⅳ. Equations</H2>
                <p><ImageWithShadow noShadow src={IL.table1$png} caption='Table.1 Equation used in this model' /></p>
                <H2>Ⅴ. Parameters</H2>
                <p><ImageWithShadow noShadow src={IL.table2$png} caption='Table.2 Parameter used in this model' /></p>
                <H2>Ⅵ. Result</H2>
                <h3>Result of IL-22 Secretion:</h3>
                <p>		We comprehensively consider the construction of the plasmid of the amplification system, there are three factors in total that determine the expression of IL-22.</p>

                <DocOrderedList items={[
                    <p>The increase of the alcohol concentration in the intestine will make the ethanol promoter more efficient, which would make the engineered bacteria express a larger amount of IL-22. </p>,
                    <p>RBS can determine the expression of T7 RNAP, which would affect the expression of IL-22, it can be modified to increase the concentration of T7 RNAP if necessary.</p>,
                    <p>Antisense RNA (asRNA) can bind to mRNA and inhibit translation, leading to decreasing the expression amount of IL-22.</p>,
                ]}>
                    <p>		We assume that the secretion of engineered bacteria can meet the minimum concentration required in blood, and then calculate the colonization situation that the engineered bacteria need to achieve. If the colonization concentration of engineered bacteria is too high, it means that the secretion of IL-22 will be insufficient, further considering abandoning RBS and antisense RNA. If the engineered bacteria will die due to overexpression of exogenous DNA without using RBS and asRNA, it proves that RBS and asRNA need to be considered, and the expression of IL-22 should be controlled within an appropriate range.</p>
                    <p>		We constructed a system with asRNA (low IL-22 expression system) and a system without asRNA (high IL-22 expression system). The system construction diagrams are as follows.</p>

                </DocOrderedList>
                <p><ImageWithShadow noShadow src={IL.result4$jpg} caption='Figure.2: Diagram without asRNA' /></p>
                <p><ImageWithShadow noShadow src={IL.result1$jpg} caption='Figure.3: Diagram with asRNA' /></p>
                <p>		According to the above parameter table, we perform calculations and the results are shown in the figures below.</p>
                <p><ImageWithShadow noShadow src={IL.result2$png} caption='Figure.4: Result with asRNA' /></p>
                <p><ImageWithShadow noShadow src={IL.result3$png} caption='Figure.5: Result without asRNA' /></p>
                <p>		According to calculation, the population of engineered bacteria in the whole intestine is <strong>1.37×10<sup>7</sup></strong> (about <strong>0.45%</strong> of the population of bacteria in the whole intestine).</p>
                <p>		This result shows that with an amplified expression system that does not contain asRNA, the concentration of IL-22 and the population of engineered bacteria in the intestine can also achieve therapeutic effects. Therefore, the asRNA part can be removed.</p>

                <div className='doc-refer'>
                    <div className='text'>Reference</div>
                    <div className='text'>
                        [1]Xu, M., Chang, B., Mathews, S., &amp; Gao, B. (2014). New drug targets for alcoholic liver disease. Hepatology international, 8 Suppl 2(Suppl 2), 475–480. https://doi.org/10.1007/s12072-014-9516-x<br />
		                                                [2]Xing, W. W., Zou, M. J., Liu, S., Xu, T., Wang, J. X., &amp; Xu, D. G. (2011). Interleukin-22 protects against acute alcohol-induced hepatotoxicity in mice. Bioscience, biotechnology, and biochemistry, 75(7), 1290–1294. https://doi.org/10.1271/bbb.110061<br />
                                                        [3].Gao, B., &amp; Shah, V. H. (2015). Combination therapy: New hope for alcoholic hepatitis?. Clinics and research in hepatology and gastroenterology, 39 Suppl 1(Suppl 1), S7–S11. <br />
                                                        [4].Gao, B. (2012). Hepatoprotective and anti‐inflammatory cytokines in alcoholic liver disease. Journal of gastroenterology and hepatology, 27, 89-93.<br />
                                                        [5].Na, D., Yoo, S. M., Chung, H., Park, H., Park, J. H., &amp; Lee, S. Y. (2013). Metabolic engineering of Escherichia coli using synthetic small regulatory RNAs. Nat Biotechnol, 31(2), 170-174. doi:10.1038/nbt.2461<br />
                                                        [6].Keane, J., Gershon, S., &amp; Wise, R. (2001). TUBERCULOSIS ASSOCIATED WITH IMFLIXIMAB, A TUMOR NECROSIS FACTOR ALPHA-NEUTRALIZING AGENT. Infectious Diseases In Clinical Practice, 10(9), 498. doi: 10.1097/00019048-200112000-00012<br />
                    </div>
                </div>
            </div>
        </>
    )
};
