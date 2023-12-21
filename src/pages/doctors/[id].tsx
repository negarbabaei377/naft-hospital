import NavBar from "@/modules/doctors/NavBar";
import {Container} from "@mui/material";
import Info from "@/modules/doctors/Info";
import CustomizedAccordions from "@/modules/doctors/CustomizedAccordions";
import DutyHours from "@/modules/doctors/DutyHours";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import apiUrl from "@/config/apiUrl";
import {http} from "@/service/http.service";
import {DoctorT} from "@/types/doctorT";

const Id = () => {
    const [paramData, setParamData] = useState<DoctorT | null>(null)
    const router = useRouter()
    const query = router?.query?.id
    useEffect(() => {
        if (query) {
            http.get(apiUrl.getDoctorsById(query as string)).then(res => {
                setParamData(res?.data?.data)
            })
        }
    }, [query])

    return (
        <Container maxWidth="lg">
            <NavBar/>
            <Info paramData={paramData!}/>
            <CustomizedAccordions paramData={paramData!}/>
            <DutyHours paramData={paramData!}/>
        </Container>
    );
};
Id.hasAppBar = false
Id.navigation = false
export default Id;