const url = `https://holmenfrontend.no/portfolioApi/wp-json/wp/v2/posts?_embed`;
const contentContainer = document.querySelector("#contentWrapper");

async function getProjects() {
  try {
    let response = await fetch(url);
    let projects = await response.json();
    contentContainer.innerHTML = "";
    console.log(projects);
    createHTML(projects);
    const project = document.querySelectorAll(".project");
    console.log(project);
    project[0].innerHTML += `<a class="projectLink" href="https://studentcooking2.netlify.app/">Website</a>
    <a class="projectLink" href="https://github.com/Mindless-dev/StudentCooking">Github</a>`;
    project[1].innerHTML += `<a class="projectLink" href="https://communityscience.netlify.app/">Website</a>
    <a class="projectLink" href="https://github.com/Mindless-dev/2020-11-17_semester_project_ca_kenny_andre_holmen_fp">Github</a>`;
    project[2].innerHTML += `<a class="projectLink" href="https://fileorganizing-gamehub-project.netlify.app/">Website</a>
    <a class="projectLink" href="https://github.com/Mindless-dev/File-organising-">Github</a>`;
  } catch (error) {
    contentContainer.innerHTML = `<p class="error">An Error has occured please refresh the page<p>`;
    contentContainer.style.minHeight = "0px";
  }
}

getProjects();

function createHTML(projects) {
  for (let i = 0; i < projects.length; i++) {
    let links = projects[i].excerpt.rendered;
    console.log(links);
    contentContainer.innerHTML += `
    <section class="project"> 
    <h2>${projects[i].title.rendered}</h2>
    <img src="${projects[i]._embedded["wp:featuredmedia"]["0"].source_url}" alt="${projects[i]._embedded["wp:featuredmedia"]["0"].alt_text}">
    <a class="projectLink" href="reports.html?id=${projects[i].id}"> Report</a>
    </section>`;
  }
}
