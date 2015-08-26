# webpack-react-demo
Experiments with determining how to use Webpack and React.

## Installation

```
npm install
```

## Development mode

```
npm start
```

Includes [`react-hot-loader`](https://github.com/gaearon/react-hot-loader).

## Build development target

```
npm run build
```

Outputs files to `./build`. This output is identical to what is continuously compiled when in development mode.

## Release for production

```
npm run release
```

Outputs files to `./release`. Vender code is separated from application code, and all code is minified.

## Resources

- [*Setting Up Webpack for React and Hot Module Replacement*](https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement)
- [*The End of Global CSS*](https://medium.com/seek-ui-engineering/the-end-of-global-css-90d2a4a06284)
- [*Webpack How-to*](https://github.com/petehunt/webpack-howto)
- [*React Webpack Cookbook*](https://christianalfoni.github.io/react-webpack-cookbook/)
- [`hjs-webpack`](https://github.com/HenrikJoreteg/hjs-webpack)
- [`webpack-demo`](https://github.com/css-modules/webpack-demo)
- [*How-to setup Webpack on an ES6 React Application with SASS?*](http://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html)
