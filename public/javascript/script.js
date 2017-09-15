console.log("script is loaded")
const host = 'http://localhost:3000/'

const checkStatus = response =>  {
  if (response.status === 200) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

const updateBook = () => {
  const httpMethod = 'edit/'
  const id = Number(document.querySelector('.updateForm').getAttribute('data-id'))
  const title = document.querySelector('.titleNameSection').childNodes[1].value
  const author = document.querySelector('.authorNameSection').childNodes[1].value
  const summary = document.querySelector('.summarySection').childNodes[1].value
  const price = document.querySelector('.summarySection').childNodes[1].value
  const images = document.querySelector('.priceSection').childNodes[1].value
  const publisher = document.querySelector('.publisherSection').childNodes[1].value
  const isbn = document.querySelector('.isbnSection').childNodes[1].value
  console.log("id:",id)

  fetch(host + httpMethod + id, {
    method: 'PUT',
    mode: 'cors',
    redirect: `${host}books/`,
    headers: new Headers({
      'Accept': 'application/json',
  		'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      title,
      author,
      summary,
      price,
      images,
      publisher,
      isbn
    })
  }).then(checkStatus)
    console.log("checkstatus:",checkStatus)
    .catch(err => console.log(err) )
}

const modalBtns = document.querySelectorAll( '.open-modal-btn')
const closeModalBtns = document.querySelectorAll( '.close-modal-btn')
const saveBtn = document.querySelector('.save-btn')


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

saveBtn.addEventListener("click", event => {
  event.preventDefault()
  updateBook()
})
