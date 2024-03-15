// Intializing classes
class CreativeWork {
    constructor(title, year, authors) {
        this.title = title;
        this.year = year;
        this.authors = authors;
    }
}

class Book extends CreativeWork {
    constructor(title, year, authors, genre, publisher, cover, plot) {
        super(title, year, authors);
        this.genre = genre;
        this.publisher = publisher;
        this.cover = cover;
        this.plot = plot;
    }
}

class Person {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class Author extends Person {
    constructor(name, year, titles, page) {
        super(name, year);
        this.titles = titles;
        this.page = page; // Link to Wikipedia page
    }
}

class Company {
    constructor(name, page) {
        this.name = name;
        this.page = page; // Link to Wikipedia page
    }
}

class Publisher extends Publisher {
    constructor(name, page, titles) {
        super(name, page);
        this.titles = titles;
    }
}




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