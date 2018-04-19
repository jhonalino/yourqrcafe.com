import React from "react";

export default function TextForm(props) {
  return (
    <form className="content-form" onSubmit={props.handleSubmit}>
      <div className="field">
        <label className="label">Text</label>
        <div className="control">
          <textarea name="text" className="textarea" required />
        </div>
      </div>
      {props.children}
    </form>
  );
}
