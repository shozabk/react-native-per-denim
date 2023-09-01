#README

## Project Setup

This React Native project requires Node.js version 18 and above, and we recommend using the Yarn package manager.

## Configuring Google OAuth

To enable Google OAuth functionality in the app, you need to provide values for the `iosClientId` and `webClientId` variables in the `src/config/Env.js` file. These values are required for authentication with Google services. Make sure to obtain the appropriate keys from the Google Developer Console and place them accordingly in the configuration file.

### Node.js Version

Make sure you have Node.js 18 or a higher version installed. You can download it from the official website: [Node.js](https://nodejs.org/)

### Yarn Package Manager

If you haven't already installed Yarn, you can do so globally using the following command:

```bash
npm install -g yarn
```

## Installing Dependencies

To install the required Node.js modules for this project, navigate to the root of the project in your terminal and run:

```bash
yarn install
```

## Running on iOS

To run the app on an iOS simulator or device, follow these steps:

1. Navigate to the iOS directory:

```bash
cd ios
```

2. Install CocoaPods dependencies:

```bash
pod install
```

3. Return to the project root directory:

```bash
cd ..
```

4. Start the iOS app:

```bash
yarn ios
```

## Running on Android

To run the app on an Android emulator or device, simply use the following command:

```bash
yarn android
```

## Running Tests

To run the test cases for this project, execute the following command:

```bash
yarn test
```

---
