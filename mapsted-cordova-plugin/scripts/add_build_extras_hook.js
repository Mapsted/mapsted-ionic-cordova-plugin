#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

module.exports = function(context) {
    var platformRoot = path.join(context.opts.projectRoot, 'platforms', 'android');
    var buildGradlePath = path.join(platformRoot, 'app', 'build.gradle');
    var buildExtrasPath = path.join(platformRoot, 'app', 'src', 'main', 'build-extras.gradle');

    if (fs.existsSync(buildExtrasPath)) {
        var buildGradleContent = fs.readFileSync(buildGradlePath, 'utf8');
        if (buildGradleContent.indexOf("apply from: 'src/main/build-extras.gradle'") == -1) {
            fs.appendFileSync(buildGradlePath, "\napply from: 'src/main/build-extras.gradle'\n");
            console.log('build-extras.gradle applied to build.gradle');
        } else {
            console.log('build-extras.gradle already applied to build.gradle');
        }
    } else {
        console.error('build-extras.gradle not found.');
    }
};