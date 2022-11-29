window.addEventListener ('DOMContentLoaded', ()=> {


	const	body = document.body,
		  	scrollUp = "scroll-up",
		  	scrollDown = "scroll-down",
			hideHead = "hide-head";
	let 	lastScroll = 0;


	//check for scrol action

	window.addEventListener ('scroll', ()=> {
		
		//hide and reveal header
		const currentScroll = window.pageYOffset;
		
			  if (currentScroll <= 200) {
				body.classList.remove(scrollUp);
				body.classList.remove(hideHead);
				return;
			  }

			  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
				// down
				body.classList.remove(scrollUp);
				body.classList.add(scrollDown);
				body.classList.add(hideHead);

			  } else if (
				currentScroll < lastScroll &&
				body.classList.contains(scrollDown)
			  ) {
				// up
				body.classList.remove(scrollDown);
				body.classList.add(scrollUp);

			  }
			  lastScroll = currentScroll;
			
		
	})
	// end scroll action

});