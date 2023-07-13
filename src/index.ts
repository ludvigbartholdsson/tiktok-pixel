let initialized = false;

export const init = (pixelId: string, options = {}) => {
  if (typeof window === "undefined") return initialized;
  if (initialized) return initialized;
  if (typeof pixelId !== "string" || pixelId.trim().length === 0)
    throw new TypeError('pixelId should be a non empty "string"');
  if (typeof options !== "object")
    throw new TypeError('options should be of type "object"');

  /* tslint:disable */
  // Tiktok Pixel Code -->
  const v = (function (w, d, t) {
    w.TiktokAnalyticsObject = t;
    var ttq = (w[t] = w[t] || []);
    (ttq.methods = [
      "page",
      "track",
      "identify",
      "instances",
      "debug",
      "on",
      "off",
      "once",
      "ready",
      "alias",
      "group",
      "enableCookie",
      "disableCookie",
    ]),
      (ttq.setAndDefer = function (t, e) {
        t[e] = function () {
          t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
        };
      });
    for (var i = 0; i < ttq.methods.length; i++)
      ttq.setAndDefer(ttq, ttq.methods[i]);
    (ttq.instance = function (t) {
      for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
        ttq.setAndDefer(e, ttq.methods[n]);
      return e;
    }),
      (ttq.load = function (e, n) {
        var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
        (ttq._i = ttq._i || {}),
          (ttq._i[e] = []),
          (ttq._i[e]._u = i),
          (ttq._t = ttq._t || {}),
          (ttq._t[e] = +new Date()),
          (ttq._o = ttq._o || {}),
          (ttq._o[e] = n || {});
        n = document.createElement("script");
        (n.type = "text/javascript"),
          (n.async = !0),
          (n.src = i + "?sdkid=" + e + "&lib=" + t);
        e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(n, e);
      });
  })(window, document, "ttq");
  // End Tiktok Pixel Code -->
  /* tslint:enable */

  const ttq = (window as any).ttq;
  ttq.load(pixelId);
  ttq.page();
  initialized = true;
  return initialized;
};

type TrackType =
  | "AddPaymentInfo"
  | "AddToCart"
  | "AddToWishlist"
  | "ClickButton"
  | "CompletePayment"
  | "CompleteRegistration"
  | "Contact"
  | "Download"
  | "InitiateCheckout"
  | "PlaceAnOrder"
  | "Search"
  | "SubmitForm"
  | "Subscribe"
  | "ViewContent";

export const track = (trackType: TrackType, options?: any) => {
  if (typeof window !== "undefined" && initialized && "ttq" in window) {
    if (options) (window as any).ttq("track", trackType, options);
    else (window as any).ttq("track", trackType);
    return true;
  } else {
    return false;
  }
};
