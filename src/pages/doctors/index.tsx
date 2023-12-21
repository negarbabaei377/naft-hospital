import Cards from "@/components/cards/Cards";
import {Typography} from "@mui/material";
import {theme} from "@/theme/theme";
import {useEffect, useState} from "react";
import {http} from "@/service/http.service";
import apiUrl from "@/config/apiUrl";
import {DoctorT} from "@/types/doctorT";

const Doctor = () => {
    const [allData, setAllData] = useState<DoctorT[]>([])
    useEffect(() => {
        http.get(apiUrl.getAllDoctors).then((res) => {
            setAllData(res?.data?.data)
        })
    }, [])

    return (
        <>
            <Typography variant="h6"
                        sx={{color: theme.palette.text.primary, marginBottom: '1rem'}}> لیست پزشکان</Typography>
            <Cards allData={allData}/>
        </>
    );
};

export default Doctor;