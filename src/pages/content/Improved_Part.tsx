import React from 'react';

import H2 from './comps/TRH2';
import { assets } from '../../assets-path.json';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Link } from './comps/Link';
import { DocOrderedList, DocUnorderedList } from './comps/DocList';
// import './css/Description.scss';

const ip = assets.pages.Parts.Improved;

export const body = {
    hasInfobar: true,
    hasRating: true,
    translatable: true,

    title: '',
    hasAside: true,
    content: (
        <>
            <div>
                <h1>Improvement </h1>
                <h2><Link href='http://parts.igem.org/wiki/index.php?title=Part:BBa_K3661006'> Part:BBa_K3661006</Link>
                </h2>
                <p>We improved the efficacy of an existed part BBa_K2976009, which is a NF-κB inducible promoter designed by team iGEM19_CPU_CHINA.</p>
                <p>Promoter JTi2 consists of five repeats of 5′-AGGGATTTCCC-3′ as NF-κB binding site and a minimal CMV promoter. The binding site repeats is derived from gene <strong>vascular cell adhesion molecule 1</strong>, VCAM1. The reconstructed promoter exhibits more than two times of efficiency of the original part BBa_K2976009.</p>
                <h2>Usage</h2>
                <p>Promoter JTi2 is an inducible promoter consists of five repeats of 5′-AGGGATTTCCC-3′as NF-κB binding site and a minimal CMV promoter. The NF-κB bindings site make it possible for JTi2 to initiate transcription process in response to NF-κB.</p>
                <p>Thus in certain immune process, intracellular NF-κB is activated and would be able to start the transcription of functional proteins attached downstream of JTi2, for instance, IL-22. JTi2 can respond to local inflammation such as an inflamed region on liver, then initiate the expression of cytokines IL-22 in engineered immunocytes.</p>
                <p>JTi2 can also be applied as a NF-κB pathway reporter promoter.</p>
                <h2>Biology</h2>
                <p>NF-κB (Nuclear Factor kappa-light-chain-enhancer of activated B cells) is a transcription factor which plays key roles in many important cell events, especially in immunoreaction of immunocytes. The activation of NF-κB signalling pathways will result in the expression of multiple cytokines for instance IL-6, IL-4, IL-5, IL-1β[1].</p>
                <p>TNF-α is able to activate tumour necrosis factor receptor(TNFR) thus activates its downstream signalling pathway through which NF-κB can be released. The TNFR-IKK-NF-κB cascade is one of the canonical NF-κB cascade[2].</p>
                <h2>Characterization</h2>
                <p>We applied SEAP as reporter, attached its sequence downstream of JTi2 promoter. The total enzyme activities of SEAP in the supernatant are recorded and evaluated between groups, the enzyme activity of SEAP of JTi2 is more than two times of the original existed part.</p>
                <p>We cultured HEK293T cell lines and transfected them with vectors, which contains JTi2 promoter and SEAP reporter downstream of it, then activated intracellular NF-κB by adding TNF-α in cell liquid medium. After inducing for 36h the supernatant of the cell culture was extracted and analyzed.</p>
                <p>Secreted Alkaline Phosphatase (SEAP) is a reporter gene commonly used in the study of mammalian synthetic biology. In alkaline condition, SEAP catalyzes the hydrolysis of 4-nitrophenyl disodium phosphate (P-NPP) to form p-nitrophenol (P-NP), which turns into a deep yellow quinone structure and produces a colour reaction accumulated over time. The chemical reaction formula is as follows :P-NPP (colourless) +H<sub>2</sub>O→ P-NP (yellow) +HPO<sub>4</sub><sup>2-</sup>[3,4].</p>
                <p><ImageWithShadow src={ip.fig3$png} caption='Table 1.Preparation Method of p-nitrophenol(P-NP) Standard Curve'/></p>
                <p><ImageWithShadow src={ip.fig1$png} caption='Figure 1.p-NP standard curve'/></p>
                <p><ImageWithShadow src={ip.fig2$png} caption='Figure 2.promoter efficiency of promoter JTi2'/></p>
                <p>The efficiency of JTi2 promoter can be reflected and analysed by the total enzyme efficiency. The efficiency of reconstructed JTi2 promoter is more than two times of the existed old part BBa_K2976009.</p>
                <p>The efficiency of reconstructed JTi2 promoter is elevated to more than two times of the existed old part.</p>


                <div className='doc-refer'>
                    <div className='text'>Reference</div>
                    [1]Liu, T., Zhang, L., Joo, D. <em>et al.</em> NF-κB signalling in inflammation. <em>Sig Transduct Target Ther</em> <strong>2,</strong> 17023 (2017).https://doi.org/10.1038/sigtrans.2017.23<br />
                    [2] Bonizzi G, Karin M. The two NF-κB activation pathways and their role in innate and adaptive immunity[J]. Trends in immunology, 2004, 25(6): 280-288.<br />
                    [3] 薛帅. 设计、构建精准可控定制细胞用于糖尿病治疗的研究[D].华东师范大学,2019.<br />
                    [4] 邵佳伟. 设计、构建远红光调控转基因表达控制系统及其应用研究[D].华东师范大学,2019.<br />
                    <div className='text'>
                    </div>
                </div>


            </div>
        </>
    )
};
