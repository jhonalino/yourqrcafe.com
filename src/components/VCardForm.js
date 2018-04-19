import React from "react";

export default function VCardForm(props) {
  return (
    <form className="content-form" onSubmit={props.handleSubmit}>
      <div className="field">
        <label className="label">First Name</label>
        <div className="control">
          <input name="firstName" className="input" type="text" />
        </div>
      </div>
      <div className="field">
        <label className="label">Last Name</label>
        <div className="control">
          <input name="lastName" className="input" type="text" />
        </div>
      </div>
      <div className="field">
        <label className="label">Phone #</label>
        <div className="control">
          <input name="phone" className="input" type="text" />
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input name="email" className="input" type="text" />
        </div>
      </div>
      <div className="field">
        <label className="label">Company</label>
        <div className="control">
          <input name="company" className="input" type="text" />
        </div>
      </div>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input name="title" className="input" type="text" />
        </div>
      </div>
      <div className="field">
        <label className="label">Street</label>
        <div className="control">
          <input name="street" className="input" type="text" />
        </div>
      </div>
      <div className="field">
        <label className="label">City</label>
        <div className="control">
          <input name="city" className="input" type="text" />
        </div>
      </div>
      <div className="field">
        <label className="label">Zip</label>
        <div className="control">
          <input name="zip" className="input" type="text" />
        </div>
      </div>
      <div className="field">
        <label className="label">State</label>
        <div className="control">
          <input name="state" className="input" type="text" />
        </div>
      </div>
      <div className="field">
        <label className="label">Country</label>
        <div className="control">
          <input name="country" className="input" type="text" />
        </div>
      </div>
      <div className="field">
        <label className="label">Note</label>
        <div className="control">
          <input name="note" className="input" type="text" />
        </div>
      </div>
      <div className="field">
        <label className="label">Website</label>
        <div className="control">
          <input name="website" className="input" type="text" />
        </div>
      </div>
      {props.children}
    </form>
  );
}
