let projects = [
    {
        
        name: 'Portfolio-1',
        about: 'my first portfolio site, never finished but very elegant and surely I will finish the work to use it as a photography portfolio.',
        tags: '#JavaScript, #Frontend',
        live: "https://merrilportfolio1.netlify.app/",
        github: 'https://github.com/MerrilBds/Portfolio1',
        image: 'img/portfolione.png',
        languages: {
            html: '25.2%',
            css: '46.0%',
            javascript: '28.8%',
        }
    },
    {
        name: 'MerrilBook',
        about: 'It is a small project that features a 3D book on a landing page.',
        tags: '#JavaScript, #Frontend',
        live: "https://merrilbook.netlify.app/index.html",
        github: 'https://github.com/MerrilBds/myBook',
        image: 'img/merrilbook.png',
        languages: {
            html: '58.6%',
            css: '21.3%',
            javascript: '20.1%',
        }

    },
    {
        name: 'MerrilParallax',
        about: 'It is a small project that features a parallax effect on the home page.',
        tags: '#JavaScript, #Frontend',
        live: "https://merrilparallax.netlify.app/",
        github: 'https://github.com/MerrilBds/WEB-prv/tree/master/Parallax',
        image: 'img/plx.png',
        languages: {
            html: '2.4%',
            css: '57.7%',
            javascript: '39.9%',
        }

    },
    {
        name: "AfroStuff",
        about: 'this is a site of a fictitious fast food company based on African flavors.',
        tags: '#Frontend, #JavaScript',
        live: "https://afrostuff.netlify.app/",
        github: 'https://github.com/MerrilBds/AfroStuff',
        image: 'img/afro.png',
        languages: {
            html: '38.2%',
            css: '41.1%',
            javascript: '20.7%',
        }
    }
];

let projectGallery = document.querySelector('.project-gallery');
const createProjects = (data) => {
    projectGallery.innerHTML += `
    <a href="#" class="project-card" data-tags="${data.tags}">
            <img src="${data.image}" class="project-img" alt="MerrilBook">
            <span class="tags">${data.tags}</span>
        </a>
    `;
}
//projects collection
projects.map((project, i) => {
    createProjects(project);
})