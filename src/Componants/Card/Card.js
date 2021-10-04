import { GitHub } from "@mui/icons-material";
import { Card, CardContent, Grid, Typography, IconButton, Table, TableCell, TableRow, Tooltip } from "@mui/material";


import React from "react";


export default function (props) {

    return (
        <>
            <Grid item md={6} sx={{ display: "flex", justifyContent: "center" }}>
                <Card sx={{ width: "300px", height: "250px", bgcolor: "#000000" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: "1em", color: "white", fontFamily: "Gloria Hallelujah" }} gutterBottom>
                            {props.Title}
                        </Typography>
                        <Table>
                            <TableRow>
                                <TableCell >

                                    <Typography sx={{ fontSize: "1em", color: "white" }} gutterBottom>
                                        {props.KeyOne}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    {/*   {key2} */}
                                    <Typography sx={{ fontSize: "1em", color: "white" }} gutterBottom>
                                        {props.KeyTwo}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    {/* {key3} */}
                                    <Typography sx={{ fontSize: "1em", color: "white" }} gutterBottom>
                                        {props.KeyThree}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    {/*   {key4} */}
                                    <Typography sx={{ fontSize: "1em", color: "white" }} gutterBottom>
                                        {props.KeyFour}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Typography sx={{ fontSize: "1em", color: "white" }} gutterBottom>
                                    {props.Disc}
                                </Typography>



                                <Tooltip placement="right" arrow title="Take me to thge Repo"><a href={props.Link} target="_blank" rel="noreferrer"><IconButton><GitHub sx={{ color: "white" }} /></IconButton>   </a></Tooltip>
                            </TableRow>
                        </Table>
                    </CardContent>

                </Card>
            </Grid>
        </>
    )
}