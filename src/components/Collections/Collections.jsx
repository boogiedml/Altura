import React, { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import NftCard from "../Nft-card/NftCard";
import "./collections.css";
import { CollectionsContext } from "../../context/Collections";

const Collections = () => {
  const { collections } = useContext(CollectionsContext);

  return (
    <section className="container mt-4">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="collections__top">
              <h3>Collections</h3>
            </div>
          </Col>

          <Col lg="12" className="card__grid">
            {collections.map((item, i) => (
              <div key={i} className="mb-4">
                <NftCard key={item.id} item={item} />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Collections;
