import React, { ReactElement, useEffect } from 'react';

import { Layout } from 'antd';

import Alert from '../../components/Alert/Alert';
import './App.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import Pages from '../../pages/Pages';
import { initializeApp } from '../../utils/initialize-and-logout-app/initialize-app';
import { logout } from '../../utils/initialize-and-logout-app/logout';
import { connect, disconnect } from '../../utils/ws/ws';

const { Header, Content, Footer } = Layout;

connect();

const App = (): ReactElement => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);

  const onLogoutBtnClick = (): void => {
    logout(dispatch);
  };

  useEffect(() => {
    initializeApp(dispatch);

    return () => {
      disconnect();
    };
  }, [dispatch]);

  return (
    <div className="app">
      <Layout className="layout">
        <Header className="app-header">
          {isLoggedIn && (
            <button type="button" className="logout-btn" onClick={onLogoutBtnClick}>
              Log out
            </button>
          )}
        </Header>
        <Content className="app-content">
          <Pages />
        </Content>
        <Footer className="app-footer">Social Network ©2022 Created by Meoshk</Footer>
        <Alert />
      </Layout>
    </div>
  );
};

export default App;
