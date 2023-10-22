import React, { useState, useEffect } from 'react';

const ModalB = ({ modalBOpen, closeModal, onlyEven, setOnlyEven, setSearchQuery, searchQuery, usContacts, setCurrentPage, handleScroll }) => {
    return (
        modalBOpen && (
            <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>US Contacts</h2>
                        </div>
                        <div className="modal-body">
                            <div className="search-bar">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <div className="filter-options">
                                <input
                                    type="checkbox"
                                    id="onlyEven"
                                    checked={onlyEven}
                                    onChange={() => setOnlyEven(!onlyEven)}
                                />
                                <label htmlFor="onlyEven">Only even</label>
                            </div>
                            <div className="contact-list">
                                {usContacts
                                    .filter((contact) => contact.id % 2 === 0 || !onlyEven)
                                    .map((contact) => (
                                        <div className="contact-item" key={contact.id}>
                                            {contact.phone} - {contact?.country?.name}
                                        </div>
                                    ))}
                            </div>
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

export default ModalB;
