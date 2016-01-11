setInterval(function() {
	$('#chat-txt-message').val('Hoii im Sue #autoskipbot!');
	$('.pusher-chat-widget-send-btn').click();
}, 2000000);

setInterval(function() { 
	if($('#maindubtotal').text() <= -4) { 
		$('.skip-el').click(); 
		$('#chat-txt-message').val('Skipped you fucking fag lel!');
		$('.pusher-chat-widget-send-btn').click();
	} 
}, 10000);


