jQuery('#jform_params_text').change(function (e)
{
	console.log('jQuery event:', e);
	alert('jQuery event called! New value: ' + jQuery(this).val());
});
jQuery('#jform_params_calendar').change(function (e)
{
	console.log('jQuery event:', e);
	alert('jQuery event called! New value: ' + jQuery(this).val());
});
document.getElementById('jform_params_text').addEventListener('change', function (e)
{
	console.log('Vanilla JS event:', e);
	alert('Vanilla JS event called! New value: ' + this.value);
});
document.getElementById('jform_params_calendar').addEventListener('change', function (e)
{
	console.log('Vanilla JS event:', e);
	alert('Vanilla JS event called! New value: ' + this.value);
});
