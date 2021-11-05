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
        const f = "$"
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

            createDiv2.innerHTML = `<p> ${this.nombre} <span id=cantidad> ${nume} </span>  </p>`
            createDiv3.innerHTML = `<p id=price-p>${numer} <p> $ </p></p>`
            createDiv9.innerHTML = `<img src=${this.img} class=img-div>`
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
        const imagenes = [
            producto2.img,
            producto3.img,
            producto4.img
        ];
        
        let aleatorio = Math.floor(Math.random()*imagenes.length);

        const carouselContainer = document.getElementById("carousel-container");
        const createDiv1 = document.createElement("div");

        const createImg = document.createElement("img");
        const fragmento8 = document.createDocumentFragment();

        fragmento8.appendChild(createImg);
        carouselContainer.appendChild(fragmento8);

        createDiv1.setAttribute("class", "carousel-box");

        createImg.setAttribute("src", imagenes[aleatorio]);


        const sliders = document.querySelector(".carousel-box");
        var scrollPerClick;
        var imagePading = 20;
    }
};

const producto2 = new producto ("ef", 299, "ujfn", "/51j1lVj-caL._SY291_BO1,204,203,200_QL40_FMwebp_.png", "asjf");
const producto3 = new producto ("fq",299, "saef", "/51EwobIYQ2L._SY291_BO1,204,203,200_QL40_FMwebp_.png", "ewv");
const producto4 = new producto ("fq",299, "saef", "/41Hu-o9I90S._SY291_BO1,204,203,200_QL40_FMwebp_.png", "ewv");

const imagenes = [
    producto2,
    producto3,
    producto4
];

let aleatorio = Math.floor(Math.random()*imagenes.length);

producto2.addCarousel();
producto3.addCarousel();
producto4.addCarousel();

let comic = imagenes[aleatorio];

comic.addProduct();

const buyButton = document.getElementById("buy-button");
buyButton.addEventListener("click", ()=>{
    comic.addCart();

    document.getElementsByClassName("pop")
    [0].classList.add("activar");

    document.getElementsByClassName("overlay")
    [0].classList.add("active");

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