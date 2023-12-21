import * as React from 'react';
import {useEffect, useState} from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import {useRouter} from "next/router";


const Navigation = () => {
    const [value, setValue] = useState<string>();
    const router = useRouter()
    useEffect(() => {
        if (router) setValue(router.pathname)
    }, [router])

    return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}}
               elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction onClick={() => router.push('/home')}
                                        label="صفحه اصلی"
                                        value="/home"
                                        icon={<HomeOutlinedIcon/>}/>
                <BottomNavigationAction onClick={() => router.push('/doctors')}
                                        label="پزشکان"
                                        value="/doctors"
                                        icon={<HealthAndSafetyOutlinedIcon/>}/>
                <BottomNavigationAction onClick={() => router.push('/follow')}
                                        label="فالو آپ"
                                        value="/follow"
                                        icon={<QuestionAnswerOutlinedIcon/>}/>
                <BottomNavigationAction onClick={() => router.push('/profile')}
                                        label="پروفایل"
                                        value="/profile"
                                        icon={<PermIdentityOutlinedIcon/>}/>
            </BottomNavigation>
        </Paper>);
};

export default Navigation;