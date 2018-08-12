import React, { Component } from 'react';

import { ShareableConfigPRLink } from '../config';
import PRInfo from './PRInfo';

class ShareableConfigPR extends Component {
    render() {
        return (
            <PRInfo
                link = { ShareableConfigPRLink }
                repo = 'eslint-config-jitsi'
                text = '
                    Since Jitsi had only one project using React, their 
                    shareable config did not have eslint rules for React.
                    After this was discovered, I was assigned to add React
                    eslint rules the config which I did by adding exports 
                    for react and jsdoc.
                ' />
        );
    }
}

export default ShareableConfigPR;