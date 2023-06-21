import"./modulepreload-polyfill-3cfb730f.js";/* empty css               */import{I as r}from"./import-assets-a9d264bf.js";import{d as l,s as d,b as t}from"./shopping_cart_hook-695e071a.js";const i=o=>`
    <div class="book-card" id="book-${o.id}">
      <button class="book-card-select" id="select-${o.id}">+</button>
      <a href="../pages/book.html?book=${o.id}">
        <div class="img-wrapper">
          <img alt="cover" src="${r[o.cover]}" />
        </div>
        <div class="book-meta">
          <label>${o.title}</label>
          <p>${o.description}</p>
          <label class="book-price">$${o.price}</label>
        </div>
      </a>
    </div>
  `,a=document.querySelector("#book-catalogue");l.books.forEach(o=>{a.innerHTML+=i(o)});const c=o=>{const s=o.id.split("-")[1];t(s)?(o.textContent="-",o.classList.add("book-card-remove"),o.classList.remove("book-card-add")):(o.textContent="+",o.classList.add("book-card-add"),o.classList.remove("book-card-remove"))};document.querySelectorAll(".book-card-select").forEach(o=>{o.addEventListener("click",()=>{const e=o.id.split("-")[1];d(e),c(o)}),c(o)});
