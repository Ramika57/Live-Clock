function realtimeClock() {
    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    var amPm = ( hours > 12 ) ? "AM" : "PM";

    hours = (hours > 12) ? (hours - 12) : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('clock').innerHTML = hours + "  :  " + minutes + "  :  " + seconds + " " + amPm;
    var t = setTimeout(realtimeClock, 500);

    if (hours > 5 && hours >= 5) {
        document.getElementById('img-background').src="https://wallpaperaccess.com/full/804379.jpg";
    } else if (hours > 11 && hours >= 11) {
        document.getElementById('img-background').src="https://images.unsplash.com/photo-1517690623533-ca77a9a4b402?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max";
    } else if (hours > 15 && hours >= 15) {
        document.getElementById('img-background').src="https://hdwallsource.com/img/2014/5/hd-purple-sunset-23188-23838-hd-wallpapers.jpg";
    } else if (hours > 20 && hours >= 20) {
        document.getElementById('img-background').src="https://wallpaperaccess.com/full/83106.jpg";
    } else if (hours > 23 && hours >= 23) {
        document.getElementById('img-background').src="https://www.pixelstalk.net/wp-content/uploads/2016/12/City-At-Night-Desktop-Wallpaper.jpg";
    } else {
        console.log('There was an error loading the image, please check conditional statement');
    }

};   


