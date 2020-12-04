import React from 'react';

import H2 from './comps/TRH2';
import { assets } from '../../assets-path.json';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Link } from './comps/Link';
// import { DocOrderedList, DocUnorderedList } from './comps/DocList';
// import './css/Description.scss';

const ip = assets.pages.Parts.Basic;
const com = assets.pages.Parts.Composite;

export const body = {
   hasInfobar: true,
   hasRating: true,
   translatable: true,

   title: 'Composite Part',
   hasAside: true,
   content: (
      <>
         <div>
            <h1>Composite Parts</h1>
            <H2>YebF-Hiracin JM79-flag</H2>
            {/* <h3>Part:BBa_K3661005</h3> */}
            <h3><Link href='http://parts.igem.org/wiki/index.php?title=Part:BBa_K3661005'>Part:BBa_K3661005</Link></h3>
            <p>This composite part is composed of secretion peptide YebF, bacteriocin Hiracin JM79 and fusion tag FLAG. Peptide YebF is added to achieve the secretion of bacteriocin Hiracin JM79 into intestinal environment or culture supernatant. YebF secretion system is widely used in <em>E. coli</em>. [1] Hiracin JM79 has been tested and reported to have activity against <em>enterococcus faecalis</em>.[2] A major advantage of the Hiracin JM79 as an antimicrobial agent is its specificity compared to many traditional antibiotics.</p>
            <h4><span>Usage</span></h4>
            <p>In 2020 CPU_CHINA project, YebF, Hiracin JM79 and FLAG were co-expressed to form the fused protein, the attachment of YebF peptide make it possible for JM79 to be secreted out of the chasis and achieve certain concentration in intestinal environment, thus be able to kill Entrococcus faecalis properly. By reducing the quantity of E.faecalis, the balance of intestinal flora can be restored thus alleviate the inflammation induced by <em>enterococcus faecalis</em>.</p>
            <h4><span>Biology</span></h4>
            <p>YebF secretion system is widely used in <em>escherichia coli</em>. Bacteriocins linked to the carboxyl end of YebF are efficiently secreted. Hiracin JM79 (HirJM79), a Sec-dependent bacteriocin produced by <em>Enterococcus hirae DCH5</em>, was proved to have activity against <em>enterococcus faecalis</em> with certain specificity.</p>
            <h4><span>Characterization</span></h4>
            <p>We constructed a secretory expression vector for YebF-Hiracin JM79-flag, using escherichia coli as chasis. YebF-Hiracin JM79-flag was detected using an ELISA kit.</p>

            <p><ImageWithShadow noShadow width="65%"  src={ip.fig1$png} caption='Figure.1: Standard curve of flag protein'/></p>


            <p><strong>Figure 2. Result of activity assay using human flag ELISA kit.</strong></p>
            <p>CFUs were inoculated to LB medium followed by overnight incubation at 37℃. After induction of IPTG, the culture was incubated at 16℃ for 17h. Cells and medium were collected and ready for assay.</p>
            <p><ImageWithShadow noShadow src={ip.fig2$png} caption="Figure2. Result of activity assay using human flag ELISA kit." /></p>

            <p><ImageWithShadow noShadow width="55%" src={ip.fig3$png} caption="Figure3.Comparison of Corrected A450 of Sample Groups." /></p>
            <p><strong>Figure 3. Comparison of Corrected A450 of Sample Groups.</strong></p>
            <p>It showed that the Hiracin JM79 expression of the positive group induced by IPTG was significantly higher than that of the uninduced negative group. The sample group was significantly different compared to the negative control group. *P &lt; 0.05, ** P &lt; 0.01, *** P &lt; 0.001, and ****P &lt; 0.0001 by t test.</p>
            <p>JM79 was added from 5.5h. The group that added JM79 showed decreased growth relative to the negative control (added the supernatant of uninduced <em>E. coli</em> ).</p>
            <p>We tested the antibacterial effect of hiracin JM79. As shown in Figure 4, the quantity of Enterococcus faecalis in the experimental group induced by 5h was significantly lower than that of the negative control group, which proved that our system can successfully secrete The bacteriocin also achieves the bactericidal effect on Enterococcus faecalis.</p>
            <p><ImageWithShadow noShadow width="50%" src={ip.fig4$png} caption="Figure4.The killing assay of E.faecalis by JM79." /></p>



            <H2>YebF-IL22</H2>
            {/* <h3>Part:BBa_K3661007</h3> */}
            <h3><Link href='http://parts.igem.org/wiki/index.php?title=Part:BBa_K3661002'>Part:BBa_K3661002</Link></h3>
            <p>In 2020, YebF can carry IL-22 to secrete from bacterial, which can inhibit the damage caused by inflammation and promote the repairation and regeneration of liver cells in alcohol-induced hepatitis, this effect is important in the treatment of ALD disease.</p>
            <p>This composite part is composed of the secretion part of YebF and the part of anti-inflammatory factor IL-22. The IL-22 is a natural immunosuppressive protein. We add a secretion tag to increase the extracellular concentration. YebF secretion system is widely used in <em>E. coli</em>. IL-22 can be secreted from our engineered bacteria through this system efficiently. IL-22 is a member of a group of the IL-10 family, a class of potent mediators of cellular inflammatory responses. IL-22 is produced by activated DC and T cells. IL-22 and IL-10 receptor chains play a role in cellular targeting and signal transduction. It can initiate and regulate innate immune responses against bacterial pathogens especially in epithelial cells such as respiratory and gut epithelial cells.</p>
            <h4><span>Usage</span></h4>

            <p><ImageWithShadow noShadow width="65%" src={com.Fig1$Design$png} caption='Figure 1. Diagram for human IL-22 expressing and secreting in pET-28a(+) plasmid.' /></p>
            <p><strong></strong> </p>

            <p>IL-22 is a cytokine that inhibits inflammation.</p>
            <p>The secretory tag YebF increases extracellular concentrations of IL-22.</p>
            <p>T7 promoter, the gene downstream of this promoter will be transcribed when there is T7 RNA polymerase. RBS, ribosome biding site. Terminator blocks gene sequence reads.</p>

            <p><ImageWithShadow noShadow width="65%" src={com.Fig2$plasmid$png} caption='Figure 2. Full sequence mapping of pET-28a(+) plasmid.' /></p>
            <p>The plasmid carries the kanamycin resistance gene.</p>

            <h4><span>Biology</span></h4>
            <p>YebF proteins are widely found in Enterobacteriaceae bacteria, and are soluble endogenous short peptides that can be secreted into the extracellular medium. When other proteins are fused to the YebF sequence, YebF can help secrete these proteins out of the <em>E. coli</em> membrane.[1]</p>
            <p>IL-22 is a member of the IL-10 family and is primarily a cytokine secreted by Th22 cells [2].</p>
            <p>IL-22 reduces inflammation through the JAK-STAT pathway as well as the NF-κB pathway to inhibit TNF-α production, reducing hepatocyte apoptosis and protecting hepatocytes [3].</p>

            <h4><span>Characterization</span></h4>
            <p>We constructed a secretory expression vector for IL-22, using <em>E. coli</em> as chasis. IL-22 was detected using an ELISA kit.</p>
            <p><ImageWithShadow noShadow width="20%" src={ip.figure1$png} caption="Fig1. Experiment result" /></p>
            <p><strong>Figure 1. Result of activity assay using human IL-22 ELISA kit.</strong> </p>
            <p>(A1/B1) are blank-corrected wells. Wells (A2/B2), (A3/B3), (A4/B4), (A5/B5), (A6/B6), (A7/B7), (A8/B8) are standard human IL-22 protein sample with concentration at 2000pg/ml, 1000pg/ml, 500pg/ml, 250pg/ml, 150pg/ml, 62.5pg/ml and 0pg/ml respectively. Wells C1-C3 are duplicate wells for protein sample 1 while C4-C6 are duplicate wells for protein sample 2. C7-C8 are negative control wells. Protein sample 1 was induced by adding 1M IPTG, and protein sample 2 was induced by adding 0.5M. No induction agent was added to the negative control group.</p>
            <p><ImageWithShadow width="65%" noShadow src={ip.figure2$png} caption="Fig2. IL-22 standard curve" /></p>
            <p><strong>Figure 2. Standard curve of human IL-22.</strong></p>
            <p><ImageWithShadow noShadow src={ip.Table1$png} caption="Table 1" /></p>
            <p><ImageWithShadow noShadow src={ip.Table2$png} caption="Table 2" /></p>
            <p><strong>Table 1&amp;2. Result of activity assay using human IL-22 ELISA kit.</strong> </p>

            <p>The protein expression of protein sample 1 is approximately 5.43ng/ml, while sample 2 is approximately 3.094ng/ml.</p>
            <p><ImageWithShadow noShadow width="50%"  src={ip.figure3$png} caption="Figure 3.Comparison of Corrected A450 of Sample Groups." /></p>
            <p>Both sample groups were significantly different compared to the negative control group.*P &lt; 0.05, **P &lt; 0.01, ***P &lt; 0.001, and ****P &lt; 0.0001 by t test.</p>
            <p><ImageWithShadow noShadow width="45%" src={ip.figure4$png} caption="Figure 4.Comparison of the levels of TNF-α produced by different groups." /></p>

            <p>We examined the TNF-α reducing efficacy of IL-22 standard samples and the culture supernatant of our engineered bacteria which contains secreted IL-22 protein for a concentration about 5ng/ml (analyzed by ELISA test). As can be seen, both groups of IL-22 significantly inhibited the production of TNF-α and were significantly different from the negative control group (without IL-22). *P &lt; 0.05, **P &lt; 0.01, ***P &lt; 0.001, and ****P &lt; 0.0001 by t test.</p>
            <div className='doc-refer'>
               <div className='text'>Reference</div>
               <div className='text'>
                  [1] ZHANG G, BROKX S, WEINER J H. Extracellular accumulation of recombinant proteins fused to the carrier protein YebF in <em>Escherichia coli</em> [J]. Nature Biotechnology.2006.24(1)：100-104.<br />
                  [2] Shabgah A G , Navashenaq J G , Shabgah G , et al. Interleukin-22 in human inflammatory diseases and viral infections.[J]. Autoimmunity Reviews, 2017: S1568997217302549.<br />
                  [3] Radaeva S, Sun R, Pan HN, Hong F, Gao B. Interleukin 22 (IL-22) plays a protective role in T cell-mediated murine hepatitis: IL-22 is a survival factor for hepatocytes via STAT3 activation [J]. Hepatology, 2004; 39: 1332-1342.
                </div>
            </div>
         </div>
      </>)
};
