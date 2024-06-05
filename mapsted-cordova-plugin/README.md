# Mapsted

## Installation

```bash
ionic cordova plugin add mapsted-cordova-plugin
npm install mapsted-awesome-cordova-plugin
```

## Platform Specific Configurations

### iOS 

- Project/ios/Podfile Add source file on top.

```sh
source 'https://cdn.cocoapods.org/'

# To run in simulator add below source target
source 'https://github.com/Mapsted/podspec-simulator.git'

# To run in device add below source target
source 'https://github.com/Mapsted/podspec.git'
```

- Project/ios/Podfile set use frameworks in your app target

```sh
use_frameworks!
```

#### IMPORTANT
- Add license file in Resources folder `your_ios_license.key`


### Android

#### IMPORTANT
- Add license file in Assets folder('/app/src/main/assets') `your_android_license.key`



## API

<docgen-index>

* [`launchMapActivity()`](#addlistenerinitcallback)

</docgen-index>
