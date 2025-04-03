/**
 * SP Engineering Works - Common JavaScript Functions
 * Enhanced for better performance and user experience
 */

// Mobile menu toggle functionality
var menuBtn = document.querySelectorAll(".menu-btn")[0];
let menuOpen = false;
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }
  });
}

// Newsletter subscription form validation
const footerfrm = document.getElementById("footerform");
if (footerfrm) {
  footerfrm.addEventListener("submit", function (e) {
    e.preventDefault();
    var emailtxt = document.getElementById("emailtxt");
    var emailValue = emailtxt.value.trim();
    var emailError = emailtxt.nextElementSibling;
    
    // More comprehensive email validation
    var rgxEmail = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
    
    if (!emailValue) {
      emailError.innerHTML = "Please enter your email address";
      emailtxt.focus();
    } else if (!rgxEmail.test(emailValue)) {
      emailError.innerHTML = "Please enter a valid email address";
      emailtxt.focus();
    } else {
      // Success case
      emailError.innerHTML = "";
      emailtxt.value = "";
      
      // Show success message
      const successMsg = document.createElement('div');
      successMsg.className = 'alert alert-success mt-2';
      successMsg.innerHTML = 'Thank you for subscribing to our newsletter!';
      footerfrm.appendChild(successMsg);
      
      // Remove success message after 3 seconds
      setTimeout(() => {
        footerfrm.removeChild(successMsg);
      }, 3000);
    }
  });
}

/**
 * Display projects based on type and count
 * @param {number} count - Number of projects to display (0 for all)
 * @param {string} type - Type of projects to display ('all', 'project', 'services')
 * @param {Event} e - Event object
 */
function getAllProjects(count, type, e) {
  var inner = document.querySelector("#innerProject");
  if (!inner) return;
  
  inner.innerHTML = "";
  var project = [];
  
  try {
    if (type == "all") {
      project = projects || [];
    } else if (type == "project" || type === "services") {
      project = (projects || []).filter((ele) => ele.type == type);
    }

    if (count == 0) count = project.length;
    
    // Create a document fragment for better performance
    const fragment = document.createDocumentFragment();
    
    for (var i = 0; i < Math.min(count, project.length); i++) {
      const projectItem = project[i];
      if (!projectItem) continue;
      
      const projectDiv = document.createElement('div');
      projectDiv.className = 'col-md-6 col-lg-4 mt-5';
      
      // Use optional chaining and nullish coalescing for safer property access
      projectDiv.innerHTML = `
        <div class="project">
          <a href="project-details.html?pid=${projectItem.id || ''}">
            <img src="image/${projectItem.gallery?.[0] || ''}" class="project-img mb-2" alt="${projectItem.name || 'Project image'}"/>
          </a>
          
          <h5 class="mb-1 ms-2 fw-bold">${projectItem.name || 'Unnamed Project'}</h5>
          <p class="mb-1 ms-2">${projectItem.description || ''}</p>
          <p class="mb-1 ms-2">${projectItem.site || ''}</p>
          <table class="table table-responsive table-striped my-0">
            <tr><td class="fw-bold">Status:</td><td>${projectItem.status || 'N/A'}</td></tr>
            <tr><td class="fw-bold">Type of work:</td><td>${projectItem.work || 'N/A'}</td></tr>
            <tr><td class="fw-bold">Area:</td><td>${projectItem.area || 'N/A'}</td></tr>
          </table>
        </div>
      `;
      
      fragment.appendChild(projectDiv);
    }
    
    inner.appendChild(fragment);
    
  } catch (error) {
    console.error("Error displaying projects:", error);
    inner.innerHTML = '<div class="alert alert-danger">Error loading projects. Please try again later.</div>';
  }
}

/**
 * Display services
 * @param {number} count - Number of services to display (0 for all)
 * @param {Event} e - Event object
 */
function getAllServices(count, e) {
  var inner = document.querySelector("#innerProject");
  if (!inner) return;
  
  inner.innerHTML = "";
  
  try {
    if (!services || !services.length) {
      inner.innerHTML = '<div class="alert alert-info">No services available at the moment.</div>';
      return;
    }
    
    if (count == 0) count = services.length;
    
    const fragment = document.createDocumentFragment();
    
    for (var i = 0; i < Math.min(count, services.length); i++) {
      const service = services[i];
      if (!service) continue;
      
      const serviceDiv = document.createElement('div');
      serviceDiv.className = 'col-md-6 col-lg-4 mt-5';
      
      serviceDiv.innerHTML = `
        <div class="project service-card"> 
          <table class="table table-responsive table-striped my-0">
            <tr><td class="fw-bold">Name:</td><td>${service.name || 'Unnamed Service'}</td></tr>
            <tr><td class="fw-bold">Description:</td><td>${service.description || 'No description available'}</td></tr>
          </table>
        </div>
      `;
      
      fragment.appendChild(serviceDiv);
    }
    
    inner.appendChild(fragment);
    
  } catch (error) {
    console.error("Error displaying services:", error);
    inner.innerHTML = '<div class="alert alert-danger">Error loading services. Please try again later.</div>';
  }
}
/**
 * Display clientele
 * @param {number} count - Number of clients to display (0 for all)
 * @param {string} type - Type filter
 * @param {Event} e - Event object
 */
