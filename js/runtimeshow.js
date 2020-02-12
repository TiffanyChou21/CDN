// get user config
var start_date = document.getElementById("runtionshow").getAttribute("start_date")

function show_date_time() {
    BirthDay = new Date(start_date);
    today = new Date();
    timeold = (today.getTime() - BirthDay.getTime());
    sectimeold = timeold / 1000
    secondsold = Math.floor(sectimeold);
    msPerDay = 24 * 60 * 60 * 1000
    e_daysold = timeold / msPerDay
    daysold = Math.floor(e_daysold);
    e_hrsold = (e_daysold - daysold) * 24;
    hrsold = setzero(Math.floor(e_hrsold));
    e_minsold = (e_hrsold - hrsold) * 60;
    minsold = setzero(Math.floor((e_hrsold - hrsold) * 60));
    seconds = setzero(Math.floor((e_minsold - minsold) * 60));
    webinfo_runtime_count.innerHTML = daysold + " days ";
}

function setzero(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}
var interval;
show_date_time();
clearInterval(interval);
interval = setInterval(show_date_time, 1000); //以ms为单位更新