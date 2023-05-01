import { Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { COLORS } from "../../constants/theme";
import "./NavBar.css";
const pages = [
  {
    name: "About",
    id: "about",
  },
  {
    name: "Skills",
    id: "skills",
  },
  {
    name: "Experience",
    id: "experience",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Contact",
    id: "contact",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = ({ anchorElNav, setAnchorElNav }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{
        background: COLORS.primary,

        boxShadow: 0,
        zIndex: "40",
      }}
    >
      <Box
        sx={{
          width: { lg: "90%", md: "95%", sm: "100%", xs: "100%" },
          margin: "0 auto",
          position: "sticky",
          top: 0,
          background: COLORS.primary,
          zIndex: "40",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Stack direction={"row"} alignItems={"center"}>
              <Box
                src="https://i.ibb.co/tK0d2dV/Mountain-Logo-Design-Vector-Graphics-21318904-1-580x387-removebg-preview.png"
                component={"img"}
                sx={{
                  width: { xs: "80px", md: "100px" },
                }}
              />
            </Stack>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <a
                  key={page.id}
                  href={`#${page.id}`}
                  onClick={handleCloseNavMenu}
                  style={{
                    my: 2,
                    color: "white",
                    display: "block",
                    marginRight: "14px",
                    textDecoration: "none",
                  }}
                >
                  {page.name}
                </a>
              ))}
            </Box>

            {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <HiMenuAlt1/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                {/* <MenuIcon /> */}
                <HiMenuAlt1 />
              </IconButton>
              {/* <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu> */}
            </Box>
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
};
export default NavBar;
