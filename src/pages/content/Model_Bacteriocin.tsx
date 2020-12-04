import React from 'react';

import H2 from './comps/TRH2';
import { assets } from '../../assets-path.json';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Link } from './comps/Link';
import { DocOrderedList, DocUnorderedList } from './comps/DocList';
// import './css/Description.scss';

const bc=assets.pages.Model.Bacteriocin;

export const body = {
    hasInfobar: true,
    hasRating: true,
    translatable: true,

    title: '',
    hasAside: true,
    content: (
        <>
            <div>
                <h1>Bacteriocins Expressing Model</h1>
                <H2>Ⅰ. Abstract</H2>
                <p>		In the purpose of neutralizing excess Enterococcus faecalis to achieve therapeutic goal of curing ALD, wet lab team engineered strain <em>E.coli Nissle 1912</em> to secrete bacteriocin to kill excess <em>E. faecalis</em>. To predict the killing effect under different engineered bacteria colonization situation, we established system dynamics model to simulate the amount of bacteriocin secreted by engineered bacteria<sup>[1]</sup>. </p>
                <p>		By simulate the transcription and translation procedure with regulatory factors taken into account, we managed to simulate the bacteriocin secretion procedure with the variation of concentration for GBAP inside of intestine<sup>[2-5]</sup>.</p>
                <p><ImageWithShadow width='65%'  noShadow src={bc.figure1$png} caption='Figure.1: The Skeleton of Qrorum Sensing' /></p>
                
                <H2>Ⅱ. Model Preparation</H2>
                <h3>1.Michaelis-Menten Equation</h3>
                <p>		The equation describes the rate of enzymatic reactions, by giving the maximum reaction rate <strong>V<sub>max</sub></strong>, Michaelis constant <strong>K<sub>M</sub></strong>.</p>
                <p><ImageWithShadow width='17%'  noShadow src={bc.function1$png} caption='Fomula.1' /></p>
                <h3>2.Ligand Binding Equation</h3>
                <p>		In biochemistry, the ligand-receptor binding equation<sup>[6]</sup> is often used to describe the kinetic process of ligand-receptor binding.</p>
                <p>		Binding kinetics was concerned with the rate constants of association (<strong>k<sub>on</sub></strong>) and dissociation (<strong>k<sub>off</sub></strong>); then the ratio of the two defines the equilibrium dissociation constant. It can be described by the following equation :</p>
                <p><ImageWithShadow width='25%' noShadow src={bc.function2$png} /></p>
                <p>		After substituting the kinetic parameters (<strong>K<sub>D</sub></strong>, or <strong>k<sub>on</sub></strong> and <strong>k<sub>off</sub></strong>) obtained through ligand binding assays or other analytical methods such as synchrotron radiation circular dichroism(SRCD)<sup>[7]</sup>, ligand-receptor binding procedure could be simulated and various ligands and receptor concentrations could be obtained.</p>
                <p>		<strong>The parameters are as follows:</strong>        </p>
                <p>		<strong>k<sub>on</sub></strong>: Association rate constant, reflects the height of the transition state in the journey from free drug to bound drug-target complex.</p>
                <p>		<strong>k<sub>off</sub></strong>: Dissociation rate constant, reflects energy barrier from the bound complex up to transition state.</p>
                <p>		<strong>K<sub>D</sub></strong>: Affinity of ligand and receptor, is a measure of the binding strength between ligand and receptor.</p>
                <p>		The relationship between <strong>k<sub>on</sub></strong>, <strong>k<sub>off</sub></strong> and <strong>K<sub>D</sub></strong> is:</p>
                <p><ImageWithShadow width='15%' noShadow src={bc.function3$png} caption='Fomula.2' /></p>
                <p>		In our modeling, the binding procedure of FsrC protein and GBAP polypeptide was simulated via this equation. The binding of the ligand and the receptor would prompt FsrC to initiate autophosphorylation<sup>[2]</sup>, which in turn would make FsrC exhibit histidine protein kinase activity.</p>
                <h3>3. Assumptions</h3>
                <h4>
                    <span>
                    3.1 Assumptions of the model
                    </span>
                </h4>
                <DocOrderedList items={[
                    <p>	According to the research<sup>[8]</sup>, DNA curvature will influence the efficiency of promoter, so we assume there&#39;s no DNA curvature between transcription factor&#39;s binding site center and transcription start site. Meanwhile, as the promoter activity of each promoter in this model has slight distinction, we assume they have the same activity.</p>,
                    <p>	Assume that the transcription rate in the E.coli 1917 remains constant to be <strong>55</strong>bp/sec, the translation speed to be <strong>8</strong>AA/sec.</p>,
                    <p>	The conditions inside of intestine was assumed to be the optimum condition, and remain the same during the simulation.</p>,
                    <p>	Assuming there are abundant OmpF, OmpC, OmpX and other proteins related to the secretion procedure inside of engineered bacteria<sup>[9]</sup>, as carrier protein YebF was introduced to deliver bacteriocin.</p>
                ]}>
                </DocOrderedList>
                <h4>
                    <span>
                    3.2 Assumptions of using Ligand-binding Equation
                    </span>
                    </h4>
                <DocOrderedList items={[
                    <p>	The ligand-receptor binding is instantaneous, only <strong>[P]</strong>, <strong>[L]</strong> and <strong>[PL]</strong> binding states were considered<sup>[6]</sup>.</p>,
                    <p>	According to the experiment of binding kinetic of GBAP and FsrC, the association rate constant (k<sub>on</sub>) is higher than dissociation rate constant, and the affinity index <strong>K<sub>D</sub></strong> reaches <strong>2μM</strong> <sup>[10]</sup>. The <strong>k<sub>on</sub></strong> was assumed to be two orders of magnitude larger than <strong>k<sub>off</sub></strong>, to be coherent with research results.</p>
                ]}>
                </DocOrderedList>
                <h4>
                    <span>
                    3.3 Assumptions of using Michaelis-Menten Equation
                    </span>
                    </h4>

                <DocOrderedList items={[
                    <p>		In order to simplify, it is assumed that there is only one intermediate complex in the reaction. The first step of the reaction ( <strong>E+S &lt;-&gt; ES</strong> ) is reversible reaction, and <strong>k<sub>s</sub></strong> (kinetic parameter of the first step) remains unchanged.</p>,
                    <p>		The second step of the reaction ( <strong>ES -&gt; P+E</strong> ) is the rate-limiting step, where <strong>k<sub>-1</sub>&gt;&gt;k<sub>2</sub></strong>, which means that the rate of decomposition of <strong>ES</strong> to <strong>P</strong> is not enough to destroy the fast balance between <strong>E</strong> and <strong>ES</strong>.</p>,
                    <p>		In order to achieve equilibrium, only a small proportion of the initial substrate concentration <strong>[S<sub>0</sub>]</strong> is used, because in general <strong>[S<sub>0</sub>]&gt;&gt;[E<sub>0</sub>]</strong> (initial enzyme concentration), so in the early stage of the reaction, the substrate concentration <strong>[S]</strong> can be replaced by <strong>[S<sub>0</sub>]</strong>, or <strong>[S]</strong> can be regarded as <strong>[S<sub>0</sub>]</strong>.</p>,
                    <p>		The enzyme is not consumed in the reaction, but exists as free form <strong>E</strong> or as bound form <strong>ES</strong>, so the sum of the free enzyme concentration <strong>[E]</strong> and the intermediate complex concentration <strong>[ES]</strong> is equal to the initial enzyme concentration <strong>[E<sub>0</sub>]</strong> or the total enzyme concentration <strong>[E<sub>t</sub>]</strong>, that is <strong>[S]+[ES]=[E<sub>0</sub>]=[E<sub>t</sub>]</strong>. This is so-called <strong>Conservation Equation of Enzyme</strong>.</p>,
                    <p>		The model does not consider the reverse reaction of <strong>P+E-&gt;ES</strong> , but obviously <strong>k<sub>2</sub></strong> is a constant which is not equal to zero. To ignore this step, <strong>[P]</strong> must be close to 0, so the Michaelis-Menten Equation is only applicable to simulate the initial rate of reaction.</p>,
                    <p>		In order to get convincing simulation result of mRNA concentration, We simulated it based on the classic Pool Model<sup>[11]</sup>. In most of the cases, RNA polymerization is catalyzed by RNA polymerase II, and it is necessary to consider the saturation effect of the enzyme that will limit the rate of reaction. Considering this, we used Michaelis-Menten equation to simulate mRNA synthesis, and used first-order kinetic equation to simulate the degradation of mRNA.</p>
                ]}>
                </DocOrderedList>
                <H2>Ⅲ. Model Establishment</H2>
                <p>		We applied a toolkit of MATLAB: Simbiology, to construct the system dynamics model.</p>
                <p><ImageWithShadow width='100%' noShadow src={bc.figure5$jpg} caption='Figure2: Bacteriocin Expressing System' /></p>
                <H2>Ⅳ. Equations</H2>
                <p><ImageWithShadow width='100%' noShadow src={bc.table1$png} caption='Table.1: Equations' /></p>
                <H2>Ⅴ. Parameters</H2>
                <p><ImageWithShadow width='100%' noShadow src={bc.table2$png} caption='Table.2: Parameters' /></p>
                <H2>Ⅵ. Result</H2>
                <p>		Based on assumptions about three scenarios that may appear in the <strong>medication process</strong>, we simulated the secretion of bacteriocins under different colonization conditions and the inhibition of the growth of <em>E. faecalis</em> caused by bacteriocins.</p>
                <p>		Assume the concentration of <em>E. faecalis</em> of intestine to be <strong>1.71×10<sup>6</sup></strong> CFU/ml<sup>[13]</sup>, further, as we estimated, they can produce <strong>1.55×10<sup>11</sup></strong> molecule/ml GBAP<sup>[16]</sup>. According to the GBAP concentration, we can further obtained the number of  bacteriocins secreted by each<em> E. coli Nissle 1917</em> at 30 minutes to be 606 molecule/cell. </p>
                <p><ImageWithShadow width='60%' noShadow src={bc.result1$png} caption='Result.1: Secretion of Bacteriocins by Each<em> E. coli Nissle 1917</em>' /></p>
                <h3>The first condition : <em>E. faecalis</em> :<em> E. coli Nissle 1917</em> = 1 :  10<sup>-4</sup> </h3>
                <p><ImageWithShadow width='60%' noShadow src={bc.figure2$png} caption='Figure.3：The First Condition' /></p>
                <p>		The first condition is when the intestinal concentration of the engineered bacteria was 10<sup>-4</sup> times of <em>E. faecalis</em> (at this time <em>E. faecalis</em> was in the dominant position), which is <strong>1.71×10<sup>2</sup></strong> CFU/ml. This situation occurs at the end of the <strong>dosing cycle</strong> when the concentration of engineered bacteria is small. At the same time, we can obtain its inhibitory effect on Enterococcus faecalis at a low concentration of engineered bacteria.</p>
                <p>		According to the simulation, the concentration of <em>E. faecalis</em> will decay to <strong>99.9999575%</strong> of the previous concentration, which means only <strong>0.73</strong> <em>E. faecalis</em> will be eliminated under this condition. </p>
                <h3>The second condition : <em>E. faecalis</em> :<em> E. coli Nissle 1917</em> = 1 : 1</h3>
                <p><ImageWithShadow width='60%' noShadow src={bc.figure3$png} caption='Figure.4：The Second Condition' /></p>
                <p>		Secondly, we simulated the secretion of bacteriocins when the concentration of the engineered bacteria in the intestine was equivalent to that of <em>E. faecalis</em>, which is <strong>1.71×10<sup>6</sup></strong> CFU/ml. Based on this simulation, we can obtain the inhibition ability, of the growth of <em>E. faecalis</em> when the bacteriocin secretion is strong (when the engineered bacteria just entered the intestinal tract and begin to function).</p>
                <p>		According to the simulation, the concentration of <em>E. faecalis</em> will decay to <strong>99.58%</strong> of the previous concentration, which means <strong>7300</strong> <em>E. faecalis</em> will be eliminated under this condition.</p>
                <h3>The third condition : <em>E. faecalis</em> :<em> E. coli Nissle 1917</em> = 1 : 100</h3>
                <p><ImageWithShadow width='60%' noShadow src={bc.figure4$png} caption='Figure.5：The Third Condition' /></p>
                <p>		Once again, we simulated the secretion of bacteriocins when the intestinal concentration of the engineered bacteria was maintained at 100 times the concentration of <em>E. faecalis</em> (the engineered bacteria are now in the dominant position). In this case, the engineered bacteria overexpressed the bacteriocins, and suppressed the concentration of Enterococcus faecalis heavily. </p>
                <p>		According to the simulation, the concentration of <em>E. faecalis</em> will decay to <strong>65.43%</strong> of the previous concentration, which means <strong>7.3×10<sup>5</sup></strong> <em>E. faecalis</em> will be eliminated under this condition. Under this condition,<em> E. coli Nissle 1917</em> will make up to  17.1% of total concentration of <em> E. coli</em>.</p>



                <div className='doc-refer'>
                    <div className='text'>Reference</div>
                    <div className='text'>
                        [1].Qiao, L. . (2010). Simulating bioreaction processes based on simbiology. Computer Applications &amp; Software.<br />
                        [2].Ali, L., Goraya, M. U., Arafat, Y., Ajmal, M., Chen, J. L., &amp; Yu, D. (2017). Molecular Mechanism of Quorum-Sensing in Enterococcus faecalis: Its Role in Virulence and Therapeutic Approaches. Int J Mol Sci, 18(5). doi:10.3390/ijms18050960<br />
                        [3].Del Papa, M. F., &amp; Perego, M. (2011). Enterococcus faecalis virulence regulator FsrA binding to target promoters. J Bacteriol, 193(7), 1527-1532. doi:10.1128/JB.01522-10<br />
                        [4].Nakayama, J., Cao, Y., Horii, T., Sakuda, S., &amp; Nagasawa, H. (2001). Chemical synthesis and biological activity of the gelatinase biosynthesis-activating pheromone of Enterococcus faecalis and its analogs. Biosci Biotechnol Biochem, 65(10), 2322-2325. doi:10.1271/bbb.65.2322<br />
                        [5].Rutherford, S. T., &amp; Bassler, B. L. (2012). Bacterial quorum sensing: its role in virulence and possibilities for its control. Cold Spring Harb Perspect Med, 2(11). doi:10.1101/cshperspect.a012427<br />
                		[6].Hämäläinen, M. (2020). The importance of drug-target binding kinetics for drug efficacy – Without on you are off!. Retrieved 21 October 2020, from https://www.cytivalifesciences.co.jp/contact/pdf/L11_32-1351-12AA.pdf<br />
                		[7].Hussain, R., &amp; Siligardi, G. (2016). Characterisation of Conformational and Ligand Binding Properties of Membrane Proteins Using Synchrotron Radiation Circular Dichroism (SRCD). <em>Advances in experimental medicine and biology</em>, <em>922</em>, 43–59. https://doi.org/10.1007/978-3-319-35072-1_4<br />
                		[8].Pul, Ü., Lux, B., Wurm, R., &amp; Wagner, R. (2008). Effect of upstream curvature and transcription factors H-NS and LRP on the efficiency of Escherichia coli rRNA promoters P1 and P2 - a phasing analysis. Microbiology (Reading, England), 154(Pt 9), 2546–2558. https://doi.org/10.1099/mic.0.2008/018408-0<br />
                		[9].Kotzsch, A., Vernet, E., Hammarström, M., Berthelsen, J., Weigelt, J., Gräslund, S., &amp; Sundström, M. (2011). A secretory system for bacterial production of high-profile protein targets. <em>Protein science : a publication of the Protein Society</em>, <em>20</em>(3), 597–609. https://doi.org/10.1002/pro.593<br />
                		[10].Patching, S. G., Edara, S., Ma, P., Nakayama, J., Hussain, R., Siligardi, G., &amp; Phillips-Jones, M. K. (2012). Interactions of the intact FsrC membrane histidine kinase with its pheromone ligand GBAP revealed through synchrotron radiation circular dichroism. Biochimica et biophysica acta, 1818(7), 1595–1602. https://doi.org/10.1016/j.bbamem.2012.02.015<br />
                		[11].Pérez-Ortín JE, Alepuz P, Chávez S, Choder M. Eukaryotic mRNA decay: methodologies, pathways, and links to other stages of gene expression. J Mol Biol. 2013 Oct 23;425(20):3750-75. doi: 10.1016/j.jmb.2013.02.029. Epub 2013 Mar 4. PMID: 23467123.<br />
                		[12].Rieu, A., Weidmann, S., Garmyn, D., Piveteau, P., &amp; Guzzo, J. (2007). Agr system of Listeria monocytogenes EGD-e: role in adherence and differential expression pattern. <em>Applied and environmental microbiology</em>, <em>73</em>(19), 6125–6133.https://doi.org/10.1128/AEM.00608-07<br />
                		[13].Hui, N. , Min, B. W. , Mei, G. K. , Jun, L. W. , &amp; Chun, H. D. . (2009). The comparative research on intestinal flora population of patients with colorectal cancer and normal people. <em>Journal of Kunming Medical University</em>
                    </div>
                </div>
            </div>
        </>
    )
};
