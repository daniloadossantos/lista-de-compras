const addInput = document.querySelector("#newItemInput")
const itemsList = document.querySelector("#itemsList")
const addItem = document.querySelector(".add-button")
const removeItem = document.querySelector(".delete-button")
const toggleItem = document.querySelector(".item-checkbox")

//Regra para não aceitar inserção de número no input
addInput.addEventListener("input", () => {
  const hasCharactersRegex = /\d+/g
  addInput.value = addInput.value.replace(hasCharactersRegex, "")
})


addItem.addEventListener("click", () => {
  const item = addInput.value

  if (item != null && item.length > 0){
    //criando os elementos da lista conforme o botão é clicado
    const newDiv = document.createElement("div")
    newDiv.className = "item"

    const newCheckbox = document.createElement('input')
    newCheckbox.type = "checkbox"
    newCheckbox.className = "item-checkbox"

    const newItemName = document.createElement("span")
    newItemName.textContent = item
    newItemName.className = "item-text"

    const newDeleteButton = document.createElement("button")
    newDeleteButton.className = "delete-button"
    newDeleteButton.textContent = "🗑️"

    newDiv.append(newCheckbox, newItemName, newDeleteButton)
    itemsList.appendChild(newDiv)

    //Limpa o input
    addInput.value = ""
  }

  else {
    showErrorModal()
  }

})

function showErrorModal (){
  const modal = document.querySelector("#errorModal")
  modal.classList.add('show')
}

function hideErrorModal () {
  const modal = document.querySelector("#errorModal")
  modal.classList.remove('show')
}





