import React, { Component } from 'react';

class CookiePolicy extends Component {
    state = {}
    render() {
        return (<div>
            <iframe width="100%" title='cookie' style={{ height: '95vh' }} frameBorder="0" allowFullScreen src="https://app.termly.io/document/cookie-policy/892a8da6-95a5-4734-8b11-2bc69279667f" >
                <p>Your browser does not support iframes.</p>
            </iframe>
        </div>)
    }
}

export default CookiePolicy;