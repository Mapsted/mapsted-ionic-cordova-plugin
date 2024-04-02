// preinstall.js

const fs = require('fs');
const path = require('path');

// Define the Cordova project directory
const projectDir = path.resolve(__dirname, '../../../');

// Path to the Podfile
const podfilePath = path.join(projectDir, 'platforms', 'ios', 'Podfile');

// Check if Podfile exists
if (!fs.existsSync(podfilePath)) {
    console.error('Error: Podfile not found in the iOS platform directory.');
    process.exit(1);
}

// Content to append to Podfile
const podfileContent = `
# Add custom dependencies for CordovaPluginMapsted
platform :ios, '13.0'

# Set Swift version
post_install do |installer|
    installer.pods_project.targets.each do |target|
        target.build_configurations.each do |config|
            config.build_settings['SWIFT_VERSION'] = '5.0' // Specify your desired Swift version here
        end
    end
end


use_frameworks!

# Add your CocoaPods dependencies here
pod 'mapsted-sdk-map-ui', '~> 5.0'
`;

// Append content to Podfile
fs.appendFileSync(podfilePath, podfileContent);

console.log('CordovaPluginMapsted dependencies added to the Podfile.');
