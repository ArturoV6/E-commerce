class producto {
    constructor (nombre, precio, autor, img, descripcion, editorial, idioma, paginas, publicacion, peso, dimension){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.editorial = editorial;
        this.idioma = idioma;
        this.paginas = paginas;
        this.publicacion = publicacion;
        this.peso = peso;
        this.dimension = dimension
        this.img = img;
        this.autor = autor;
    }
    addProduct(){
        const obtain = document.getElementById("title");
        obtain.innerHTML=`<h1>${comics.nombre}</h1>`

        const obtainDiv = document.getElementById("description");
        obtainDiv.innerHTML = `<p>${comics.descripcion}</p>`

        const obtainPrice = document.getElementById("price");
        obtainPrice.innerHTML = `${comics.precio}$`

        const obtainA = document.getElementById("author");
        obtainA.innerHTML = `<h2>${comics.autor}</h2>`

        const obtainImg = document.getElementById("img");
        const createImg = document.createElement("img");
        const createSrc = document.createAttribute("src")
        const fragmento = document.createDocumentFragment();

        createSrc.value = comics.img;

        createImg.setAttributeNode(createSrc);

        fragmento.appendChild(createImg);
        obtainImg.appendChild(fragmento);
    }
    addCart(){
        const overlay = document.getElementById("over");
        let number = comics.precio
        const numer = comics.precio;

        let numero = 1;
        const nume = 1;
        if (overlay.children.length < 1) {

            const createDiv2 = document.createElement("div");
            const fragmento2 = document.createDocumentFragment();

            const createDiv3 = document.createElement("div");
            const fragmento3 = document.createDocumentFragment();

            const createDiv4 = document.createElement("div");
            const fragmento4 = document.createDocumentFragment();

            const createButton = document.createElement("button");
            const createButton2 = document.createElement("button");
            const fragmento5 = document.createDocumentFragment();

            const createDiv6 = document.createElement("div");
            const fragmento6 = document.createDocumentFragment();

            const createDiv9 = document.createElement("div");
            const fragmento9 = document.createDocumentFragment();
            const createDiv10 = document.createElement("div");
            const fragmento10 = document.createDocumentFragment();

            fragmento6.appendChild(createDiv6);
            overlay.appendChild(fragmento6);

            fragmento2.appendChild(createDiv2);
            createDiv6.appendChild(fragmento2); 

            fragmento9.appendChild(createDiv9);
            createDiv6.appendChild(fragmento9);

            fragmento3.appendChild(createDiv3);
            createDiv6.appendChild(fragmento3);

            fragmento4.appendChild(createDiv4);
            createDiv6.appendChild(fragmento4);

            fragmento5.appendChild(createButton);
            createDiv4.appendChild(fragmento5);

            fragmento10.appendChild(createDiv10);
            createDiv6.appendChild(fragmento10);

            fragmento5.appendChild(createButton2);
            createDiv4.appendChild(fragmento5);

            createButton.innerText="+"
            createButton2.innerText="-"

            createDiv2.innerHTML = `<p> ${comics.nombre} <span id=cantidad> ${nume} </span>  </p>`
            createDiv3.innerHTML = `<p id=price-p>${numer} <p> $ </p></p>`
            createDiv9.innerHTML = `<img src=${comics.img} class=img-div>`
            createDiv10.innerHTML = `<button id=delete-target> eliminar </button>`

            let priceP = document.getElementById("price-p");
            let cantidad = document.getElementById("cantidad");
        
            createButton.addEventListener("click", (e)=>{
                priceP.innerText = number += numer;
                cantidad.innerText = numero += nume;
            });

            createButton2.addEventListener("click", (e)=>{
                priceP.innerText = number -= numer;
                cantidad.innerText = numero -= nume;
                if (priceP.innerText == 0) {
                    e.target.parentNode.parentNode.remove()
                    buyButton.innerText="Add to cart";
                } 
            });

            const deleteTarget = document.getElementById("delete-target");
            deleteTarget.addEventListener("click", (e)=>{
                console.log(e.target.parentNode.parentNode.remove())
                buyButton.innerText="Add to cart";
            })
        }
    }
    addCarousel(){
        const carousel = document.getElementById("carousel");

        const createDiv = document.createElement("div");
        const fragmento = document.createDocumentFragment();

        const createImg = document.createElement("img");
        const fragmento2 = document.createDocumentFragment();

        const createDiv2 = document.createElement("div");
        const fragmento3 = document.createDocumentFragment();

        fragmento.appendChild(createDiv);
        carousel.appendChild(fragmento);

        fragmento2.appendChild(createImg);
        createDiv.appendChild(fragmento2);

        fragmento3.appendChild(createDiv2);
        createDiv.appendChild(fragmento3);

        createImg.setAttribute("src", this.img);

        createDiv2.innerHTML=`<p> ${this.nombre} <br> ${this.precio}$</p>`

        const sliders = document.querySelector(".carousel-box");
        var scrollAmount = 0;
        var scrollPerClick = 1000;

        const buttonL = document.getElementById("scrollL");
        buttonL.addEventListener("click", ()=>{
            sliders.scrollTo({
                top: 0,
                left: scrollAmount -= scrollPerClick,
                behavior: "smooth"
            })
            if (scrollAmount < 0) {
                scrollAmount = 0;
            }
        })
        
        const buttonR = document.getElementById("scrollR");
        buttonR.addEventListener("click", ()=>{
            if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
                sliders.scrollTo({
                    top: 0,
                    left: scrollAmount += scrollPerClick,
                    behavior: "smooth",
                }) 
            }
        })
    }
    addDetails(){
        const detailsContainer = document.getElementById("details-container");
        
        detailsContainer.innerHTML = `<p>${this.editorial} <br> ${this.idioma} <br> ${this.paginas} <br> ${this.publicacion} <br> ${this.peso} <br> ${this.dimension}</p>`
    }
}

