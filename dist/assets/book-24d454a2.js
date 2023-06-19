import{d as s,s as i,b as c}from"./shopping_cart_hook-f4618f42.js";/* empty css               */const n=e=>`
    <div id="${e.id}" class="details">
      <div class="details-banner">
        <img alt="cover" src="${e.cover}" />
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
  `,r=new URLSearchParams(window.location.search),t=r.get("book"),d=s.books.filter(e=>parseInt(e.id)===parseInt(t))[0],o=()=>{const e=document.querySelector(".select-item");c(t)?(e.textContent="Remove from cart",e.classList.add("remove-item"),e.classList.remove("add-item")):(e.textContent="Add to cart",e.classList.add("add-item"),e.classList.remove("remove-item"))};document.getElementById("book-content").innerHTML=n(d);document.querySelector(".select-item").addEventListener("click",()=>{i(t),o()});o();
