'use strict';

function checkTime(i) {
    if (i < 10) {
        i = '0' + i;
    } // add zero in front of numbers < 10
    return i;
}



function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    postMessage('IST: ' + h + ':' + m + ':' + s, '*');
    setTimeout(function() {
        startTime();
    }, 500);
}

startTime();