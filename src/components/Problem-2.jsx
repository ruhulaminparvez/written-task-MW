import React, { useState, useEffect } from 'react';
import ModalA from './ModalA';
import ModalB from './ModalB';
import ModalC from './ModalC';

const Problem2 = () => {
    const [modalAOpen, setModalAOpen] = useState(false);
    const [modalBOpen, setModalBOpen] = useState(false);
    const [modalCOpen, setModalCOpen] = useState(false);
    const [onlyEven, setOnlyEven] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [contacts, setContacts] = useState([]);
    const [usContacts, setUSContacts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedContact, setSelectedContact] = useState({});

    const openModalA = () => {
        setModalAOpen(true);
        setModalBOpen(false);
        setModalCOpen(false);
    };

    const openModalB = () => {
        setModalAOpen(false);
        setModalBOpen(true);
        setModalCOpen(false);
    };

    const closeModal = () => {
        setModalAOpen(false);
        setModalBOpen(false);
        setModalCOpen(false);
    };

    // Fetch all contacts from the API
    const fetchAllContacts = async () => {
        const response = await fetch(`https://contact.mediusware.com/api/contacts/?page=${currentPage}&search=${searchQuery}`);
        const data = await response.json();
        setContacts(data.results);
    };

    // Fetch US contacts from the API
    const fetchUSContacts = async () => {
        const response = await fetch(`https://contact.mediusware.com/api/country-contacts/United%20States/?page=${currentPage}&search=${searchQuery}`);
        const data = await response.json();
        setUSContacts(data.results);
    };

    useEffect(() => {
        if (modalAOpen) {
            fetchAllContacts();
        } else if (modalBOpen) {
            fetchUSContacts();
        }
    }, [modalAOpen, modalBOpen]);

    // Implement infinity scroll logic
    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.offsetHeight;
        const scrollTop = window.scrollY;

        if (windowHeight + scrollTop === documentHeight) {
            setCurrentPage(currentPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentPage]);

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={openModalA}>
                        All Contacts
                    </button>
                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={openModalB}>
                        US Contacts
                    </button>
                </div>
            </div>

            <ModalA
                modalAOpen={modalAOpen}
                closeModal={closeModal}
                setOnlyEven={setOnlyEven}
                onlyEven={onlyEven}
                setSearchQuery={setSearchQuery}
                searchQuery={searchQuery}
                contacts={contacts}
                setCurrentPage={setCurrentPage}
                handleScroll={handleScroll}
            />

            <ModalB
                modalBOpen={modalBOpen}
                closeModal={closeModal}
                setOnlyEven={setOnlyEven}
                onlyEven={onlyEven}
                setSearchQuery={setSearchQuery}
                searchQuery={searchQuery}
                usContacts={usContacts}
                setCurrentPage={setCurrentPage}
                handleScroll={handleScroll}
            />

            <ModalC
                modalCOpen={modalCOpen}
                closeModal={closeModal}
                selectedContact={selectedContact}
            />
        </div>
    );
};

export default Problem2;
