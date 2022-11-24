let shop = document.getElementById('shop')

/**
 * DATOS DE ITEMS DE LA TIENDA
 */
let shopItemsData = [
    {
        id:"primero",
        name:"Colombia",
        price: 100,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        img:"images/colombia.jpeg"
        addEventListener: 
    },
    {
        id:"segundo",
        name:"Mexico",
        price: 100,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        img:"images/mexico.jpg"
    },
    {
        id:"tercero",
        name:"Espana",
        price: 100,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        img:"images/espa.jpg"
    },
    { 
        id:"cuarto",
        name:"Croacia",
        price: 100,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        img:"images/croacia.jpg"
    },
    { 
        id:"quinto",
        name:"Argentina",
        price: 100,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        img:"images/arg.jpg"
    },
    { 
        id:"sexto",
        name:"Francia",
        price: 100,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        img:"images/francia.jpg"
    },
];

let basket = [];

/**
 * FUNCION PARA GENERAR CARTAS INDIVIDUALES
 */
 let generateShop =()=>{
    return (shop.innerHTML = shopItemsData
        .map((x)=>{
            let {id,name,price,desc,img} =x;
        return  `
        <div id=product-id-${id} class="item">
        <img id=imagen width="220" src=${img} alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">0</div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i> 
                </div>
            </div>
        </div>
    </div>
        `
    }).join(""));
};

generateShop()

/**
 *FUNCION DE INCREMENTO Y DECREMENTO DE CANTIDADES DE PRODUCTO
 */
 let increment = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search === undefined){
        basket.push({
            id:selectedItem.id,
            item: 1,
        })
    } else{
    search.item += 1;
}

    //console.log(basket)
    update(selectedItem.id);
};
let decrement = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search.item === 0) return
    else {
    search.item -= 1;
}

    //console.log(basket);
    update(selectedItem.id);
};
let update = (id)=>{
    let search = basket.find((x)=>x.id === id)
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation()
}

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };

calculation();