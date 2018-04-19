import React from 'react';

export default function EmailForm(props) {
    return (
        <form className='content-form' onSubmit={props.handleSubmit}>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input name='email' className="input" type="email" required />
                </div>
            </div>
            <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                    <input name='subject' className="input" type="text" />
                </div>
            </div>
            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea name='message' className="textarea"></textarea>
                </div>
            </div>
            {props.children}
        </form>
    )
}