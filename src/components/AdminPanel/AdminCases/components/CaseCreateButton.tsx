import { Box } from "@mui/material"
import { FC } from "react"
import { PlusIconAdmin } from "../../../svg";

type TCaseCreateButtonProps = {
  onClick: () => void;
}

export const CaseCreateButton: FC<TCaseCreateButtonProps> = ({onClick}) => {
  return (
    <Box className="admin-cases__create-button" onClick={onClick}>
      <PlusIconAdmin />
      <Box>
        Создать кейс
      </Box>
    </Box>
  )
}
