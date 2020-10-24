import App from './App';

import { Home } from './pages/Home';
import { Description } from './pages/Description';
import { Page404 } from './pages/Page404';
import { Attributions } from './pages/Attributions';
import { Member } from './pages/Member';
import { Model } from './pages/Model';
import { Engineering } from './pages/Engineering';
import { Collaborations } from './pages/Collaborations';
import { HumanPractices } from './pages/HumanPractices';
import { Implementation } from './pages/Implementation';
import { ProofOfConcept } from './pages/ProofOfConcept';
import { Partnership } from './pages/Partnership';
import { Education } from './pages/Education';
import { Entrepreneurship } from './pages/Entrepreneurship';
import { Contribution } from './pages/Contribution';
import { Model_Alcohol } from './pages/Model_Alcohol';

export function queryPage(path: string): Page {
   const page404 = Page404;
   const routes: { [_: string]: Page | null | undefined } = {
      '/': Home,

      '/Attributions': Attributions,
      '/Description': Description,
      '/Contribution': Contribution,

      '/Engineering': Engineering,
      '/Collaborations': Collaborations,
      '/Human_Practices': HumanPractices,
      '/Implementation': Implementation,

      '/Proof_Of_Concept': ProofOfConcept,
      '/Partnership': Partnership,
      '/Education': Education,
      
      '/Model': Model,
      '/Model/Alcohol':Model_Alcohol,
      '/Model/Bacteriocins':Model,
      '/Model/IL_22':Model,
      '/Model/Transduction':Model,
      
      '/Entrepreneurship': Entrepreneurship,
      // '/Notebook': Notebook,
      // '/Safety': Safety,

      // '/Product_Design': Product_Design,
      // '/Entrepreneurship': Entrepreneurship,

      // '/Human_Practices': HumanPractices,
      // '/Public_Engagement': PublicEngagement,

      '/Member': Member,

      // '/Criteria': Criteria,
   };
   return routes[path] || page404;
}

export interface Page {
   App?: App;
   init(options: { App: App }): void;
   enter(): void;
   exit(): void;
}

