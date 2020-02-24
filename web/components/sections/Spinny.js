import React from "react";

const Spinny = () => {
  return (
    <div id="loading"  className="displayNone">
      <div className="container">
        <div className="message">
          <h4>Finding your new bff...</h4>
          <img
            className="spinner"
            src="https://cdn.sanity.io/images/ilens9wa/production/e674e4c6993280a3ddc5eb79966ee6125b31cf69-256x256.gif?h=200&fit=max"
            alt="searching..."
          />
        </div>
      </div>
      <style jsx>
        {`
        .displayNone {
            display: none;
          }
          .container {
            position: fixed;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            z-index: 98;
          }
          .message {
            position: absolute;
            dispaly: flex;
            flex-direction: row;
            justify-content: center;
            align-itmes: center;
            background: #ffffff;
            text-align: center;
            overflow-x: hidden;
            overflow-y: auto;
            height: auto;
            max-height: 92%;
            width: auto;
            max-width: 90%;
            padding: 20px;
            border-radius: 1em;
            z-index: 99;
          }
        `}
      </style>
    </div>
  );
};

export default Spinny
