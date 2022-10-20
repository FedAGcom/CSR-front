import { Box, Divider } from '@mui/material';
import { FC, useState } from 'react';
import { EditSkinForm } from './EditSkinForm';
import { skinColors } from './skinColors';
import { TItem } from './types';

type TSkinProps = {
  item: TItem;
  isEditSkinActive?: boolean;
  index: number;
  changeItem: (item: TItem, index: number) => void;
  deleteItem: (index: number) => void;
};

export const Skin: FC<TSkinProps> = ({ item, index, changeItem, deleteItem }) => {
  const [isEditActive, setEditActive] = useState(false);

  const clickHandler = () => {
    setEditActive(true);
  };

  const getColor = () => {
    const index = skinColors.findIndex((elem) => elem.quality === item.quality);
    return skinColors[index].color;
  };

  return (
    <>
      <Box className="skin" onClick={clickHandler} sx={{ borderColor: `${getColor()}` }}>
        <Box>{`${item.type}`}</Box>
        <Divider orientation="vertical"></Divider>
        <Box>{`${item.title}/${item.skin}`}</Box>
        <Divider orientation="vertical"></Divider>
        <Box>{`${item.rare}`}</Box>
        <Divider orientation="vertical"></Divider>
        <Box>{`${item.quality}`}</Box>
        <Divider orientation="vertical"></Divider>
        <Box>{`${item.winchance} %`}</Box>
      </Box>
      {isEditActive && (
        <EditSkinForm
          setEditSkinFormActive={setEditActive}
          item={item}
          index={index}
          changeItem={changeItem}
          deleteItem={deleteItem}
        />
      )}
    </>
  );
};
