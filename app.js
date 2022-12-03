const toggleTheme = document.querySelector('.toggle-theme');
const circleToggleTheme = document.querySelector('.toggle-theme-circle');
const tablet = window.matchMedia('(max-width: 991px)');
const header = document.querySelector('header');
const toggleIcon = document.querySelector('.menu-icon');


// Toggle Theme
toggleTheme.addEventListener('click', () => {

	if(circleToggleTheme.classList.toggle('light-theme')) {
		circleToggleTheme.style.backgroundImage = "url('../images/header/toggle-02.svg')";
	} else {
		circleToggleTheme.style.backgroundImage = "url('../images/header/toggle-01.svg')";
	}

});


// Toggle Mobile Menu

document.querySelector('.menu-icon-wrapper').onclick = function(){
	document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
	document.querySelector('.header__menu--mobile').classList.toggle('none');
};






const sliderLine = document.querySelector('.introducing__slider');
const rectangle = document.querySelector('.introducing-rect');
const line = document.querySelector('.introducing-line-green');
const mediaQuery = window.matchMedia('(max-width: 991px)');


let offset = 0;
let offsetRect = 0;
let offsetLine = 0; 


(function slider() {
	document.querySelector('.btn-next').addEventListener('click', () => {

		if (mediaQuery.matches) {
			console.log('yes');
			offset = offset + 425;
			offsetRect = offsetRect + 100;
			offsetLine = offsetLine + 60;
			if (offset >= 1275) {
				offset = 0;
				offsetRect = 0;
				offsetLine = 0;
			}
			sliderLine.style.position = 'absolute';
			sliderLine.style.left = -offset + 'px';
			rectangle.style.left = offsetRect + 'px';
			line.style.left = offsetLine + 'px';
		} 
			else {
				offset = offset + 581;
				offsetRect = offsetRect + 142;
				offsetLine = offsetLine + 60;
				if (offset >= 1743) {
					offset = 0;
					offsetRect = 0;
					offsetLine = 0;
				}
				sliderLine.style.position = 'absolute';
				sliderLine.style.left = -offset + 'px';
				rectangle.style.left = offsetRect + 'px';
				line.style.left = offsetLine + 'px';
			}
	})
	
	document.querySelector('.btn-prev').addEventListener('click', () => {
	
		if(mediaQuery.matches) {
			offset = offset - 425;
			offsetRect = offsetRect - 100;
			offsetLine = offsetLine - 60;
			if (offset < 0) {
				offset = 850;
				offsetRect = 200;
				offsetLine = 120;
			}
			sliderLine.style.position = 'absolute'
			sliderLine.style.left = -offset + 'px';
			rectangle.style.left = offsetRect + 'px';
			line.style.left = offsetLine + 'px'
		} 
			else {
				offset = offset - 581;
				offsetRect = offsetRect - 142;
				offsetLine = offsetLine - 60;
				if (offset < 0) {
					offset = 1162;
					offsetRect = 284;
					offsetLine = 120;
				}
				sliderLine.style.position = 'absolute'
				sliderLine.style.left = -offset + 'px';
				rectangle.style.left = offsetRect + 'px';
				line.style.left = offsetLine + 'px'
		}
	})
})();




const btnShowText = document.querySelectorAll('[data-tab]');

btnShowText.forEach((item) => {
	item.addEventListener('click', function () {
		const contentBox = document.querySelector('#' + this.dataset.tab);
		contentBox.classList.toggle('none');
		item.classList.toggle('green-arrow-active');
	})
})


// document.querySelector('.green-arrow').addEventListener('click', () => {
	
// }) 