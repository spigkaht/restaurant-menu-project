const createMenuPage = () => {
  const divContent = document.querySelector("#content");

  divContent.innerHTML = "";

  const divTitle = document.createElement("div");
  const divPara1 = document.createElement("div");

  divTitle.className = "title";
  divPara1.className = "para";

  divTitle.textContent = "Menu";
  divPara1.innerHTML = `
  Fishsticks <br>
  Processed fish shaped into tubes and deep fried <br>
  $4.95 <br>

  Empanadas <br>
  Pastry filled with meat and vegetables <br>
  $6.95 <br>

  Steak Diane <br>
  Who even knows.. It's steak and a sauce! <br>
  $22.50 <br>
  `;

  divContent.appendChild(divTitle);
  divContent.appendChild(divPara1);
};

export { createMenuPage };
