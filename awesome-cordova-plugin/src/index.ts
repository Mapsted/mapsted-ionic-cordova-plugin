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
  pluginName: 'CordovaPluginMapsted',
  plugin: 'cordova.plugin.mapsted',
  pluginRef: 'CordovaPluginMapsted',
  // repo: 'https://github.com/adrian-bueno/multiplatform-cordova-plugin-example',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class AwesomeCordovaPluginMapsted extends AwesomeCordovaNativePlugin {
  // For every method, use the @Cordova decorator.
  // Since in our Cordova plugin JavaScript file (www/CordovaPluginExample.js)
  // we defined callback functions before parameters,
  // now we have to declare 'callbackOrder' as 'reverse'.

  @Cordova()
  echo(arg1: string): Promise<string> {
    return Promise.resolve(arg1);
  }
  

  @Cordova()
  launchMapActivity(): Promise<any> {
    return null;
  }

  @Cordova()
  getSearchCoreSdkCallback(): Promise<any> {
    return null;
  }

  @Cordova()
  getSearchFeedCallback(): Promise<any> {
    return null;
  }

  @Cordova()
  getSearchAlertCallback(): Promise<any> {
    return null;
  }
  
}


