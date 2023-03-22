import React, { MouseEventHandler, useState } from 'react';

import ItemDiv from './ItemDiv';
import { Props } from './Option1';
import styles from './Option2.module.scss';

const Option2: React.FC<Props> = (Items) => {
  let idx = 0;
  return (
    <div className={styles.wrapper}>
      <div>
        {Items.Options?.map((item) => {
          ++idx;
          return <ItemDiv value={item} mykey={idx} key={idx} styles={styles} />;
        })}
      </div>
    </div>
  );
};
export default Option2;
