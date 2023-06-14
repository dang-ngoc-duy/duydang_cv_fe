import React, { useEffect, useState, CSSProperties } from 'react';
import { Animated, AnimationString } from 'react-animated-css';

interface AnimationComponentProps {
  visible: boolean;
  animationIn: AnimationString;
  animationOut: AnimationString;
  animationOutDuration?: number;
  disappearOffset?: number;
  children: React.ReactNode;
  className?: string;
}

const AnimationComponent: React.FC<AnimationComponentProps> = props => {
  const {
    visible,
    animationIn,
    animationOut,
    animationOutDuration = 0,
    disappearOffset = 0,
    children,
    className,
    ...rest
  } = props;

  const [noDisplay, setNoDisplay] = useState(!visible);

  useEffect(() => {
    if (!visible) {
      const delay = animationOutDuration - disappearOffset;
      setTimeout(() => setNoDisplay(true), delay);
    } else {
      setNoDisplay(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const style: CSSProperties | undefined = noDisplay
    ? { display: 'none' }
    : undefined;

  return (
    <Animated
      className={className}
      isVisible={visible}
      style={style}
      animationIn={animationIn}
      animationOut={animationOut}
      {...rest}>
      {children}
    </Animated>
  );
};

export default AnimationComponent;
