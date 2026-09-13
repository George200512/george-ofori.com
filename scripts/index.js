$(document).ready(function (event){$(".elevator").click(function (event){
				event.preventDefault();
				window.scrollTo(
				{
						top: 0,
						behavior: "smooth"
				}
				);
});
		
		const Observer = new IntersectionObserver((entries)=>{
				entries.forEach(e=>{
						if (e.isIntersecting){
								const target = Number(e.target.dataset.target);
								let current = 0;
								const updateCounter = ()=>{
										const increment = target / 100;
										current += increment;
										if (current < target){
												e.target.textContent = `${Math.ceil(current)} +`;
												requestAnimationFrame(updateCounter);
										}else{
												e.target.textContent = `${target} +`;
										}
								}
								updateCounter();
								
						}
				});
		}, 
		{threshold: 0.3}
		);
		
		const counters = $(".number");
		counters.each((idx, ele)=> {
		Observer.observe(ele);
		}
		);
		
});
