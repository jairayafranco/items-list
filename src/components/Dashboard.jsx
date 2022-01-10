import { useEffect, useMemo, useState } from "react"
import APIFunctions from "../services/APIFunctions"
import DOMFunctions from "../services/DOMFunctions"

export default function Dashboard() {
    const [item, setItem] = useState("")
    const [getItems, setGetItems] = useState([])
    const [loading, setLoading] = useState(true)

    window.addEventListener('click', DOMFunctions.deleteItem)
    
    useEffect(() => {
        APIFunctions.getData().then(data => setGetItems(data))
        setLoading(false)
    }, [])


    return (
        <div>
            <header id="main-header" className="bg-info text-white p-4 mb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 id="header-title">Lista de Items</h1>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <input className="form-control" id="filtro" placeholder="Buscar item..." type="text" onKeyUp={(e) => DOMFunctions.searchItem(e)} />
                        </div>
                    </div>
                </div>
            </header>

            <div className="container">
                <div id="main" className="card card-body">
                    <h2 className="title">Agregar Items</h2>
                    <form id="formAgregar" className="col-md-4 mb-3">
                        <input id="item" type="text" className="form-control mb-2" onChange={(e) => setItem(e.target.value)} />
                        <input type="submit" className="btn btn-dark" value="Agregar" onClick={(e) => DOMFunctions.addItem(item, e)} />
                    </form>
                    <h2 className="title">Items</h2>
                    <ul id="items" className="list-group">
                        {loading 
                            ? (<div className="loading mt-3"></div>) 
                            : getItems.map((item, key) => (
                                <li key={key} className="list-group-item" data={item.id}>{item.descripcion}
                                    <button className="btn btn-danger btn-sm float-end borrar">X</button>
                                </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}