const Service = {
				props: ["logo", "content", "title"],
				template: `
				<div class="service animate-right">
				<div class="sym">
				<span :class="logo"></span>
				</div>
				<div class="s-body">
				<h3 class="service-h3">{{title}}</h3>
				<p class="service-content">{{content}}</p>
				</div>
				</div>
				`
}


const Reason = {
				props: ["logo", "content", "title"],
				template: `
				<div class="reason animate-left">
				<div class="r-header">
				<div class="r-sym"><span :class="logo"></span></div>
				<h3 class="r-h3">{{title}}</h3>
				</div>
				
				<div class="r-body">{{content}}</div>
				</div>
				`
}


export {Service, Reason}

