import { AwesomeCordovaPluginMapsted } from './ms-ionic-cordova-plugin-ca/awesome-cordova-plugin/src';
window.IonicNative = {
AwesomeCordovaPluginMapsted
};
require('./@awesome-cordova-plugins/core/bootstrap').checkReady();
require('./@awesome-cordova-plugins/core/ng1').initAngular1(window.IonicNative);