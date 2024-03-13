/* making a DOM tree: pOnetext is a node of pOne, pOne is a node of divFirst etcetera */
const divFirst = document.createElement("div"); //make div

const headerOne = document.createElement("h1"); //make h1
const headerOneText = document.createTextNode("Heading");
headerOne.appendChild(headerOneText); //make headerOneText into child of headerOne
divFirst.appendChild(headerOne);        //make headerOne into child of divFirst

const pOne = document.createElement("p");
const pOnetext = document.createTextNode("Paragraph 1");
pOne.appendChild(pOnetext);
divFirst.appendChild(pOne);


const pTwo = document.createElement("p");
const pTwotext = document.createTextNode("Paragraph 2");
pTwo.appendChild(pTwotext);

divFirst.appendChild(pTwo);


document.body.appendChild(divFirst);

/* Op deze pagina komt de info. De info moet ook weer als nodes enzo, met book en strings */