const producto1 = new producto ("The killing joke", 15, "Alan Moore", "/51ss9Co9VzL._SY291_BO1,204,203,200_QL40_FMwebp_.png", "Presented for the first time with stark, stunning new coloring by Bolland, Batman: The Killing Joke is Alan Moore's unforgettable meditation on the razor-thin line between sanity and insanity, heroism and villainy, comedy and tragedy. <br> According to the grinning engine of madness and mayhem known as The Joker, that's all that separates the sane from the psychotic. Freed once again from the confines of Arkham Asylum, he's out to prove his deranged point. And he's going to use Gotham City's top cop, Commissioner Jim Gordon, and his brilliant and beautiful daughter Barbara to do it.", "DC comics", "Ingles", "97 pages", "17 Septiembre 2019", "11 pounds", "7.45 x 0.49 x 11.14 pulgadas");
const producto2 = new producto ("Watchmen", 22, "Alan Moore", "/51j1lVj-caL._SY291_BO1,204,203,200_QL40_FMwebp_.png", "In an alternate world where the mere presence of American superheroes changed history, the US won the Vietnam War, Nixon is still president, and the cold war is in full effect!Watchmen begins as a murder-mystery, but soon unfolds into a planet-altering conspiracy. As the resolution comes to a head, the unlikely group of reunited heroes--Rorschach, Nite Owl, Silk Spectre, Dr. Manhattan and Ozymandias--have to test the limits of their convictions and ask themselves where the true line is between good and evil.", "DC comics", "Ingles", "448 pages", "4 Junio 2013", "2.22 pounds", "7.38 x 1.08 x 11.15 pulgadas");
const producto3 = new producto ("Batman: Year One", 18, "Frank Miller", "/41Hu-o9I90S._SY291_BO1,204,203,200_QL40_FMwebp_.png", "In his first year on the job, Batman feels his way around a Gotham City far darker than the one he left. His solemn vow to extinguish the town’s criminal element is only half the battle; along with Lieutenant James Gordon, the Dark Knight must also fight a police force more corrupt than the scum in the streets. Batman: Year One stands next to Batman: The Dark Knight Returns on the mantle of greatest Batman graphic novels of all time. Timeless in its appeal, Frank Miller and David Mazzucchelli’s masterpiece would stand apart from the crowded comics field even today.", "DC comics", "Ingles", "136 pages", "10 enero 2007", "10.8 pounds", "6.64 x 0.34 x 10.21 pulgadas");
const producto4 = new producto ("Batman: The Long Halloween ", 16, "Jeph Loeb", "/51EwobIYQ2L._SY291_BO1,204,203,200_QL40_FMwebp_.png", "Christmas. St. Patrick's Day. Easter. As the calendar's days stack up, so do the bodies littered in the streets of Gotham City. A murderer is loose, killing only on holidays. The only man that can stop this fiend? The Dark Knight. In a mystery taking place during Batman's early days of crime fighting, Batman: The Long Halloween is one of the greatest Dark Knight stories ever told. Working with District Attorney Harvey Dent and Lieutenant James Gordon, Batman races against the calendar as he tries to discover who Holiday is before he claims his next victim each month. A mystery that has the reader continually guessing the identity of the killer, this story also ties into the events that transform Harvey Dent into Batman's deadly enemy, Two-Face.", "DC comics", "Ingles", "384 pages", "11 octubre 2011", "1.42 pounds", "6.61 x 0.45 x 10.13 pulgadas");
const producto5 = new producto ("Joker: The Deluxe Edition", 28, "Brian Azzarello", "/41Gcl0kSu-L._SY291_BO1,204,203,200_QL40_FMwebp_.png", "The Joker has been mysteriously released from Arkham Asylu, and he's none too pleased to find out what has happened to his criminal empire while he's been away. The result is a harrowing night of revenge, murder, and mania as only the Clown Prince of Crime can deliver it--all seen through the eyes of a new right-hand man who helps him in his mission to brutally reclaim his territory from the Penguin, Two=Face, the Riddler, KillerCroc, and more.", "DC comics", "Ingles", "152 pages", "16 Junio 2020", "1.2 pounds", "7.3 x 0.5 x 11.2 pulgadas");
const producto6 = new producto ("Batman: White Knight", 21, "Sean Murphy", "/51t5-oH7rhL._SY291_BO1,204,203,200_QL40_FMwebp_.png", "Batman: White Knight follows the man now known as Jack Napier as he embarks on a quest to heal the city he once terrorized. After reconciling with his long-suffering partner, Harley Quinn, he sets in motion a carefully plotted campaign to discredit the one person whom he views as Gotham City's true enemy: Batman. His crusade exposes a decades-long history of corruption within the Gotham City Police Department and transforms Napier into a city councilman and civic hero. But when the sins of his past return to threaten everything that he has accomplished, the distinctions between savior and destroyer begin to break down for both The Joker and Batman alike--and with them any hope for Gotham's future.", "DC comics", "Ingles", "232 pages", "9 octubre 2018", "14.4 pounds", "6.63 x 0.38 x 10.19 pulgadas");
const producto7 = new producto ("Doomsday Clock: The Complete Collection", 17, "Geoff Johns", "/418LLznMu2L._SY291_BO1,204,203,200_QL40_FMwebp_.png", "Dr. Manhattan, a near-omnipotent being from the Watchmen universe, has been using his powers to rewrite the DC Universe--reshaping some heroes' histories, erasing other heroes altogether, and playingwith the fates of the good and evil alike. But why? What does a godlike being from another worldstand to gain from the DC Universe? The mystery remains, but now that our heroes know they're being toyed with,what can they do to stop it? The clock is ticking...", "DC comics", "Ingles", "456 pages", "13 octubre 2020", "1.6 pounds", "6.65 x 0.9 x 10.2 pulgadas");
const producto8 = new producto ("Batman: Three Jokers", 19, "Geoff Johns", "/51zpmmYjskL._SY291_BO1,204,203,200_QL40_FMwebp_.png", "Batman doesn't understand how or why, but the fact is certain: the man he has spent a lifetime chasing isn't one man at all. There are three Jokers. Now that he knows the unbelievable truth, Bruce needs real answers. Joined by Barbara Gordon and Jason Todd, two former victims of the Joker's brutality, the Dark Knight is finally on a path to defeat the madman once and for all. Every last one of him.", "DC comics", "Ingles", "160 pages", "17 noviembre 2020", "1.15 pounds", "7.02 x 0.52 x 10.47 pulgadas");