function getAllClientale(count, type, e) {
  var inner = document.querySelector("#innerProject");
  if (!inner) return;
  
  inner.innerHTML = "";
  
  try {
    if (!clientale || !clientale.length) {
      inner.innerHTML = '<div class="alert alert-info">No client information available at the moment.</div>';
      return;
    }
    
    var project = clientale;
    if (count == 0) count = project.length;
    
    const fragment = document.createDocumentFragment();
    
    for (var i = 0; i < Math.min(count, project.length); i++) {
      const client = project[i];
      if (!client) continue;
      
      const clientDiv = document.createElement('div');
      clientDiv.className = 'col-md-6 col-lg-4 mt-5';
      
      clientDiv.innerHTML = `
        <div class="project">
          <h5 class="mb-1 ms-2 fw-bold">${client.name || 'Unnamed Client'}</h5>
          <p class="mb-1 ms-2">${client.description || ''}</p>
          <p class="mb-1 ms-2">${client.site || ''}</p>
          <table class="table table-responsive table-striped my-0">
            <tr><td class="fw-bold">Status:</td><td>${client.status || 'N/A'}</td></tr>
            <tr><td class="fw-bold">Type of work:</td><td>${client.work || 'N/A'}</td></tr>
            ${client.business_volume ? `<tr><td class="fw-bold">Business Volume:</td><td>${client.business_volume}</td></tr>` : ''}
          </table>
        </div>
      `;
      
      fragment.appendChild(clientDiv);
    }
    
    inner.appendChild(fragment);
    
  } catch (error) {
    console.error("Error displaying clientele:", error);
    inner.innerHTML = '<div class="alert alert-danger">Error loading client information. Please try again later.</div>';
  }
}
/**
 * Display gallery items
 * @param {number} count - Number of gallery items to display (0 for all)
 * @param {string} type - Type filter
 */
function getAllGallery(count, type) {
  var inner = document.querySelector("#innerProject");
  if (!inner) return;
  
  inner.innerHTML = "";
  
  try {
    var project = [];
    
    if (type == "all") {
      project = projects || [];
    } else if (typeof type === 'string' && type.trim() !== '') {
      project = (projects || []).filter((ele) => ele.type == type);
    } else {
      project = gallery || [];
    }
    
    if (!project.length) {
      inner.innerHTML = '<div class="alert alert-info">No gallery items available at the moment.</div>';
      return;
    }
    
    if (count == 0) count = project.length;
    
    const fragment = document.createDocumentFragment();
    
    for (var i = 0; i < Math.min(count, project.length); i++) {
      const item = project[i];
      if (!item) continue;
      
      const galleryDiv = document.createElement('div');
      galleryDiv.className = 'col-md-6 col-lg-4 mt-5';
      
      galleryDiv.innerHTML = `
        <div class="project">
          <a href="project-details.html?pid=${item.id || ''}" style="color:black; text-decoration: none;">
            ${item.gallery && item.gallery[0] ? 
              `<img src="image/${item.gallery[0]}" class="project-img mb-2" alt="${item.name || 'Gallery image'}"/>` : ''}
            <h5 class="mb-1 ms-2 fw-bold">${item.name || 'Unnamed Item'}</h5>
            <p class="mb-1 ms-2">${item.description || ''}</p>
            <p class="mb-1 ms-2">${item.site || ''}</p>
            <table class="table table-responsive table-striped my-0">
              ${item.status ? `<tr><td class="fw-bold">Status:</td><td>${item.status}</td></tr>` : ''}
              ${item.work ? `<tr><td class="fw-bold">Type of work:</td><td>${item.work}</td></tr>` : ''}
              ${item.type ? `<tr><td class="fw-bold">Category:</td><td>${item.type}</td></tr>` : ''}
            </table>
          </a>
        </div>
      `;
      
      fragment.appendChild(galleryDiv);
    }
    
    inner.appendChild(fragment);
    
  } catch (error) {
    console.error("Error displaying gallery:", error);
    inner.innerHTML = '<div class="alert alert-danger">Error loading gallery. Please try again later.</div>';
  }
}

// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
});
