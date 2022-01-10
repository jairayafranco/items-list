import API from "./API"
import Swal from "sweetalert2"

const addItem = (item, e) => {
    if (!item) {
        e.preventDefault()
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe ingresar datos en el campo'
          })
    } else {
        API.sendData(item)
        e.target.previousSibling.value = ""
    }
}

const deleteItem = (e) => {
    if (e.target.classList.contains('borrar')) {
        Swal.fire({
            title: '¿Eliminar?',
            text: "Esta seguro que desea eliminar el item",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                API.deleteData(e.target.parentElement.getAttribute("data"))
                e.target.parentElement.remove()
                Swal.fire(
                    'Eliminado!',
                    'El item se ha quitado de la lista',
                    'success'
                )
            }
          })
    }
}

const searchItem = (e) => {
    const texto = e.target.value.toLowerCase()
    const items = document.querySelectorAll('li')
    items.forEach(item => {
        const itemNombre = item.firstChild.textContent
        if (itemNombre.toLowerCase().indexOf(texto) !== -1) {
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    })
}

const exportData = { addItem, deleteItem, searchItem }
export default exportData