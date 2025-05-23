const products = [
  {
    name: "Tasse Auto-Mélangeuse",
    price: "11,90€",
    image: "https://example.com/tasse.jpg",
    link: "https://www.aliexpress.com/item/1005001234567890.html"
  }
];

const container = document.getElementById("product-list");
products.forEach(p => {
  container.innerHTML += `
    <div class="product">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price}</p>
      <a href="${p.link}" target="_blank">Acheter</a>
    </div>
  `;
});
