import { AwesomeCordovaPluginMapsted } from './mapsted-workspace/awesome-cordova-plugin-map/src';
window.IonicNative = {
AwesomeCordovaPluginMapsted
};
require('./@awesome-cordova-plugins/core/bootstrap').checkReady();
require('./@awesome-cordova-plugins/core/ng1').initAngular1(window.IonicNative);