import React, { ReactElement } from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

interface IPreloaderProps {
  size?: 'small' | 'default' | 'large' | undefined;
  style?: string;
}

const Preloader = ({ size, style }: IPreloaderProps): ReactElement => {
  return <Spin className={style && style} indicator={<LoadingOutlined spin />} size={size} />;
};

export default Preloader;
