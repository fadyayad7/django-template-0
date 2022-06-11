import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup"
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdEdit, MdDelete, MdAlternateEmail } from "react-icons/md";
import { Api } from "../util/Api";

export default function TodoList({ notes = [], onChange }) {
    const [show, setShow] = useState(false);
    const [note, setNote] = useState(null);

    const handleClose = () => {
        setShow(false);
    }

    const handleDelete = (id) => {
        Api.deleteNote(id).then(onChange)
        .catch(() => alert('error deleting this note'));
    }

    const handleUpdate = async (id, note) => {
        Api.updateNote(id, note).then(onChange)
        .catch(() => alert('error updating this note'));
    }

    const renderListGroupItem = (t) => {
        return <ListGroup.Item key={t.id} className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-center">
                <span>
                    {t.content}
                </span>
            </div>
            <div>
                <MdEdit style={{
                    cursor: "pointer",
                    marginRight: "12px"
                }} onClick={() => {
                    setNote(t);
                    setShow(true);
                }} />
                <MdDelete style={{
                    cursor: "pointer"
                }} onClick={() => {
                    handleDelete(t.id);
                }} />
            </div>
        </ListGroup.Item>
    }

    const handleChange = (e) => {
        setNote({...note, content: e.target.value})
    }

    const handleSaveChanges = async () => {
        await handleUpdate(note.id, note);
        handleClose();
    }

    return <div>
        <div className="mb-2 mt-4">
            Completed Notes ({notes.length})
        </div>
        <ListGroup>
            {notes?.map?.(renderListGroupItem)}
        </ListGroup>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Todo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormControl value={note ? note.content : ""}
                    onChange={handleChange}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSaveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
}