import React from "react";
import { ButtonsGroup, DownloadButton, ClearButton, LogsButton } from "../components/Buttons";
import Header from "../components/Header";
import Layout from "../components/layout";
import Main from "../components/Main";

const home = () => {
  return (
    <Layout>
      <main>
        <Header />
        <Main />
        <ButtonsGroup>
          <DownloadButton />
          <ClearButton />
          <LogsButton />
        </ButtonsGroup>
      </main>
    </Layout>
  );
};

export default home;
