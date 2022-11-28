import React, { ReactElement } from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

interface IPreloaderProps {
  size?: 'small' | 'default' | 'large' | undefined;
}

const Preloader = ({ size }: IPreloaderProps): ReactElement => {
  return <Spin indicator={<LoadingOutlined spin />} size={size} />;
};

export default Preloader;
