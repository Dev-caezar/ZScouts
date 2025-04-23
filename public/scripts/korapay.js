window.Korapay = (function () {
    const script = document.createElement("script");
    script.src = "https://checkout.korapay.com/inline.js";
    document.head.appendChild(script);
  
    const queue = [];
    const korapay = {
      initialize: function (options) {
        if (typeof window.Korapay !== "undefined" && typeof window.Korapay.initialize === "function") {
          window.Korapay.initialize(options);
        } else {
          queue.push(options);
        }
      },
    };
  
    script.onload = function () {
      if (typeof window.Korapay.initialize === "function") {
        while (queue.length > 0) {
          const options = queue.shift();
          window.Korapay.initialize(options);
        }
      }
    };
  
    return korapay;
  })();
  