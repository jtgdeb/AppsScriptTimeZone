//This is a comment section, remember that timeZone is your global variable!

var timeZone = CalendarApp.getDefaultCalendar().getTimeZone();

function timeStamp() {

    var date = new Date(); 
    var time = Utilities.formatDate(date, timeZone, "hh:mm a");
    var day = Utilities.formatDate(date, timeZone, "MM/dd/yyyy");
    var now = time+ " " +day;
    
    return now
}

