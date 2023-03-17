/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AuthContextWrapper from './AuthContextWrapper';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AuthContextWrapper);
