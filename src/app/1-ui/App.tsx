import React, { FC } from 'react';

import { Layout } from 'antd';

import Alert from '../../components/Alert/Alert';
import AppRouter from '../../components/AppRouter/AppRouter';
import './App.css';

const { Header, Content, Footer } = Layout;

const App: FC = () => {
  return (
    <div className="app">
      <Layout className="layout">
        <Header className="app-header" />
        <Content className="app-content">
          <div className="site-layout-content">
            <AppRouter />
          </div>
        </Content>
        <Footer className="app-footer">Social Network ©2022 Created by Meoshk</Footer>
        <Alert />
      </Layout>
    </div>
  );
};

export default App;