const imagenes1 = [
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8
];

let aleatorio = Math.floor(Math.random()*imagenes1.length);

let comics = imagenes1[aleatorio];

comics.addProduct();

producto1.addCarousel();
producto2.addCarousel();
producto3.addCarousel();
producto4.addCarousel();
producto5.addCarousel();
producto6.addCarousel();
producto7.addCarousel();
producto8.addCarousel();

comics.addDetails();

let calificacion;

const rate5 = document.getElementById("rate-5");
rate5.addEventListener("click", () =>{
    calificacion = `<label for="rate-5" class="fas fa-star"></label> <label for="rate-5" class="fas fa-star"></label> <label for="rate-5" class="fas fa-star"></label> <label for="rate-5" class="fas fa-star"></label> <label for="rate-5" class="fas fa-star"></label>`;
});

const rate4 = document.getElementById("rate-4");
rate4.addEventListener("click", () =>{
    calificacion = `<label for="rate-5" class="fas fa-star"></label> <label for="rate-5" class="fas fa-star"></label> <label for="rate-5" class="fas fa-star"></label> <label for="rate-5" class="fas fa-star"></label>`;
});

const rate3 = document.getElementById("rate-3");
rate3.addEventListener("click", () =>{
    calificacion = `<label for="rate-5" class="fas fa-star"></label> <label for="rate-5" class="fas fa-star"></label> <label for="rate-5" class="fas fa-star"></label>`;
});

