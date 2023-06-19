import{I as a,g as i,s as n}from"./shopping_cart_hook-5fb93036.js";/* empty css               */const l=t=>`
    <div class="shoping-cart-item-wrapper" id="book-${t.id}">
      <div class="shopping-cart-item-banner">
        <img alt="cover" src="${a[t.cover]}">
        <div>
          <h1>${t.title}</h1>
          <span>by ${t.author}</span>
        </div>
      </div>
      <div>
        <h1>$${t.price}</h1>
        <button class="cart-remove" id="cart-${t.id}">x</button>
      </div>
    </div>
  `;let r=i();r.forEach(t=>{document.querySelector("#cart-items").innerHTML+=l(t)});const s=t=>{const e=document.querySelector(`#book-${t}`);document.querySelector("#cart-items").removeChild(e)},c=()=>{const t=r.reduce((e,o)=>e+parseFloat(o.price),0);document.querySelector("#cart-subtotal").textContent=`$${t.toFixed(2)}`};document.querySelectorAll(".cart-remove").forEach(t=>{const e=t.id.split("-")[1];t.addEventListener("click",()=>{n(e),s(e),r=r.filter(o=>o.id.toString()!==e),c()})});document.querySelector("#clear-cart").addEventListener("click",()=>{localStorage.getItem("cart")&&(localStorage.removeItem("cart"),document.querySelector("#cart-items").remove(),r=[],document.querySelector("#cart-subtotal").textContent="$0.00")});c();
