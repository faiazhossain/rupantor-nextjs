"use client";
import styles from "./page.module.css";
import { Provider } from "react-redux";
import store, { useAppSelector } from "../../redux/store";
import { Col, Layout, Row } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import SearchComponent from "../../components/searchPanel/SearchComponent";
import MapComponent from "../../components/mapPanel/MapComponent";
import FormComponent from "../../components/searchPanel/FormComponent";
import { MapProvider } from "react-map-gl/maplibre";
import ModalContent from "../../components/searchPanel/ModalContent";
export default function Home() {
  return (
    <Provider store={store}>
      <main style={{ width: "90%", margin: "auto" }}>
        <MapProvider>
          <Layout style={layoutStyle}>
            <Layout>
              <Content style={contentStyle}>
                <Row>
                  <Col xs={24} sm={24} md={12}>
                    <SearchComponent></SearchComponent>
                    <FormComponent></FormComponent>
                    <ModalContent />
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <MapComponent></MapComponent>
                  </Col>
                </Row>
              </Content>
            </Layout>
          </Layout>
        </MapProvider>
      </main>
    </Provider>
  );
}

const headerStyle = {
  textAlign: "center",
  color: "blue",
  // height: 120,
  // paddingInline: 48,
  // lineHeight: "64px",
  backgroundColor: "white",
};

const contentStyle = {
  textAlign: "center",
  // minHeight: 120,
  // lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#fff",
};
const siderStyle = {
  textAlign: "center",
  // lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  // width: "100%",
  // maxWidth: "calc(100% - 8px)",
};
