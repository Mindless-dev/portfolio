const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const id = params.get("id");
const url = "https://holmenfrontend.no/portfolioApi/wp-json/wp/v2/posts/" + id;
const contentWrapper = document.querySelector("#report");

async function getProject() {
  try {
    const response = await fetch(url);
    const project = await response.json();
    console.log(project);
    createHTML(project);
  } catch {
    contentWrapper.innerHTML = `<p class="error">An Error has occured please refresh the page<p>`;
  }
}

getProject();

function createHTML(project) {
  console.log(project.title.rendered);
  console.log(project.content.rendered);
  contentWrapper.innerHTML = `<h1>${
    project.title.rendered + " " + "Report"
  }</h1>
  <div class="backLinkLayout"><a class="back" href="index.html">Back to Portfolio</a></div>
  <section class="reportContent">
  ${project.content.rendered}</section>`;
}
