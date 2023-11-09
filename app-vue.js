import {
  createApp,
  ref,
  computed,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const changeBgColor = (event) => {
      document.body.style.background = event.target.id;
    };

    return {
      changeBgColor,
    };
  },
}).mount("#app");
