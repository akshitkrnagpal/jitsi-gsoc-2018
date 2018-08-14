import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardText,
    CardTitle
} from 'reactstrap';

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
                    <a
                        className = 'btn btn-dark'
                        href = { link }
                        rel='noopener noreferrer'
                        target = '_blank' >
                        View Pull Request
                    </a>
                </CardBody>
            </Card>
        );
    }
}

export default PRInfo;