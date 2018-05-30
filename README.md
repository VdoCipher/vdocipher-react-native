
# react-native-vdocipher-rn-bridge

## Getting started

`$ npm install react-native-vdocipher-rn-bridge --save`

### Mostly automatic installation

`$ react-native link react-native-vdocipher-rn-bridge`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-vdocipher-rn-bridge` and add `VdocipherRnBridge.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libVdocipherRnBridge.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.vdocipher.rnbridge.VdocipherRnBridgePackage;` to the imports at the top of the file
  - Add `new VdocipherRnBridgePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-vdocipher-rn-bridge'
  	project(':react-native-vdocipher-rn-bridge').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-vdocipher-rn-bridge/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-vdocipher-rn-bridge')
  	```


## Usage
```javascript
import VdocipherRnBridge from 'react-native-vdocipher-rn-bridge';

// TODO: What to do with the module?
VdocipherRnBridge;
```
  