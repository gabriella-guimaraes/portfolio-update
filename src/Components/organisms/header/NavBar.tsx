import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";

function NavBar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuItems = [
        {
            id: 1,
            name: "Home",
            title: "Home"
        },
        {
            id: 2,
            name: "About",
            title: "Sobre"
        },
        {
            id: 3,
            name: "Skills",
            title: "Habilidades"
        },
        {
            id: 4,
            name: "ProfessionalXp",
            title: "Experiência"
        },
        {
            id: 5,
            name: "EducationXp",
            title: "Educação"
        },
        {
            id: 6,
            name: "Projects",
            title: "Projetos"
        },
        {
            id: 7,
            name: "Contact",
            title: "Contato"
        }
    ];
  return (
    <AppBar position="static" sx={{ backgroundColor: "#0a091009", borderBottom: "1px solid #68667ec7" }}>
      <Toolbar>
        <Typography variant="h6" align='left' color='text.primary' sx={{ flexGrow: 1, height: "100%" }} className={styles.title}>
          GABRIELLA GUIMARÃES
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={handleMenu}
              sx={{ color: theme.palette.text.primary }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  smooth={true}
                  to={item.name}
                  spy={true}>
                    <MenuItem key={item.name} onClick={handleClose}>
                    {item.title}
                    </MenuItem>

                  </Link>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item) => (
              <Button key={item.id} sx={{ color: theme.palette.text.primary }}>
                {item.title}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar