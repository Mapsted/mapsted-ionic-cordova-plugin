'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var MapstedAwesomeCordovaPlugin = /** @class */ (function (_super) {
    tslib.__extends(MapstedAwesomeCordovaPlugin, _super);
    function MapstedAwesomeCordovaPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MapstedAwesomeCordovaPlugin.prototype.launchMapActivity = function () { return core.cordova(this, "launchMapActivity", {}, arguments); };
    MapstedAwesomeCordovaPlugin.pluginName = "MapstedCordovaPlugin";
    MapstedAwesomeCordovaPlugin.plugin = "mapsted.cordova.plugin";
    MapstedAwesomeCordovaPlugin.pluginRef = "MapstedCordovaPlugin";
    MapstedAwesomeCordovaPlugin.platforms = ["Android", "iOS"];
    MapstedAwesomeCordovaPlugin.decorators = [
        { type: core$1.Injectable }
    ];
    return MapstedAwesomeCordovaPlugin;
}(core.AwesomeCordovaNativePlugin));

exports.MapstedAwesomeCordovaPlugin = MapstedAwesomeCordovaPlugin;
