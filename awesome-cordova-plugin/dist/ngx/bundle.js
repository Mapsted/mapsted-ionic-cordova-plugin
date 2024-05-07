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
    AwesomeCordovaPluginMapsted.pluginName = "CordovaPluginMapsted";
    AwesomeCordovaPluginMapsted.plugin = "cordova.plugin.mapsted";
    AwesomeCordovaPluginMapsted.pluginRef = "CordovaPluginMapsted";
    AwesomeCordovaPluginMapsted.platforms = ["Android", "iOS"];
    AwesomeCordovaPluginMapsted.decorators = [
        { type: core$1.Injectable }
    ];
    return AwesomeCordovaPluginMapsted;
}(core.AwesomeCordovaNativePlugin));

exports.AwesomeCordovaPluginMapsted = AwesomeCordovaPluginMapsted;
