"use strict";

(function (root, factory) {
	/* istanbul ignore next */
	if (typeof exports === 'object') {
		module.exports = factory(require('moment'));            // Node
	} else if (typeof define === 'function' && define.amd) {
		define('moment-dt', ['moment'], factory);               // AMD
	} else {
		root.moment = factory(root.moment);                     // Browser
	}
}(this, function (moment) {

	var VERSION = "1.0.1";

	/* istanbul ignore if */
	if (!moment.tz) {
		throw new Error("Can't find moment-timezone");
	}

	moment.fn.dt = function () {
		return {
			ts: this.isValid() ? moment.utc(this).unix() : null,
			tz: this.tz() || null
		};
	};

	moment.dt = function (dt) {
		dt || (dt = {});
		return moment.unix(typeof dt.ts === 'number' ? dt.ts : 'invalid').tz(dt.tz || 'invalid timezone');
	};

	moment.dt.version = VERSION;

	return moment;
}));