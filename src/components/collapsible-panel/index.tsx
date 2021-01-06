import React, { FC, useState } from 'react';

export const CollapsiblePanel: FC<{ trigger: JSX.Element }> = ({ trigger, children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {React.cloneElement(trigger, { onClick: () => setOpen((v) => !v) })}
      {isOpen && children}
    </>
  );
};
