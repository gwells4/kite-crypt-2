/**
 * Created by username on 2016-10-31.
 */

// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher('851db8e6f3fad558a9be', {
	encrypted: true
});

var channel = pusher.subscribe('test_channel');
channel.bind('my_event', function(data) {
	alert('An event was triggered with message: ' + data.message);
});