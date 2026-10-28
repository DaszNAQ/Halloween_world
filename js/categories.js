// Clicking a category applies the matching Shop filter and scrolls to the catalog.
export function initCategories() {
  document.querySelectorAll("[data-shop-category]").forEach(btn => btn.addEventListener("click", () => {
    document.querySelector(`.filter-chip[data-category="${btn.dataset.shopCategory}"]`)?.click();
    document.querySelector("#shop")?.scrollIntoView({ behavior: "smooth" });
  }));
}
