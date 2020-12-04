import React from 'react';

import H2 from './comps/TRH2';
import { assets } from '../../assets-path.json';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Link } from './comps/Link';
import { DocOrderedList, DocUnorderedList } from './comps/DocList';

const sign = assets.pages.Design;

export const body = {
   title: 'Design',
   hasAside: true,
   hasInfobar: true,
   hasRating: true,
   translatable: true,

   content: (
      <>
         <div>
            <H2>Overview</H2>
            <h3>Input </h3>
            <h4><span>PalcA</span></h4>
            <p>The <em>alc</em> expression system is a strong inducible gene expression system derived from filamentous fungus <em>Aspergillus nidulans</em> (<em>A. nidulans</em>). The <em>alc</em> regulon originally encodes for the ethanol utilization pathway in <em>A. nidulans</em> , in which the specific activator AlcR (encoded by <em>alcR</em> gene) responds to the inducer molecule (ethanol, etc.) and binds to specific regions within the <em>alcA</em> promoter (PalcA) to drive downstream gene expression. Recent research pointed out that when transported into <em>E. coli</em> strains, <em>alcA</em> promoter with or without <em>alcR</em> can both respond to ethanol signal and drive the downstream gene expression. Notably,  PalcA alone already has a sensitive response to ethanol regulation. Therefore, we selected PalcA as alcohol sensor in our project.<sup>[1]</sup></p>
            
            <h4><span>Quorum Sensing</span></h4>
            <p>Quorum Sensing (QS) is an important bacteria communication system that is used to sense and regulate intraspecific density. In the QS system of <em>E. faecalis</em>, the quorum signalling molecule is small lactone gelatinase biosynthesis-activating pheromone (GBAP). The detection system of  <em>E. faecalis</em> consists of two component, FsrA and FsrC proteins. FsrC acts as a specific transmembrane receptor for GBAP and upon ligand binding, the activated receptor causes phosphorylation of FsrA, which then acts as a specific transcription factor to activate the specific promoters (specifically drived by FsrA). <sup>[2]</sup></p>
            <p>We utilized the <em>E. faecalis</em> QS system as we want to be able to sense and regulate the density of <em>E. faecalis</em> in ALD patients&#39; intestines (which usually aberrantly increase due to the high-concentration alcohol environment). This design is expected to guarantee that the downstream protein expression would be activated only when aberrantly high density of <em>E. faecalis</em> is detected.</p>
            
            <h3>Output </h3>
            <h4><span>Interleukin-22 (IL-22)</span></h4>
            <p>Interleukin-22 (IL-22), a member of the IL-10 cytokine family, is mainly secreted by activated Th cells (Th1, Th17, Th22 cells) and innate immune cells (NK cells, ILC cells) and acts on epithelial cells, keratinocytes and hepatocytes <sup>[3]</sup>. Interleukin 22 has hepatoprotective effects, especially in alcoholic hepatitis. The protective effects of IL-22 includes downregulating the expression of inflammatory factors such as TNF-α and inhibiting apoptosis of hepatocyte in certain circumstances.<sup>[4]</sup>. In addition, it has been shown that interleukin 22 also has antibacterial activity and can promote hepatocyte regeneration<sup>[5]</sup> . </p>
            
            <h4><span>Bacteriocin</span></h4>
            <h5>Plantaricin W</h5>  
            <p>Plantaricin W (Plw) is a new two-peptide bacteriocin, from <em>Lactobacillus plantarum</em>, which inhibits a large number of Gram-positive bacteria. The individual peptides had low antimicrobial activity but acted synergistically, and synergism was seen at all mixing ratios tested.<sup>[6]</sup></p>
            <h5>Hiracin JM79</h5>
            <p>The first orf (hirJM79) of a bacteriocin, produced by <em>Enterococcus hirae DCH5</em>, encodes a 74-amino-acid peptide containing an N-terminal signal peptide of 30 amino acids, followed by the mature bacteriocin, hiracin JM79 (HirJM79) of 44 amino acids. It has been tested and reported to have activity against <em>Enterococcus faecalis</em>. A major benefit of the Hiracin JM79 as an antimicrobial agent is its specificity compared to many traditional antibiotics.<sup>[7]</sup></p>
           
           
            <H2>Project design</H2>
            <h3>Inhibiting local inflammation in liver:  PalcA and the expression of IL-22</h3>
            <p>To ensure that IL-22 can be released and travel into the bloodstream, the carrier protein YebF  is applied to carry the fusion protein in their active states to enteric cavity <Link href={'/Basic_Part'}>Part:BBa_K3661002</Link><sup>[8]</sup>.TAT is also applied to transport the protein through the intestinal wall partially by endocytosis <sup>[9]</sup></p>
            <p>At the very beginning, we tended to design this part as a constitutive expression system. However, after having thorough discussions upon this issue, we realized that constitutively expression of immunosuppressive cytokines can have a horrible effect on patients&#39; immune system. Thus, PalcA (an ethanol-induced promoter)<sup>[1]</sup><sup>[10]</sup> is selected to be the upstream sensor, which ensures that IL-22 will be released only when alcohol consumption happens.</p>
            <p><ImageWithShadow noShadow width="46%" src={sign.fig1$IL1$png} caption="Figure 1. PalcA and the expression of IL-22" /></p>
            <p>After the characterization of PalcA, we found that PalcA promoter is inefficient <Link href='http://parts.igem.org/wiki/index.php?title=Part:BBa_K2539500'>Part:BBa_K2539500</Link>and  is not able to drive the expression of IL-22 to expected level when acting alone.  </p>
            <p>Hence, a construction for elevating expression efficiency is required and for which purpose the T7 transcription system is applied to amplify the upstream signal of PalcA.<sup>[11]</sup>The expression of T7 RNA polymerase (T7 RNAP) is regulated by PalcA and the expression of IL-22 is regulated by T7 promoter. As T7 polymerase is highly effective, the expression efficiency of IL-22 can be largely amplified.</p>
            <p>However, an article warned us of the possibility that excess T7 RNAP expression can also lead to host toxicity that affects growth rates, and consequently other molecular behaviour. <sup>[12]</sup>To avoid the lethality caused by the powerful transcribing capability of T7 RNAP, RBS modification and antisense RNA are applied to inhibit the expression of T7 RNAP.<sup>[13]</sup>The mathematic modelling results shows that the antisense RNA is actually unnecessary, thus the system got simplified.</p>
            <p><ImageWithShadow noShadow width="60%" src={sign.fig2$png} caption="Figure 2. T7 transcription system is applied to amplify the upstream signal of PalcA" /></p>
            
            <h3>Killing Enterococcus faecalis in the intestine:  quorum sensing and bacteriocin </h3>
            <p><em>Enterococcus faecalis</em> is proved as a pathogenic bacteria to alcoholic liver disease (ALD)<sup>[14]</sup>. In this study, phages are used to kill <em>E. faecalis</em>, but it has narrow scope of application in killing <em>E. faecalis</em> .In order to achieve effective control of the density of <em>Enterococcus faecalis</em> in the intestine, three bacteriocins, hiracin JM79, Plwα and Plwβ, were applied as output of <em>Enterococcus faecalis</em> killing system. The bacteriocins are all effective for killing <em>Enterococcus faecalis</em> acting alone <sup>[15.16.17]</sup>.A secretion label, YebF, was fused to each bacteriocin, so that they can be secreted and exhibit germicidal effect in intestine<sup>[18]</sup>.</p>
            <p>In order to protect other microorganisms in the intestine, we hoped the bacteriocins only be released at the present of <em>E. faecalis</em>. Quorum sensing, a mechanism commonly applied in antibacterial project, can enable the host to execute specified commands under specific circumstances. We then conceived a system where the release of bacteriocins was regulated by quorum sensing system of <em>Enterococcus faecalis</em>, so that these peptides would only be released in the presence of <em>Enterococcus faecalis</em>. </p>
            <p><ImageWithShadow noShadow width="60%" src={sign.fig3$png} caption="Figure 3. quorum sensing and bacteriocin" /></p>
            <p>According to the mechanism of <em>Enterococcus faecalis</em> quorum sensing,  FsrC (a specific transmembrane receptor for GBAP) and FsrA (intracellular response regulator) are known to play a central role in responding to quorum sensing signal molecules and driving the downstream gene expression. Therefore, we designed a circuit with two protein coding sequences (FsrC and FsrA), the downstream promoter (specifically driven by FsrA) and the bacteriocins coding sequence.  When excessive amount of <em>Enterococcus  faecalis</em> produces small lactone gelatinase biosynthesis-activating pheromone  (GBAP), the FsrC receptor on the chassis membrane will be phosphorylated, consuming ATP and phosphorylating FsrA. The phosphorylated FsrA will then activate the promoter then initiate the expression of bacteriocins to  limit the quantity of <em>E. faecalis</em>. </p>
            <p>In this way, once <em>Enterococcus faecalis</em> reaches a certain concentration, our chassis will express these bacteriocins, which is controlled at a proper level.</p>
            <p><ImageWithShadow noShadow width="60%" src={sign.fig4l$png} caption="Figure 4. Enterococcus faecalis quorum sensing" /></p>
            <h4>Reference:</h4>

            <div className='doc-refer'>
               <div className='text'>Reference</div>
               <div className='text'>
                  [1]Hemmati, H., Transcriptional analyses of an ethanol inducible promoter in Escherichia coliand tobacco for production of cellulase and green fluorescent protein. Biotechnology &amp; Biotechnological Equipment&amp; Basu, C. (2015)., 29(6), 1043–1052<br />
                  [2]Ali, L., Goraya, M. U., Arafat, Y., Ajmal, M., Chen, J. L., &amp; Yu, D. (2017). Molecular Mechanism of Quorum-Sensing in Enterococcus faecalis: Its Role in Virulence and Therapeutic Approaches. <em>Int J Mol Sci, 18</em>(5). <br />
                  [3]Gowhari A., Shabgah, Gholizadeh J, et al. Interleukin-22 in human inflammatory diseases and viral infections. [J]. Autoimmunity reviews, 2017.<br />
                  [4]Kong, X., Feng, D., Mathews, S. &amp; Gao, B. Hepatoprotective and anti- fibrotic functions of interleukin-22: therapeutic potential for the treatment of alcoholic liver disease. [J]. Gastroenterol. Hepatol. 28, 56–60 (2013).<br />
                  [5]Park O, Wang H, Weng H, et al. In vivo consequences of liver specific interleukin-22 expression in mice: Implications for human liver disease progression. [J]. Hepatology, 2011 54(1): 252-261.<br />
                  [6] Holo, H., Jeknic, Z., Daeschel, M., Stevanovic, S., &amp; Nes, I. F. (2001). Plantaricin W from Lactobacillus plantarum belongs to a new family of two-peptide lantibiotics. Microbiology (Reading, England), 147(Pt 3), 643–651 https://doi.org/10.1099/00221287-147-3-643<br />
                  [7] Sánchez, J., Diep, D. B., Herranz, C., Nes, I. F., Cintas, L. M., &amp; Hernández, P. E. (2007). Amino acid and nucleotide sequence, adjacent genes, and heterologous expression of hiracin JM79, a sec-dependent bacteriocin produced by Enterococcus hirae DCH5, isolated from Mallard ducks (Anas platyrhynchos). FEMS microbiology letters, 270(2), 227–236. https://doi.org/10.1111/j.1574-6968.2007.00673.x<br/>
                  [8] Zhang, G., Brokx, S., &amp; Weiner, J. H. (2005). <em>Extracellular accumulation of recombinant proteins fused to the carrier protein YebF in Escherichia coli. Nature Biotechnology, 24(1), 100–104.</em> doi:10.1038/nbt1174 <br />
                  [9] Munoz-Morris MA, Heitz F, Divita G, et al. The peptide carrier Pep-1 forms biologically efficient nanoparticle complexes [J]. Biochem Biophys Res Commun, 2007, 355(4)877-882<br />
                  [10]  http://2018.igem.org/Team:TAS_Taipei/Experiments<br />
                  [11] Wang, W., Li, Y., Wang, Y., Shi, C., Li, C., Li, Q., &amp; Linhardt, R. J. (2018). Bacteriophage T7 transcription system: an enabling tool in synthetic biology. Biotechnology Advances. <br />
                  [12] M K, HM S. A portable expression resource for engineering cross-species genetic circuits and pathways. Nature communications. 2015;6:7832.<br />
                  [13] Liang, X., et al. (2018). &quot;Integrating T7 RNA Polymerase and Its Cognate Transcriptional Units for a Host-Independent and Stable Expression System in Single Plasmid.&quot; ACS Synth Biol 7(5): 1424-1435.<br />
                  [14] Ryan KJ, Ray CG, eds. (2004). Sherris Medical Microbiology (4th ed.). McGraw Hill. pp. 294–295. ISBN 0-8385-8529-9.<br/>
                  [15]Sánchez, J., Diep, D. B., Herranz, C., Nes, I. F., Cintas, L. M., &amp; Hernández, P. E. (2007). Amino acid and nucleotide sequence, adjacent genes, and heterologous expression of hiracin JM79, a sec-dependent bacteriocin produced by Enterococcus hirae DCH5, isolated from Mallard ducks (Anas platyrhynchos). FEMS microbiology letters, 270(2), 227–236. https://doi.org/10.1111/j.1574-6968.2007.00673.x<br />
                  [16]Holo, H., Jeknic, Z., Daeschel, M., Stevanovic, S., &amp; Nes, I. F. (2001). Plantaricin W from Lactobacillus plantarum belongs to a new family of two-peptide lantibiotics. Microbiology (Reading, England), 147(Pt 3), 643–651. https://doi.org/10.1099/00221287-147-3-643<br />
                  [17]Geldart, K. G., Kommineni, S., Forbes, M., Hayward, M., Dunny, G. M., Salzman, N. H., &amp; Kaznessis, Y. N. (2018). Engineered E. coli Nissle 1917 for the reduction of vancomycin-resistant Enterococcus in the intestinal tract. Bioengineering &amp; translational medicine, 3(3), 197–208. https://doi.org/10.1002/btm2.10107<br />
                  [18]Zhang, G., Brokx, S., &amp; Weiner, J. H. (2006). Extracellular accumulation of recombinant proteins fused to the carrier protein YebF in Escherichia coli. Nature biotechnology, 24(1), 100–104. https://doi.org/10.1038/nbt1174
            </div>
         </div>
         </div>
      </>
   )
};
