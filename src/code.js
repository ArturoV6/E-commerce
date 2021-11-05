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
        const over = document.getElementById("over");
        const number = this.precio
        const numer = 299;
        if (over.children.length < 1) {

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

            fragmento6.appendChild(createDiv6);
            over.appendChild(fragmento6);

            fragmento2.appendChild(createDiv2);
            createDiv6.appendChild(fragmento2);

            fragmento3.appendChild(createDiv3);
            createDiv6.appendChild(fragmento3);

            fragmento4.appendChild(createDiv4);
            createDiv6.appendChild(fragmento4);

            fragmento5.appendChild(createButton);
            createDiv4.appendChild(fragmento5);

            fragmento5.appendChild(createButton2);
            createDiv4.appendChild(fragmento5);

            createButton.innerText="+"
            createButton2.innerText="-"

            createDiv2.innerHTML = `<p> ${this.nombre} </p>`
            createDiv3.innerHTML = `<p id=price-p>${numer}</p>`

            let priceP = document.getElementById("price-p");
        
            createButton.addEventListener("click", (e)=>{
                priceP.innerText = this.precio += number
                console.log(number)
            });

            createButton2.addEventListener("click", (e)=>{
                console.log(priceP.innerText = this.precio -= number)
                if (priceP.innerText == 0) {
                    console.log(e.target.parentNode.parentNode.remove())
                }
                
            });
        }
    }
};

const producto1 = new producto ("The killing joke", 299, "Alan Moore", "/51GgmyZXn4L._SX319_BO1,204,203,200_.png", "Presented for the first time with stark, stunning new coloring by Bolland, Batman: The Killing Joke is Alan Moore's unforgettable meditation on the razor-thin line between sanity and insanity, heroism and villainy, comedy and tragedy.");

console.log(producto1);

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