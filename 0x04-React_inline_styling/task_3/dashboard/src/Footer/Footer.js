import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";

function Footer({ className }) {
  return (
    <>
      <div className={`App-footer ${className}`}>
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </>
  );
}

export default Footer;
