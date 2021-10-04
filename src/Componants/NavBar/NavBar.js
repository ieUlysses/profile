import { ContactMail, Create, Home, People } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";

export default function () {

    return (
        <>
            <BottomNavigation showLabels sx={{
                bgcolor: "#212121", position: 'fixed', top: 0, left: 0, right: 0
                , marginBottom: "8700px"
            }}>
                <BottomNavigationAction label="James x Romeo" sx={{ color: "white" }} />
                <BottomNavigationAction label="Home" sx={{ color: "white" }} icon={<Home sx={{ ":hover": { color: "orange" } }} />} component={Link} to="/" />

                <BottomNavigationAction label="About" sx={{ color: "white" }} icon={<People sx={{ ":hover": { color: "orange" } }} />} component={Link} to="/about" />

                <BottomNavigationAction label="Projects" sx={{ color: "white" }} icon={<Create sx={{ ":hover": { color: "orange" } }} />} component={Link} to="/projects" />

                <BottomNavigationAction label="Contact" sx={{ color: "white" }} icon={<ContactMail sx={{ ":hover": { color: "orange" } }} />} component={Link} to="/contact" />
            </BottomNavigation>


        </>
    )
}