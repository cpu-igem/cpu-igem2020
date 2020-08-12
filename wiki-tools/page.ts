// tslint:disable
import pupp from 'puppeteer';
import fs from 'fs-extra';
import glob from 'glob';
import login from './login';
import config from '../wiki-config.json';
import { delay, concurrencyRestrictify } from './util';

const selector = '../dist/index.html';
interface File2BeUploaded {
   path: string;
   content: string;
}
const pages: string[] = [
   'Team:CPU_CHINA',
   'Team:CPU_CHINA/',
   'Team:CPU_CHINA/about',
   'Team:CPU_CHINA/Project'
];

(async () => {
   const browser = await pupp.launch({ headless: false });
   await login(browser);

   const files = searchTargetFiles();
   console.log(files.length);
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