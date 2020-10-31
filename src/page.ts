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
// import { ProofOfConcept } from './pages/ProofOfConcept';
// import { Partnership } from './pages/Partnership';
import { Education } from './pages/Education';
import { Entrepreneurship } from './pages/Entrepreneurship';
import { Contribution } from './pages/Contribution';
import { Model_Alcohol } from './pages/Model_Alcohol';
import { HumanPracticesOverview } from './pages/HumanPracticesOverview'
import { Design } from './pages/Design';
import { Model_Bacteriocin } from './pages/Model_Bacteriocin';
import { Model_IL22} from './pages/Model_IL22';
import {Model_Plasmid} from'./pages/Model_Plasmid';
import {Experiments} from'./pages/Experiments';
import{ Improved_Part} from'./pages/Improved_Part';
import {Basic_Part} from'./pages/Basic_Part';
import {Composite_Part} from './pages/Composite_Part';
import { Demonstrate} from './pages/Demonstrate';
import { Safety} from './pages/Safety';
import {JudgingForm} from './pages/JudgingForm';





export function queryPage(path: string): Page {
   const page404 = Page404;
   const routes: { [_: string]: Page | null | undefined } = {
      '/': Home,
      
      '/Description': Description,
      '/Design':Design,
      '/Demonstrate': Demonstrate,
      '/Implementation': Implementation,

      '/Experiments': Experiments,
      '/Safety': Safety,
      '/Contribution': Contribution,

      '/Engineering':Engineering,
      '/Basic_Part': Basic_Part,
      '/Composite_Part':Composite_Part,
      '/Improved_Part':Improved_Part,

      '/Model': Model,
      '/Model/Alcohol':Model_Alcohol,
      '/Model/Bacteriocin':Model_Bacteriocin,
      '/Model/IL_22':Model_IL22,
      '/Model/Transduction':Model_Plasmid,

      '/Human_Practices':HumanPracticesOverview,
      '/Integrated_HP': HumanPractices,
      '/Education':Education,
      '/Entrepreneurship': Entrepreneurship,

      '/Team':Member,
      '/Attributions': Attributions,
      '/Collaborations': Collaborations,

      '/Judging_Form': JudgingForm,
      '/Proof_Of_Concept': Demonstrate,
      // '/Partnership': Partnership,
   };
   return routes[path] || page404;
}

export interface Page {
   App?: App;
   init(options: { App: App }): void;
   enter(): void;
   exit(): void;
}

