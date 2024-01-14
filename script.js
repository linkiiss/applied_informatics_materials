$(document).ready(function () { 
	$('.subjectName').click(function() {
        $(this).next('.subjectMaterialsContainer').toggle();
    });
});