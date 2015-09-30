setInterval(function() {
	$('#chat-txt-message').val('AUTO SKIP is running get down votes to -5 to skip the song!');
	$('.pusher-chat-widget-send-btn').click();
}, 2000000);

setInterval(function() { 
	if($('#maindubtotal').text() <= -5) { 
		$('.skip-el').click(); 
		$('#chat-txt-message').val('AFK BOT: Skipped to many down votes!');
		$('.pusher-chat-widget-send-btn').click();
	} 
}, 10000);
