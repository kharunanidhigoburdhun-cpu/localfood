// ---------- 1. MENU DATA (array of objects) ----------
const menuItems = [
  { name: "Dholl Puri", price: 20, category: "mains", image: "images/dholl-puri.jpg", emoji: "🌮", tag: "veg" },
  { name: "Roti (Veg)", price: 25, category: "mains", image: "images/roti.jpg", emoji: "🫓", tag: "veg" },
  { name: "Roti (Non-veg)", price: 35, category: "mains", image: "images/roti.jpg", emoji: "🫓", tag: "nonveg" },
  { name: "Mine Frite (Veg)", price: 150, category: "mains", image: "images/mine-frite.jpg", emoji: "🍜", tag: "veg" },
  { name: "Mine Frite (Non-veg)", price: 200, category: "mains", image: "images/mine-frite.jpg", emoji: "🍜", tag: "nonveg" },
  { name: "Mine Bouille (Veg)", price: 150, category: "mains", image: "images/mine-bouille.jpg", emoji: "🍲", tag: "veg" },
  { name: "Mine Bouille (Non-veg)", price: 200, category: "mains", image: "images/mine-bouille.jpg", emoji: "🍲", tag: "nonveg" },
  { name: "Riz Frite (Veg)", price: 175, category: "mains", image: "images/riz-frite.jpg", emoji: "🍚", tag: "veg" },
  { name: "Riz Frite (Non-veg)", price: 200, category: "mains", image: "images/riz-frite.jpg", emoji: "🍚", tag: "nonveg" },
  { name: "Rice + Curry", price: 175, category: "mains", image: "images/rice-curry.jpg", emoji: "🍛", tag: "nonveg" },
  { name: "Halim", price: 75, category: "mains", image: "images/halim.jpg", emoji: "🥣", tag: "nonveg" },
  { name: "Briani", price: 175, category: "mains", image: "images/briani.jpg", emoji: "🍛", tag: "nonveg" },
  { name: "Poulet Croustillant", price: 50, category: "mains", image: "images/fried-chicken.jpg", emoji: "🍗", tag: "nonveg" },
  { name: "Gateau Piment", price: 10, category: "snacks", image: "images/gateau-piment.jpg", emoji: "🥟", tag: "veg" },
  { name: "Samousa (Veg)", price: 10, category: "snacks", image: "images/samousa.jpg", emoji: "🥟", tag: "veg" },
  { name: "Samousa (Non-veg)", price: 10, category: "snacks", image: "images/samousa.jpg", emoji: "🥟", tag: "nonveg" },
  { name: "Paté", price: 10, category: "snacks", image: "images/pate.jpg", emoji: "🥐", tag: "veg" },
  { name: "Halfmoon", price: 10, category: "snacks", image: "images/halfmoon.jpg", emoji: "🥟", tag: "veg" },
  { name: "Piment Farci", price: 10, category: "snacks", image: "images/piment-farci.jpg", emoji: "🌶️", tag: "veg" },
  { name: "Laddoo", price: 15, category: "sweets", image: "images/laddoo.jpg", emoji: "🍡", tag: "veg" },
  { name: "Gulab Jamun", price: 15, category: "sweets", image: "images/gulab-jamun.jpg", emoji: "🍮", tag: "veg" },
  { name: "Rasgulla", price: 15, category: "sweets", image: "images/rasgulla.jpg", emoji: "🍥", tag: "veg" },
  { name: "Barfi", price: 15, category: "sweets", image: "images/barfi.jpg", emoji: "🍬", tag: "veg" },
  { name: "Tea", price: 35, category: "drinks", image: "images/tea.jpg", emoji: "☕", tag: "veg" },
  { name: "Juice", price: 25, category: "drinks", image: "images/juice.jpg", emoji: "🥤", tag: "veg" }
];

// ---------- 2. GRAB HTML ELEMENTS ----------
const menuGrid = document.getElementById("menu-grid");
const tabs = document.querySelectorAll(".tab");

// ---------- 3. RENDER FUNCTION ----------
function renderMenu(items) {
  menuGrid.innerHTML = "";

  items.forEach(function(item) {
    const card = document.createElement("div");
    card.className = "card";

    const media = item.image
      ? `<img src="${item.image}" alt="${item.name}">`
      : `<div class="card-emoji">${item.emoji}</div>`;

    card.innerHTML = `
      <div class="card-img">${media}</div>
      <div class="card-body">
        <span class="card-tag ${item.tag}">${item.tag === "veg" ? "Veg" : "Non-veg"}</span>
        <div class="card-name">${item.name}</div>
        <div class="card-price">Rs ${item.price}</div>
      </div>
    `;

    menuGrid.appendChild(card);
  });
}

// ---------- 4. FILTER TABS ----------
tabs.forEach(function(tab) {
  tab.addEventListener("click", function() {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const category = tab.dataset.category;

    if (category === "all") {
      renderMenu(menuItems);
    } else {
      const filtered = menuItems.filter(item => item.category === category);
      renderMenu(filtered);
    }
  });
});

// ---------- 5. INITIAL RENDER ----------
renderMenu(menuItems);