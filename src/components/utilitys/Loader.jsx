import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import "../../css/loader-error.css"

export default function Animations() {
  return (
    <Box sx={{ p: 22 }}>
      <Skeleton height={40} />
      <Skeleton height={40} animation="wave" sx={{ mt: 2 }} />
      <Skeleton height={40} animation={false} sx={{ mt: 2 }} />
    </Box>
  );
}
