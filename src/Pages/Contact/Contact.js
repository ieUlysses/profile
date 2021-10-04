import Email from "../../Componants/Email/Email";
import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material"

export default function () {

    return (
        <>

            <Container component={Paper} variant="outlined" sx={{ minHeight: "80vh", minWidth: "90vw", bgcolor: "#1b1b1b", display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "80px" }}>

                <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>


                    <Grid container spacing={2}>

                        <Grid item sm={12}>
                            <Typography variant="h3" sx={{ fontFamily: 'Gloria Hallelujah', color: "orange" }}>Keep in touch...</Typography>
                        </Grid>
                        <Grid item sm={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                            <Typography variant="h5" sx={{ fontFamily: "Roboto", color: "white" }}>
                                Thank you for checking out my Portfolio. If you'd like to see more of my work, or just connect. Please drop me a message, and I'll reply as soon as possible.
                            </Typography>

                        </Grid>
                        <Grid item sm={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Email />
                        </Grid>
                    </Grid>
                </Container >
            </Container>
        </>
    )
}