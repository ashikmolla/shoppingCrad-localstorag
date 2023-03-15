const addProductQunatity =()=>{
    const productFild = document.getElementById('Product-name')
    const quntityField = document.getElementById('Product-quantity')
    const Product =productFild.value;
    const qunaty =quntityField.value;
    productFild.value=''
    quntityField.value=''
    console.log(Product, qunaty);
    diplayProducts(Product, qunaty)
    saveItemStorage(Product, qunaty)
}
const diplayProducts=(Product, qunaty)=>{
    const ul =document.getElementById('display-prodecut-Container');
  const li =document.createElement('li');
  li.innerText =`${Product} :- ${qunaty}`;
  ul.appendChild(li);
}
const getStoregSerItem = ()=>{
    let crat ={};
    const storedCard = localStorage.getItem('crat');
    if(storedCard){
        crat = JSON.parse(storedCard);
    }else{
        return crat
    }

}
const saveItemStorage=(Product, qunaty)=>{
    const crat = getStoregSerItem();
    cart[Product]= qunaty;
    console.log(crat)
}
getStoregSerItem()
