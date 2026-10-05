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
								Observer.unobserve(e.target);
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
		
const animateLeft = new IntersectionObserver((entries) => {
		entries.forEach((e)=>{
				if (e.isIntersecting){
						e.target.style.transform = "translate(0)"; 
						e.target.style.opacity = "1";
						animateLeft.unobserve(e.target);
				}
		});
},
		{threshold: 0.3});
		
		$(".animate-left").each((idx, ele) =>{
				console.log(ele);
				animateLeft.observe(ele);
		});
		
		const animateTop = new IntersectionObserver((entries) => {
		entries.forEach((e)=>{
				if (e.isIntersecting){
						e.target.style.transform = "translate(0)"; 
						e.target.style.opacity = "1";
						animateLeft.unobserve(e.target);
				}
		});
},
		{threshold: 0.3});
		
		$(".animate-top").each((idx, ele) =>{
				console.log(ele);
				animateTop.observe(ele);
		});
		
});


function shareWebsite(event){
		navigator.share({
				title: "Street Python",
				text: "Solving problems by creating functional websites for business.",
				url: window.location.href
		});
		}