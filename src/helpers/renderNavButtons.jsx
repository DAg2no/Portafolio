import { Typography } from "@mui/material";
import { navLinks } from "./Maps/navLinks";
import { Link } from "react-router-dom";

export const renderNavButtons = () => {
    return navLinks.map((link) => (
      <Link key={link.link} to={link.link} style={{textDecoration: 'none', color: 'inherit',}}>
        <Typography variant="h6" color="inherit" fontSize="1.1rem">
          {link.text}
        </Typography>
      </Link>
    ));
  };