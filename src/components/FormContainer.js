import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import qs from "qs";
import qrTypes from "./qrTypes";
import "./FormContainer.css";

export default class FormContainer extends Component {
  state = {
    loading: true,
    formObj: {}
  };

  handleSubmit = (event, type) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formObj = {};
    formObj.type = type;
    formData.forEach((value, key) => {
      formObj[key] = value;
    });

    this.props.generateCode(formObj);
  };

  render() {
    const { location } = this.props;
    const { type } = qs.parse(location.search.slice(1));

    return (
      <div className="box">
        {qrTypes.map(({ name, form: Form }) => {
          return type === name ? (
            <Form
              key={name}
              handleSubmit={event => this.handleSubmit(event, type)}
            >
              <button type="submit" className="button is-large is-fullwidth generate-code-btn">Generate Code</button>
            </Form>
          ) : null;
        })}
      </div>
    );
  }
}
