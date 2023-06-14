import React, { ReactNode } from 'react';

export interface IContentProps {
  children: ReactNode;
}

const ContentWraper: React.FC<IContentProps> = props => {
  const { children } = props;
  return <div className="box box-content">{children}</div>;
};

export default ContentWraper;
