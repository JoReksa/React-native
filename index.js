/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App1';
import {name as appName} from './app.json';
import GopayD from './GopayD';
import TodoApp from './TodoApp';

AppRegistry.registerComponent(appName, () => TodoApp);
