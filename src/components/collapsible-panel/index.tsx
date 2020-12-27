import React, {FC} from 'react';
import {useToggle} from 'react-use';

export const CollapsiblePanel: FC<{ trigger: JSX.Element }> = ({ trigger, children }) => {
  const [isOpen, toggleOpen] = useToggle(false);
  return (
    <>
      {React.cloneElement(trigger, { onClick: toggleOpen })}
      {isOpen && children}
    </>
  );
};
