import React, { useState } from "react";
import "./nft-card.css";
import Modal from "../Modal/Modal";
import moment from "moment/moment";

const NftCard = (props) => {
  const { name, id, image_url, creator, collection } = props.item;

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="single__nft__card">
      <div className="nft__img" onClick={() => setShowModal(true)}>
        <img src={image_url} alt="" className="w-100" />
      </div>

      <div className="nft__content">
        <h5 className="nft__title">
          <p onClick={() => setShowModal(true)}>{name}</p>
        </h5>
      </div>

      <div className="creator__info-wrapper d-flex align-items-center gap-3">
        <div className="creator__img">
          <img src={creator.profile_img_url} alt="" className="w-100" />
        </div>

        <div className="creator__info w-100 d-flex align-items-center justify-content-between">
          <p>{collection.name}</p>
        </div>
      </div>
      <div className="creator__info-wrapper d-flex gap-3">
        <div>
          <p>Created on {moment(collection.created_date).format("LL")}</p>
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} item={props.item} />}
    </div>
  );
};

export default NftCard;
