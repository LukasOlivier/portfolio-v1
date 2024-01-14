function toggleContent(e) {
  e.currentTarget.querySelector(".timeline-content").classList.toggle("hidden");
}

function handleItemClick(event) {
  toggleContent(event);
}

function attachEventListeners() {
  document.querySelectorAll(".timeline-content").forEach(item => {
    item.classList.add("hidden");
  });
  document.querySelectorAll(".timeline-body").forEach(item => {
    item.addEventListener("click", handleItemClick);
  });
}

function removeAosAttribute() {
  const timelineContainers = document.querySelectorAll(".timeline-container");
  timelineContainers.forEach(container => {
    container.removeAttribute("data-aos");
  });
}

function restoreAosAttribute() {
  const timelineContainers = document.querySelectorAll(".timeline-container");
  timelineContainers.forEach(container => {
    container.setAttribute("data-aos", "fade-right");
  });
}

function checkMobileView() {
  // Set your mobile view threshold, e.g., 768 pixels
  const mobileThreshold = 768;

  if (window.innerWidth < mobileThreshold) {
    attachEventListeners();
    removeAosAttribute();
  } else {
    document.querySelectorAll(".timeline-body").forEach(item => {
      item.removeEventListener("click", handleItemClick);
    });
    restoreAosAttribute();
  }
}



// Initial check on page load
checkMobileView();

// Listen for window resize events to update the functionality based on viewport width
window.addEventListener("resize", checkMobileView);
