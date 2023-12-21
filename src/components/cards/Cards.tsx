import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import {Avatar} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {theme} from "@/theme/theme";
import {styled} from "@mui/material/styles";
import {useRouter} from "next/router";
import {DoctorT} from "@/types/doctorT";

const CardStyle = styled(Card)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1rem',
    cursor: 'pointer',
    borderRadius: '10px',
    boxShadow: '0px 2px 2px 0px #d4d4d4'
}));
type Props = {
    allData: DoctorT[]
}

export default function Cards({allData}: Props) {
    const router = useRouter()

    return (
        <Grid container
              rowSpacing={2}
              columnSpacing={{xs: 1, sm: 2, md: 3}}>
            {allData?.length ? (allData.map((item: DoctorT) => {
                return (
                    <Grid xs={12}
                          md={6}
                          key={item.coNumber}
                          onClick={() => {
                              router.push(`/doctors/${item.coNumber}`)
                          }}
                    >
                        <CardStyle>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <Avatar alt="تصویر پزشک"
                                        src={item.avatar}
                                        sx={{backgroundColor: 'deepOrange'}}/>
                                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                    <CardContent sx={{flex: '1 0 auto'}}>
                                        <Typography variant="subtitle1"
                                                    color="text.primary"
                                                    component="div"
                                        >
                                            {item.fullName}
                                        </Typography>
                                        <Typography variant="subtitle2"
                                                    color="text.primary"
                                                    component="div"
                                                    sx={{
                                                        marginTop: '1px',
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        width: '97%'
                                                    }}

                                        >
                                            {item.field}
                                        </Typography>
                                        <Typography variant="subtitle2"
                                                    color="text.secondary"
                                                    component="div"
                                                    sx={{marginTop: '2px'}}>
                                            {item.experience} سال سابقه
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Box>
                            <ArrowBackIosIcon sx={{color: theme.palette.primary.main}}/>
                        </CardStyle>
                    </Grid>

                )
            })) : null}
        </Grid>
    );
}