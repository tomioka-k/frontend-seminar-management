import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Seminar List
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
