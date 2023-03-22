import React, { MouseEventHandler, useState } from 'react';

import cx from 'clsx';

export interface ItemProps {
  value: string;
  mykey: number | string;
  styles: any;
}

const ItemDiv: React.FC<ItemProps> = (item) => {
  const [isClicked, setIsClicked] = useState(false);

  const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const value = (e.target as HTMLDivElement).textContent;
    console.log((e.target as HTMLDivElement).textContent);
    setIsClicked((prev) => !prev);
  };

  return (
    <div
      key={item.mykey}
      className={cx({ [item.styles.isClicked]: isClicked }, item.styles.item)}
      onClick={onClick}
    >
      {item.value}
    </div>
  );
};

export default ItemDiv;
