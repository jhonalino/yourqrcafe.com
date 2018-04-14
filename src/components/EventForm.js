import React from 'react';

export default function EventForm(props) {
    return (
        <form className='content-form' onSubmit={props.handleSubmit}>
            <div className="field">
                <label className="label">Title</label>
                <div className="control">
                    <input name='title' className="input" type="text" />
                </div>
            </div>
            <div className="field">
                <label className="label">Date</label>
                <div className="control">
                    <input name='date' className="input" type="text" />
                </div>
            </div>
            <div className="field">
                <label className="label">Time</label>
                <div className="control">
                    <input name='time' className="input" type="text" />
                </div>
            </div>
            <div className="field">
                <label className="label">Location</label>
                <div className="control">
                    <input name='location' className="input" type="text" />
                </div>
            </div>
            <div className="field">
                <label className="label">Description</label>
                <div className="control">
                    <textarea name='description' className="textarea" type="text" />
                </div>
            </div>
        </form>
    )
}