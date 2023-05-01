import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Courses.module.css';

function CoursesList() {
  return (
    <div className="container my-4 mt-5">
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src="course1.jpg" style={{ height: "200px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>Course 1</Card.Title>
              <Card.Text>
                Course description lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Level: Beginner</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src="course2.jpg" style={{ height: "200px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>Course 2</Card.Title>
              <Card.Text>
                Course description lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Level: Intermediate</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src="course3.jpg" style={{ height: "200px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>Course 3</Card.Title>
              <Card.Text>
                Course description lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Level: Advanced</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src="course3.jpg" style={{ height: "200px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>Course 4</Card.Title>
              <Card.Text>
                Course description lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Level: Advanced</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CoursesList;
