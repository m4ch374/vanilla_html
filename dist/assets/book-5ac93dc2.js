import{I as s,d as i,s as c,b as n}from"./shopping_cart_hook-5fb93036.js";/* empty css               */const r=e=>`
    <div id="${e.id}" class="details">
      <div class="details-banner">
        <img alt="cover" src="${s[e.cover]}" />
        <div class="details-banner-text">
          <h1>${e.title}</h1>
          <div>by ${e.author}</div>
          <div>$${e.price}</div>
          <button class="select-item"></button>
        </div>
      </div>

      <h1>Plot</h1>
      <hr class="seperator" />
      <p>
        ${e.description}
      </p>
    </div>
  `,d=new URLSearchParams(window.location.search),t=d.get("book"),a=i.books.filter(e=>parseInt(e.id)===parseInt(t))[0],o=()=>{const e=document.querySelector(".select-item");n(t)?(e.textContent="Remove from cart",e.classList.add("remove-item"),e.classList.remove("add-item")):(e.textContent="Add to cart",e.classList.add("add-item"),e.classList.remove("remove-item"))};document.getElementById("book-content").innerHTML=r(a);document.querySelector(".select-item").addEventListener("click",()=>{c(t),o()});o();
