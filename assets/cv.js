fetch('./data/cv.json')
	.then((res) => res.json())
	.then((data) => {
		// Set dynamic title
		document.title = `${data.header.name} | ${data.header.title}`

		// Get elements
		const header = document.getElementById('cv-header')
		const sectionsContainer = document.getElementById('sections-container')

		// Header
		header.querySelector('h1').textContent = data.header.name
		header.querySelector('p:nth-of-type(1)').textContent = data.header.title
		header.querySelector('p:nth-of-type(2)').innerHTML = `
		${data.header.location} · ${data.header.phone} 
  		<a href="mailto:${data.header.email}" title="Email">
    		<i class="fas fa-envelope"></i>
  		</a>
		<a href="${data.header.github}" target="_blank" title="GitHub">
			<i class="fab fa-github"></i>
		</a>
		<a href="${data.header.linkedin}" target="_blank" title="LinkedIn">
			<i class="fab fa-linkedin"></i>
		</a>`

		header.classList.remove('hidden')

		// Define sections configuration from cv.json
		const sections = [
			// {
			// 	id: 'summary-section',
			// 	title: 'Professional Summary',
			// 	render: () => `<p>${data.summary}</p>`,
			// },

			{
				id: 'experience-section',
				title: 'Experience',
				render: () =>
					data.experience
						.map(
							(job) => `
					<article>
						<div class="job">
							<h3>${job.company} — ${job.role}</h3>
							<span>${job.period} <span class="divider-sm">❖</span> ${job.location}</span>
						</div>
						<ul>
							${job.items.map((item) => `<li>${item}</li>`).join('')}
						</ul>
					</article>
				`,
						)
						.join(''),
			},
			{
				id: 'education-section',
				title: 'Education',
				render: () => data.education.map((edu) => `<p>${edu}</p>`).join(''),
			},
			{
				id: 'skills-section',
				title: 'Skills',
				render: () =>
					`<div id="skills-container">${data.skills
						.map((s) => `<ul><li><strong>${s.title}:</strong> ${s.items.join(', ')}</li></ul>`)
						.join('')}</div>`,
			},
			{
				id: 'interests-section',
				title: 'Interests',
				render: () => data.interests.map((i) => `<p>${i}</p>`).join(''),
			},
			{
				id: 'references-section',
				title: 'References',
				render: () => data.references.map((i) => `<p>${i}</p>`).join(''),
			},
		]

		// Loop through sections and create them
		sections.forEach((section) => {
			const sectionElement = document.createElement('section')
			sectionElement.id = section.id
			sectionElement.innerHTML = `
				<h2>${section.title}</h2>
				${section.render()}
			`
			sectionsContainer.appendChild(sectionElement)
		})

		// Hide loader
		setTimeout(() => {
			document.getElementById('loader').style.display = 'none'
			document.getElementById('cv').style.display = 'block'
		}, 200) // 200ms = 0.2 second
	})
	.catch((err) => console.error(err))
