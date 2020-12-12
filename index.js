/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import Root from './src/Root';
import { name as appName } from './app.json';
// this.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => Root);
// export { default } from './storybook';
