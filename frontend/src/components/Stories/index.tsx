import React from 'react';

import { FixedSizeList as List } from 'react-window';
import Story from './Story';

const Stories: React.FC<any> = ({ dataList }) => {
  return (
    <>
      <List
        height={650}
        itemCount={dataList.length}
        itemSize={250}
        width="100%"
      >
        {({ index, style }) => <Story story={dataList[index]} style={style} />}
      </List>
    </>
  );
};

export default Stories;
