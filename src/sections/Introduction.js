import React, { Component } from 'react';
import { Container, Jumbotron } from 'reactstrap';

class Introduction extends Component {
    render() {
        return (
            <Jumbotron>
                <Container>
                    <h1>Google Summer of Code '18 @ Jitsi</h1>
                    <a href = 'https://www.akshitkrnagpal.com' className = 'lead'> By - Akshit Kr Nagpal </a>
                    <hr />
                    <dl>
                        <dt>Project Name</dt>
                        <dd>Jitsi Electron App</dd>
                        <dt>Mentors</dt>
                        <dd>
                            Saúl Ibarra Corretgé,
                            Hristo Terezov,
                            George Politis
                        </dd>
                    </dl>
                    <hr />
                    <p>
                        The work I did combined three project ideas that were
                        listed on the ideas page of Jitsi for GSoC'18.
                    </p>
                    <ul>    
                        <li>Welcome Page / Multi-Domain Support</li>
                        <li>Native Settings</li>
                        <li>Auto Updates</li>
                    </ul>
                    <p>
                        I also did multiple miscellaneous work for Jitsi in
                        the meanwhile.
                    </p>
                </Container>
            </Jumbotron>
        );
    }
}

export default Introduction;
