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
    const index = skinColors.findIndex((elem) => elem.rare === item.rare);
    return index !== -1 ? skinColors[index].color : 'rgb(184, 16, 52)';
  };

  const itemColor = getColor();
  const boxShadowColor = itemColor.slice(0, 3) + 'a' + itemColor.slice(3, -1) + ', 0.25)';

  return (
    <>
      <Box
        className="skin"
        onClick={clickHandler}
        sx={{
          borderColor: `${itemColor}`,
          '&:hover': {
            boxShadow: `0px 0px 10px 2px ${boxShadowColor}`,
          },
        }}
      >
        <Box>{`${item.type}`}</Box>
        <Divider orientation="vertical"></Divider>
        <Box>{`${item.title}`}</Box>
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
