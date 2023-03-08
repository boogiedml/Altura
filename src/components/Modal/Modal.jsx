import React from "react";
import moment from "moment/moment";
import "./modal.css";

const Modal = ({ setShowModal, item }) => {
  const {
    name,
    collection,
    asset_contract,
    external_link,
    permalink,
    num_sales,
  } = item;
  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal">
          <i className="ri-close-line" onClick={() => setShowModal(false)}></i>
        </span>
        <h6 className="text-center text-light">{name}</h6>
        <p className="desc text-center text-light">{collection.description}</p>

        <div className="d-flex align-items-center justify-content-between">
          <p>Address</p>
          <span className="money">{asset_contract.address}</span>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p>Created on</p>
          <span className="money">
            {moment(collection.created_date).format("LL")}
          </span>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p>Number of sales</p>
          <span className="money">{num_sales}</span>
        </div>

        <p>
          <a
            href={external_link}
            target="_blank"
            style={{ textDecoration: "none", color: "green" }}
          >
            External Link
          </a>
        </p>

        <a href={permalink} target="_blank" style={{ textDecoration: "none" }}>
          <button className="place__bid-btn btn-effect">Purchase</button>
        </a>
      </div>
    </div>
  );
};

export default Modal;
