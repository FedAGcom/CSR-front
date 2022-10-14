import { Box, Divider } from "@mui/material";
import { FC } from "react";

type TItem = {
  id: string;
  type: string;
  title: string;
  skin: string;
  rare: string;
  quality: string;
  winChance: string;
}

type TSkinProps = {
  item: TItem;
}

export const Skin: FC<TSkinProps> = ({item}) => {
  return (
    <Box className='skin'>
      <Box>{`${item.type}`}</Box>
      <Divider orientation="vertical"></Divider>
      <Box>{`${item.title}`}</Box>
      <Divider orientation="vertical"></Divider>
      <Box>{`${item.skin}`}</Box>
      <Divider orientation="vertical"></Divider>
      <Box>{`${item.rare}`}</Box>
      <Divider orientation="vertical"></Divider>
      <Box>{`${item.quality}`}</Box>
      <Divider orientation="vertical"></Divider>
      <Box>{`${item.winChance} %`}</Box>
    </Box>
  )
}
