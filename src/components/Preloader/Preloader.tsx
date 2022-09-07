import React, { FC } from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Preloader: FC = () => {
  return <Spin indicator={<LoadingOutlined spin />} />;
};

export default Preloader;
