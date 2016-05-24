jQuery(document).ready(function($) {
	/* toggle expandable text sections */
	$('.expand').click(function() {
		$(this).next().toggle('fast');
	});

	/* show puppet */
	$('#puppet').hover(function() {
		$('.speech').toggle();
	});


	/* Fullscreen Modals */
	$("#ux").animatedModal({
		modalTarget: 'uxModal',
		animatedIn: 'zoomIn',
		animatedOut: 'fadeOutDown',
		color: '#528296',
		animationDuration: '.4s'
	});

	$("#wd").animatedModal({
		modalTarget: 'wdModal',
		animatedIn: 'zoomIn',
		animatedOut: 'fadeOutDown',
		color: '#528296',
		animationDuration: '.4s'
	});

	$("#fed").animatedModal({
		modalTarget: 'fedModal',
		animatedIn: 'zoomIn',
		animatedOut: 'fadeOutDown',
		color: '#528296',
		animationDuration: '.4s'
	});

});