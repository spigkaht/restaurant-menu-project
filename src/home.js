const createHomePage = () => {
  const divContent = document.querySelector('#content');

  divContent.innerHTML = "";

  const divTitle = document.createElement('div');
  const divPara1 = document.createElement('div');
  const divPara2 = document.createElement('div');
  const divPara3 = document.createElement('div');

  divTitle.className = 'title';
  divPara1.className = 'para';
  divPara2.className = 'para';
  divPara3.className = 'para';

  divTitle.textContent = "Sausage Fest";
  divPara1.textContent = "Really good sausage";
  divPara2.textContent = "We pride in sourcing local ingredients";
  divPara3.textContent = "Even your mother would love our sausage!";

  divContent.appendChild(divTitle);
  divContent.appendChild(divPara1);
  divContent.appendChild(divPara2);
  divContent.appendChild(divPara3);
};

export { createHomePage };
