import {Box, Typography} from "@mui/material";
import {theme} from "@/theme/theme";
import * as React from 'react';
import {useState} from 'react';
import {experimentalStyled as styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import {DoctorT} from "@/types/doctorT";

const Item = styled(Paper)(({theme}) => ({
    padding: theme.spacing(4, 0),
    textAlign: 'center',
    color: theme.palette.text.primary,
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
}));

const ButtonStyle = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem 0',
    borderRadius: '9px',
}));
type Props = {
    paramData: DoctorT
}

const DutyHours = ({paramData}: Props) => {
    const [clickDay, setClickDay] = useState<number[]>([])

    return (
        <Box>
            <Typography variant="subtitle1"
                        sx={{
                            color: theme.palette.text.primary,
                            marginBottom: '1rem',
                            fontWeight: '600'
                        }}>ساعات کاری و جلسات پزشک</Typography>
            <Box sx={{flexGrow: 1, marginBottom: '3rem'}}>
                <Grid container
                      spacing={{xs: 2, md: 3}}
                      columns={{xs: 6, sm: 9, md: 12}}>
                    {paramData?.dutyHours.map((item, index) => (
                        <Grid xs={2}
                              sm={3}
                              md={3}
                              key={index}
                              onClick={() => {
                                  if (clickDay.find((item) => item === index + 1)) {
                                      const newArray = clickDay.filter(item => item !== index + 1)
                                      setClickDay(newArray)
                                  } else {
                                      setClickDay((prevState) => [...prevState, index + 1])
                                  }
                              }}
                        >
                            <Item sx={clickDay.find((item) => item === index + 1) ? {border: `2px solid ${theme.palette.primary.main}`} : {border: `2px solid ${theme.palette.secondary.light}`}}>
                                <Typography sx={{color: theme.palette.primary.main}}>{item?.day}</Typography>
                                <Typography sx={{color: theme.palette.text.primary}}>{item?.hour}</Typography>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <ButtonStyle sx={clickDay.length ? {
                backgroundColor: theme.palette.primary.main,
            } : {
                backgroundColor: theme.palette.secondary.light,
                cursor: 'not-allowed'
            }}

                         onClick={() => setClickDay([])}
            >
                <Typography variant="subtitle1"
                            sx={{fontWeight: 'bold'}}>دریافت و ثبت نوبت</Typography>
            </ButtonStyle>
        </Box>
    );
};

export default DutyHours;