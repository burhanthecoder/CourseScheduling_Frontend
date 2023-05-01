import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from './AddLectures.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function LectureForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [instructor, setInstructor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className={styles.formContainer}>
      
      <Form onSubmit={handleSubmit} className={styles.form}>
      <Form.Label as="h2" className="text-center mb-4">Add Lectures</Form.Label>
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter lecture title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter lecture description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicInstructor">
          <Form.Label>Instructor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter instructor ID"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LectureForm;
