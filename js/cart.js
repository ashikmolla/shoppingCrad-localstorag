const addProductQunatity =()=>{
    const productFild = document.getElementById('Product-name')
    const quntityField = document.getElementById('Product-quantity')
    const product =productFild.value;
    const qunatity =quntityField.value;
    productFild.value=''
    quntityField.value=''
    console.log(product, qunatity);

    diplayProducts(product, qunatity)
    saveItemLocalStorage(product, qunatity)
   
}
const diplayProducts=(product, qunatity)=>{
    const ul =document.getElementById('display-prodecut-Container');
  const li =document.createElement('li');
  li.innerText =`${product} :- ${qunatity}`;
  ul.appendChild(li);
}

const getItemStoredShopppingCart =()=>{
    let cart= {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
     cart = JSON.parse(storedCart)
    }
    return cart;
}

const saveItemLocalStorage =(product, qunatity)=>{
     const cart =getItemStoredShopppingCart();
     cart [product] = qunatity;
    //  console.log(cart)
    const cartStringFide = JSON.stringify(cart);
    // console.log(cartStringFide)
    localStorage.setItem('cart', cartStringFide)
}
const DisplayProductFromSevItemLocoleStored =()=>{
    const saveCart =getItemStoredShopppingCart();
    console.log(saveCart)
    for(const product in saveCart){
        const qunatity = saveCart[product];
        console.log(product, qunatity);
        diplayProducts(product, qunatity);
        
    }
}
DisplayProductFromSevItemLocoleStored();













