import React from 'react';

import H2 from './comps/TRH2';
import { assets } from '../../assets-path.json';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Link } from './comps/Link';
import { DocOrderedList, DocUnorderedList } from './comps/DocList';
// import './css/Description.scss';

const ip = assets.pages.Parts.Basic;

export const body = {
    hasInfobar: true,
    hasRating: true,
    translatable: true,

    title: '',
    hasAside: true,
    content: (
        <>
            <div>
                <h1>Basic Parts</h1>
                <H2>Hiracin JM79</H2>
                {/* <h3>Part:BBa_K3661007</h3> */}
                <h3><Link href='http://parts.igem.org/wiki/index.php?title=Part:BBa_K3661007'>Part:BBa_K3661007</Link></h3>

                <p>In 2020, Hiracin JM79 were used to kill <em>Enterococcus faecalis</em>.  JM79 have been tested and reported to have activity against <em>Enterococcus faecalis</em>.[1] A major benefit of the Hiracin JM79 as an antimicrobial agent is their specificity compared to many traditional antibiotics.</p>
                <h4><span>Usage</span></h4>

                <p> Hiracin JM79 can be secreted from engineered bacteria to increase the extracellular concentration. Bacteriocins thus improve ALD in patients by killing <em>Enterococcus faecalis</em> in the cellular environment.</p>
                <h4><span>Biology</span></h4>
                <p>Bacteriocins are proteinaceous or peptidic toxins produced by bacteria to inhibit the growth of similar or closely related bacterial strain(s).  Hiracin JM79 (HirJM79), a Sec-dependent bacteriocin produced by <em>Enterococcus hirae DCH5</em>, was proved to have activity against <em>Enterococcus faecalis</em>. The bacteriocin Hiracin JM79 is a useful means to kill <em>Enterococcus faecalis</em></p>


                <h4><span>Characterization</span></h4>
                <p>Plasmid (YebF-Hiracin JM79-flag) was transfected into <em>E</em>. <em>coli BL21(DE3</em>). Hiracin JM79 was secreted from the engineered bacteria through YebF secretion system. In order to determine whether Hiracin JM79 was successfully expressed in the cellular environment , we performed Elisa of flag protein. Then we calculated the amount of Hiracin JM79 based on the expression of flag protein.</p>
                <p><ImageWithShadow noShadow width="60%" src={ip.fig1$png} caption='Figure.1: Standard curve of flag protein' /></p>
                <p><ImageWithShadow noShadow src={ip.fig2$png} caption="Figure2. Result of activity assay using human flag ELISA kit." /></p>
                <p>CFUs were inoculated to LB medium followed by overnight incubation at 37℃. After induction of IPTG, the culture was incubated at 16℃ for 17h. Cells and medium were collected and ready for assay.</p>
                <p><ImageWithShadow noShadow width="50%" src={ip.fig3$png} caption="Figure3.Comparison of Corrected A450 of Sample Groups." /></p>

                <p>It showed that the Hiracin JM79 expression of the positive group induced by IPTG was significantly higher than that of the uninduced negative group. The sample group was significantly different compared to the negative control group.*P &lt; 0.05, ** P &lt; 0.01, *** P &lt; 0.001, and ****P &lt; 0.0001 by t test.</p>
                <p><ImageWithShadow noShadow width="50%" src={ip.fig4$png} caption="Figure4.The killing assay of E.faecalis by JM79." /></p>
                <p>JM79 was added from 5.5h. The group that added JM79 showed decreased growth relative to the negative control (added the supernatant of uninduced <em>E. coli</em> ).</p>
                <p>We tested the antibacterial effect of hiracin JM79. As shown in Figure 4, the quantity of <em>Enterococcus faecalis</em> in the experimental group induced by 5h was significantly lower than that of the negative control group, which proved that our system can successfully secrete The bacteriocin also achieves the bactericidal effect on <em>Enterococcus faecalis</em>.</p>

                <div className='doc-refer'>
                    <div className='text'>Reference</div>
                    <div className='text'>
                        [1]Sánchez, J., Diep, D. B., Herranz, C., Nes, I. F., Cintas, L. M., &amp;  Hernández, P. E. (2007). Amino acid and nucleotide sequence, adjacent  genes, and heterologous expression of hiracin JM79, a sec-dependent  bacteriocin produced by Enterococcus hirae DCH5, isolated from Mallard  ducks (Anas platyrhynchos). <em>FEMS microbiology letters</em>, <em>270</em>(2), 227–236. https://doi.org/10.1111/j.1574-6968.2007.00673.x
                    </div>
                </div>




                <H2>Interleukin-22(IL-22)</H2>
                {/* <h3>Part:BBa_K3661001</h3> */}
                <h3><Link href='http://parts.igem.org/wiki/index.php?title=Part:BBa_K3661001'>Part:BBa_K3661001</Link></h3>
                <p>In 2020, this part is used to produce IL-22, which can inhibit the damage caused by inflammation and promote the repairation and regeneration of liver cells in alcohol-induced hepatitis, whose effect is important in the treatment of ALD disease.</p>
                <p>Interleukin-22 (IL-22) is a member of a group of the IL-10 family, a class of potent mediators of cellular inflammatory-responses. IL-22 is produced by activated DC and T cells. IL-22 and IL-10 receptor chains play a role in cellular targeting and signal transduction. It can initiate and regulate innate immune responses against bacterial pathogens especially in epithelial cells such as respiratory and gut epithelial cells. IL-22 along with IL-17 likely plays a role in the coordinated response of both adaptive and innate immune systems. IL-22 also promotes hepatocyte survival in the liver and epithelial cells in the lung and gut similar to IL-10. Biological activity of IL-22 is initiated by binding to a cell-surface complex consisting of IL-22 R1 and IL-10 R2 receptor chains. IL-22 biological activity is further regulated by interactions with a soluble binding protein, IL-22 BP. IL-22 BP and an extracellular region of IL-22 R1 share sequence similarity. In some cases, the pro-inflammatory versus tissue-protective functions of IL-22 are regulated by cytokine IL-17A.</p>

                <h4><span>Usage</span></h4>
                <p>IL-22 can exhibit anti-inflammation effects at the inflammed site, thus protect which from further inflammatory damage.
In our project, IL-22 is expected to inhibit the local inflammation on liver that is induced by the excessive intake of alcohol, and perform protective effect on liver [1]. At the same time, IL-22 can promote regeneration of damaged liver thus restore liver function to certain degree [2].</p>
                <h4><span>Biology</span></h4>
                <p>IL-22 is a member of the IL-10 family and is primarily a cytokine secreted by TH22 cells [3].
                The production of TNF-α by macrophages is significantly increased in patients with alcoholic hepatitis, and this is further exacerbated by exogenous LPS, resulting in significant inflammation of the liver. In addition, LPS decreased the level of IL-22 production by macrophages through the JNK signaling pathway [4]. Taken together, this leads to apoptosis of hepatocytes.
IL-22 reduces inflammation through the JAK-STAT pathway as well as the NF-κB pathway to inhibit TNF-α production, reducing hepatocyte apoptosis and protecting hepatocytes [5].</p>
                <h4><span>Characterization</span></h4>
                <p>We constructed a secretory expression vector for IL-22, using <em>E. coli</em> as chasis. IL-22 was detected using an ELISA kit.</p>
                <p><ImageWithShadow noShadow width="25%" src={ip.figure1$png} caption="Fig1. Experiment result" /></p>
                <p><strong>Figure 1. Result of activity assay using human IL-22 ELISA kit.</strong> </p>
                <p>(A1/B1) are blank-corrected wells. Wells (A2/B2), (A3/B3), (A4/B4), (A5/B5), (A6/B6), (A7/B7), (A8/B8) are standard human IL-22 protein sample with concentration at 2000pg/ml, 1000pg/ml, 500pg/ml, 250pg/ml, 150pg/ml, 62.5pg/ml and 0pg/ml respectively. Wells C1-C3 are duplicate wells for protein sample 1 while C4-C6 are duplicate wells for protein sample 2. C7-C8 are negative control wells. Protein sample 1 was induced by adding 1M IPTG, and protein sample 2 was induced by adding 0.5M. No induction agent was added to the negative control group.</p>
                <p><ImageWithShadow noShadow width="55%" src={ip.figure2$png} caption="Fig2. IL-22 standard curve" /></p>
                <p><strong>Figure 2. Standard curve of human IL-22.</strong></p>
                <p><ImageWithShadow noShadow src={ip.Table1$png} caption="Table 1" /></p>
                <p><ImageWithShadow noShadow src={ip.Table2$png} caption="Table 2" /></p>
                <p><strong>Table 1&amp;2. Result of activity assay using human IL-22 ELISA kit.</strong> </p>

                <p>The protein expression of protein sample 1 is approximately 5.43ng/ml, while sample 2 is approximately 3.094ng/ml.</p>
                <p><ImageWithShadow noShadow width="55%" src={ip.figure3$png} caption="Figure 3.Comparison of Corrected A450 of Sample Groups." /></p>
                <p>Both sample groups were significantly different compared to the negative control group.*P &lt; 0.05, **P &lt; 0.01, ***P &lt; 0.001, and ****P &lt; 0.0001 by t test.</p>
                <p><ImageWithShadow noShadow width="40%" src={ip.figure4$png} caption="Figure 4.Comparison of the levels of TNF-α produced by different groups." /></p>

                <p>We examined the TNF-α reducing efficacy of IL-22 standard samples and the culture supernatant of our engineered bacteria which contains secreted IL-22 protein for a concentration about 5ng/ml (analyzed by ELISA test). As can be seen, both groups of IL-22 significantly inhibited the production of TNF-α and were significantly different from the negative control group (without IL-22). *P &lt; 0.05, **P &lt; 0.01, ***P &lt; 0.001, and ****P &lt; 0.0001 by t test.</p>

                <div className='doc-refer'>
                    <div className='text'>Reference</div>
                    <div className='text'>
                        [1] Kong, X., Feng, D., Mathews, S. &amp; Gao, B. Hepatoprotective and anti-fibrotic functions of interleukin-22: therapeutic potential for the treatment of alcoholic liver disease [J]. Gastroenterol. Hepatol. 28,56–60(2013).<br />
                [2] Park O, Wang H, Weng H, et al. In vivo consequences of liver specific interleukin-22 expression in mice: Implications for human liver disease progression [J]. Hepatology, 2011 54(1): 252-261.<br />
                [3] Shabgah A G , Navashenaq J G , Shabgah G , et al. Interleukin-22 in human inflammatory diseases and viral infections.[J]. Autoimmunity Reviews, 2017:S1568997217302549.<br />
                [4] Liu Y, Verma VK, Maihi H, et al. Lipopolysaccharide downregulates macrophage-derived IL-22 to modulate alcohol-induced hepatocyte cell death [J]. Am J Physiol Cell Physiol，2017,313(3): C305-C313.<br />
                [5] Radaeva S, Sun R, Pan HN, Hong F, Gao B. Interleukin 22 (IL-22) plays a protective role in T cell-mediated murine hepatitis: IL-22 is a survival factor for hepatocytes via STAT3 activation [J]. Hepatology, 2004; 39: 1332-1342.<br />
                    </div>
                </div>
            </div>
        </>
    )
};
