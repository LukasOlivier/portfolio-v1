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
document.addEventListener("mousemove", (event) => {
  const glowPointer = document.querySelector(".glow-pointer");

  // Set the position of the glow pointer to the mouse coordinates
  glowPointer.style.left = `${event.clientX}px`;
  glowPointer.style.top = `${event.clientY}px`;

  // Optional: Add an animation effect when the pointer moves
  glowPointer.style.backgroundColor = "rgba(255, 255, 255, 0.5)";

  // Reset the glow after a short delay (adjust the delay as needed)
  setTimeout(() => {
    glowPointer.style.backgroundColor = "rgba(255, 255, 255, 0)";
  }, 300);
});
