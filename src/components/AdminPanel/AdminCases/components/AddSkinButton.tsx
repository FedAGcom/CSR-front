import { Box } from "@mui/system"
import { FC } from "react";
import { PlusIconAdmin } from "../../../svg"

type TAddSkinButtonProps = {
  onClick: () => void;
}

export const AddSkinButton: FC<TAddSkinButtonProps> = ({onClick}) => {
  return(
    <Box className="add-skin-button" onClick={onClick}>
      <PlusIconAdmin />
      <Box>
        Добавить скин
      </Box>
    </Box>
  )
}