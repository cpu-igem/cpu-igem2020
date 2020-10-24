import React from 'react';
import H2 from './comps/TRH2';

export const body = {
    hasInfobar: true,
    hasRating: true,
    translatable: true,

    title: 'Model-Alcohol',
    hasAside: true,
    content: (<>
        <div>
            <h1>Alcohol Absorption and Metabolism Model</h1>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <H2>Ⅰ. Model preparation</H2>
            <p>		The absorption of alcohol in the digestive tract and metabolism in the blood are very similar to the absorption and metabolism of oral drugs, so we approximately equate the transformation process of alcohol in vivo with that of oral drugs in vivo. In order to quantitatively analyze the kinetic process of alcohol in vivo, an atrioventricular model was used to simulate the human body. In order to make the problem manageable, we have given the following assumptions:</p>
            <p>		1. It is assumed that the distribution process after alcohol absorption is instantaneous, that is, the influence of distribution on the model is not considered.</p>
            <p>		2. The absorption rate of drinking on an empty stomach is the same as that of drinking while eating.</p>
            <p>		3. Individual differences in the metabolic processes of alcohol are not taken into account</p>
            <p>		4. When drinking alcohol within a short period of time, it is assumed that the drinking time is almost zero, that is, the absorption and metabolism processes are analyzed without considering the drinking time</p>
            <p>		5. Alcohol is metabolized in the digestive tract through absorption and distribution to various organs of the digestive tract, that is, the digestive tract cannot directly metabolize alcohol.</p>
            <p>		From the above hypothesis, it can be known that when drinkers drink in a short time, alcohol can be distributed to the body fluids soon, making its concentration in the blood and various tissues and organs rapidly achieve dynamic balance. The body absorbs and eliminates alcohol at the same time, so the actual concentration of alcohol in the blood is the comprehensive result of the body&#39;s absorption and elimination of alcohol.</p>
            <H2>Ⅱ. Model establishment</H2>
            <h3>1. Pre-intestinal stage</h3>
            <p>		Since alcohol metabolism in the human body includes both absorption and elimination, the model should also include these two aspects.</p>
            <h4>1.1 Alcohol absorption</h4>
            <p>		According to the literature, alcohol absorption conforms to the first-order absorption equation:</p>
            <h4>1.2 Metabolism of alcohol</h4>
            <p>		Alcohol metabolism is nonlinear, and according to literature, it conforms to Michaelis-Menten rate equation:</p>
            <h4>1.3 Alcohol absorption and metabolism in the pre-intestinal stage</h4>
            <p>		The total equation of alcohol absorption and metabolism in the pre-intestinal stage can be obtained from the above absorption and metabolism equation:</p>
            <p>		Solving the differential equation can be obtained as follows:</p>
            <h4>1.4 Enteral alcohol concentration</h4>
            <p>		According to the initial hypothesis, the alcohol concentration into the intestine is the amount of alcohol consumed and the alcohol content in the blood, which is shown in the following equation:</p>
            <h3>2. Enteral stage</h3>
            <h4>2.1 Alcohol absorption</h4>
            <p>		The kinetic equation of alcohol absorption does not change in form, but its parameters should change. The equation is shown as following:</p>
            <h4>2.2 Metabolism of alcohol</h4>
            <p>		Alcohol absorption through the intestine will first pass through the hepatic portal vein and enter the liver for metabolism, so the metabolic rate will be greatly improved. The equation is shown as following:</p>
            <h4>2.3 Alcohol absorption and metabolism in the enteral stage</h4>
            <p>		The total equation of alcohol absorption and metabolism in the intestinal stage can be obtained from the above absorption and metabolism equation:</p>
            <p>		Solving the differential equation can be obtained as follows:</p>
            <p> </p>
            <h3>3. Metabolic elimination stage</h3>
            <p>		During this stage, there is no digestive tract absorption and only metabolism of residual alcohol in the blood. Its elimination rate should be:</p>
            <p>		Solving the differential equation can be obtained as follows:</p>
        </div>
    </>)
}