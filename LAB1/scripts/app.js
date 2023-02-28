// Full Name: Ben Walsh
// StudentID: 100640803
// Date Completed: 2023-02-11

// Function to change the text of the Products link to Projects
function changeProductsToProjects(linkId, newHref) {
    // Select the link with the specified linkId
    let link = document.querySelector(`#${linkId}`);

    // Update the href attribute of the link to the specified newHref
    link.href = newHref;
}

// Function to add a new link to the Navbar
function addHumanResourcesLink() {
    // Select all of the links in the navbar
    let navLinks = document.querySelectorAll(".navbar-nav li");

    // Get the second to last link in the navbar
    let contactLink = navLinks[navLinks.length - 2];

    // Create a new list item for the Human Resources link
    let hr = document.createElement("li");
    hr.classList.add("nav-item");

    // Create the Human Resources link
    let hrLink = document.createElement("a");
    hrLink.classList.add("nav-link");
    hrLink.innerHTML = '<i class="fa-solid fa-people-carry"></i>Human Resources';
    hr.appendChild(hrLink);

    // Insert the Human Resources link after the Contact link
    contactLink.after(hr);
}

// Function to set the text for each of the projects
function setProjectText() {
    // Set the text for project 1
    document.querySelector("#p1").textContent = "Project 1";
    document.querySelector("#p1-desc").textContent = "This first project is based on a code camp project where you have to create a rpg user interface using JavaScript!";

    // Set the text for project 2
    document.querySelector("#p2").textContent = "Project 2";
    document.querySelector("#p2-desc").textContent = "This second project is based around making a flappy bird like game using scratch.";

    // Set the text for project 3
    document.querySelector("#p3").textContent = "Project 3";
    document.querySelector("#p3-desc").textContent = "Finally the third project is the website you're currently viewing on this page. Here is Michael doing his part working diligently.";
}

// Function to add text for the Home page
function addTextForHome() {
    // Get the container for the first text
    let textContainer1 = document.querySelector("#Welcome");

    // Set the first text
    let text1 = "Welcome to our Website!"
    textContainer1.textContent = text1; 

    // Get the container for the second text
    let textContainer2 = document.querySelector("#HomeP");

    // Set the second text
    let text2 = "This is the Home Page for Michael and Ben's Lab 1"
    textContainer2.textContent = text2;
}
   
    
    // Function to create a bottom navigation bar
