class producto {
    constructor (nombre, precio, autor, img, descripcion){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.img = img;
        this.autor = autor;
    }
    addProduct(){
        const obtain = document.getElementById("title");
        obtain.innerHTML=`<h1>${this.nombre}</h1>`

        const obtainDiv = document.getElementById("description");
        obtainDiv.innerHTML = `<p>${this.descripcion}</p>`

        const obtainPrice = document.getElementById("price");
        obtainPrice.innerHTML = `${this.precio}`

        const obtainA = document.getElementById("author");
        obtainA.innerHTML = `<h2>${this.autor}</h2>`

        const obtainImg = document.getElementById("img");
        const createImg = document.createElement("img");
        const createSrc = document.createAttribute("src")
        const fragmento = document.createDocumentFragment();

        createSrc.value = this.img;

        createImg.setAttributeNode(createSrc);

        fragmento.appendChild(createImg);
        obtainImg.appendChild(fragmento);
    }
    addCart(){
        const overlay = document.getElementById("over");
        let number = this.precio
        const numer = this.precio;

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
                    console.log(e.target.parentNode.parentNode.remove())
                }
                
            });

            const deleteTarget = document.getElementById("delete-target");
            deleteTarget.addEventListener("click", (e)=>{
                console.log(e.target.parentNode.parentNode.remove())
            })
        }
    }
    addCarousel(){
        const carousel = document.getElementById("carousel");

        const createDiv = document.createElement("div");
        const fragmento = document.createDocumentFragment();

        const createImg = document.createElement("img");
        const fragmento2 = document.createDocumentFragment();

        const createP = document.createElement("p");
        const fragmento3 = document.createDocumentFragment();

        const createDiv2 = document.createElement("div");
        const fragmento4 = document.createDocumentFragment();

        const createDiv3 = document.createElement("div");
        const fragmento5 = document.createDocumentFragment();

        fragmento.appendChild(createDiv);
        carousel.appendChild(fragmento);

        fragmento2.appendChild(createImg);
        createDiv.appendChild(fragmento2);

        fragmento4.appendChild(createDiv2);
        createDiv.appendChild(fragmento4);

        fragmento5.appendChild(createDiv3);
        createDiv2.appendChild(fragmento5);

        createDiv3.innerText="hola"

        createDiv2.setAttribute("class", "continer")
        createDiv3.setAttribute("class", "text")

        createImg.addEventListener("mouseenter", ()=>{
            createDiv2.classList.add("o");
        })
        
        createImg.addEventListener("mouseleave", ()=>{
            createDiv2.classList.remove("o");
        })

        createImg.setAttribute("src", this.img);

        createP.innerText="hola"

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
};

const producto1 = new producto ("The killing joke", 299, "Alan Moore", "/51ss9Co9VzL._SY291_BO1,204,203,200_QL40_FMwebp_.png", "Presented for the first time with stark, stunning new coloring by Bolland, Batman: The Killing Joke is Alan Moore's unforgettable meditation on the razor-thin line between sanity and insanity, heroism and villainy, comedy and tragedy. <br> According to the grinning engine of madness and mayhem known as The Joker, that's all that separates the sane from the psychotic. Freed once again from the confines of Arkham Asylum, he's out to prove his deranged point. And he's going to use Gotham City's top cop, Commissioner Jim Gordon, and his brilliant and beautiful daughter Barbara to do it.");
const producto2 = new producto ("ef", 299, "ujfn", "/51j1lVj-caL._SY291_BO1,204,203,200_QL40_FMwebp_.png");
const producto3 = new producto ("se", 299, "isd", "/41Hu-o9I90S._SY291_BO1,204,203,200_QL40_FMwebp_.png", "sihbsfsafwa" );
const producto4 = new producto ("a", 299, "awfAW", "/51EwobIYQ2L._SY291_BO1,204,203,200_QL40_FMwebp_.png", "zsdawef");
const producto5 = new producto ("a", 299, "awfAW", "/41Gcl0kSu-L._SY291_BO1,204,203,200_QL40_FMwebp_.png", "zsdawef");
const producto6 = new producto ("a", 299, "awfAW", "/51t5-oH7rhL._SY291_BO1,204,203,200_QL40_FMwebp_.png", "zsdawef");
const producto7 = new producto ("a", 299, "awfAW", "/418LLznMu2L._SY291_BO1,204,203,200_QL40_FMwebp_.png", "zsdawef");
const producto8 = new producto ("a", 299, "awfAW", "/51zpmmYjskL._SY291_BO1,204,203,200_QL40_FMwebp_.png", "zsdawef");



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

const buyButton = document.getElementById("buy-button");
buyButton.addEventListener("click", ()=>{
    document.getElementsByClassName("pop")
    [0].classList.add("activar");

    document.getElementsByClassName("overlay")
    [0].classList.add("active");
    producto1.addCart();

    const overlay = document.getElementById("overlay");
    overlay.addEventListener("click", ()=>{
        document.getElementsByClassName("overlay")
        [0].classList.remove("active");

        document.getElementsByClassName("pop")
        [0].classList.remove("activar");
    })
});

const headerOverlay = document.getElementById("header-overlay");
headerOverlay.addEventListener("click", ()=>{
    document.getElementsByClassName("overlay")
    [0].classList.add("active");

    document.getElementsByClassName("pop")
    [0].classList.add("activar");

    const overlay = document.getElementById("overlay");
    overlay.addEventListener("click", ()=>{
        document.getElementsByClassName("overlay")
        [0].classList.remove("active");

        document.getElementsByClassName("pop")
        [0].classList.remove("activar");
    })
});

const spanX = document.getElementById("span-x");
spanX.addEventListener("click", (e)=>{
    document.getElementsByClassName("overlay")
        [0].classList.remove("active");

        document.getElementsByClassName("pop")
        [0].classList.remove("activar");
});