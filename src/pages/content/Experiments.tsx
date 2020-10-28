import React from 'react';

import H2 from './comps/TRH2';
import { assets } from '../../assets-path.json';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Link } from './comps/Link';
import { DocOrderedList, DocUnorderedList } from './comps/DocList';
// import './css/Description.scss';

export const body = {
    hasInfobar: true,
    hasRating: true,
    translatable: true,

    title: '',
    hasAside: true,
    content: (
        <>
            <div>
                <h1>Protocol</h1>

                <h2>Activation of <em>Enterococcus faecalis</em></h2>
                <DocOrderedList items={[
                    <p>Add 1ml of reconstituted solution to <em>Enterococcus faecalis</em> freeze-dried powder and rejuvenate at 35°C for 24h. </p>,
                    <p>Add 5ml of brain heart infusion (BHI) and culture overnight.</p>,
                ]}>
                </DocOrderedList>

                <h2>Induction of <em>E. coli</em></h2>

                <DocOrderedList items={[
                    <p>Synthesize the target plasmid.</p>,
                    <p>Transform plasmid into the sensory state of <em>E. coli</em>.</p>,
                    <p>Culture the <em>E. coli</em> and pick out single colonies.</p>,
                    <p>Inoculate the transformed <em>E. coli</em> onto LB medium.</p>,
                    <p>Incubate to logarithmic phase of growth at 37°C.</p>,
                    <p>Add IPTG with a final concentration of 1 mM and induce for 5h. </p>,
                    <p>Centrifuge for 12000rpm, 5min to obtain supernatant with target protein.</p>,
                    <p>Filter the supernatant with 0.22μm microvoid filter film.</p>,

                ]}></DocOrderedList>

                <h2>ELISA </h2>
                <h3>IL-22</h3>
                <h4>IL-22 ELISA </h4>
                <DocOrderedList items={[
                    <p>Dilute the protein standard to obtain a standard gradient dilution, that is used to plot the standard curve.</p>,
                    <p>After induction of engineering bacteria, the culture is centrifuged to obtain the supernatant, which contains the target protein (500 g, 5 min).</p>,
                    <p>The samples and different concentrations of the standards are respectively added into the wells at 100 μl/well, and the wells are incubated for 120 minutes at room temperature with a sealing plate membrane (transparent).</p>,
                    <p>Wash plate: add 300μl of washing solution to each well, the interval between injection and suction is 15-30 seconds. Wash the plate for 5 times. Pat dry after the last washing.</p>,
                    <p>Biotinylated antibody (100 μl/well) is added to each well, and the reaction wells are sealed with a sealing plate membrane (transparent) and incubated for 60 minutes at room temperature.</p>,
                    <p>Wash: Repeat step 2.</p>,
                    <p>HRP-Streptavidin (100 μl/well) is added to each well, and the reaction wells are sealed with a sealing plate membrane (white) and incubated for 20 minutes at room temperature, protected from light.</p>,
                    <p>Wash: Repeat step 2.</p>,
                    <p>Color developer TMB solution (100 μl/well) is added to each well, and the wells are incubated for 20 minutes at room temperature, protected from light with a sealing plate membrane (white).</p>,
                    <p>Add termination solution (50 μl/well) to each well and measure the A450 value immediately after mixing.</p>,
                    <p>Draw a standard curve and calculate the protein concentration obtained from the experiment.</p>,


                ]}></DocOrderedList>

                <h4>Induction process in THP-1 cells to M1 macrophages</h4>
                <DocOrderedList items={[
                    <p>The macrophage-like state is obtained by treating THP-1 monocytes for 48 h with 20 ng/ml phorbol 12-myristate 13-acetate (PMA) in 96-well cell culture plates with 100μl of cell suspension (5 × 10*4 cells) in each well. </p>,
                    <p>Differentiated, adherent cells rested for another 24 h in the culture medium (RPMI 1640 medium without PMA but containing 10% FBS and 1% penicillin/ streptomycin)  to obtain the resting state of macrophages (M0). </p>,
                    <p>M0 macrophages were then primed with the medium supplemented with 5ng/ml of LPS  to be differentiated into M1 phenotype. To prove the function of IL-22, 5 ng /ml IL-22 or supernatant of  engineering bacteria (IL-22-secreting) is added into the medium at the same time. The incubation time is 12h.</p>,
                ]}></DocOrderedList>

                <h3>TNF-α ELISA</h3>
                <DocOrderedList items={[
                    <p>Dilute the protein standard to obtain a standard gradient dilution, that is used to plot the standard curve.</p>,
                    <p>After induction of engineering bacteria, the supernatant was taken for experiments (500 g, 5 min). </p>,
                    <p>The samples and different concentrations of the standards are respectively added into the wells at 100 μl/well, and the wells are incubated for 120 minutes at room temperature with a sealing plate membrane (transparent).</p>,
                    <p>Wash plate: add 300μl of washing solution to each well, the interval between injection and suction is 15-30 seconds. Wash the plate for 5 times. Pat dry after the last washing.</p>,
                    <p>Biotinylated antibody (100 μl/well) is added to each well, and the reaction wells are sealed with a sealing plate membrane (transparent) and incubated for 60 minutes at room temperature.</p>,
                    <p>Wash: Repeat step 2.</p>,
                    <p>HRP-Streptavidin (100 μl/well) is added to each well, and the reaction wells are sealed with a sealing plate membrane (white) and incubated for 20 minutes at room temperature, protected from light.</p>,
                    <p>Wash: Repeat step 2.</p>,
                    <p>Color developer TMB solution (100 μl/well) is added to each well, and the wells are incubated for 20 minutes at room temperature, protected from light with a sealing plate membrane (white).</p>,
                    <p>Add termination solution (50 μl/well) to each well and measure the A450 value immediately after mixing.</p>,
                    <p>Draw a standard curve and calculate the protein concentration obtained from the experiment.</p>,

                ]}></DocOrderedList>
                <h3>Flag ELISA </h3>

                <DocOrderedList items={[
                    <p>Addition of standards: set up standard wells and add 50μl of standards of different concentrations to the standard wells.</p>,
                    <p>Addition of sample: set up blank wells (blank control wells without sample and HRP-Conjugate reagent) and sample wells for testing, respectively. Add 40μl of sample diluent and then 10μl of sample to the sample wells on the plate.</p>,
                    <p>Addition of enzyme: 100μl of HRP-Conjugate reagent per well, except for blank wells.</p>,
                    <p>Incubation: Incubate at 37℃ for 60 minutes after sealing the plate with sealing film.</p>,
                    <p>Dilution: 20 times concentrated detergent solution diluted with distilled water for use.</p>,
                    <p>Wash plate: add 300μl of washing liquid to each well, the interval between injection and suction is 15-30 seconds. Wash the plate for 5 times. Pat dry after the last washing.</p>,
                    <p>Color development: add 50μl of colorant A per well, then add 50μl of colorant B. Gently shake and mix well, avoid light and develop color for 15 minutes at 37℃.</p>,
                    <p>Termination: add 50μl of termination solution per well to terminate the reaction (at this time the blue color turns yellow).</p>,
                    <p>Measurement: The absorbance (OD) of each well was measured at 450nm, and the measurement should be performed within 15 minutes after the addition of termination solution.</p>,

                ]}>

                </DocOrderedList>

                <h2>Bacteriocins killing activity against <em>E.faecalis</em></h2>
                <p>1.Culture <em>E.faecalis</em> overnight, then dilute it to OD600=0.2 using BHI Broth.</p>
                <p>2.Activate <em>E.faecalis</em> for 4h in 37℃, 200rpm.</p>
                <p>3.Centrifuge the culture, 12000rpm, 1min, keep the supernatant.</p>
                <p>4.Filter the supernatant with 0.22μm microvoid filter film.</p>
                <p>5.Add 500μl filtered supernatant into 2ml <em>E.faecalis</em> culture, memsure its OD600 every hour.</p>

                <h2>Improvement </h2>
                <h3>EZtrans transfection protocol  </h3>
                <DocOrderedList items={[
                    <p>The  day  before  transfection  (around  18-24),  the  cells  were  trypsinized  and counted, and the cells were plated so that the confluence was 70-90% at the time of transfection.</p>,
                    <p>Dilute  the 1μg plasmid with 40ul DMEM,  carefully  mix  it,  and  record  it  as liquid A;  Dilute 3μL EZtrans with 40μL DMEM, carefully mix, record as liquid B. </p>,
                    <p>Immediately add the B solution to the A solution and mix it. Place at room temperature for 10-15min.</p>,
                    <p>Add the EZtrans-DNA mixture to the cell culture medium and mix gently.</p>,
                    <p>Transfect for 6-18h and replace with complete medium. </p>,
                ]}></DocOrderedList>

                <h3>Detection of SEAP </h3>
                <p>Chemicals: Disodium 4-nitrophenyl phosphate(p-NPP), p-nitrophenol(p-NP), 2×SEAP Assay Buffer.
                Equipments: 96-wells plates, clean bench, microplate absorbance reader.
Sample preparation</p>
                <DocOrderedList items={[
                    <p>Change the culture medium to serum-free DMEM, add 1ul TNF-α(10ng/ml) in each well. The total volume of each well is 200ul(24-wells plate).</p>,
                    <p>Incubate for 36-72h, take 100ul culture supernatant for further test.</p>,
                    <p>Heat the sample supernatant with hot water bath(65℃，30min).
    Preparation of the standard curve </p>,
                ]}></DocOrderedList>

                <p>  <ImageWithShadow src="" /></p>
                <DocOrderedList items={[
                    <p>Prepare the standard curve with the method provided in the chart above in a 96-wells plate.
                    </p>,
                    <p>Add 20ul of p-NPP solution, 172ul of 2×SEAP buffer in each sample well before loading sample supernatant.
                    </p>,
                    <p>Put the plate into incubator for 10mins, preheat to 37℃。
                    </p>,
                    <p>Add 8ul of the pretreated sample supernatant into the sample wells, use microplate absorbance reader to determine the enzyme activity of each well. Program settings: wavelength 504nm, interval time 1 minute, no vibration, repeat 10 times.
                    </p>,
                    <p>Record and analyse the data, calculate the enzyme activity of each well. The calculating formulas are as follow:<br/>
                        k1= slope of the standart curve.<br/>
                        Establish the enzyme reaction kinetics curve: plot detection time on the horizontal axis, OD405 on the vertical axis and perform linear regression on the data.<br/>
                        k2=the slope of the enzyme reaction kinetics curve.<br/>
                        Enzyme activity unit =k2/k1 (U/L)<br/>
                        The enzyme activity obtained can be regarded as indicator of promoter efficiency.
                    </p>,
                ]}></DocOrderedList>



            </div>
        </>
    )
};
