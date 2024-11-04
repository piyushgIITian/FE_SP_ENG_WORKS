var menuBtn = document.querySelectorAll(".menu-btn")[0];
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

const footerfrm = document.getElementById("footerform");
footerfrm.addEventListener("submit", function (e) {
  var rgxEmail = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$");
  var emailtxt = document.getElementById("emailtxt");
  if (!rgxEmail.exec(emailtxt.value)) {
    e.preventDefault();
    e.stopPropagation();
    emailtxt.nextElementSibling.innerHTML = "Please Enter a vaild Email !";
    emailtxt.value = "";
    emailtxt.focus();
  }
});

function getAllProjects(count, type, e) {
  var inner = document.querySelector("#innerProject");
  inner.innerHTML = "";
  var project = [];
  if (type == "all") {
    project = projects;
  } else if (type == "project" || type === "services") {
    project = projects.filter((ele) => ele.type == type);
  }

  if (count == 0) count = project.length;
  for (var i = 0; i < count; i++) {
    inner.innerHTML += `<div class=" col-md-6 col-lg-4  mt-5 ">
                    <div class="project">
                        <a href="project-details.html?pid=${project[i].id}">
                            <img src="image/${project[i]?.gallery[0]}" class="project-img mb-2"/>
                        </a>
                        
                        <h5 class="mb-1 ms-2 fw-bold">${project[i].name}</h5>
                        <p class="mb-1 ms-2">${project[i]?.description}</p>
                        <p class="mb-1 ms-2">${project[i]?.site}</p>
                            <table class="table table-responsive table-striped my-0 ">
                                <tr><td class="fw-bold">Status:</td><td>${project[i]?.status}</td></tr>
                                <tr><td class="fw-bold">Type of work:</td><td>${project[i]?.work}</td></tr>
                                <tr><td class="fw-bold">Area:</td><td>${project[i]?.area}</td></tr>

                            </table>
                    </div>
                </div>`;
  }
}

function getAllServices(count, e) {
  var inner = document.querySelector("#innerProject");
  inner.innerHTML = "";

  if (count == 0) count = services.length;
  for (var i = 0; i < count; i++) {
    inner.innerHTML += `<div class=" col-md-6 col-lg-4  mt-5 ">
                    
                      <div class="project"> 
                      <table class="table table-responsive table-striped my-0 ">
                                <tr><td class="fw-bold">Name:</td><td>${services[i].name}</td></tr>
                                <tr><td class="fw-bold">Description:</td><td>${services[i]?.description}</td></tr>

                            </table>
                          
                        </div>
                    
                  </div>`;
  }
}
function getAllClientale(count, type, e) {
  var inner = document.querySelector("#innerProject");
  inner.innerHTML = "";
  var project = clientale;
  if (count == 0) count = project.length;
  for (var i = 0; i < count; i++) {
    inner.innerHTML += `<div class=" col-md-6 col-lg-4  mt-5 ">
                      <div class="project">
                             
                          
                          
                          <h5 class="mb-1 ms-2 fw-bold">${project[i].name}</h5>
                          <p class="mb-1 ms-2">${project[i]?.description}</p>
                          <p class="mb-1 ms-2">${project[i]?.site}</p>
                              <table class="table table-responsive table-striped my-0 ">
                                  <tr><td class="fw-bold">Status:</td><td>${project[i]?.status}</td></tr>
                                  <tr><td class="fw-bold">Type of work:</td><td>${project[i]?.work}</td></tr>
  
                              </table>
                      </div>
                  </div>`;
  }
}
function getAllGallery(count, type) {
  var inner = document.querySelector("#innerProject");
  inner.innerHTML = "";
  var project = gallery;
  if (type == "all") {
    project = projects;
  } else {
    project = projects.filter((ele) => ele.type == type);
  }
  if (count == 0) count = project.length;
  for (var i = 0; i < count; i++) {
    inner.innerHTML += `<div class=" col-md-6 col-lg-4  mt-5 ">
                        <div class="project">
                            <a href="project-details.html?pid=${project[i].id}" style="color:black; text-decoration: none;">
                               
                            
                            
                            <h5 class="mb-1 ms-2 fw-bold">${project[i].name}</h5>
                            <p class="mb-1 ms-2">${project[i]?.description}</p>
                            <p class="mb-1 ms-2">${project[i]?.site}</p>
                                <table class="table table-responsive table-striped my-0 ">
                                    <tr><td class="fw-bold">Status:</td><td>${project[i]?.status}</td></tr>
                                    <tr><td class="fw-bold">Type of work:</td><td>${project[i]?.work}</td></tr>
    
                                </table>
                                </a>
                        </div>
                    </div>`;
  }
}
