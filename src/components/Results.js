import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import qs from 'qs';
import './Results.css'
import imageHelper from '../utils/imageHelper'
import qrHelper from '../utils/qrHelper'

export default class Results extends Component {
    state = {
        selectedFileType: 'png'
    }

    handleChange = ({ target }) => {
        this.setState(() => ({
            selectedFileType: target.value
        }))
    }

    render() {
        const { location } = this.props;
       const parsedData = qs.parse(location.search.slice(1))

        let svgUri = qrHelper.encodeDataToSvgUri(parsedData)
        return (
            <div className='box container-results'>
                {/* <div className="encoded-data">
                    <p className='has-text-centered is-uppercase has-text-weight-bold'>Encoded Data: {parsedData.type}</p>
                    <br />
                    {Object.entries(parsedData).map(([prop, value]) => (
                        <div key={prop}>
                            {prop !== 'type' && <div key={prop}>
                                <p>
                                    <i id='label'>{prop}: </i>
                                    <i id='value'>{value}</i>
                                </p>
                            </div>}
                        </div>
                    ))}

                </div> */}

                <img src={imageHelper.generateSvgUrl(svgUri)} alt="" />
                <div className="btns">
                    <div className="field has-addons has-addons-centered">
                        <p className="control is-expanded">
                            <button id='dl-btn' className="button is-info"
                                onClick={() => {
                                    imageHelper.downloadHandler(this.state.selectedFileType, svgUri)
                                }}>
                                DOWNLOAD
                            </button>
                        </p>
                        <p className="control">
                            <span className="select is-info">
                                <select onChange={this.handleChange} value={this.state.selectedFileType}>
                                    <option value='png' >.PNG</option>
                                    <option value='jpeg'>.JPEG</option>
                                    <option value='svg'>.SVG</option>
                                </select>
                            </span>
                        </p>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}