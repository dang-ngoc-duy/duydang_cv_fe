import { ReactNode } from "react";

export interface IFooterProps {
  children?: string | ReactNode;
}

const Footer: React.FC<IFooterProps> = (props) => {
  const { children } = props;

  return <footer className="footer">{children}</footer>;
};

export default Footer;
