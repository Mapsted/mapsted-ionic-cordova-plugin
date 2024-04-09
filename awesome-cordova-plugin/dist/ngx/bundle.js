'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var AwesomeCordovaPluginMapsted = /** @class */ (function (_super) {
    tslib.__extends(AwesomeCordovaPluginMapsted, _super);
    function AwesomeCordovaPluginMapsted() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwesomeCordovaPluginMapsted.prototype.launchMapActivity = function () { return core.cordova(this, "launchMapActivity", {}, arguments); };
    AwesomeCordovaPluginMapsted.prototype.getSearchCoreSdkCallback = function () { return core.cordova(this, "getSearchCoreSdkCallback", {}, arguments); };
    AwesomeCordovaPluginMapsted.prototype.getSearchFeedCallback = function () { return core.cordova(this, "getSearchFeedCallback", {}, arguments); };
    AwesomeCordovaPluginMapsted.prototype.getSearchAlertCallback = function () { return core.cordova(this, "getSearchAlertCallback", {}, arguments); };
    AwesomeCordovaPluginMapsted.pluginName = "CordovaPluginMapsted";
    AwesomeCordovaPluginMapsted.plugin = "cordova.plugin.mapsted";
    AwesomeCordovaPluginMapsted.pluginRef = "CordovaPluginMapsted";
    AwesomeCordovaPluginMapsted.platforms = ["Android", "iOS"];
    AwesomeCordovaPluginMapsted.decorators = [
        { type: core$1.Injectable }
    ];
    return AwesomeCordovaPluginMapsted;
}(core.AwesomeCordovaNativePlugin));
// Check more `@Plugin` and `@Cordova` options (and other details)
// in the official developer documentation:
// https://github.com/danielsogl/awesome-cordova-plugins/blob/master/DEVELOPER.md

exports.AwesomeCordovaPluginMapsted = AwesomeCordovaPluginMapsted;
