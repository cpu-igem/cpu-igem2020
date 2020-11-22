import React from 'react';

import H2 from './comps/TRH2';
import { assets } from '../../assets-path.json';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Link } from './comps/Link';
import { DocOrderedList, DocUnorderedList } from './comps/DocList';
// import './css/Description.scss';

const de = assets.pages.Results;


export const body = {
   hasInfobar: true,
   hasRating: true,
   translatable: true,

   title: '',
   hasAside: true,
   content: (
      <>
         <div>
            <h1>Demonstrate</h1>


            <H2>Antibacterial effect</H2>
            <h3>Successful expression and secretion of the bacteriocins</h3>
            <p>Studies have proved that plwα, plwβ and Hiracin JM79 have certain antibacterial activity against <em>E. faecalis</em>.[1,2] We fused the three bacteriocins to achieve a better antibacterial effect.The flag tag was fused to the C-terminus of plw α-plw β-Hiracin JM79 to determine its extracellular expression by ELISA. As shown in the <strong>Figure 1</strong>, there was a significant difference between the positive experimental group induced by IPTG and the negative one without induction, indicating that plw α-plw β-Hiracin JM79 was successfully expressed and secreted into the extracellular environment after 17h or 24h incubation. In our project, secreting the fusion protein of bacteriocin is the first step to ensure that our system will be able to function. We will carry out experiments to verify the antibacterial ability of the fusion protein in the future.</p>
            <p><ImageWithShadow width="40%" noShadow src={de.Figure1$png} caption="Figure1. Comparison of Corrected A450 of Sample Groups.（fusion protein）" /></p>
            <p> In addition, the characterization experiment of the bacteriocin Hiracin JM79, as shown in the <strong>Figure 2</strong>, suggested that Hiracin JM79 was successfully expressed and secreted into the extracellular environment as well. </p>
            <p><ImageWithShadow width="40%" noShadow src={de.Figure2$png} caption="Figure 2. Comparison of Corrected A450 of Sample Groups.（Hiracin JM79）" /></p>
            <h3>Functional verification of antibacterial effect</h3>
            <p>As shown in <strong>Figure 3</strong>, the quantity of <em>Enterococcus faecalis</em> in the JM79 group induced for 5h was significantly lower than that of the negative control group, which proved that our system could successfully secrete the bacteriocin and achieve the bactericidal effect on <em>Enterococcus faecalis</em>.</p>
            <p><ImageWithShadow width="40%" noShadow src={de.Figure3$png} caption="Figure 3. bactericidal curves" /></p>
            <p>Studies have proved that plwα, plwβ and Hiracin JM79 have certain antibacterial activity against E. faecalis.[1,2] We fused the three bacteriocins to achieve a better antibacterial effect. In the future, we will conduct experiments to further verify the bactericidal efficacy of fusion bacteriocins.</p>
            <H2>Anti-inflammatory</H2>
            <h3>Successful expression and secretion of IL-22</h3>
            <p>We induced the expression of interleukin-22 in a bacterial expression system using IPTG. Compared with the negative control group (without IPTG), the positive group had significantly higher expression of IL-22（<strong>Figure 4</strong>）. In addition, the expression of IL-22 was dependent on the concentration of IPTG, that is, the engineered bacteria will produce more IL-22 if the concentration of IPTG is increased during induction. According to our results, the two concentrations of IPTG used in the experiments caused the engineered bacteria to produce significantly different concentrations of IL-22.(<strong>Figure 5</strong>)</p>
            <p><ImageWithShadow width="40%" noShadow src={de.Figure4$png} caption="Figure 4. Comparison of absorbance among experimental groups" /></p>
            <p><ImageWithShadow width="40%" noShadow src={de.Figure5$png} caption="The effect of IPTG concentration on the production of IL-22" /></p>
            <p>Importantly, the sample we used for detection of the target protein with ELISA was the supernatant of the engineered host, which was obtained by centrifuging.  Since IL-22 were detected in the supernatant and the bacteria were not treated with wall-breaking reagents, it indicated that the secretory peptide YebF could carry IL-22 out of <em>E. coli</em>.</p>
            <h3>Functional verification of anti-inflammatory effect</h3>
            <p>THP-1 cell is a kind of monocyte which can be induced into M1 macrophage by PMA. M1 macrophage would be activated and express cytokine TNF-α under LPS stimulation, while IL-22 is able to reverse this process and reduce the expression of TNF-α，thus achieve ani-inflammation effect.
We examined the TNF-α reducing efficacy of IL-22 standard samples and the culture supernatant of our engineered bacteria which contains secreted IL-22 protein for a concentration about 5ng/ml (analyzed by ELISA test) . According to the data obtained, both IL-22 standard samples and IL-22 secreted by our engineered bacteria significantly inhibited the production of TNF-α of M1 Macrophage. Statistical significance is observed between negative control group and both experimental groups(<strong>Figure 6</strong>).</p>
            <p><ImageWithShadow width="40%" noShadow src={de.Figure6$png} caption="Figure 6. Comparison of the levels of TNF-α produced by different groups." /></p>
            <p><ImageWithShadow width="40%" noShadow src={de.Figure7$png} caption='Figure 7. When the amount of LPS increased, the corresponding TNF-α expression also increased significantly' /></p>


            <div className='doc-refer'>
               <div className='text'>Reference</div>
               <div className='text'>
                  [1]Zhang, G., Brokx, S., &amp; Weiner, J. H. (2006). Extracellular  accumulation of recombinant proteins fused to the carrier protein YebF  in Escherichia coli. <em>Nature biotechnology</em>, <em>24</em>(1), 100–104.https://doi.org/10.1038/nbt1174<br />
            [2]Sánchez, J., Diep, D. B., Herranz, C., Nes, I. F., Cintas, L. M., &amp;  Hernández, P. E. (2007). Amino acid and nucleotide sequence, adjacent  genes, and heterologous expression of hiracin JM79, a sec-dependent  bacteriocin produced by Enterococcus hirae DCH5, isolated from Mallard  ducks (Anas platyrhynchos). <em>FEMS microbiology letters</em>, <em>270</em>(2), 227–236. https://doi.org/10.1111/j.1574-6968.2007.00673.x

               </div>
            </div>


         </div>
      </>
   )
};
