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
        this.page = page; 
    }
}

class Company {
    constructor(name, page) {
        this.name = name;
        this.page = page; 
    }
}

class Publisher extends Company {
    constructor(name, page, titles) {
        super(name, page);
        this.titles = titles;
    }
}

var selectedElement = 'body';

function selectElement(value) {
    selectedElement = value; 
}

function changeAppearance(value) {
    if (value == 'lFontWhiteBg') {
        document.getElementsByTagName(selectElement).style.font = "large"; // Ik weet niet zeker of deze opdrachten werken
        document.getElementsByTagName(selectElement).style.background = "white";
    } else if (value == 'mFontBlackBg') {
        document.getElementsByTagName(selectElement).style.font = "medium";
        document.getElementsByTagName(selectElement).style.background = "black";
    } else if (value == 'mFontWhiteBg') {
        document.getElementsByTagName(selectElement).style.font = "medium";
        document.getElementsByTagName(selectElement).style.background = "white";
    } else {
        document.getElementsByTagName(selectElement).style.font = "small";
        document.getElementsByTagName(selectElement).style.background = "black";
    }
}


// Eerst author maken
const Chugong = new Author ("Chungong", "unkown birthday",
["Solo Leveling, vol.1", "Solo Leveling, vol.2"], "https://en.wikipedia.org/wiki/Solo_Leveling")

//Publisher maken
const KakaoPage = new Publisher("KakaoPage", "https://en.wikipedia.org/wiki/KakaoPage", 
["Title 1", "Title2"])

//Book instance
const Sololevelingvol1 = new Book ("Solo Leveling vol.1", 2016, Chugong, "Fantasy", KakaoPage, 
"https://www.worldswithoutend.com/covers/CG_solole01.jpg", "In a world where hunters — human warriors who possess supernatural abilities — must battle deadly monsters to protect mankind from certain annihilation, a notoriously weak hunter named Sung Jinwoo finds himself in a seemingly endless struggle for survival. One day, after narrowly surviving an overwhelmingly powerful double dungeon that nearly wipes out his entire party, a mysterious program called the System chooses him as its sole player and in turn, gives him the unique ability to level up in strength. This is something no other hunter is able to do, as a hunter's abilities are set once they awaken. He also unlocks a deeper ability to turn anyone he kills into a loyal minion called a Shadow. Jinwoo then sets out on a journey as he fights against all kinds of enemies, both man and monster, to discover the secrets of the dungeons and the true source of his powers.")

/* making a DOM tree: pOnetext is a node of pOne, pOne is a node of divFirst etcetera */
const divFirst = document.createElement("div"); //make div

const headerOne = document.createElement("h1"); //make h1
const headerOneText = document.createTextNode("Title: " + Sololevelingvol1.title);
headerOne.appendChild(headerOneText); //make headerOneText into child of headerOne
divFirst.appendChild(headerOne);        //make headerOne into child of divFirst

const pGenre = document.createElement("p");
const pGenretext = document.createTextNode("Genre: " + Sololevelingvol1.genre);
pGenre.appendChild(pGenretext);
divFirst.appendChild(pGenre);

const pYear = document.createElement("p");
const pYeartext = document.createTextNode("Year: " + Sololevelingvol1.year);
pYear.appendChild(pYeartext);
divFirst.appendChild(pYear);

const pAuthor = document.createElement("p");
const pAuthortext = document.createTextNode("Author: " + Sololevelingvol1.authors.name);
pAuthor.appendChild(pAuthortext);
divFirst.appendChild(pAuthor);

const pPublisher = document.createElement("p");
const pPublishertext = document.createTextNode("Publisher: " + Sololevelingvol1.publisher.name);
pPublisher.appendChild(pPublishertext);
divFirst.appendChild(pPublisher);

const imgCover = document.createElement("img");
imgCover.src = Sololevelingvol1.cover;
imgCover.alt = "Pictured: Brown cover with a small, white lizard. The title reads:'Solo Leveling I'";
divFirst.appendChild(imgCover);

const pPlot = document.createElement("p");
const pPlottext = document.createTextNode("Plot: " + Sololevelingvol1.plot);
pPlot.appendChild(pPlottext);
divFirst.appendChild(pPlot);




/* Format for new paragraph.

const pOne = document.createElement("p");
const pOnetext = document.createTextNode("Paragraph 1");
pOne.appendChild(pOnetext);
divFirst.appendChild(pOne); */





document.body.appendChild(divFirst);

/* Op deze pagina komt de info. De info moet ook weer als nodes enzo, met book en strings */



