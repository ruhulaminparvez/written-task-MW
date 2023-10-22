import React from 'react';

const ModalC = ({ modalCOpen, closeModal, selectedContact }) => {
    return (
        modalCOpen && (
            <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Contact Details</h2>
                        </div>
                        <div className="modal-body">
                            <p>Name: {selectedContact.name}</p>
                            <p>Phone: {selectedContact.phone}</p>
                            {/* Add more contact details as needed */}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default ModalC;
