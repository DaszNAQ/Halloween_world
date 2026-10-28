import { readCart, writeCart } from "./storage.js";
const money = value => new Intl.NumberFormat("en-US", { style: "currency", currency: "VND", maximumFractionDigits: 0 }).format(value);

export function initCart(products, toast, openModal) {
  const byId = new Map(products.map(product => [product.id, product]));
  let cart = readCart(new Set(byId.keys()));
  const drawer = document.querySelector("#cart-drawer");
  const overlay = document.querySelector("#cart-overlay");
  const itemsEl = document.querySelector("#cart-items");
  const countEl = document.querySelector("#cart-count");
  const drawerCount = document.querySelector("#drawer-count");
  const subtotalEl = document.querySelector("#cart-subtotal");
  let lastFocus = null;
  const count = () => cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = () => cart.reduce((sum, item) => sum + byId.get(item.id).price * item.quantity, 0);
  const persist = () => { if (!writeCart(cart)) toast("This browser could not save your cart. Items will remain only for this session."); };

  function render() {
    countEl.textContent = count();
    drawerCount.textContent = `(${count()})`;
    subtotalEl.textContent = money(total());
    if (!cart.length) {
      itemsEl.innerHTML = '<div class="cart-empty"><img src="assets/collection/candle-03-ivory-rune.webp" alt="" loading="lazy"><h3>Your cart is empty</h3><p>A curious little treasure is waiting for you.</p></div>';
      return;
    }
    itemsEl.replaceChildren();
    cart.forEach(item => {
      const product = byId.get(item.id);
      if (!product) return;
      const row = document.createElement("article");
      row.className = "cart-line";
      const art = document.createElement("div");
      art.className = "cart-line-art";
      const image = document.createElement("img");
      image.src = product.image;
      image.alt = "";
      image.loading = "lazy";
      art.append(image);
      const info = document.createElement("div");
      const title = document.createElement("h3");
      title.textContent = product.name;
      const price = document.createElement("small");
      price.textContent = money(product.price);
      const quantity = document.createElement("div");
      quantity.className = "quantity-control";
      const minus = document.createElement("button");
      minus.type = "button";
      minus.textContent = "−";
      minus.setAttribute("aria-label", `Decrease quantity of ${product.name}`);
      const amount = document.createElement("span");
      amount.textContent = item.quantity;
      const plus = document.createElement("button");
      plus.type = "button";
      plus.textContent = "+";
      plus.setAttribute("aria-label", `Increase quantity of ${product.name}`);
      minus.disabled = item.quantity <= 1;
      plus.disabled = item.quantity >= 99;
      minus.addEventListener("click", () => update(item.id, item.quantity - 1));
      plus.addEventListener("click", () => update(item.id, item.quantity + 1));
      quantity.append(minus, amount, plus);
      info.append(title, price, quantity);
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "remove-item";
      remove.textContent = "Remove";
      remove.setAttribute("aria-label", `Remove ${product.name}`);
      remove.addEventListener("click", () => {
        cart = cart.filter(entry => entry.id !== item.id);
        persist(); render(); toast("Item removed from your cart.");
      });
      row.append(art, info, remove);
      itemsEl.append(row);
    });
  }

  function update(id, quantity) {
    if (quantity < 1 || quantity > 99) return;
    const item = cart.find(entry => entry.id === id);
    if (!item) return;
    item.quantity = quantity;
    persist(); render();
  }

  function add(id) {
    const product = byId.get(id);
    if (!product) return;
    const item = cart.find(entry => entry.id === id);
    if (item) {
      if (item.quantity >= 99) return toast("You have reached the 99-item limit for this product.");
      item.quantity++;
    } else cart.push({ id, quantity: 1 });
    persist(); render(); toast(`Added “${product.name}” to your cart.`);
  }

  function open() {
    lastFocus = document.activeElement;
    drawer.hidden = false;
    overlay.hidden = false;
    document.body.classList.add("modal-open");
    document.querySelector("#close-cart").focus();
  }
  function close() {
    drawer.hidden = true;
    overlay.hidden = true;
    document.body.classList.remove("modal-open");
    lastFocus?.focus?.();
  }

  document.querySelector("#open-cart").addEventListener("click", open);
  document.querySelector("#close-cart").addEventListener("click", close);
  document.querySelector("#continue-shopping").addEventListener("click", close);
  overlay.addEventListener("click", close);
  document.querySelector("#checkout-button").addEventListener("click", () => {
    if (!cart.length) return toast("Your cart is empty.");
    close();
    openModal(`<p class="eyebrow">DEMO CHECKOUT</p><h2 id="modal-title">Ready to continue?</h2><p>This is a UI demo only. There is no backend, order management, or payment gateway, so no order will be created and you will not be charged.</p><p><strong>Subtotal: ${money(total())}</strong></p><button class="button button-primary" id="checkout-understood" type="button">Got it</button>`);
    document.querySelector("#checkout-understood")?.addEventListener("click", () => document.querySelector("#modal-close").click());
  });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && !drawer.hidden) close(); });
  render();
  return { add, open, render };
}
