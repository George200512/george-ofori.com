import {Service, Reason} from "../components/services.js";
const app = Vue.createApp({
				components: {Service, Reason}
});
app.mount("#app");

const animateRight = new IntersectionObserver((entries) => {
		entries.forEach((e)=>{
				if (e.isIntersecting){
						e.target.style.transform = "translate(0)"; 
						e.target.style.opacity = "1";
						animateRight.unobserve(e.target);
				}
		});
},
		{threshold: 0.3});
		
		$(".animate-right").each((idx, ele) =>{
				console.log(ele);
				animateRight.observe(ele);
		});

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

