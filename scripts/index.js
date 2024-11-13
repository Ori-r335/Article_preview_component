const shareModal = document.querySelector("#modal");
const shareButton = document.querySelector("#share-icon");
const shareIcon = document.querySelector(".card__share-icon");
const mediaQuery = window.matchMedia("(max-width: 376px)");

shareButton.addEventListener("click", () => {
  shareModal.classList.toggle("modal_opened");
  if (mediaQuery.matches && shareModal.classList.contains("modal_opened")) {
    shareButton.style.background = "hsl(217, 19%, 35%)";
  } else {
    shareButton.style.background = "hsl(210, 46%, 95%)";
  }
});

// Close the modal when clicking anywhere outside the modal content
document.addEventListener("click", handleOverlay);

function handleOverlay(evt) {
  // Check if modal is open
  if (shareModal.classList.contains("modal_opened")) {
    const isClickInsideModal =
      shareModal.contains(evt.target) || shareButton.contains(evt.target);

    // If the click was outside the modal, close it
    if (!isClickInsideModal) {
      closePopup(shareModal);
    }
  }
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}
