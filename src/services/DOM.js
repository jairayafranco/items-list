import API from "./API"
import Swal from "sweetalert2"

const addItem = async (item, e) => {
  if (!item) {
    e.preventDefault()
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Debe ingresar datos en el campo'
    })
  } else {
    await API.sendData(item)
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

const editItem = async (newItem, id) => {
  if (!newItem) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Debe ingresar datos en el campo'
    })
  } else {
    await API.updateData(newItem, id)
    window.location.reload()
  }
}

const searchItem = (e) => {
  const texto = e.target.value.toLowerCase()
  const items = document.querySelectorAll('li')
  items.forEach(item => {
    const itemNombre = item.firstChild.textContent
    item.style.display = itemNombre.toLowerCase().indexOf(texto) !== -1 ? 'block' : 'none'
  })
}

const exportData = { addItem, deleteItem, searchItem, editItem }
export default exportData