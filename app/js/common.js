// прелоадер
document.body.onload = function() {

	setTimeout(function() {
		var preloader = document.getElementById('page-preloader');
		if( !preloader.classList.contains('done') )
		{
			preloader.classList.add('done');
		}
	}, 1000);
	
}

// прелоадер плавный скролл до якоря
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
});