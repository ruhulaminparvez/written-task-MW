import React, { useState, useEffect } from 'react';

const ModalA = ({ modalAOpen, closeModal, onlyEven, setOnlyEven, searchQuery, setSearchQuery, contacts, setCurrentPage, handleScroll }) => {
    return (
        modalAOpen && (
            <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>All Contacts</h2>
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
                            {contacts
                                .filter((contact) => contact.id % 2 === 0 || !onlyEven)
                                .map((contact) => (
                                    <div key={contact.id}>
                                        {contact?.phone} - {contact?.country?.name}
                                    </div>
                                ))}

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

export default ModalA;
