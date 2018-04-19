import React, { Component } from "react";
import { Link } from "react-router-dom";
import qs from "qs";
import "./Results.css";
import imageHelper from "../utils/imageHelper";
import qrHelper from "../utils/qrHelper";

export default class Results extends Component {
  state = {
    selectedFileType: "png"
  };

  handleChange = ({ target }) => {
    this.setState(() => ({
      selectedFileType: target.value
    }));
  };

  render() {
    const { data } = this.props;
    let svgUri = qrHelper.encodeDataToSvgUri(data);
    return (
      <div>
        <div className="box container-results">
          <img src={imageHelper.generateSvgUrl(svgUri)} alt="" />
          <div className="btns">
            <div className="field has-addons has-addons-centered">
              <p className="control is-expanded">
                <button
                  id="dl-btn"
                  className="button is-info"
                  onClick={() => {
                    imageHelper.downloadHandler(
                      this.state.selectedFileType,
                      svgUri
                    );
                  }}
                >
                  DOWNLOAD
                </button>
              </p>
              <p className="control">
                <span className="select is-info">
                  <select
                    onChange={this.handleChange}
                    value={this.state.selectedFileType}
                  >
                    <option value="png">.PNG</option>
                    <option value="jpeg">.JPEG</option>
                    <option value="svg">.SVG</option>
                  </select>
                </span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="box encoded-data">
          <h3 className="title is-4 has-text-centered is-uppercase has-text-weight-bold">
            Encoded Data
          </h3>
          {Object.entries(data).map(([prop, value]) => (
            <div key={prop}>
              {prop !== "type" && (
                <div key={prop}>
                  <p class="title is-5">{prop}:</p>
                  <p class="subtitle is-6">{value}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
