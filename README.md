# Tiktok pixel helper

Helps you implement tiktok pixel events flawlessly.
Heavily inspired/copied from @ertemishakk but not for React.

## Install

```bash
npm install --save tiktok-pixel-helper
```

## Usage

### Simple usecase

```javascript
import TiktokPixel from "tiktokpixelhelper";

TiktokPixel.init("yourPixelIdGoesHere", debugMode);

TiktokPixel.pageView(); // For tracking page view
TiktokPixel.track(event, data); // For tracking default events. More info about standard events: https://ads.tiktok.com/help/article?aid=10028
```

## License

License: MIT
