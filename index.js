/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import SubApp from './src/subApp';

const videoSource = require('./assets/video/16197.MP4')


// const nmountApplicationComponentAtRootTag = AppRegistry.unmountApplicationComponentAtRootTag;
const runApplication = AppRegistry.runApplication;

AppRegistry.runApplication = (appKey, appParameters) => {
  console.log('saul ========>>> 启动 APP', appKey, appParameters);
  runApplication(appKey, appParameters);
};

// AppRegistry.unmountApplicationComponentAtRootTag = (appKey, appParams) => {
//   console.log('saul #######', appParams);
//   nmountApplicationComponentAtRootTag(appKey, appParams);
// };

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => () => null);
AppRegistry.registerComponent('rn_sub_1', () => SubApp);

const appKeys = AppRegistry.getAppKeys();
console.log('saul APPKEYS', appKeys);
