import React from "react";

export default function SmsForm(props) {
  return (
    <form className="content-form" onSubmit={props.handleSubmit}>
      <div className="field">
        <label className="label">Number</label>
        <div className="control">
          <input name="number" className="input" type="number" required />
        </div>
      </div>
      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea name="message" className="textarea" />
        </div>
      </div>
      {props.children}
    </form>
  );
}
