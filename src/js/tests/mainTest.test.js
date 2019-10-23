const tests = require('./forTests');

describe('Converting Seconds to HH:MM:SS format', () => {
    test('90 seconds should be 01:30 ', () => {
        expect(tests.vc.ssToHHMMSS(90)).toBe("01:30");
    });

    test('45 seconds should be 00:45', () => {
        expect(tests.vc.ssToHHMMSS(45)).toBe("00:45");
    });

    test('3600 seconds should be 01:00:00 ', () => {
        expect(tests.vc.ssToHHMMSS(3600)).toBe("01:00:00");
    });

    test('3599 seconds should be 59:59  ', () => {
        expect(tests.vc.ssToHHMMSS(3599)).toBe("59:59");
    });

    test('90,000 seconds should be 25:00:00 ', () => {
        expect(tests.vc.ssToHHMMSS(90000)).toBe("25:00:00");
    });

    test('less then 60 seconds should be 00:XX ', () => {
        expect(tests.vc.ssToHHMMSS(Math.floor(Math.random() * 60))).toContain("00:");
    });

});
