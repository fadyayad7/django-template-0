import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import { Api } from "../util/Api";

export default function TodoForm({ notes, onChange }) {
    const initalState = {
        note: ""
    }
    const [note, setNote] = useState(initalState.note);

    const handleSubmit = e => {
        e.preventDefault();
        if (!note) {
            alert("Please provide a valid value for todo");
            return;
        }

        Api.postNote({content: note}).then(response => response.data)
            .then(res => res.data)
            .then((data) => onChange())
            .then(data => setNote(initalState.note))
            .catch(() => alert('Something went wrong'))

    }

    return <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-4">
            <FormControl placeholder="New Note"
                onChange={e => setNote(e.target.value)}
                value={note}
            />
            <Button type="submit">
                Add
            </Button>
        </InputGroup>
    </Form>
}