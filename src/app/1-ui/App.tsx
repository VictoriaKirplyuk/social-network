import React, { FC, useEffect } from 'react';

import { Layout } from 'antd';

import Alert from '../../components/Alert/Alert';
import './App.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import Pages from '../../pages/Pages';
import { initializeApp } from '../../utils/initialize-app';
import { logout } from '../../utils/logout';

const { Header, Content, Footer } = Layout;

const App: FC = () => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);

  const dispatch = useAppDispatch();

  const logoutHandler = (): void => {
    logout(dispatch);
  };

  useEffect(() => {
    initializeApp(dispatch);
  }, [dispatch]);

  return (
    <div className="app">
      <Layout className="layout">
        <Header className="app-header">
          {isLoggedIn && (
            <button type="button" className="logout-btn" onClick={logoutHandler}>
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
