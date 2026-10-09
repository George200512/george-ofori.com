const Project = {
				props: ["name", "href", "mockup_img", "skills", "description"],
				template: `
				<div class="project">
				<img class="mockup_img img-responsive" :src='"images/mockups/"+mockup_img' :alt="name + ' Mockup image'" />
				<div class="proj-body">
				<span class="project-label">{{name}}</span>
				<p class="project-descr">{{description}}</p>
				<ul class="skills">
		<li class="skill" v-for="skill in skills"><a :href="skill.link">{{skill.name}}</a></li>
				</ul>
				<a class="visit-link" :href="href">View Site</a>
				</div>
				</div>
				`
}

export {Project}

