import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Alert } from 'react-bootstrap';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

    if (!username || !password) {
        setError('Please enter username and password');
        return;
    }

    alert(`Username: ${username} Password: ${password}`);

    setUsername('');
    setPassword('');
    setError('');
};
return (
    <Form className="mt-3" onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={handleUsernameChange} />
        </Form.Group>
        <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
            Register
        </Button>
    </Form>

);
};


export default Registration;


