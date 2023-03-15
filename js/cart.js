const addProductQunatity =()=>{
    const productFild = document.getElementById('Product-name')
    const quntityField = document.getElementById('Product-quantity')
    const product =productFild.value;
    const qunaty =quntityField.value;
    productFild.value=''
    quntityField.value=''
    console.log(product, qunaty);

    diplayProducts(product, qunaty)
    saveItemStorage(product, qunaty)
}
const diplayProducts=(product, qunaty)=>{
    const ul =document.getElementById('display-prodecut-Container');
  const li =document.createElement('li');
  li.innerText =`${product} :- ${qunaty}`;
  ul.appendChild(li);
}

const getStoregSerItem = ()=>{
    let crat ={};
    const storedCard = localStorage.getItem('crat');
    if(storedCard){
        crat = JSON.parse(storedCard);
    }return crat

}
const saveItemStorage=(product, qunaty)=>{
    const crat = getStoregSerItem();
    cart[product]= qunaty;
    // console.log(crat)
    const cartStringfiled =JSON.stringify(cart)
    localStorage.setItem('cart', cartStringfiled)

}

