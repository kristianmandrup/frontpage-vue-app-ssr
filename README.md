# Apollo VueJS 2.0 Hello World app

[![Greenkeeper badge](https://badges.greenkeeper.io/kristianmandrup/frontpage-vue-app-ssr.svg)](https://greenkeeper.io/)

This is the simple example VueJS/Apollo app that lives at dev.apollodata.com.

## Installation

Clone the repository and run `npm install`:

```
git clone https://github.com/Akryum/frontpage-vue-app
cd frontpage-vue-app
npm install
```


## Starting the app

This app talks to the hello world server, available here: https://github.com/apollostack/frontpage-server

Once you've installed and started that server, start this app with:

```
npm start
```

It will open a browser window, or you can browse to http://localhost:3000.


## Build the app to production

```
npm run build
```

## WIP: Server Side Rendering

Added `ssr.js` and `ssr-bundle.js` from [vue2-ssr-example](https://github.com/csbun/vue2-ssr-example)

Not working yet, but close...