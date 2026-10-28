const CART_KEY = "halloween-world-cart-v1";
export function readCart(validIds) {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(item => item && validIds.has(item.id) && Number.isInteger(item.quantity) && item.quantity > 0 && item.quantity <= 99)
      .map(item => ({ id: item.id, quantity: item.quantity }));
  } catch (error) {
    console.warn("Could not read the saved cart:", error);
    return [];
  }
}
export function writeCart(cart) {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); return true; }
  catch (error) { console.warn("Could not save the cart:", error); return false; }
}
// Read and write small local JSON preferences. Validate data when reading.
export function readJson(key) { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } }
export function writeJson(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch { return false; } }
