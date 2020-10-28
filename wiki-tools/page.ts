// tslint:disable
import pupp from 'puppeteer';
import fs from 'fs-extra';
import glob from 'glob';
import login from './login';
import config from '../wiki-config.json';
import { concurrencyRestrictify } from './util';


//把  index.html 上传到所有Wiki页面
const selector = '../dist/index.html';
// const selector = '../prototype/index.html';
interface File2BeUploaded {
   path: string;
   content: string;
}
const pages: string[] = [

   'Team:CPU_CHINA',
   'Team:CPU_CHINA/',
   'Team:CPU_CHINA/Poster',

   'Team:CPU_CHINA/Description',
   'Team:CPU_CHINA/Design',
   'Team:CPU_CHINA/Demonstrate',
   'Team:CPU_CHINA/Implementation',

   'Team:CPU_CHINA/Experiments',
   'Team:CPU_CHINA/Safety',
   'Team:CPU_CHINA/Contribution',

   'Team:CPU_CHINA/Engineering',
   'Team:CPU_CHINA/Basic_Part',
   'Team:CPU_CHINA/Composite_Part',
   'Team:CPU_CHINA/Improved_Part',

   'Team:CPU_CHINA/Model',
   'Team:CPU_CHINA/Model/Alcohol',
   'Team:CPU_CHINA/Model/Bacteriocin',
   'Team:CPU_CHINA/Model/IL_22',
   'Team:CPU_CHINA/Model/Transduction',


   'Team:CPU_CHINA/Human_Practices',
   'Team:CPU_CHINA/Integrated_HP',
   'Team:CPU_CHINA/Education',
   'Team:CPU_CHINA/Entrepreneurship',


   'Team:CPU_CHINA/Team',
   'Team:CPU_CHINA/Attributions',
   'Team:CPU_CHINA/Collaborations',
   
   'Team:CPU_CHINA/Juding_Form',
   // 'Team:CPU_CHINA/Sustainable',

];

(async () => {
   const browser = await pupp.launch({ headless: false });
   await login(browser);

   const files = searchTargetFiles();
   console.log("有" + files.length + "个打包文件需要上传");
   let succeedNum = 0;

   const singleUpload = concurrencyRestrictify(_singleUpload, 2);

   await Promise.all(
      files.map(file => singleUpload(file))
   );
   
   async function _singleUpload(file: File2BeUploaded) {
      const page = await browser.newPage();
      console.log(file.path + ': 前往编辑页面...');
      const pathAtIGEM = file.path;
      await page.goto(`${config.igemUrl}/wiki/index.php?title=${pathAtIGEM}&action=edit`, {
         waitUntil: 'domcontentloaded', timeout: 0
      });
      console.log(file.path + ': 抵达编辑页面...');
      await page.$eval(
         '.mw-ui-input',
         (el: any, content: string) => { el.value = content },
         file.content
      );

      console.log(file.path + ': 提交...');
      await Promise.all([
         page.click('#wpSave'),
         page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 0 }),
      ]);
      console.log(file.path + ': 提交成功 (' + (++succeedNum) + '/' + files.length + ')');
      await page.close();
   }

   await browser.close();
})().catch(r => console.error(r));

function searchTargetFiles() {
   const targetFiles: File2BeUploaded[] = [];

   glob.sync(selector)
      .forEach(path => {
         pages.map((page) => {
            targetFiles.push({
               path: page,
               content: fs.readFileSync(path, 'utf8')
            });
            return null;
         })
      });

   return targetFiles;
}