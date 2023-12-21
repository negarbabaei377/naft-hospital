import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import {Container, useMediaQuery} from "@mui/material";
import {theme} from "@/theme/theme";
import {useRouter} from "next/router";

export default function NavBar() {
    const small = useMediaQuery(theme.breakpoints.up('md'))

    const router = useRouter()

    return (
        <Box sx={{flexGrow: 1, marginBottom: '5rem'}}>
            <AppBar sx={{
                backgroundColor: theme.palette.primary.light,
                boxShadow: '0px 2px 2px 0px #d4d4d4',
                padding: '8px 0'
            }}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <Typography variant={small ? 'h5' : 'h6'}
                                    component="div"
                                    sx={{flexGrow: 1, color: theme.palette.text.primary}}
                        >
                            پروفایل پزشک
                        </Typography>
                        <Box onClick={() => router.push("/doctors")}>
                            <ArrowBackIosOutlinedIcon sx={{cursor: 'pointer', color: theme.palette.primary.main}}/>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}