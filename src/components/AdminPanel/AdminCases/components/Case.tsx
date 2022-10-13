import { Box } from "@mui/material";
import { FC } from "react";
import { caseImage } from "../../../images";

type TCaseProps = {
  onClick: () => void
}

export const Case: FC<TCaseProps> = ({onClick}) => {
  return(
    <Box className="admin-case" onClick={onClick}>
      <Box className="admin-case__title">
        {`Кейс "title"`}
      </Box>
      <Box
        component="img" 
        src={caseImage} 
        alt="case image" 
        width="137px" 
        className="admin-case__image"
      ></Box>
    </Box>
  )
}