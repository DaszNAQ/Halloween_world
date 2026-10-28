import { initNavigation } from "./navigation.js";
import { products, initShop } from "./shop.js";
import { initCart } from "./cart.js";
import { showFate } from "./halloween-fate.js";
import { showMystery } from "./haunted-mystery.js";
import { initEducation } from "./education.js";
import { initFx } from "./fx.js";
import { initReveal } from "./reveal.js";
import { initCategories } from "./categories.js";
import { initParty } from "./party.js";

const toastRegion=document.querySelector("#toast-region");
function toast(message){const item=document.createElement("div");item.className="toast";item.textContent=message;toastRegion.append(item);window.setTimeout(()=>item.remove(),3200);}
const backdrop=document.querySelector("#modal-backdrop"),modal=document.querySelector("#modal"),content=document.querySelector("#modal-content");
let lastFocus=null;
function openModal(html,afterRender){lastFocus=document.activeElement;content.innerHTML=html;backdrop.hidden=false;document.body.classList.add("modal-open");modal.focus();document.querySelector("#modal-close").focus();afterRender?.();}
function closeModal(){backdrop.hidden=true;document.body.classList.remove("modal-open");content.replaceChildren();lastFocus?.focus?.();}
document.querySelector("#modal-close").addEventListener("click",closeModal);
backdrop.addEventListener("click",event=>{if(event.target===backdrop)closeModal()});
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&!backdrop.hidden)closeModal();if(event.key==="Tab"&&!backdrop.hidden){const focusable=[...modal.querySelectorAll('button:not(:disabled),a[href],input:not(:disabled),[tabindex]:not([tabindex="-1"])')];if(!focusable.length)return;const first=focusable[0],last=focusable[focusable.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}}});
initNavigation();
const cart=initCart(products,toast,openModal);
initShop(cart,toast,openModal);
initEducation(toast);
initFx();
initReveal();
initCategories();
initParty(toast);
document.querySelectorAll(".game-start").forEach(button=>button.addEventListener("click",()=>openModal("",()=>{if(button.dataset.game==="fate")showFate(content);else showMystery(content)})));
