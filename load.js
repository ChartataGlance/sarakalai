
let sR = new Date(SunCalc.getTimes(new Date(), $lat, $lon).sunrise).getTime();
let sS = new Date(SunCalc.getTimes(new Date(), $lat, $lon).sunset).getTime();
let dT = new Date().getTime();
let aho = sS - sR;
let rat = 86400000 - aho;


var fm, to, blade, phase;
SunCalc.getMoonIllumination().phase < 0.5 ? (phase = 'V') : (phase = 'T');


if (dT > sR && dT < sS) {
    fm = sR;
    to = sS;
    WDay = [
        'Sun/Aho',
        'Mon/Aho',
        'Tue/Aho',
        'Wed/Aho',
        'Thu/Aho',
        'Fri/Aho',
        'Sat/Aho',
    ];
    wk = new Date().getDay();
    blade = WDay[wk];

} else if (dT > sR && dT > sS) {
    fm = sR;
    to = sS;
    WDay = [
        'Sun/Rat',
        'Mon/Rat',
        'Tue/Rat',
        'Wed/Rat',
        'Thu/Rat',
        'Fri/Rat',
        'Sat/Rat',
    ];
    wk = new Date().getDay();
    blade = WDay[wk];

} else if (dT < sR && dT > sS - 86400000) {
    let fm = sR - 86400000;
    let to = sS - 86400000;

    WDay = [
        'Sun/Rat',
        'Mon/Rat',
        'Tue/Rat',
        'Wed/Rat',
        'Thu/Rat',
        'Fri/Rat',
        'Sat/Rat',
    ];

    wk = new Date().getDay() - 1;
    if (wk == -1) {
        wk = 6;
    }
    blade = WDay[wk];
}
