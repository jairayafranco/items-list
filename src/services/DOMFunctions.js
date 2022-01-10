import APIFunctions from "./APIFunctions"

const addItem = (item, e) => {
    let listaItems = document.querySelector('#items')

    let li = document.createElement('li')
    li.className = "list-group-item"
    li.textContent = item

    let boton = document.createElement('button')
    boton.className = "btn btn-danger btn-sm float-end borrar"
    boton.textContent = "X"

    li.appendChild(boton)
    listaItems.appendChild(li)

    APIFunctions.sendData(item)
    e.target.previousSibling.value = ""
}

const deleteItem = (e) => {
    if(e.target.classList.contains('borrar')) {
        if(window.confirm('¿Desea borrar el item?')) {
            APIFunctions.deleteData(e.target.parentElement.getAttribute("data"))
            e.target.parentElement.remove()
        }        
    }
}

const searchItem = (e) => {
    const items = document.querySelectorAll('li')
    items.forEach(item => {
        const itemNombre = item.firstChild.textContent
        if(itemNombre.toLowerCase().indexOf(e.target.value) !== -1) {
            item.style.display = "block"
        }else {
            item.style.display = "none"
        }
    })
}

const exportData = { addItem, deleteItem, searchItem }
export default exportData