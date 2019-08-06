import React from "react";
<<<<<<< HEAD
import Card from "react-bootstrap/Card";
=======
import PageWrapper from "../components/PageWrapper";
>>>>>>> 51033c529053f14e5bc9bacf102fbe14e4bff025

class WellReport extends React.Component {
    render() {
        return (
<<<<<<< HEAD
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
=======
            <PageWrapper>
                <h1>This is the wellReport</h1>
            </PageWrapper>
>>>>>>> 51033c529053f14e5bc9bacf102fbe14e4bff025
        )
    }
}

export default WellReport;