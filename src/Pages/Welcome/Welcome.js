import { Grid, Paper, Typography, Container } from "@mui/material";

import React from "react";
import Shot from "../../Media/Shot.svg"
export default function () {

    return (
        <>
            <Container component={Paper} variant="outlined" sx={{ minHeight: "80vh", minWidth: "90vw", bgcolor: "#1b1b1b", display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "80px" }}>
                <Grid container sx={{ alignItems: "center", height: "100%" }}>
                    <Grid item md={6}>
                        <Typography variant="h2" sx={{ fontFamily: "Gloria Hallelujah", color: "orange" }}>
                            James Conway, <br /><span style={{ fontFamily: "Roboto", color: "white" }}>Passionate</span> <br /> <span style={{ fontFamily: "Roboto", color: "white" }}>Full Stack Developer</span>
                        </Typography>
                    </Grid>
                    <Grid item md={6} >
                        <img style={{ height: "50vh", width: "50vw", margin: "auto", }} src={Shot} alt="HeadShot of James Conway, black and white image with decorative filter. shot with an iphone xr(2)" />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}