import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import AboutProvider from "../../Provider/About/AboutProvider";



export default function () {

    return (
        <>
            <Container component={Paper} variant="outlined" sx={{ minHeight: "80vh", minWidth: "90vw", bgcolor: "#1b1b1b", display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "80px", overflow: "scroll" }}>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <Typography variant="h4" sx={{ fontFamily: 'Gloria Hallelujah', color: "orange" }}>About me...</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" sx={{ fontFamily: "Roboto", color: "white" }}> I'm a 22 Year Old Full Stack graduate with a years expereince working in the tech industry. I had some prior experience  coding but was able to upskill recently and move into my dream industry. I'm a passionate and driven developer, who always pushes for the best result. </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" sx={{ fontFamily: 'Gloria Hallelujah', color: "orange" }}>Zuzatz Info...</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Typography variant="h5" sx={{ fontFamily: "Roboto", color: "white" }}> Working is one of my passions, I enjoy the challenges that arise from it. Something else close to my heart is getting involved with Charity and helping out in my local Community.</Typography>
                            </Grid>
                            <Grid item>
                                <Grid container spacing={2} justifyContent="center">
                                    <AboutProvider />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>







            </Container>
        </>
    )
}