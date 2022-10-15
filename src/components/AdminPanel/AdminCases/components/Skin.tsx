import { Box, Divider } from "@mui/material";
import { FC, useState } from "react";
import { EditSkinForm } from "./EditSkinForm";

type TItem = {
  id: string;
  type: string;
  title: string;
  skin: string;
  rare: string;
  quality: string;
  winchance: number;
}

type TSkinProps = {
  item: TItem;
  isEditSkinActive?: boolean;
  index: number;
  changeItem: any;
  deleteItem: any;
}

export const Skin: FC<TSkinProps> = ({item, isEditSkinActive, index, changeItem, deleteItem}) => {

  const [isEditActive, setEditActive] = useState(isEditSkinActive)

  const clickHandler = () => {
    setEditActive(true);
  }

  return (
    <>
    <Box className='skin' onClick={clickHandler}>
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
    { isEditActive &&
      <EditSkinForm 
        setEditSkinFormActive={setEditActive} 
        item={item} 
        index={index} 
        changeItem={changeItem} 
        deleteItem={deleteItem}
      />
    }
    </>
  )
}
