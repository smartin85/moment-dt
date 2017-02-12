'use strict';

describe("moment-dt", function(){

    it("should be defined", function(){
        expect(moment.dt).toBeDefined();
    });

    it("should be a function", function(){
        expect(typeof moment.dt).toBe("function");
    });

    it("should have the same version as the package", function(){
        expect(moment.dt.version).toBe(window.globals.packageVersion);
    });

    it("should extend the moment prototype with a dt function", function(){
        expect(typeof moment.fn.dt).toBe("function");
    });

    it("should convert a valid dt-object to a moment", function() {
        expect(moment.dt({ts: 1486920600, tz: "Europe/Berlin"}).format("YYYY-MM-DD HH:mm:ss")).toBe("2017-02-12 18:30:00");
    });

    it("should convert a moment to a dt-object", function() {
        var testObj = {ts: 1486920600, tz: "Europe/Berlin"},
            testObj2 = {ts: 1518456600, tz: "Europe/Berlin"},
            testWithNull1 = {ts: null, tz: "Europe/Berlin"},
            testWithNull2 = {ts: 1486920600, tz: null},
            testWithNull3 = {ts: null, tz: null };

        expect(moment.dt(testObj).dt()).toEqual(testObj);
        expect(moment.dt(testObj).add(1, 'year').dt()).toEqual(testObj2);
        expect(moment.dt(testWithNull1).dt()).toEqual(testWithNull1);
        expect(moment.dt(testWithNull2).dt()).toEqual(testWithNull2);
        expect(moment.dt(testWithNull3).dt()).toEqual(testWithNull3);
    })
});