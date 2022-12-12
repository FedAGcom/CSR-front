import { Skeleton } from "@mui/material";

export const CaseSkeleton = () => {
    return ( 
        <Skeleton sx={{borderRadius: '10px', margin: "0 10px 20px"}} variant="rectangular" width={255} height={346} />
     );
}