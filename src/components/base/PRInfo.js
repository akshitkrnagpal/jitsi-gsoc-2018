import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardText,
    CardTitle
} from 'reactstrap';

import ExternalLink from './ExternalLink';

class PRInfo extends Component {
    render() {
        const {
            link,
            repo,
            text
        } = this.props;
        
        return (
            <Card>
                <CardBody>
                    <CardTitle>{ repo }</CardTitle>
                    <CardText>{ text }</CardText> 
                    <ExternalLink
                        className = 'btn btn-dark'
                        href = { link } >
                        View Pull Request
                    </ExternalLink>
                </CardBody>
            </Card>
        );
    }
}

export default PRInfo;