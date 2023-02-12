// Full Name: Ben Walsh
// StudentID: 100640803
// Date Completed: 2023-02-11

// Function to change the text of the Products link to Projects
function changeProductsToProjects(linkId, newHref) {
    let link = document.querySelector(`#${linkId}`);
    link.href = newHref;
    //document.querySelector("#Projects").textContent = "Projects";
  }
  
  // Function to add a new link to the Navbar
  function addHumanResourcesLink() {
    // Create a new list item
    let newListItem = document.createElement("li");
    newListItem.classList.add("nav-item");
    // Create a new link
    let newLink = document.createElement("a");
    newLink.classList.add("nav-link");
    newLink.href = "#";
    newLink.textContent = "Human Resources";
    // Create a new font-icon
    let newFontIcon = document.createElement("i");
    newFontIcon.classList.add("fas", "fa-users");
    newLink.appendChild(newFonticon);
    newListItem.appendChild(newLink);
    // Insert the new list item in the Navbar
    let navbarLinks = document.querySelector("#navbarNav ul");
    navbarLinks.insertBefore(newListItem, navbarLinks.children[4]);
    }
    function addTextForHome()
    {
        let textContainer = document.querySelector("#HomeP");
        let text = "This is the Home Page for Michael and Ben's Lab 1"
        textContainer.textContent = text;
    }

    // Function to add a fixed bottom Navbar
function addBottomNavbar() {
    // Create a new Navbar
    let newNavbar = document.createElement("nav");
    newNavbar.classList.add("navbar", "navbar-light", "bg-light", "fixed-bottom");
    // Create a new container
    let newContainer = document.createElement("div");
    newContainer.classList.add("container");
    // Create a new paragraph
    let newParagraph = document.createElement("p");
    newParagraph.classList.add("text-center");
    newParagraph.textContent = "Copyright " + new Date().getFullYear();
    newContainer.appendChild(newParagraph);
    newNavbar.appendChild(newContainer);
    // Insert the new Navbar in the page
    document.body.appendChild(newNavbar);
    }
    
    // Function to handle the form submit
    function handleFormSubmit(event) {
    event.preventDefault();
    // Get the form data
    let name = document.querySelector("#contact-form input[name='name']").value;
    let contactNumber = document.querySelector("#contact-form input[name='contactNumber']").value;
    let emailAddress = document.querySelector("#contact-form input[name='emailAddress']").value;
    let shortMessage = document.querySelector("#contact-form textarea[name='shortMessage']").value;
    // Output the form data to the console
    console.log("Name: " + name);
    console.log("Contact Number: " + contactNumber);
    console.log("Email Address: " + emailAddress);
    console.log("Short Message: " + shortMessage);
    // Redirect to the Home Page after 3 seconds
    setTimeout(function() {
    window.location.href = "#home";
    }, 3000);
    }
    
    // Document Ready Event
    document.addEventListener("DOMContentLoaded", function() {
    addTextForHome();
    changeProductsToProjects("products-link", "./projects.html");
    addHumanResourcesLink();
    addBottomNavbar();
    
    // Add event listener for the form submit
    document.querySelector("#contact-form").addEventListener("submit", handleFormSubmit);
    });