import React, { FC } from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

interface IPreloader {
  size?: 'small' | 'default' | 'large' | undefined;
}

const Preloader: FC<IPreloader> = ({ size }) => {
  return <Spin indicator={<LoadingOutlined spin />} size={size} />;
};

export default Preloader;
