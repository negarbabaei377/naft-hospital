import {useRouter} from "next/router";
import {useEffect} from "react";
import {Box, CircularProgress} from "@mui/material";

function Home() {
    const router = useRouter()
    useEffect(() => {
        ;(async () => {
            if (!router?.isReady) return
            await router.replace("/doctors")
        })()
    }, [])

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <CircularProgress/>
        </Box>
    );
}

export default Home;