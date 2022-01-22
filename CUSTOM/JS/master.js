$( document ).ready(function() {
	$(".popUpIMG").click(function() {
		var imgSRC = $(this).css("background");
		imgSRC = imgSRC.substring(imgSRC.indexOf("\"")+1,imgSRC.lastIndexOf("\""));
		$('#myModal').show();
		$("#modalIMG").attr('src',imgSRC);
	});

	$("#closeModal").click(function() {
		$('#myModal').hide();
	});
	
	$("#videoModal").click(function() {
		$('#myModal2').show();
		// Add iFrame content here
		// <iframe id="trailer2" src="your_page_url" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"> </iframe> 
		$("#videoLocation").append('<iframe id="trailer" src="https://www.youtube.com/embed/tiIh4Xw2bnQ" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>');
	});

	$("#closeModal2").click(function() {
		$('#myModal2').hide();
		// Remove iFrame content here
		$("#videoLocation").empty();
	});
	
	/*$(document).keypress(function(e) { 
		if (e.keyCode == 27) { 
			$('#myModal').hide();
			$('#myModal2').hide();
			$("#videoLocation").empty();
		} 
	});*/
	
	$(document).on('keyup',function(evt) {
		if (evt.keyCode == 27) {
			//alert('Esc key pressed.');
			$('#myModal').hide();
			$('#myModal2').hide();
			$("#videoLocation").empty();
		}
	});
	
	$(".modalPOPUP").click(function() {
		$('#myModal').hide();
		$('#myModal2').hide();
		$("#videoLocation").empty();		
	});
});