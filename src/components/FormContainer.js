import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import qs from 'qs';
import qrTypes from './qrTypes';
import "./FormContainer.css";

export default class FormContainer extends Component {
    state = {
        redirectToResults: false,
        loading: true,
        formObj: {}
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const formData = new FormData(form);


        this.setState(() => {
            const formObj = {}
            formData.forEach((value, key) => {
                formObj[key] = value
            });

            return {
                formObj,
                redirectToResults: true
            }
        })
    }

    render() {
        const { location } = this.props;
        const { redirectToResults, formObj } = this.state;
        const { type: formName } = qs.parse(location.search.slice(1));

        if (redirectToResults) {
            return (
                <Redirect to={{
                    pathname: '/',
                    search: `type=${formName}&${qs.stringify(formObj)}`
                }} />
            )
        }

        return (
            <div className='box'>
                {qrTypes.map(({ name, form: Form }) => {
                    return formName === name
                        ? <Form key={name} handleSubmit={this.handleSubmit} />
                        : null
                })}
            </div>
        )
    }
}