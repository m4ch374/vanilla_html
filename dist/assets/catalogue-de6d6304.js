import{d as l,s as d,b as r}from"./shopping_cart_hook-f4618f42.js";/* empty css               */const t=o=>`
    <div class="book-card" id="book-${o.id}">
      <button class="book-card-select" id="select-${o.id}">+</button>
      <a href="../pages/book.html?book=${o.id}">
        <div class="img-wrapper">
          <img alt="cover" src="${o.cover}" />
        </div>
        <div class="book-meta">
          <label>${o.title}</label>
          <p>${o.description}</p>
          <label class="book-price">$${o.price}</label>
        </div>
      </a>
    </div>
  `,i=document.querySelector("#book-catalogue");l.books.forEach(o=>{i.innerHTML+=t(o)});const c=o=>{const s=o.id.split("-")[1];r(s)?(o.textContent="-",o.classList.add("book-card-remove"),o.classList.remove("book-card-add")):(o.textContent="+",o.classList.add("book-card-add"),o.classList.remove("book-card-remove"))};document.querySelectorAll(".book-card-select").forEach(o=>{o.addEventListener("click",()=>{const e=o.id.split("-")[1];d(e),c(o)}),c(o)});
