import * as Sentry from "@sentry/node"


Sentry.init({
  dsn: "https://8c36516c4e3ed9c6528f05cb499d96cf@o4511748567269376.ingest.us.sentry.io/4511748573167616",
  dataCollection: {
    // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#dataCollection
    // userInfo: false,
    // httpBodies: [],
  },
});