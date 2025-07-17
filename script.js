const addInput = document.querySelector("#newItemInput")
const itemsList = document.querySelector("#itemsList")
const addItem = document.querySelector(".add-button")
const removeItem = document.querySelector(".delete-button")
const selectedItem = document.querySelector(".item-checkbox")

//Regra para não aceitar inserção de número no input
addInput.addEventListener("input", () => {
  const hasCharactersRegex = /\d+/g
  addInput.value = addInput.value.replace(hasCharactersRegex, "")
})


addItem.addEventListener("click", () => {
  const item = addInput.value

  if (item === "") {
    showErrorModal()
    return;
  }


  //criando os elementos da lista conforme o botão é clicado
  const newDiv = document.createElement("div")
  newDiv.className = "item"

  const newCheckbox = document.createElement('input')
  newCheckbox.type = "checkbox"
  newCheckbox.className = "item-checkbox"
  newCheckbox.setAttribute('onchange', "toggleItem(this)")

  const newItemName = document.createElement("span")
  newItemName.textContent = item
  newItemName.className = "item-text"

  const newDeleteButton = document.createElement("button")
  newDeleteButton.className = "delete-button"
  newDeleteButton.textContent = "🗑️"
  newDeleteButton.setAttribute('onclick', "deleteItem(this)")


  newDiv.append(newCheckbox, newItemName, newDeleteButton)
  itemsList.appendChild(newDiv)

  //Limpa o input
  addInput.value = ""


})

function showErrorModal() {
  const modal = document.querySelector("#errorModal")
  modal.classList.add('show')
}

function hideErrorModal() {
  const modal = document.querySelector("#errorModal")
  modal.classList.remove('show')
}

function deleteItem(button) {
  const item = button.closest('.item')
  item.remove()
  showNotification()
}

function showNotification() {
  const notification = document.querySelector("#notification")
  notification.classList.add('show')
  setTimeout(() => {
    notification.classList.remove('show');
  }, 1500)
}

function hideNotification() {
  const notification = document.querySelector("#notification")
  notification.classList.remove('show')
}

function toggleItem(checkbox) {
  const itemText = checkbox.nextElementSibling;
  const itemSelected = selectedItem;
  if (checkbox.checked) {
    itemText.classList.add('completed');
    itemSelected.classList.add('checked');
  } else {
    itemText.classList.remove('completed');
    itemSelected.classList.remove('checked');

  }
}



