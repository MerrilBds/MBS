//project
let projectCards = [...document.querySelectorAll('.project-card')];

//filters
const filters = [...document.querySelectorAll('.filter-btn')];

filters.map((btn, i) => {
    btn.addEventListener('click', () => {
        filters.map(item => item.classList.remove('active'));

        btn.classList.add('active');

        let tag = btn.getAttribute('data-filter-value');

        projectCards.map( project => {
            if (tag == 'Tout') {
                project.style.display = null;
            } else if (!project.getAttribute('data-tags').includes(tag)) {
                project.style.display = 'none';
            } else {
                project.style.display = null;
            }
        })
    })
})