import { useState } from "react"
import DOM from '../services/DOM'

const Modal = ({ id }) => {

    const [newItem, setNewItem] = useState("")

    const sendNewItem = () => {
        DOM.editItem(newItem, id)
    }

    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Editar item</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control mb-2" autoFocus onChange={(e) => setNewItem(e.target.value)} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-success" onClick={sendNewItem}>Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal