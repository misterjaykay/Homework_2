var update = setInterval( function() {  
    var localTime  = moment.utc().toDate();
    var currentTime = moment(localTime).format("h:mm:ss a");
    var currentDate = moment(localTime).format("MMM Do YYYY");
    $(".date-goes-here").text(currentDate);
    $(".time-goes-here").text(currentTime);

}, 1000)
setInterval(update, 1000);