function openTab(event, tabName) {
  // Get all elements with class="tab-content" and hide them
  const tabContent = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("active");
  }

  // Get all elements with class="tab-link" and remove the class "active"
  const tabLinks = document.getElementsByClassName("tab-link");
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).classList.add("active");
  event.currentTarget.classList.add("active");
}
