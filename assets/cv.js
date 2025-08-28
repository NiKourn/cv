fetch('./data/cv.json')
	.then((res) => res.json())
	.then((data) => {
		// Set dynamic title
		document.title = `${data.header.name} | ${data.header.title}`

		// Get all elements
		const header = document.getElementById('cv-header')
		const summary = document.querySelector('#summary-section p')
		const expSection = document.getElementById('experience-section')
		const skillsContainer = document.getElementById('skills-container')
		const eduSection = document.getElementById('education-section')
		const interestsSection = document.getElementById('interests-section')

		// Header
		header.querySelector('h1').textContent = data.header.name
		header.querySelector('p:nth-of-type(1)').textContent = data.header.title
		header.querySelector(
			'p:nth-of-type(2)'
		).innerHTML = `${data.header.location} · ${data.header.phone} <span class="divider-lg">❖</span> <a href="mailto:${data.header.email}">${data.header.email}</a> <span class="divider-lg">❖</span> <a href="${data.header.github}" target="_blank">${data.header.github}</a>`
		header.classList.remove('hidden')

		// Summary
		summary.textContent = data.summary
		document.getElementById('summary-section').classList.remove('hidden')

		// Experience
		data.experience.forEach((job) => {
			const article = document.createElement('article')
			article.innerHTML = `
        <div class="job">
          <h3>${job.company} — ${job.role}</h3>
          <span>${job.period} <span class="divider-sm">❖</span> ${job.location}</span>
        </div>
        <ul>
          ${job.items.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      `
			expSection.appendChild(article)
		})
		expSection.classList.remove('hidden')

		// Skills
		skillsContainer.innerHTML = data.skills
			.map((s) => `<ul><li><strong>${s.title}:</strong> ${s.items.join(', ')}</li></ul>`)
			.join('')
		document.getElementById('skills-section').classList.remove('hidden')

		// Education
		eduSection.innerHTML += data.education.map((edu) => `<p>${edu}</p>`).join('')
		eduSection.classList.remove('hidden')

		// Interests
		interestsSection.innerHTML += data.interests.map((i) => `<p>${i}</p>`).join('')
		interestsSection.classList.remove('hidden')

		// Hide loader
		setTimeout(() => {
			document.getElementById('loader').style.display = 'none'
			document.getElementById('cv').style.display = 'block'
		}, 200) // 200ms = 0.2 second
	})
	.catch((err) => console.error(err))
