<div align="center">
  
![icon-128](https://github.com/ppauel/youtube-forceskip/assets/82803315/44d3b686-21e5-4249-821c-32b868cab092)

![Static Badge](https://img.shields.io/badge/Safari-%5E16.0-blue)
![Static Badge](https://img.shields.io/badge/macOS-%5E13.0-blue)
![Static Badge](https://img.shields.io/badge/Xcode-%5E14.0-blue)


<h1 align="center">ForceSkip</h1>

</div>


A **Safari Web Extension** that adds a button to the YouTube player to skip everything, including ads.

## Installation
A public release build is currently not available. Instead, you have to build the extension yourself.

## Build
1. Clone the repository
2. Open the project in Xcode
3. Optional: Sign both targets (Personal Team with a Development certificate is sufficient)
4. Go to `Product` > `Archive`
5. Click `Distribute App`
6. Select `Copy App` and choose a destination

**Done!** If you did not sign your application, you will have to *allow unsigned extensions* in Safari's `Develop` menu.

## Usage
Open the built application to install the extension. Before you can use the extension, you need to grant it access to `youtube.com`. You can do this either via the icon in the toolbar while visiting YouTube, or in the Safari settings.

The extension now adds a new button (⏩) in the YouTube player. This allows to skip the currently displayed content (including advertisements).

<img width="345" alt="image" src="https://github.com/ppauel/youtube-forceskip/assets/82803315/b833303b-f6cf-4769-90bd-2fdcbfbbda13">
