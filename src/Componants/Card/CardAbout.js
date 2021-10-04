import { Link } from "@mui/icons-material"
import { Button, Card, CardActions, CardContent, Grid, Paper, Typography } from "@mui/material"
import React from "react"



export default function (props) {

    return (
        <>
            <Grid item md={6} sx={{ display: "flex", justifyContent: "center" }}>
                <Card sx={{ bgcolor: "black", alignSelf: "center" }} component={Paper}>
                    <CardContent>
                        <Typography gutterBottom sx={{ fontFamily: "Gloria Hallelujah", fontSize: "1.25em", color: "white" }}>
                            {props.Title}
                        </Typography>
                        <Typography variant="body1" sx={{ fontFamily: "Roboto", color: "white" }}>
                            {props.Disc}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a href={props.Link} target="_blank" rel="noreferrer"><Button variant="outlined" size="small" sx={{ color: "white", borderColor: "white", ":hover": { borderColor: "orange" } }} endIcon={<Link />}>Show me</Button></a>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}