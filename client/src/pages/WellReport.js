import React from "react";
import Card from "react-bootstrap/Card";

class WellReport extends React.Component {
    render() {
        return (
            <div>
                <h1>This is the wellReport</h1>
                <Card>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Work summary title</Card.Subtitle>
                        <Card.Text>
                            Detail description of what happened
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Text>
                        <footer className="blockquote-footer">
                            UserName
                        </footer>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Work summary title</Card.Subtitle>
                        <Card.Text>
                            Detail description of what happened
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Text>
                        <footer className="blockquote-footer">
                            UserName
                        </footer>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default WellReport;