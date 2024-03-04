"use client";
import styles from "./page.module.css";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

export default function Home() {
  return (
    <Provider store={store}>
      <main className={styles.main}>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>
            <h1>What is Rupantor?</h1>
            <p>
              A state of the art address normalizer for normalizing addresses
            </p>
          </Header>
          <Layout>
            <Content style={contentStyle}>Content</Content>
            <Sider width="50%" style={siderStyle}>
              Sider
            </Sider>
          </Layout>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </main>
    </Provider>
  );
}

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  // height: 120,
  // paddingInline: 48,
  // lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const contentStyle = {
  textAlign: "center",
  // minHeight: 120,
  // lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
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
