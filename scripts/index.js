const shareModal = document.querySelector("#modal");
const shareButton = document.querySelector("#share-icon");

shareButton.addEventListener("click", () => {
  shareModal.classList.toggle("modal_opened");
  //   shareButton.style.background = "hsl(214, 17%, 51%)";
});

// Close the modal when clicking anywhere outside the modal content
document.addEventListener("click", handleOverlay);

function handleOverlay(evt) {
  // Check if modal is open
  if (shareModal.classList.contains("modal_opened")) {
    // const isClickOnButton = shareButton.contains(evt.target);
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
