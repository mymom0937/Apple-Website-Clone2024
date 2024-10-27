import React, { Component } from "react";
import ColumnFooter from "./ColumnFooter.jsx";
import footerDataSection from "../Data/footerData.js";

class FooterLinksWrapper extends Component {
  render() {
    return (
      <div className="footer-links-wrapper row">
        {footerDataSection.map((section, i) => {
          return (
            <div className={`links-wrapper-${i + 1} col-sm-12 col-md`} key={i}>
              <ColumnFooter data={section} />;
            </div>
          );
        })}
      </div>
    );
  }
}

export default FooterLinksWrapper;
