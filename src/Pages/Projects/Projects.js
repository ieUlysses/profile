import React from "react";

import { Paper, Container, Grid, Typography } from "@mui/material"
import ProjectsProvider from "../../Provider/Projects/ProjectsProvider";

export default function () {

    return (

        <>
            <Container component={Paper} variant="outlined" sx={{ minHeight: "80vh", minWidth: "90vw", bgcolor: "#1b1b1b", display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "80px" }}>

                <Grid container spacing={2}>
                    <Grid item>
                        <Typography variant="h3" sx={{ fontFamily: 'Gloria Hallelujah', color: "orange" }}>Past Projects...</Typography>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={5} justifyContent="center" sx={{ justifyContent: "center", }}>
                            <ProjectsProvider />
                        </Grid>
                    </Grid>
                </Grid>


            </Container>
        </>

    )
}