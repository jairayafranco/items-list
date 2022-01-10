const getData = async() => {
    const response = await fetch('https://apiharperexpress.jairayafranco.repl.co/items')
    const data = await response.json()
    return data
}

const sendData = async(data) => {
    await fetch('https://apiharperexpress.jairayafranco.repl.co/items', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "descripcion": data
      })
    })
    .catch(err => console.log("Error: ", err))
    .then(response => console.log("Datos enviados con exito: ", response))
}

const deleteData = async(id) => {
    await fetch(`https://apiharperexpress.jairayafranco.repl.co/items/${id}`, {method: 'DELETE'})
    .catch(err => console.log("Error: ", err))
    .then(response => console.log("Datos eliminados con exito: ", response))
}

const exportData = { sendData, getData, deleteData }
export default exportData