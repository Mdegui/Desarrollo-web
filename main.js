let shop = document.getElementById('shop')

let basket = JSON.parse(localStorage.getItem("datos")) || []

/**
 * FUNCION PARA GENERAR CARTAS INDIVIDUALES
 */
 let generateShop =()=>{
    return (shop.innerHTML = shopItemsData
        .map((x)=>{
            let {id,name,price,desc,img} =x;
            let search = basket.find((x)=>x.id === id) || []
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
                    <div id=${id} class="quantity">
                    ${search.item === undefined ? 0: search.item}
                    </div>
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
 *FUNCION DE INCREMENTO Y DECREMENTO DE CANTIDADES DE PRODUCTO JUNTO CON LOCAL STORAGE Y SOLUCION DE ERRORES DE CONSOLA
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
    localStorage.setItem("datos", JSON.stringify(basket));
};
let decrement = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

if(search === undefined) return
    else if(search.item === 0) return
    else {
    search.item -= 1;
}

/** USAMOS BAKET.FILTER PARA QUE LOCAL STORAGE NO GUARDE LOS ITEMS CON VALOR 0 YA QUE ES INNECESARIO */ 
update(selectedItem.id);
basket = basket.filter((x)=>x.item !== 0);
//console.log(basket);
localStorage.setItem("datos", JSON.stringify(basket));
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