import React, { FC, useEffect } from 'react';

import { Layout } from 'antd';

import Alert from '../../components/Alert/Alert';
import './App.css';
import { useAppDispatch } from '../../hooks/redux-hooks';
import Pages from '../../pages/Pages';
import { getUser } from '../../pages/users/2-bll/thunk/user-thunk';

const { Header, Content, Footer } = Layout;

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser()); // проверка инициализации
  }, [dispatch]);

  return (
    <div className="app">
      <Layout className="layout">
        <Header className="app-header" />
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
