// Style 1 : background image red. By Swapnil B

// Iterate through quote containers and mycard elements
document.querySelectorAll(".quote-container-Swapnil-B, .mycard, blockquote").forEach((blockquote) => {
  // Modify the text within the blockquote elements
  let modifiedText = blockquote.innerText.split(",").join(",\n").split("।").join("|\n");

  // Removes double quotes from the beginning and end of a string
  let fresh = modifiedText.replace(/^"|"$/g, "");
  blockquote.innerText = fresh;

  // Create and append action container for each blockquote
  let actionContainer = document.createElement("div");
  actionContainer.classList.add("quote-actions-Mahesh-Technicals");
  actionContainer.innerHTML = `
    <span class="copy-action-Swapnil-B" onclick="copyText(this)"><i class="fa-regular fa-copy"></i></span>
    <span class="facebook-action-Swapnil-B" onclick="share('facebook', this)"><i class="fa-brands fa-facebook"></i></span>
    <span class="whatsapp-action-Swapnil-B" onclick="share('whatsapp', this)"><i class="fa-brands fa-whatsapp"></i></span>
    <span class="telegram-action-Swapnil-B" onclick="share('telegram', this)"><i class="fa-brands fa-telegram"></i></span>`;

  blockquote.append(actionContainer);
});

// Function to copy text to clipboard and highlight the action
function copyText(element) {
  let text = element.parentElement.parentElement.innerText;
  navigator.clipboard.writeText(text + "\n\n" + location.href);
  highlightElement(element);
}

// Function to share text on social media and open a new window
function share(platform, element) {
  let text = element.parentElement.parentElement.innerText;
  let url = location.href;
  let shareUrl = '';

  switch (platform) {
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote= encodeURIComponent(${text})`;
      break;
    case 'whatsapp':
      shareUrl = `https://wa.me/?text=${encodeURIComponent(text + "\n\n" + url)}`;
      break;
    case 'telegram':
      shareUrl = `https://t.me/share/url?text=${encodeURIComponent(text + "\n")}&url=${encodeURIComponent(url+"\n")}`;
      break;
  }

  window.open(shareUrl);
}

// Function to highlight an element temporarily
function highlightElement(element) {
  element.style.background = "green";
  setTimeout(() => {
    element.style.background = "#222222";
  }, 1000);
}

// Add click event listeners to action elements for copying and sharing
document.querySelectorAll(".copy-action-Swapnil-B, .facebook-action-Swapnil-B, .whatsapp-action-Swapnil-B, .telegram-action-Swapnil-B").forEach((el) => {
  el.addEventListener("click", () => {
    if (el.classList.contains("copy-action-Swapnil-B")) {
      copyText(el);
    } else {
      share(el.classList[0].replace("-action-Swapnil-B", ""), el);
    }
  });
});