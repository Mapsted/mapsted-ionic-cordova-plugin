import { Injectable } from '@angular/core';
import {
  Cordova,
  Plugin,
  AwesomeCordovaNativePlugin,
} from '@awesome-cordova-plugins/core';

// We need two decorators @Plugin and @Injectable.
//
// For the @Plugin properties, remember what we wrote
// in our plugin's plugin.xml file:
//
// <!-- www -->
// <js-module name="CordovaPluginExample" src="www/CordovaPluginExample.js">
//   <clobbers target="cordova.plugins.CordovaPluginExample" />
// </js-module>
//
// pluginName == js-module.name
// pluginRef == clobbers.target

@Plugin({
  pluginName: 'MapstedCordovaPlugin',
  plugin: 'mapsted.cordova.plugin',
  pluginRef: 'MapstedCordovaPlugin',
  // repo: 'https://github.com/adrian-bueno/multiplatform-cordova-plugin-example',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class MapstedAwesomeCordovaPlugin extends AwesomeCordovaNativePlugin {
  // For every method, use the @Cordova decorator.
  // Since in our Cordova plugin JavaScript file (www/CordovaPluginExample.js)
  // we defined callback functions before parameters,
  // now we have to declare 'callbackOrder' as 'reverse'.


  @Cordova()
  launchMapActivity(): Promise<any> {
    return null;
  }
}


