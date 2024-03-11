import React, { useState } from "react";
import { Col, Divider, Row } from "antd";
import { useAppSelector } from "../../redux/store";
const ModalContent = () => {
  const rupantorData = useAppSelector(
    (state) => state?.map?.rupantorData ?? null
  );

  return (
    rupantorData?.geocoded_address?.district && (
      <div style={{ color: "black", textAlign: "start" }}>
        <Row style={{ marginTop: "20px" }}>
          <Col
            underline
            style={{ fontWeight: "100", fontSize: "22px", color: "#416D19" }}
            span={24}
          >
            Input Address
          </Col>
        </Row>
        <Divider />
        <Row style={{ marginBottom: "10px" }}>
          <Col style={{ fontWeight: "bold" }} span={12}>
            Input Address:
          </Col>
          <Col span={12}>{rupantorData?.given_address}</Col>
        </Row>
        <Row style={{ marginBottom: "10px" }}>
          <Col style={{ fontWeight: "bold" }} span={12}>
            Fixed Address:
          </Col>
          <Col span={12}>{rupantorData?.fixed_address}</Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col
            underline
            style={{ fontWeight: "100", fontSize: "22px", color: "#416D19" }}
            span={24}
          >
            Geocoded Address
          </Col>
        </Row>
        <Divider />
        <Row style={{ marginBottom: "10px" }}>
          <Col style={{ fontWeight: "bold" }} span={12}>
            Geocoded Address:
          </Col>
          <Col span={12}>{rupantorData?.geocoded_address?.Address}</Col>
        </Row>
        <Row style={{ marginBottom: "10px" }}>
          <Col style={{ fontWeight: "bold" }} span={12}>
            Place Type:
          </Col>
          <Col span={12}>{rupantorData?.geocoded_address?.pType}</Col>
        </Row>{" "}
        <Row style={{ marginBottom: "10px" }}>
          <Col style={{ fontWeight: "bold" }} span={12}>
            Confidence Score:
          </Col>
          <Col span={12}>
            <div
              style={{
                backgroundColor: "green",
                width: "fit-content",
                padding: "4px",
                borderRadius: "10px",
                color: "white",
              }}
            >
              {rupantorData?.confidence_score_percentage}
            </div>
          </Col>
        </Row>
      </div>
    )
  );
};
export default ModalContent;
