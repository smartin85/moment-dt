import * as moment from 'moment-timezone';

declare module "moment-timezone" {
    interface MomentTsTz {
        ts: number;
        tz: string;
    }

    interface Moment {
        dt(): MomentTsTz;
    }

    interface MomentDt {
        (dt: MomentTsTz): moment.Moment;
        version: string;
    }

    const dt: MomentDt;
}

// require("moment-dt") === require("moment-timezone")
export = moment;