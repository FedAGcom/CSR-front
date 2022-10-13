import { Box } from "@mui/material";
import { ButtonBasic, InputBasic } from "../../..";

export const CasesSearchForm = () => {
  return(
    <Box className="admin-cases__search-form">
      <InputBasic
        type="search"
        placeholder="Название кейса"
      />
      <ButtonBasic
        className="admin"
        type="submit"
      >Найти</ButtonBasic>
    </Box>
  )
}