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
        obtainPrice.innerHTML = `${comics.precio}`

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
                    buyButton.innerText="Add to cart";
                    e.target.parentNode.parentNode.remove()
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

const producto1 = new producto ("The killing joke", 299, "Alan Moore", "/51ss9Co9VzL._SY291_BO1,204,203,200_QL40_FMwebp_.png", "Presented for the first time with stark, stunning new coloring by Bolland, Batman: The Killing Joke is Alan Moore's unforgettable meditation on the razor-thin line between sanity and insanity, heroism and villainy, comedy and tragedy. <br> According to the grinning engine of madness and mayhem known as The Joker, that's all that separates the sane from the psychotic. Freed once again from the confines of Arkham Asylum, he's out to prove his deranged point. And he's going to use Gotham City's top cop, Commissioner Jim Gordon, and his brilliant and beautiful daughter Barbara to do it.", "DC comics", "Ingles", "97 paginas", "17 Septiembre 2019", "11 pounds", "7.45 x 0.49 x 11.14 pulgadas");
const producto2 = new producto ("ef", 299, "ujfn", "/51j1lVj-caL._SY291_BO1,204,203,200_QL40_FMwebp_.png");
const producto3 = new producto ("se", 299, "isd", "/41Hu-o9I90S._SY291_BO1,204,203,200_QL40_FMwebp_.png", "sihbsfsafwa" );
const producto4 = new producto ("a", 299, "awfAW", "/51EwobIYQ2L._SY291_BO1,204,203,200_QL40_FMwebp_.png", "zsdawef");
const producto5 = new producto ("a", 299, "awfAW", "/41Gcl0kSu-L._SY291_BO1,204,203,200_QL40_FMwebp_.png", "zsdawef");
const producto6 = new producto ("a", 299, "awfAW", "/51t5-oH7rhL._SY291_BO1,204,203,200_QL40_FMwebp_.png", "zsdawef");
const producto7 = new producto ("a", 299, "awfAW", "/418LLznMu2L._SY291_BO1,204,203,200_QL40_FMwebp_.png", "zsdawef");
const producto8 = new producto ("a", 299, "awfAW", "/51zpmmYjskL._SY291_BO1,204,203,200_QL40_FMwebp_.png", "zsdawef");



const imagenes1 = [
    producto3,
    producto2,
    producto1,
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

            button.innerText=`&timesb`;
    
            button.addEventListener("click", (e)=>{
                e.target.parentNode.parentNode.remove()
            })   

        }
    }
});     

const buyButton = document.getElementById("buy-button");
const overlay = document.getElementById("overlay");
const headerOverlay = document.getElementById("header-overlay");

function disableScroll(){  
    window.scrollTo(0,0);
}

buyButton.addEventListener("click", ()=>{
    window.addEventListener('scroll', disableScroll);

    document.getElementsByClassName("pop")
    [0].classList.add("activar");

    document.getElementsByClassName("overlay")
    [0].classList.add("active");
    producto1.addCart();

    buyButton.innerText="See Cart";
    
    overlay.addEventListener("click", ()=>{

        document.getElementsByClassName("overlay")
        [0].classList.remove("active");
        
        document.getElementsByClassName("pop")
        [0].classList.remove("activar");

        window.removeEventListener('scroll', disableScroll); 
    })
});

headerOverlay.addEventListener("click", ()=>{
    window.addEventListener('scroll', disableScroll);

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

        window.removeEventListener('scroll', disableScroll); 
    })
});

const spanX = document.getElementById("span-x");
spanX.addEventListener("click", ()=>{
    document.getElementsByClassName("overlay")
        [0].classList.remove("active");

        document.getElementsByClassName("pop")
        [0].classList.remove("activar"); 
        
        window.removeEventListener('scroll', disableScroll);
});