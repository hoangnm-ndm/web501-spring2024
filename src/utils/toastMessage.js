const toastContainer = document.createElement("div");
toastContainer.classList.add("toast-container-m");
document.body.appendChild(toastContainer);

function showToast(message, duration = 5000, type = "success-m") {
  const toast = document.createElement("div");
  toast.classList.add("toast-m");
  toast.innerHTML = `<div class="message-wrap-m">
  <div class="message-m">${message}</div> <button class="closeBtn-m">x</button>
  </div>`;
  toast.classList.add(`${type}-m`);

  toastContainer.appendChild(toast);
  function closeToast() {
    toast.style.opacity = 0;
    setTimeout(() => {
      toast.remove();
    }, 2000);
  }

  const closeBtn = toast.querySelector(".closeBtn-m");
  closeBtn.classList.add(`btn-${type}-m`);
  closeBtn.onclick = closeToast;

  setTimeout(() => {
    toast.style.opacity = 1;
  }, 200);

  setTimeout(() => {
    closeToast();
  }, duration);
}

export default showToast;

/**
 * @param {string} message - message to show
 * @param {number} duration - duration to show the message
 * @param {string} type - type of message (success, error, warning)
 */
