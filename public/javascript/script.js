console.log("script is loaded")

const modalBtns = document.querySelectorAll( '.open-modal-btn')
const closeModalBtns = document.querySelectorAll( '.close-modal-btn')

const openModal = (element) => {
  console.log(element)
  let modalOverlay = element.target.parentNode.nextSibling
  let modal = element.target.parentNode.nextSibling.firstChild[0]
  modalOverlay.classList.add("show-modal")
  modal.classList.add("show-modal")
}

const closeModal = (element) => {
  let modalOverlay = element.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild
  let modal = element.target.parentNode.parentNode
  modalOverlay.classList.remove("show-modal")
  modal.classList.remove("show-modal")
}


modalBtns.forEach( moreDetailsBtn => {
  moreDetailsBtn.addEventListener("click", openModal)
})

closeModalBtns.forEach( closeBtn => {
  closeBtn.addEventListener("click", closeModal)
})
