const API = "http://localhost:3000/NWW"

let addNewWonder = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#submit-wonder-btn");
  const wonderFormContainer = document.querySelector(".container");

  fetch(API)
    .then((response) => response.json())
    .then(renderNWW)

  function renderNWW(wondersList){


    wondersList.forEach((wonder) => {
    const instance = document.createElement("div")
    instance.classList.add = ("instance")

    const h2 = document.createElement("h2")
    h2.textContent = NWW.name

    instance.appendChild(h2)

    const h2 = document.createElement("h2")
    h2.textContent = NWW.location

    instance.appendChild(h2)

    const h2 = document.createElement("h2")
    h2.textContent = NWW.geographic-coordinates

    instance.appendChild(h2)

    const img1 = document.createElement("img1")
    img1.classList.add = ("wonderImg1")
    img1.src = NWW.image-1 

    instance.appendChild(img1)

    const img2 = document.createElement("img2")
    img2.classList.add = ("wonderImg2")
    img2.src = NWW.image-2 

    instance.appendChild(img2)

    const imgSpace = document.createElement("imgSpace")
    imgSpace.classList.add = ("wonderImgSpace")
    imgSpace.src = NWW.image-space 

    instance.appendChild(imgSpace)

    const p = document.createElement("p")
    p.textContent = `${NWW.likes} Likes`

    const button = document.createElement("button")
    button.classList.add("Like-btn")
    button.setAttribute("id", "[instamce_id]")

    instance.appendChild(p)

  })
  }

  addBtn.addEventListener("click", () => {
      
  addNewWonder = !addNewWonder;
  if (addNewWonder) {
    wonderFormContainer.style.display = "block";
  } else {
    wonderFormContainer.style.display = "none";
  }
  });
});
