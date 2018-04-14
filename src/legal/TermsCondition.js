import React, { Component } from 'react';

class TermsCondition extends Component {
    state = {}
    render() {
        return (<div>
            <iframe width="100%" title='terms' style={{ height: '95vh' }} frameBorder="0" allowFullScreen src="https://app.termly.io/document/terms-of-use-for-saas/7bff5b96-df31-4ae2-8798-d0425bd1953a">
                <p>Your browser does not support iframes.</p>
            </iframe>
        </div>)
    }
}

export default TermsCondition;