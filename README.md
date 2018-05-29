# moment-dt
[![MIT License][license-image]][license-url] 
[![npm version][npm-image]][npm-url]
[![Bower version][bower-image]][bower-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

Convert utc-unix-timestamp-with-timezone-objects from and to moment.js

## Getting Started
moment-dt can be included in your app by different ways:

### Node.js
moment-dt can be installed with npm and required into a script:
```
npm install --save moment-dt
```
```js
var moment = require('moment-timezone');
require('moment-dt');
```


### Browser
Just include the momentjs script and then the moment-dt script:
```html
<script src="moment.js"></script>
<script src="moment-timezone-with-data.js"></script>
<script src="moment-dt.min.js"></script>
```

### Browser with Require.js
```js
define(["moment-timezone-with-data", "moment-dt"], function (moment) {
    // you probably won´t need a reference to moment-dt istself, so include it last
});
```

### Bower
```
bower install --save moment-dt
```


## Creating a moment from a dt-object

```js
var obj = { ts: 1486920600, tz: "Europe/Berlin" };
var myMoment = moment.dt(obj);

myMoment.format();
// "2017-02-12T18:30:00+01:00"

moment.dt({ ts: null, tz: "Europe/Berlin" }).format(); 
// "Invalid date"

moment.dt({ ts: 1486920600, tz: null }).format(); 
// ERR: Moment Timezone has no data for invalid timezone.
// "2017-02-12T18:30:00+01:00" local time
```

## Creating a dt-object from a moment
```js
moment.dt({ ts: 1486920600, tz: "Europe/Berlin" }).dt();
// { 
//     ts: 1486920600, 
//     tz: "Europe/Berlin" 
// }

moment.dt({ ts: null, tz: "Europe/Berlin" }).dt();
// { 
//     ts: null, 
//     tz: "Europe/Berlin" 
// }

moment.dt({ ts: 1486920600, tz: null }).dt();
// ERR: Moment Timezone has no data for invalid timezone.
// { 
//     ts: 1486920600, 
//     tz: null 
// }

moment.dt({ ts: 1486920600, tz: "Europe/Berlin" }).add(1, 'year').dt();
// { 
//     ts: 1518456600, 
//     tz: "Europe/Berlin" 
// }
```

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-image]: https://badge.fury.io/js/moment-dt.svg
[npm-url]: https://badge.fury.io/js/moment-dt

[bower-image]: https://badge.fury.io/bo/moment-dt.svg
[bower-url]: https://badge.fury.io/bo/moment-dt



[travis-image]: https://travis-ci.org/smartin85/moment-dt.svg?branch=master
[travis-url]: http://travis-ci.org/smartin85/moment-dt

[coveralls-image]: https://coveralls.io/repos/github/smartin85/moment-dt/badge.svg
[coveralls-url]: https://coveralls.io/github/smartin85/moment-dt

[versioneye-image]: https://www.versioneye.com/user/projects/58a098466a7781004a93fadb/badge.svg
[versioneye-url]: https://www.versioneye.com/user/projects/58a098466a7781004a93fadb

[snyk-image]: https://snyk.io/test/github/smartin85/moment-dt/badge.svg
[snyk-url]: https://snyk.io/test/github/smartin85/moment-dt
