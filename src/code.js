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
        obtain.innerHTML=`<p>${this.nombre}</p>`

        const obtainDiv = document.getElementById("description");
        obtainDiv.innerHTML = `<p>${this.descripcion}</p>`

        const obtainPrice = document.getElementById("price");
        obtainPrice.innerHTML = `<p>${this.precio}</p>`

        const obtainA = document.getElementById("author");
        obtainA.innerHTML = `<p>${this.autor}</p>`

        const obtainImg = document.getElementById("img");
        const createImg = document.createElement("img");
        const createSrc = document.createAttribute("src")
        const fragmento = document.createDocumentFragment();

        createSrc.value = this.img;

        createImg.setAttributeNode(createSrc);

        fragmento.appendChild(createImg);
        obtainImg.appendChild(fragmento);
    }
    addProductMain(){
        const obtain = document.getElementById("title2");
        obtain.innerHTML=`<p>${this.nombre}</p>`

        const obtainPrice = document.getElementById("price2");
        obtainPrice.innerHTML = `<p>${this.precio}</p>`

        const obtainA = document.getElementById("author2");
        obtainA.innerHTML = `<p>${this.autor}</p>`

        const obtainImg = document.getElementById("img2");
        const createImg = document.createElement("img");
        const createSrc = document.createAttribute("src")
        const fragmento = document.createDocumentFragment();

        createSrc.value = this.img;

        createImg.setAttributeNode(createSrc);

        fragmento.appendChild(createImg);
        obtainImg.appendChild(fragmento);
    }
    addCart(){
        const obtain = document.getElementById("title-cart");
        obtain.innerHTML=`<p>${this.nombre}</p>`

        const obtainPrice = document.getElementById("price-cart");
        obtainPrice.innerHTML = `<p>${this.precio}</p>`;

        const obtainImg = document.getElementById("img-cart");
        const createImg = document.createElement("img");
        const createSrc = document.createAttribute("src")
        const fragmento = document.createDocumentFragment();

        createSrc.value = this.img;

        createImg.setAttributeNode(createSrc);

        fragmento.appendChild(createImg);
        obtainImg.appendChild(fragmento);
    }
}

const producto1 = new producto ("The killing joke", "299", "Alan Moore", "/51GgmyZXn4L._SX319_BO1,204,203,200_.png", "Presented for the first time with stark, stunning new coloring by Bolland, Batman: The Killing Joke is Alan Moore's unforgettable meditation on the razor-thin line between sanity and insanity, heroism and villainy, comedy and tragedy.");

console.log(producto1);

producto1.addProduct();

const buyButton = document.getElementById("buy-button");
buyButton.addEventListener("click", ()=>{
    document.getElementsByClassName("pop")
    [0].classList.add("activar");

    document.getElementsByClassName("overlay")
    [0].classList.add("active");
    producto1.addCart();
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

