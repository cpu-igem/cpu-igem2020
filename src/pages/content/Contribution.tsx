import React from 'react';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { assets } from '../../assets-path.json';
import { Link } from './comps/Link';
const con = assets.pages.Contribution;




const content = (<>
    <div className="no-aside-container">
        <div className="no-aside-content">
        <h1>Contribution</h1>
        <p>This year, we provided new data for an existing part. PalcA-Regulated GFP Expression Construct（BBa_K2539500）, which detailed information is described in the part registrations page. </p>
        <p>Our results matched the general expected trend (Figure 1). Addition of 1% (1000X) ethanol (EtOH) concentration seemed to yield the highest fluorescence, and lower amounts of 0.1%; and 0.2% ethanol were not significantly different than the controls. Over 0.4% ethanol seemed to kill the bacteria (5 mL of culture), which matches literature thresholds of ethanol tolerance [1]. In our tests, 1% ethanol yielded the greatest amount of GFP but this effect was quite weak . In summary,the ethanol promoter, PalcA, is functional in the presence of a specific concentration of ethanol, but is quite inefficient.</p>
        <p><ImageWithShadow src='https://2020.igem.org/wiki/images/9/99/T--CPU_CHINA--2a3bf1ae.png' noShadow width='60%' caption='Figure 1.GFP Fluorescence Intensity of E. coli cultures with varying amounts of ethanol.' /></p>

        <p>Click the <Link href='http://parts.igem.org/Part:BBa_K2539500'>BBa_K2539500</Link> to see detailed information! </p>

        <div className='doc-refer'>
            <div className='text'>Reference</div>
            <div className='text'>
                [1] Chong H, Huang L, Yeow J, Wang I, Zhang H, Song H, Jiang R. (2013). Improving Ethanol Tolerance of Escherichia coli by Rewiring Its Global Regulator cAMP Receptor Protein (CRP). PLoS ONE, 8(2), e57628.<br />
            </div>
        </div>
        </div>
    </div>
</>)

export const body = {
    hasInfobar: true,
    hasRating: true,
    translatable: true,

    title: 'Contributions',
    hasAside: false,
    content,
}