function createBottomNavBar() {
        // Creating a nav element and adding classes to it
        let nav = document.createElement("nav");
        nav.classList.add("navbar", "navbar-expand-lg", "bg-light", "fixed-bottom");
    
        // Creating a container div and adding classes to it
        let container = document.createElement("div");
        container.classList.add("container-fluid");
        nav.appendChild(container);
    
        // Creating a copyright div and adding text to it
        let copyright = document.createElement("div");
        copyright.classList.add("copyright");
        copyright.innerHTML = "Copyright &copy; " + new Date().getFullYear() + " Ben Walsh and Michael Parisi";
        container.appendChild(copyright);
    
        // Creating a brand element and adding classes to it
        let brand = document.createElement("a");
        brand.classList.add("navbar-brand", "d-flex", "justify-content-end");
        brand.href = "./index.html";
        brand.innerHTML = '<i class="fa-solid fa-hippo"></i>';
        container.appendChild(brand);
    
        // Creating a unordered list element and adding classes to it
        let navList = document.createElement("ul");
        navList.classList.add("navbar-nav", "ml-auto");
        container.appendChild(navList);
    
        // Creating a list item element and adding classes to it
        let home = document.createElement("li");
        home.classList.add("nav-item");
        navList.appendChild(home);
    
        // Creating a link element and adding classes to it
        let homeLink = document.createElement("a");
        homeLink.classList.add("nav-link", "active");
        homeLink.setAttribute("aria-current", "page");
        homeLink.href = "./";
        homeLink.innerHTML = '<i class="fa-solid fa-landmark"></i>Home';
        home.appendChild(homeLink);
    
        // Creating a list item element and adding classes to it
        let projects = document.createElement("li");
        projects.classList.add("nav-item");
        navList.appendChild(projects);
    
        // Creating a link element and adding classes to it
        let projectsLink = document.createElement("a");
        projectsLink.id = "projects-link";
        projectsLink.classList.add("nav-link", "active");
        projectsLink.href = "./projects.html";
        projectsLink.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>Projects';
        projects.appendChild(projectsLink);
    
        // Creating a list item element and adding classes to it
        let services = document.createElement("li");
        services.classList.add("nav-item");
        navList.appendChild(services);
        
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
        hrLink.innerHTML = '<i class="fa-solid fa-people-carry"></i>Human Resources';
        hr.appendChild(hrLink);

        // Creating the bottom registration nav bar link
        let rs = document.createElement("li");
        rs.classList.add("nav-item");
        navList.appendChild(rs);

        let rsLink = document.createElement("a");
        rsLink.classList.add("nav-link");
        rsLink.href = "./register.html";
        rsLink.innerHTML = '<i class="fa-sharp fa-solid fa-id-card"></i>Registration';
        hr.appendChild(rsLink);

        let about = document.createElement("li");
        about.classList.add("nav-item");
        navList.appendChild(about);
        
        let aboutLink = document.createElement("a");
        aboutLink.classList.add("nav-link");
        aboutLink.href = "./aboutus.html";
        aboutLink.innerHTML = '<i class="fa-solid fa-child-combatant"></i>About Us';
        about.appendChild(aboutLink);
        
        return nav;
      }
      //Function to run elements of the contact form
      function contactForm(){
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
        
        changeProductsToProjects("products-link", "./projects.html");
    });
    document.addEventListener("DOMContentLoaded", function() {
        addHumanResourcesLink();
    });   
    document.addEventListener("DOMContentLoaded", function() {
        let bottomNav = createBottomNavBar();
        document.body.appendChild(bottomNav);
    });
    document.addEventListener("DOMContentLoaded", function() {
        contactForm();
    });
    document.addEventListener("DOMContentLoaded", function() {
        addTextForHome();
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        setProjectText();
    });


function validateForm() {
    let x = document.forms["myForm"]["username"].value;
    let y = document.forms["myForm"]["password"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    } else {
        console.log(`Username: ${ x } \n Password: ${ y }`)
        userDisplay.textContent = x;
        passDisplay.textContent = y;
        return false;
    }
}



function TestfirstName(){
    let messageArea = $('#messageArea').hide()

    let firstNamePattern = /^([A-Z][a-z]{1,25})*$/g

    $('#firstName').on("blur", function(){
        $(this).trigger("focus").trigger("select")

        if(!firstNamePattern.test(firstNameText)){
            messageArea.addClass("alert alert-danger")
            messageArea.text("Please enter a valid first name which means a capitalized first letter.")

            messageArea.show()

        }else {
            messageArea.removeAttr("class")
            messageArea.hide()
        }

        
    })

}

function DisplayContacts() {
    console.log("Registration Page")



    TestfirstName()


    let submitButton = document.getElementById("submitButton")
    

    //Local Storage
    /*localStorage.setItem("Random Variable", "Random variable for testing and demonstration")
    console.log(localStorage.getItem("Random Variable"))
    localStorage.removeItem("Random Variable")*/

    //console.log("Contacts Page")


    submitButton.addEventListener("click", function () {
        //event.preventDefault
        if (submitButton.click()) {
            //if the user subscribes store the contact in local storage
            let contact = new core.Contact(firstName.value, lastName.value, emailAddress.value)
            if (contact.serialize()) {
                let key = contact.Name.substring(0, 1) + Date.now()
                localStorage.setItem(key, contact.serialize())
            }
        }
    })
}

// function RegistrationFormValidate() {
// let firstNamePattern = /^([A-Z][a-z]{1,25})*$/g
// let lastNamePattern = /^([A-Z][a-z]{1,25})*$/g
// let emailAddressPattern = /^[\w-\.]+@([\w-]+\.)+[\w-][\D]{2,10}$/g




// ValidateInput("firstName", firstNamePattern, "Please enter a valid first name which means a capitalized first letter.")
// ValidateInput("lastName", lastNamePattern, "Please enter a valid last name which means a capitalized first letter.")
// ValidateInput("emailAddress", emailAddressPattern, "Please enter a valid email address")


//}