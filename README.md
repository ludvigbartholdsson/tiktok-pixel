# Tiktok pixel helper

Helps you implement tiktok pixel events flawlessly.
Heavily inspired/copied by/from FBQ-package by Sem Postma.

## Install

```bash
npm install --save tiktokpixelhelper
```

## Usage

### Simple usecase

```javascript
import { init, track } from "tiktokpixelhelper";

init("pixelId");
track("ViewContent");
```

### More complex usecase

```javascript
import { init, track } from "tiktokpixelhelper";

init("pixelId");
track("ViewContent", {});
```

## License

License: MIT
