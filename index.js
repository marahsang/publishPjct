// Get references to DOM elements
const addProjectBtn = document.getElementById("addProjectBtn");
const projectForm = document.getElementById("projectForm");
const projectList = document.getElementById("projectList");

// Show the form when the "Add New Project" button is clicked
addProjectBtn.addEventListener("click", () => {
  projectForm.style.display = projectForm.style.display === "none" ? "block" : "none";
});

// Handle form submission
projectForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from refreshing the page

  // Get input values
  const projectName = document.getElementById("projectName").value;
  const sourceCode = document.getElementById("sourceCode").value;
  const livePreview = document.getElementById("livePreview").value;

  // Create a new project item
  const projectItem = document.createElement("div");
  projectItem.classList.add("project-item");
  projectItem.innerHTML = `
    <span>${projectName}</span>
    <a href="${sourceCode}" target="_blank">View Code</a>
    <a href="${livePreview}" target="_blank">Live Preview</a>
  `;

  // Add the new project to the list
  projectList.appendChild(projectItem);

  // Clear the form
  projectForm.reset();
  projectForm.style.display = "none"; // Hide the form after submission
});