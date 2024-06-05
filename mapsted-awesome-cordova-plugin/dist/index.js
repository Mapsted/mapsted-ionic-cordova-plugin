import { MapstedAwesomeCordovaPlugin } from './ms-ionic-cordova-plugin-ca/mapsted-awesome-cordova-plugin/src';
window.IonicNative = {
MapstedAwesomeCordovaPlugin
};
require('./@awesome-cordova-plugins/core/bootstrap').checkReady();
require('./@awesome-cordova-plugins/core/ng1').initAngular1(window.IonicNative);