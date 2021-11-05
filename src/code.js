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
        console.log(imagenes)
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
            producto1.img,
            producto2.img
        ];
        
        let aleatorio = Math.floor(Math.random()*imagenes.length);

        const carouselContainer = document.getElementById("carousel-container");
        const createDiv1 = document.createElement("div");
        const fragmento1 = document.createDocumentFragment();

        const createDiv2 = document.createElement("div");
        const fragmento2 = document.createDocumentFragment();

        const createDiv3 = document.createElement("div");
        const fragmento3 = document.createDocumentFragment();

        const createDiv4 = document.createElement("div");
        const fragmento4 = document.createDocumentFragment();

        const createDiv5 = document.createElement("div");
        const fragmento5 = document.createDocumentFragment();

        const createButton1 = document.createElement("button");
        const fragmento6 = document.createDocumentFragment();

        const createButton2 = document.createElement("button");
        const fragmento7 = document.createDocumentFragment();

        const createImg = document.createElement("img");
        const fragmento8 = document.createDocumentFragment();

        fragmento1.appendChild(createDiv1);
        carouselContainer.appendChild(fragmento1);

        fragmento2.appendChild(createDiv2);
        createDiv1.appendChild(fragmento2);

        fragmento3.appendChild(createDiv3);
        createDiv1.appendChild(fragmento3);

        fragmento4.appendChild(createDiv4);
        createDiv1.appendChild(fragmento4);

        fragmento5.appendChild(createDiv5);
        createDiv1.appendChild(fragmento5);

        fragmento6.appendChild(createButton1);
        createDiv5.appendChild(fragmento6);

        fragmento7.appendChild(createButton2);
        createDiv5.appendChild(fragmento7);

        fragmento8.appendChild(createImg);
        createDiv2.appendChild(fragmento8);

        createButton1.innerText = "<";
        createButton2.innerText = ">";

        createImg.setAttribute("src", imagenes[aleatorio]);

    }
};

const producto1 = new producto ("The killing joke", 299, "Alan Moore", "/51GgmyZXn4L._SX319_BO1,204,203,200_.png", "Presented for the first time with stark, stunning new coloring by Bolland, Batman: The Killing Joke is Alan Moore's unforgettable meditation on the razor-thin line between sanity and insanity, heroism and villainy, comedy and tragedy. <br> According to the grinning engine of madness and mayhem known as The Joker, that's all that separates the sane from the psychotic. Freed once again from the confines of Arkham Asylum, he's out to prove his deranged point. And he's going to use Gotham City's top cop, Commissioner Jim Gordon, and his brilliant and beautiful daughter Barbara to do it.");
const producto2 = new producto ("ef", 299, "ujfn", "/51j1lVj-caL._SY291_BO1,204,203,200_QL40_FMwebp_.png");

producto1.addCarousel();

producto1.addProduct();


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