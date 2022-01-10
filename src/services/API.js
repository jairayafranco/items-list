const url = 'https://apiharperexpress.jairayafranco.repl.co/items'

const getData = async() => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const sendData = async(data) => {
    await fetch(url, {
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
}

const updateData = async(data, id) => {
  await fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "descripcion": data
    })
  })
  .catch(err => console.log("Error: ", err))
}

const deleteData = async(id) => {
    await fetch(`${url}/${id}`, {method: 'DELETE'})
    .catch(err => console.log("Error: ", err))
}

const exportData = { sendData, getData, deleteData, updateData }
export default exportData