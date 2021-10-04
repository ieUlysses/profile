import { Send } from "@mui/icons-material";
import { Grid, TextField, Container, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { alpha, styled } from '@mui/material/styles';

import { useForm, ValidationError } from '@formspree/react';


const CssTextField = styled(TextField)({
    '& .MuiInputBase-input': { color: 'white' },
    '& label': {
        color: 'white',
    },
    '& label.Mui-focused': {
        color: 'orange',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {

        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'orange',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'orange',

        },
    },
});

export default function () {
    const [state, handleSubmit] = useForm("xpzknpgg");
    if (state.succeeded) {

        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("message").value = "Message sent Successfully"
        setTimeout(() => { document.getElementById("message").value = "" }, 5000);

    }
    return (



        <>

            <Container>
                <Grid container sx={{ alignItems: "center", height: "100%", width: "95%" }}>
                    <Grid item sm={6}>

                    </Grid>
                    <Grid item sm={12} sx={{ width: "100%", alignItems: "center" }}>
                        <Box >
                            <form onSubmit={handleSubmit}>
                                <Grid container direction="column" spacing={1}>
                                    <Grid item >
                                        <CssTextField variant="outlined" label="Full-Name" fullWidth id="name"
                                            type="text"
                                            name="name" />
                                    </Grid>
                                    <Grid item >
                                        <CssTextField variant="outlined" label="Email" fullWidth id="email"
                                            type="email"
                                            name="email" />
                                        <ValidationError
                                            prefix="Email"

                                            field="email"
                                            errors={state.errors}
                                        />
                                    </Grid>
                                    <Grid item >
                                        <CssTextField variant="outlined" label="Message" multiline rows={3} fullWidth sx={{ height: "100%" }} id="message"
                                            name="message" />
                                        <ValidationError
                                            prefix="Message"
                                            field="message"
                                            errors={state.errors}
                                        />
                                    </Grid>
                                    <Grid item >
                                        <Button

                                            variant="outlined" sx={{ color: "white", borderColor: "white", ":hover": { borderColor: "orange" } }} endIcon={<Send />} type="submit" disabled={state.submitting}>Send</Button>

                                    </Grid>

                                </Grid>
                            </form>
                        </Box>
                    </Grid>
                </Grid >
            </Container >
        </>
    )
}