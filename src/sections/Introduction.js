import React, { Component } from 'react';
import { Container, Jumbotron } from 'reactstrap';

class Introduction extends Component {
    render() {
        return (
            <Jumbotron>
                <Container>
                    <h1>Google Summer of Code '18 @ Jitsi</h1>
                </Container>
            </Jumbotron>
        );
    }
}

export default Introduction;