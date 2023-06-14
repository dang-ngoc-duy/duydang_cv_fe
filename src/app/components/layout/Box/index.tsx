import React, { ReactNode } from 'react';

export interface IBoxProps {
  children: ReactNode;
  className?: string;
}

const Box: React.FC<IBoxProps> = props => {
  const { children, className } = props;
  return <div className={'box ' + className}>{children}</div>;
};

export default Box;
