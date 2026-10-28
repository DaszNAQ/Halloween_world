export const products = [
  { id: "pum-lamp", name: "Glowing Pumpkin Lantern", category: "decor", price: 189000, description: "A warm amber glow for an eerie Halloween corner.", image: "assets/collection/pumpkin-01-classic.webp", tag: "BESTSELLER", stock: true },
  { id: "ghost-plush", name: "Ghost Lantern", category: "toy", price: 149000, description: "A soft, ghostly companion for your desk or bedside table.", image: "assets/collection/nightlight-02-ghost-lantern.webp", tag: "GHOSTLY", stock: true },
  { id: "witch-hat", name: "Moonlit Witch Hat", category: "accessory", price: 99000, description: "A plum-bow accessory for your midnight transformation.", image: "assets/collection/witch-hat-01-plum-bow.webp", tag: "ACCESSORY", stock: true },
  { id: "cat-charm", name: "Black Cat Keepsake", category: "gift", price: 69000, description: "A tiny black cat for a touch of mysterious good luck.", image: "assets/collection/black-cat-crouching-with-golden-eyes.webp", tag: "SMALL GIFT", stock: true },
  { id: "potion-cup", name: "Witch’s Potion Cauldron", category: "decor", price: 129000, description: "A curious keepsake inspired by a witch’s bubbling potion.", image: "assets/collection/cauldron-green-potion.webp", tag: "UNUSUAL", stock: true },
  { id: "bat-mask", name: "Midnight Bat Mask", category: "accessory", price: 115000, description: "A dark costume accessory for a mysterious Halloween look.", image: "assets/collection/inverted-bronze-eyed-bat.webp", tag: "COSTUME", stock: true },
  { id: "mystery-box", name: "Mystery Relic Box", category: "gift", price: 219000, description: "A themed gift box filled with imagined Halloween curiosities.", image: "assets/collection/skull-cracked-01.webp", tag: "MYSTERY", stock: true },
  { id: "spell-book", name: "Midnight Grimoire", category: "toy", price: 159000, description: "A dark notebook for odd ideas, secret plans, and little spells.", image: "assets/collection/skeleton-seated-stone.webp", tag: "LIMITED", stock: true },
  { id: "candy-apple", name: "Crimson Candle Relic", category: "gift", price: 125000, description: "A dramatic crimson accent for your Halloween table display.", image: "assets/collection/candle-02-crimson-skull.webp", tag: "SWEET DISPLAY", stock: true },
  { id: "witch-broom", name: "Ancient Witch’s Broom", category: "decor", price: 325000, description: "A rustic decorative broom for a haunted room or photo set.", image: "assets/collection/broomstick-01-ancient-copper.webp", tag: "PROP", stock: true },
  { id: "spider-deco", name: "Crimson-Eyed Spider", category: "decor", price: 249000, description: "A striking spider decoration for a genuinely haunted corner.", image: "assets/collection/spider-01-large-red-markings.webp", tag: "SPOOKY", stock: true }
];

const categoryNames = { decor: "Decor", accessory: "Accessories", gift: "Gifts", toy: "Toys" };
const money = value => new Intl.NumberFormat("en-US", { style: "currency", currency: "VND", maximumFractionDigits: 0 }).format(value);

export function initShop(cart, toast, openModal) {
  const grid = document.querySelector("#product-grid");
  const search = document.querySelector("#product-search");
  const empty = document.querySelector("#shop-empty");
  let category = "all";
  let query = "";

  function render() {
    const list = products.filter(product =>
      (category === "all" || product.category === category) &&
      product.name.toLocaleLowerCase("en").includes(query.toLocaleLowerCase("en"))
    );
    grid.replaceChildren();
    empty.hidden = list.length > 0;
    list.forEach(product => {
      const card = document.createElement("article");
      card.className = "product-card";
      const visual = document.createElement("div");
      visual.className = "product-visual";
      const tag = document.createElement("span");
      tag.className = "product-tag";
      tag.textContent = product.tag;
      const art = document.createElement("img");
      art.className = "product-img";
      art.src = product.image;
      art.alt = product.name;
      art.loading = "lazy";
      visual.append(tag, art);

      const info = document.createElement("div");
      info.className = "product-info";
      const title = document.createElement("h3");
      title.textContent = product.name;
      const description = document.createElement("p");
      description.textContent = product.description;
      const bottom = document.createElement("div");
      bottom.className = "product-bottom";
      const price = document.createElement("span");
      price.className = "product-price";
      price.textContent = money(product.price);
      const actions = document.createElement("div");
      actions.className = "product-actions";
      const details = document.createElement("button");
      details.type = "button";
      details.className = "small-button";
      details.textContent = "Details";
      details.addEventListener("click", () => openModal(
        `<p class="eyebrow">${categoryNames[product.category].toUpperCase()}</p><h2 id="modal-title">${product.name}</h2><p>${product.description}</p><p><strong style="color:var(--green)">${money(product.price)}</strong></p><p class="muted">Sample availability only. This demo does not represent real inventory.</p><button class="button button-primary" id="modal-add-product" type="button">Add to cart ↗</button>`,
        () => document.querySelector("#modal-add-product")?.addEventListener("click", () => cart.add(product.id))
      ));
      const add = document.createElement("button");
      add.type = "button";
      add.className = "small-button add";
      add.textContent = "+ Add";
      add.addEventListener("click", () => cart.add(product.id));
      actions.append(details, add);
      bottom.append(price, actions);
      info.append(title, description, bottom);
      card.append(visual, info);
      grid.append(card);
    });
  }

  search.addEventListener("input", () => { query = search.value.trim(); render(); });
  document.querySelector("#category-filters").addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    category = button.dataset.category;
    document.querySelectorAll(".filter-chip").forEach(item => item.classList.toggle("active", item === button));
    render();
  });
  render();
}
