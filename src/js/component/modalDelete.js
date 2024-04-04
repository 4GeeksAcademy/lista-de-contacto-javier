import React, {useState} from "react";

export const ModalDelete = (props) => {

    // const [state, setState] = useState ({
    //     view: "none"
    // })

    function closeModal() {
        setState({view: "none"})
        console.log(state);
    }
    return (    
    <div className="modal" tabIndex="-1" style={{display:props.view}}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    )
};


