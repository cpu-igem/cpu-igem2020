import React from 'react';

import H2 from './comps/TRH2';
import { assets } from '../../assets-path.json';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Link } from './comps/Link';
import { DocOrderedList, DocUnorderedList } from './comps/DocList';
// import './css/Description.scss';

const pla = assets.pages.Model.Transduction;

export const body = {
    hasInfobar: true,
    hasRating: true,
    translatable: true,

    title: '',
    hasAside: true,
    content: (
        <>
            <div>
                <h1>Plasmid Transduction</h1>
                <H2>Ⅰ. Abstract</H2>
                <p>At present, the dynamics research of plasmid transduction system is not enough to support us to establish a complete system dynamics equation, and CRISPR technology lacks relevant dynamic parameters. Therefore, in this part, we use Bayesian probability model to blur the dynamics process. The probability model is constructed based on two parts: plasmid transduction and sterilization. The results of the model are the antibacterial efficiency and the mathematical expectation of the population of Enterococcus faecalis after sterilization. The results of this part and that of the bacteriocin model will be multiplied together to get the sterilization ratio, which makes our calculated sterilization efficiency closer to the sterilization efficiency of the experimental design.</p>
                <H2>Ⅱ. Model preparation</H2>
                <h3>1. Bayesian Probability Model</h3>
                <p>Assume A and B are two independent events, and P(A)&gt;0, P(B)&gt;0. The probability of two mutually independent events occurring simultaneously is </p>
                <p><ImageWithShadow width='45%' noShadow src={pla.fomula1$png} caption='Fomula.1' /></p>
                <p>From the above, the probability of B under the condition that A occurs is</p>
                <p><ImageWithShadow width='21%' noShadow src={pla.fomula2$png} caption='Fomula.2' /></p>
                <p>The generalized Bayesian probability is</p>
                <p><ImageWithShadow width='35%' noShadow src={pla.fomula3$png} caption='Fomula.3' /></p>
                <h3>2. Assumptions</h3>

                <p>Bayesian probability satisfies the conditions in the axiomatization of probability.</p>
                <p>	1. P(A)&gt;0, P(B)&gt;0, P(B|A)&gt;0.</p>
                <p>	2. Probability space is a measurement space with a total measure of 1 ,namely P(Ω|A)=1.</p>
                <p>	3. A<sub>1</sub>, A<sub>2</sub>......A<sub>n</sub> events are independent of each other；B<sub>1</sub>, B<sub>2</sub>......B<sub>n</sub> events are independent of each other.</p>
                <H2>Ⅲ. Variables and Parameters</H2>
                <h3>1. Variables</h3>
                <p><ImageWithShadow width='100%' noShadow src={pla.table1$png} caption='Table.1: The variables of model' /></p>
                <h3>2. Parameters</h3>
                <p><ImageWithShadow width='100%' noShadow src={pla.table2$png} caption='Table.2: The parameters of model' /></p>
                <H2>Ⅳ. Model establishment</H2>
                <p>We assume that plasmid transduction and plasmid sterilization are two independent events. Therefore, we can get the probability that the two events of plasmid transduction and plasmid sterilization occur simultaneously as following.</p>
                <p><ImageWithShadow width='90%' noShadow src={pla.fomula4$png} /></p>
                <p><ImageWithShadow width='73%' noShadow src={pla.fomula5$png} caption='Fomula.4' /></p>
                <H2>Ⅴ. Result</H2>
                <p>We obtain the probability of each independent event <sup>[1-2]</sup>. According to the Bayesian probability equation, the sterilization efficiency of the plasmid transduction system can be calculated. The results are shown below.</p>
                <p>The antibacterial efficiency :</p>
                <p><ImageWithShadow width='73%' noShadow src={pla.fomula6$png} /></p>
                <p>The mathematical expectation of the population of Enterococcus faecalis after sterilization :</p>
                <p><ImageWithShadow width='75%' noShadow src={pla.fomula7$png} /></p>
                <p>When we design the plasmid, we want to replace the bacteriocin to carry out the antibacterial function through a plasmid transduction system. The results we calculate through the model do not achieve our expected sterilization effect, which shows that the plasmid transduction system cannot replace the bacteriocin under the current conditions. However, the antibacterial effect of bacteriocin will be tolerated. And Enterococcus faecalis is a kind of bacteria that easily develops drug resistance. Since the CRISPR system is basically not tolerated by bacteria, it has a broader antibacterial effect. The CRISPR system can work with bacteriocins to kill Enterococcus faecalis that has developed drug resistance. Improving the CRISPR system can make it have a broader application scenario. We put forward the following prospect:</p>
                <DocUnorderedList items={[
                    <p>Improve the CRISPR system. Significantly improve the success rate of its plasmid transduction, so as to improve its sterilization efficiency greatly and achieve the sterilization effect we hope.</p>,
                    <p>Promote the CRISPR system. Make it express in other engineering bacteria to achieve the purpose of sterilization.</p>
                ]}>
                </DocUnorderedList>

                <div className='doc-refer'>
                    <div className='text'>Reference</div>
                    <div className='text'>
                        [1] Nakayama J, Clewell DB, Suzuki A. Targeted disruption of the PD78 gene (traF) reduces pheromone-inducible conjugal transfer of the bacteriocin plasmid pPD1 in Enterococcus faecalis. FEMS Microbiol Lett. 1995 May 15;128(3):283-8. doi: 10.1111/j.1574-6968.1995.tb07537.x. <br />
                    [2] Rodrigues M, McBride SW, Hullahalli K, Palmer KL, Duerkop BA. Conjugative Delivery of CRISPR-Cas9 for the Selective Depletion of Antibiotic-Resistant Enterococci. Antimicrob Agents Chemother. 2019 Oct 22;63(11):e01454-19. doi: 10.1128/AAC.01454-19. <br />
                    </div>
                </div>
            </div>
        </>
    )
};