const rate2 = document.getElementById("rate-2");
rate2.addEventListener("click", () =>{
    calificacion = `<label for="rate-5" class="fas fa-star"></label> <label for="rate-5" class="fas fa-star"></label>`;
});

const rate1 = document.getElementById("rate-1");
rate1.addEventListener("click", () =>{
    calificacion = `<label for="rate-5" class="fas fa-star"></label>`;
});

const submitComent = document.getElementById("submit-coment");
submitComent.addEventListener("click", ()=>{
    const inputTitle = document.getElementById("input-title");
    const titleInput = inputTitle.value;

    const inputText = document.getElementById("input-text");
    const textInput = inputText.value;

    const coomentSection = document.getElementById("cooment-section");

    const warningContainer = document.getElementById("warning-container");

    if (titleInput <= 1 || textInput <= 1 || calificacion == undefined) {

        warningContainer.innerHTML=`<p id=error-text>por favor utiliza todos las herramientas</p>`
 
    }else{
        if (warningContainer.children.length >= 1) {
            console.log(calificacion);
            const errorText = document.getElementById("error-text");
            warningContainer.removeChild(errorText); 

            const createDiv = document.createElement("div");
            const fragmento = document.createDocumentFragment();
    
            const createDiv2 = document.createElement("div");
            const fragmento2 = document.createDocumentFragment();
    
            const createDiv3 = document.createElement("div");
            const fragmento3 = document.createDocumentFragment();
    
            const button = document.createElement("div");
            const fragmento4 = document.createDocumentFragment();

            const createDiv4 = document.createElement("div");
            const fragmento5 = document.createDocumentFragment();

            const createDiv5 = document.createElement("div");
            const fragmento6 = document.createDocumentFragment();

            fragmento.appendChild(createDiv);
            coomentSection.appendChild(fragmento);

            fragmento2.appendChild(createDiv2);
            createDiv.appendChild(fragmento2);

            createDiv2.innerHTML=calificacion;

            fragmento3.appendChild(createDiv3);
            createDiv.appendChild(fragmento3);

            createDiv3.innerHTML=`<h3> ${titleInput} </h3>`;

            fragmento5.appendChild(createDiv4);
            createDiv.appendChild(fragmento5);

            createDiv4.innerHTML`<p> ${textInput} </p>`;

            fragmento6.appendChild(createDiv5);
            createDiv.appendChild(fragmento6);

            fragmento4.appendChild(button);
            createDiv5.appendChild(fragmento4);

            button.innerText=`&timesb`
            
    
            button.addEventListener("click", (e)=>{
                e.target.parentNode.parentNode.remove()
            }) 

        }else{
            console.log(calificacion);
            const createDiv = document.createElement("div");
            const fragmento = document.createDocumentFragment();
    
            const createDiv2 = document.createElement("div");
            const fragmento2 = document.createDocumentFragment();
    
            const createDiv3 = document.createElement("div");
            const fragmento3 = document.createDocumentFragment();
    
            const button = document.createElement("div");
            const fragmento4 = document.createDocumentFragment();

            const createDiv4 = document.createElement("div");
            const fragmento5 = document.createDocumentFragment();
    
            const createDiv5 = document.createElement("div");
            const fragmento6 = document.createDocumentFragment();

            fragmento.appendChild(createDiv);
            coomentSection.appendChild(fragmento);

            fragmento2.appendChild(createDiv2);
            createDiv.appendChild(fragmento2);

            createDiv2.innerHTML=calificacion;

            fragmento3.appendChild(createDiv3);
            createDiv.appendChild(fragmento3);

            createDiv3.innerHTML=`<h3> ${titleInput} </h3>`;

            fragmento5.appendChild(createDiv4);
            createDiv.appendChild(fragmento5);

            createDiv4.innerHTML=`<p> ${textInput} </p>`;

            fragmento6.appendChild(createDiv5);
            createDiv.appendChild(fragmento6);

            fragmento4.appendChild(button);
            createDiv5.appendChild(fragmento4);

            button.innerHTML="&timesb;";
    
            button.addEventListener("click", (e)=>{
                e.target.parentNode.parentNode.remove()
            })   

        }
    }
});

