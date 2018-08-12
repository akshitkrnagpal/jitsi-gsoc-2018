import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardText,
    CardTitle
} from 'reactstrap';

import { ShareableConfigPRLink } from '../config';

class ShareableConfigPR extends Component {
    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>eslint-config-jitsi</CardTitle>
                    <CardText>
                        Since Jitsi had only one project using React, their 
                        shareable config did not have eslint rules for React.
                        After this was discovered, I was assigned to add React
                        eslint rules the config which I did by adding exports 
                        for react and jsdoc. 
                    </CardText>
                    <a
                        className = 'btn btn-dark'
                        href = { ShareableConfigPRLink }
                        rel='noopener noreferrer'
                        target = '_blank' >
                        View Pull Request
                    </a>
                </CardBody>
            </Card>
        );
    }
}

export default ShareableConfigPR;