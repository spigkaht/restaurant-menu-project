const createContactPage = () => {
  const divContent = document.querySelector('#content');

  divContent.innerHTML = "";

  const divTitle = document.createElement('div');
  const divPara1 = document.createElement('div');

  divTitle.className = 'title';
  divPara1.className = 'para';

  divTitle.textContent = "Contact";
  divPara1.innerHTML = `
  Sausage Fest <br>
  <br>
  101 Main St, <br>
  Pakenham 3810 <br>
  <br>
  0359411234 <br>
  <br>
  info@sausagefest.com.au <br>
  `;

  divContent.appendChild(divTitle);
  divContent.appendChild(divPara1);
};

export { createContactPage };
