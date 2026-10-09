const app = Vue.createApp({
				computed: {
								age(){
												const dob = new Date("2005-12-25");
												const current = new Date();
												let age = current.getYear() - dob.getYear();
												if (current.getMonth() >= dob.getMonth()){
																return age;
												}
												return age - 1;
								}
				}
});
app.mount("#app");

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

