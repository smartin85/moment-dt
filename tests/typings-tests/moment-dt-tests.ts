/// <reference path="../../moment-dt.d.ts" />
import moment = require('../../moment-dt');


var timezone: string = moment().tz();
var dt:{ts: number, tz: string}  = moment().dt();
var mom: moment.Moment = moment.dt({ts: 1492630664, tz: "Europe/Berlin"});
var version: string = moment.dt.version;