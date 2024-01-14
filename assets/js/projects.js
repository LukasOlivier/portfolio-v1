const SELECTED = ["school", "personal"];

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("click", (e) => {
    clearProjects();
    const filter = e.target.value.toLowerCase();
    if (SELECTED.includes(filter)) {
      SELECTED.splice(SELECTED.indexOf(filter), 1);
    } else {
      SELECTED.push(filter);
    }

    e.target.classList.toggle("selected");
    for (const item of SELECTED) {
      filterProjects(item);
    }
  });
});

function clearProjects() {
  const projects = document.querySelectorAll(".timeline-container");
  projects.forEach((project) => {
    project.classList.add("filtered-out");
  });
}

function filterProjects(filter) {
  const projects = document.querySelectorAll(".timeline-container");
  projects.forEach((project) => {
    if (project.innerHTML.toLowerCase().includes(filter)) {
      project.classList.remove("filtered-out");
    }
  });
}