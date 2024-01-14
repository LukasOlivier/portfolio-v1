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

function checkMobileView() {
  // Set your mobile view threshold, e.g., 768 pixels
  const mobileThreshold = 768;

  if (window.innerWidth < mobileThreshold) {
    attachEventListeners();
  } else {
    // Remove event listeners if not in mobile view
    document.querySelectorAll(".timeline-content").forEach(item => {
      item.classList.remove("hidden");
    });
    document.querySelectorAll(".timeline-body").forEach(item => {
      item.removeEventListener("click", handleItemClick);
    });
  }
}

// Initial check on page load
checkMobileView();

// Listen for window resize events to update the functionality based on viewport width
window.addEventListener("resize", checkMobileView);
