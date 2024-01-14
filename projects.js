let projects = [
    {
        
        name: 'Portfolio-1',
        about: 'my first portfolio site, never finished but very elegant and surely I will finish the work to use it as a photography portfolio.',
        tags: '#JavaScript, #Frontend',
        live: "https://merrilportfolio1.netlify.app/",
        github: 'https://github.com/MerrilBds/Portfolio1',
        image: 'img/portfolione.png',
        languages: {
            html: '25%',
            css: '46%',
            javascript: '29%',
            java: '0%',
            reactnative: '0%',
            python: '0%',
            nodejs: '0%',
            reactjs: '0%',
            sql: '0%',
        }
    },
    {
        name: 'MerrilBook',
        about: 'It is a small project that features a 3D book on a landing page.',
        tags: '#JavaScript, #Frontend',
        live: "https://merrilbooks.netlify.app/index.html",
        github: 'https://github.com/MerrilBds/myBook',
        image: 'img/merrilbook.png',
        languages: {
            html: '59%',
            css: '21%',
            javascript: '20%',
            java: '0%',
            reactnative: '0%',
            python: '0%',
            nodejs: '0%',
            reactjs: '0%',
            sql: '0%',
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
            html: '11%',
            css: '58%',
            javascript: '29%',
            java: '0%',
            reactnative: '0%',
            python: '0%',
            nodejs: '0%',
            reactjs: '0%',
            sql: '0%',
        }

    },
    {
        name: "AfroStuff",
        about: 'this is a site of a fictitious fast food company based on African flavors.',
        tags: '#Frontend, #JavaScript, #React',
        live: "https://afrostuff.netlify.app/",
        github: 'https://github.com/MerrilBds/AfroStuff',
        image: 'img/afro.png',
        languages: {
            html: '38%',
            css: '41%',
            javascript: '21%',
            java: '0%',
            reactnative: '0%',
            python: '0%',
            nodejs: '0%',
            reactjs: '0%',
            sql: '0%',
        }
    }
];

let projectGallery = document.querySelector('.project-gallery');
const createProjects = (data) => {
    projectGallery.innerHTML += `
    <a href="#project-info" class="project-card" data-tags="${data.tags}" data-info='${JSON.stringify(data)}'>
            <img src="${data.image}" class="project-img" alt="MerrilBook">
            <span class="tags">${data.tags}</span>
        </a>
    `;
}
//projects collection
projects.map((project, i) => {
    createProjects(project);
})
