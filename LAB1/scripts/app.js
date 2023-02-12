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
    let navLinks = document.querySelectorAll(".navbar-nav li");
      let contactLink = navLinks[navLinks.length - 2];
      
      let hr = document.createElement("li");
      hr.classList.add("nav-item");
      
      let hrLink = document.createElement("a");
      hrLink.classList.add("nav-link");
      hrLink.innerHTML = '<i class="fa-solid fa-people-carry"></i>Human Resources';
      hr.appendChild(hrLink);
      
      contactLink.after(hr);
    }
    function addTextForHome()
    {
        let textContainer = document.querySelector("#HomeP");
        let text = "This is the Home Page for Michael and Ben's Lab 1"
        textContainer.textContent = text;
    }

    // Function to create a bottom navigation bar
    function createBottomNavBar() {
        let nav = document.createElement("nav");
        nav.classList.add("navbar", "navbar-expand-lg", "bg-light", "fixed-bottom");

        let container = document.createElement("div");
        container.classList.add("container-fluid");
        nav.appendChild(container);

        let copyright = document.createElement("div");
        copyright.classList.add("copyright");
        copyright.innerHTML = "Copyright &copy; " + new Date().getFullYear() + " Ben Walsh and Michael Parisi";
        container.appendChild(copyright);

        let brand = document.createElement("a");
        brand.classList.add("navbar-brand", "d-flex", "justify-content-end");
        brand.href = "./index.html";
        brand.innerHTML = '<i class="fa-solid fa-hippo"></i>';
        container.appendChild(brand);

        let navList = document.createElement("ul");
        navList.classList.add("navbar-nav", "ml-auto");
        container.appendChild(navList);

      
        let home = document.createElement("li");
        home.classList.add("nav-item");
        navList.appendChild(home);
      
        let homeLink = document.createElement("a");
        homeLink.classList.add("nav-link", "active");
        homeLink.setAttribute("aria-current", "page");
        homeLink.href = "./";
        homeLink.innerHTML = '<i class="fa-solid fa-landmark"></i>Home';
        home.appendChild(homeLink);
      
        let projects = document.createElement("li");
        projects.classList.add("nav-item");
        navList.appendChild(projects);
      
        let projectsLink = document.createElement("a");
        projectsLink.id = "projects-link";
        projectsLink.classList.add("nav-link", "active");
        projectsLink.href = "./projects.html";
        projectsLink.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>Projects';
        projects.appendChild(projectsLink);
      
        let services = document.createElement("li");
        services.classList.add("nav-item");
        navList.appendChild(services);
      
        let servicesLink = document.createElement("a");
        servicesLink.classList.add("nav-link", "active");
        servicesLink.href = "./services.html";
        servicesLink.innerHTML = '<i class="fa-sharp fa-solid fa-bell-concierge"></i>Services';
        services.appendChild(servicesLink);
      
        let contact = document.createElement("li");
        contact.classList.add("nav-item");
        navList.appendChild(contact);
        
        let contactLink = document.createElement("a");
        contactLink.classList.add("nav-link");
        contactLink.href = "./contact.html";
        contactLink.innerHTML = '<i class="fa-solid fa-address-book"></i>Contact Us';
        contact.appendChild(contactLink);
        
        let hr = document.createElement("li");
        hr.classList.add("nav-item");
        navList.appendChild(hr);

        let hrLink = document.createElement("a");
        hrLink.classList.add("nav-link");
        hrLink.href = "./hr.html";
        hrLink.innerHTML = '<i class="fa-solid fa-users"></i>Human Resources';
        hr.appendChild(hrLink);

        let about = document.createElement("li");
        about.classList.add("nav-item");
        navList.appendChild(about);
        
        let aboutLink = document.createElement("a");
        aboutLink.classList.add("nav-link");
        aboutLink.href = "./aboutus.html";
        aboutLink.innerHTML = '<i class="fa-solid fa-bicycle"></i>About Us';
        about.appendChild(aboutLink);
        
        return nav;
      }
      function contactForm()
      {
      document.getElementById("submitButton").addEventListener("click", function(event) {
        event.preventDefault();
      
        let formData = {
          name: document.getElementById("fullName").value,
          contactNumber: document.getElementById("contactNumber").value,
          emailAddress: document.getElementById("emailAddress").value,
          comments: document.querySelector("textarea").value,
          subscribe: document.getElementById("subscribeCheckbox").checked
        };
      
        console.log(formData);
      
        setTimeout(function() {
          window.location.href = "./index.html";
        }, 3000);
      });
    }
  
    
    
    // Document Ready Event
    document.addEventListener("DOMContentLoaded", function() {
    addHumanResourcesLink();    
    let bottomNav = createBottomNavBar();
    document.body.appendChild(bottomNav);
    addTextForHome();
    contactForm();
    changeProductsToProjects("products-link", "./projects.html");
    addBottomNavbar();
    
    // Add event listener for the form submit
    document.querySelector("#contact-form").addEventListener("submit", handleFormSubmit);
    });