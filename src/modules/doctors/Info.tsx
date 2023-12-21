import React from 'react';
import {Avatar, Box, Typography} from "@mui/material";
import {theme} from "@/theme/theme";
import Grid from '@mui/material/Unstable_Grid2';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import {styled} from "@mui/material/styles";
import {DoctorT} from "@/types/doctorT";

const BoxStyle = styled(Box)(() => ({
    padding: '5px 0 15px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '15px',
    boxShadow: '0px 2px 6px 0px #e1e1e1',
    backgroundColor: theme.palette.primary.light
}));

type Props = {
    paramData: DoctorT
}

const Info = ({paramData}: Props) => {
    return (
        <Box sx={{marginBottom: '2rem'}}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'start', marginBottom: '2rem'}}>
                <Avatar alt="تصویر پزشک"
                        src={paramData?.avatar}
                        sx={{width: 56, height: 56}}/>
                <Box sx={{display: 'flex', flexDirection: 'column', marginRight: '1rem'}}>
                    <Typography variant="subtitle1"
                                component="div"
                                sx={{color: theme.palette.text.primary}}>{paramData?.fullName}</Typography>
                    <Typography variant="subtitle2"
                                component="div"
                                sx={{color: theme.palette.text.primary}}>{paramData?.education}</Typography>
                </Box>
            </Box>
            <Grid container
                  spacing={2}
                  sx={{color: theme.palette.text.primary}}>
                <Grid xs={4}>
                    <BoxStyle>
                        <VaccinesOutlinedIcon fontSize="large"
                                              sx={{color: '#14a714'}}/>
                        <Typography variant="subtitle1"
                                    sx={{
                                        color: theme.palette.text.primary,
                                        margin: '20px 0 2px 0'
                                    }}>{paramData?.experience} سال</Typography>
                        <Typography variant="subtitle2"
                                    sx={{color: theme.palette.text.secondary}}>سابقه طبابت</Typography>
                    </BoxStyle>
                </Grid>
                <Grid xs={4}>
                    <BoxStyle>
                        <TextSnippetOutlinedIcon fontSize="large"
                                                 sx={{color: '#ff0064'}}/>
                        <Typography variant="subtitle1"
                                    sx={{
                                        color: theme.palette.text.primary,
                                        margin: '20px 0 2px 0'
                                    }}>{paramData?.coNumber}</Typography>
                        <Typography variant="subtitle2"
                                    sx={{color: theme.palette.text.secondary}}>شماره نظام</Typography>
                    </BoxStyle>
                </Grid>
                <Grid xs={4}>
                    <BoxStyle>
                        <StarBorderOutlinedIcon fontSize="large"
                                                sx={{color: '#ffe119'}}/>
                        <Typography variant="subtitle1"
                                    sx={{
                                        color: theme.palette.text.primary,
                                        margin: '20px 0 2px 0'
                                    }}>{paramData?.rating}</Typography>
                        <Typography variant="subtitle2"
                                    sx={{color: theme.palette.text.secondary}}>رای مراجعین</Typography>
                    </BoxStyle>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Info;