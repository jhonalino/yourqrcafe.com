import React from 'react';

export default function UrlForm(props) {
    return (
        <form className='content-form' onSubmit={props.handleSubmit}>
            <div className="field">
                <label className="label">URL</label>
                <div className="control">
                    <input className="input" name='url' type="text" required />
                </div>
            </div>
            {/* <button type='submit' className="button" >Generate Code</button> */}
        </form>
    )
}