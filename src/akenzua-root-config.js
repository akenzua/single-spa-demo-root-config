import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@akenzua/navbar",
//   app: () => System.import("@akenzua/navbar"),
//   activeWhen: ["/"]
// });

registerApplication({
  name: "@akenzua/single-spa-demo-nav",
  app: () => System.import("@akenzua/single-spa-demo-nav"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