const buyButton = document.getElementById("buy-button");
const headerOverlay = document.getElementById("header-overlay");
const overlay = document.getElementById("overlay");
const body = document.getElementById("body");

buyButton.addEventListener("click", ()=>{
    buyButton.innerText="See cart";

    body.classList.add("body")

    document.getElementsByClassName("pop")
    [0].classList.add("activar");

    document.getElementsByClassName("overlay")
    [0].classList.add("active");
    producto1.addCart();

    overlay.addEventListener("click", ()=>{
        body.classList.remove("body")

        document.getElementsByClassName("overlay")
        [0].classList.remove("active");

        document.getElementsByClassName("pop")
        [0].classList.remove("activar"); 
    });
});

headerOverlay.addEventListener("click", ()=>{
    body.classList.add("body")

    document.getElementsByClassName("overlay")
    [0].classList.add("active");

    document.getElementsByClassName("pop")
    [0].classList.add("activar");

    overlay.addEventListener("click", ()=>{
        body.classList.remove("body")

        document.getElementsByClassName("overlay")
        [0].classList.remove("active");

        document.getElementsByClassName("pop")
        [0].classList.remove("activar"); 
    });
});

const spanX = document.getElementById("span-x");
spanX.addEventListener("click", ()=>{  
    body.classList.remove("body")

    document.getElementsByClassName("overlay")
        [0].classList.remove("active");

        document.getElementsByClassName("pop")
        [0].classList.remove("activar"); 
});