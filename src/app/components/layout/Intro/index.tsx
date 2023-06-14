import React, { ReactNode } from "react";

export interface IIntroProps {
  title: string;
  children: ReactNode;
}

const Intro: React.FC<IIntroProps> = (props) => {
  const { title, children } = props;
  return (
    <div className="pb-0 pb-sm-2">
      <div className="pb-2">
        <h1 className="title title--h1 first-title title__separate">{title}</h1>
      </div>

      {children}
    </div>
  );
};

export default Intro;
