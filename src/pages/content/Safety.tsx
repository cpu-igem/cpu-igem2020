import React from 'react';

import H2 from './comps/TRH2';
import { assets } from '../../assets-path.json';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Link } from './comps/Link';
import { DocOrderedList, DocUnorderedList } from './comps/DocList';
// import './css/Description.scss';

const sf = assets.pages.Safety;

export const body = {
    hasInfobar: true,
    hasRating: true,
    translatable: true,

    title: '',
    hasAside: true,
    content: (
      <>
            <div>
                <h1>Project Description</h1>
                <H2>Safety part</H2>
                <p>As an engineered bacteria placed in human intestine, it should be exterminated once escape from the patient&#39;s body. Many conditions for inducing suicide have been considered, such as pH, light and so on. Eventually, temperature is selected as an ideal condition for it is widely suitable. Thus, <Link href='http://parts.igem.org/Part:BBa_K3036004#cite_ref-1'>Part:BBa_K3036004</Link>, designed by BNU-China is utilized in our project to avoid the possible pollution from engineered bacteria.</p>
                <p>The cold-triggered kill switch is characterized in a system where the downstream <em>relE</em> gene encodes for a constantly expressed stable toxin and the upstream <em>relB</em> gene encodes for a labile antitoxin<sup> [1]</sup>under the control of the RNA thermometer who can only mediate expression at a temperature near 37℃<sup> [2]</sup> as shown in Figure 1. When the engineered bacteria get out of human body, temperature drops, inhibiting the expression of the antitoxin RelB, and the bacteria die of the excessive toxin RelE, preventing contamination.</p>
                <p><ImageWithShadow noShadow src={sf.safetyFig1$coldTriggeredkillswitch$png} caption="safety-fig1.cold-triggered kill switch"/></p>
                    <H2>General Safety rules in the experiment</H2>
                    <p>Before starting our project in the lab, we were all informed about how to use related equipment, how to keep ourselves and others in this lab safe. Gloves, masks and lab coats are always needed to protect the safety of the operator. The warnings and notes of every reagents and devices are read carefully to ensure the safety of the operators and to carry out the experiments smoothly. </p>
                    <p>According to our design, plenty of experiments involving bacteria and cells are required. In order to keep the cell lines and stains away from unwanted pollution,  aseptic processing procedures are vital: Firstly, biological safety cabinet will be exposed to UV light for half an hour, aiming to create a sterile environment. Secondly,  all consumable items must undergo corresponding sterile procedure before putting into the biological safety cabinet. Before operating in the biological safety cabinet, gloves are coverd with 75% ethanol. An examine must be passed before conducting cell experiments independently.</p>
                    <p><ImageWithShadow noShadow src={sf.SafetyFigure2Biologicalsafetycabinet$jpg} caption="biological safety cabinet" /></p>
                    <p><ImageWithShadow noShadow src={sf.SafetyFigure2Cellchamber$jpg} caption="Cell chamber" /></p>
                    <p> <ImageWithShadow noShadow src={sf.SafetyFigure2Flammableliquidstoragecabinet$jpg} caption="Safety-Figure 2-flammable liquid storage cabinet"/></p>
                        <p><ImageWithShadow noShadow src={sf.SafetyFigure2Uniforms$jpg} caption="Figure 2. Generally security assurance"/></p>
                            <H2>Experimental Design</H2>
                            <p>Our therapy is to treat our patients by using engineered bacteria, and it is important to note whether other infections can be caused during use. But the <em>E. coli Nissle 1917</em> we use here is not normally harmful to the human body, and we will monitor the patient&#39;s physical health in a timely manner during the application process. <em>E. coli BL21(DE3)</em> is only used for preliminary experiment, and will not be put into use.</p>
                            <p>We extracted bacteriocins from the culture supernatant then have their activity evaluated by adding which into the <em>E. faecalis</em> ATCC29212 culture flasks. The accidental inhaling of <em>E. faecalis</em> ATCC29212 might cause lung infection ( if operated incorrectly), while the accidental exposure of wounded skin to <em>E. faecalis</em> ATCC29212 existing environment might cause skin infection (if operated incorrectly). Thus, every operator, as discussed before, was required to wear masks, gloves and lab coats to avoid accidental infection.</p>
                            <p><ImageWithShadow noShadow src={sf.safetyFigure3Zzy$jpg} caption="Figure 3. Masks, gloves and lab coats"/></p>
                                <H2>Safety guidelines</H2>
                                <p>The rules and regulations mentioned before are made following these two guidelines, which are two major ones in China: </p>
                                <p><Link href='http://www.nhc.gov.cn/ewebeditor/uploadfile/2017/07/20170727145700597.pdf'>General biosafety standard for causative bacteria laboratories</Link></p>
                                <p><Link href='http://www.nhc.gov.cn/ewebeditor/uploadfile/2014/12/20141217161248966.pdf'>General biosafety standard for microbiological and biomedical laboratories</Link></p>
                                <H2>Safety in HP</H2>
                                <p>In order to ensure the members&#39; health during COVID-19, all of us were asked to wear masks during the visit. The machines at the gate of the hospital collected information about every visitor&#39;s identity information and body temperature, making sure that everyone getting indoor is in good health. In addition, we complied with the hospital&#39;s epidemic prevention regulations.</p>
                                <p><ImageWithShadow noShadow src={sf.SafetyFigure4Gate1$jpg} caption="Safety-Figure 4-gate1" /></p>
                                <p><ImageWithShadow noShadow src={sf.SafetyFigure4Gate2$jpg} caption=">Figure 4. Safety in HP" /></p>

                                <div className='doc-refer'>
                                    <div className='text'>Reference</div>
                                    <div className='text'>
                                        [1]Andreas Bøggild, Sofos N, Andersen K R, et al. The Crystal Structure of the Intact E. coli ReIBE Toxin-Antitoxin Complex Provides the Structural Basis for Conditional Cooperativity [J]. Structure, 2012, 20(10):1641-1648.<br />
                                    [2]Narberhaus, F., Waldminghaus, T., &amp; Chowdhury, S. (2006). RNA thermometers. <em>FEMS Microbiol Rev, 30</em>(1), 3-16. doi:10.1111/j.1574-6976.2005.004.x<br />
                                    </div>
                                </div>
         </div>
      </>
   )
};
