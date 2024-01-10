(function(){
	var header = document.querySelector('header.header');
	var body = document.querySelector('body');
	var isMobileNavOpen = false;
	var mobileBreakpoint = 600;

	function openMobileNav() {
		header.classList.add('mobile-open');
		body.classList.add('modal-open');
	}

	function closeMobileNav() {
		header.classList.remove('mobile-open');
		body.classList.remove('modal-open');
	}

	function updateMobileNav() {
		isMobileNavOpen = !isMobileNavOpen;
		isMobileNavOpen ? openMobileNav() : closeMobileNav();
	}

	function debounce(func) {
  		var timer;
  		return function(event){
    		if(timer) clearTimeout(timer);
    		timer = setTimeout(func,100,event);
  		};
	}

	window.addEventListener("resize",debounce(function(e){
		if(window.innerWidth > mobileBreakpoint && isMobileNavOpen) {
			updateMobileNav();
		}
	}));

	document.querySelector('.hamburger').addEventListener('click', updateMobileNav);
})();