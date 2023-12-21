import React from 'react'
import Navigation from './component/navigation/Navigation'
import {Box, Container} from '@mui/material'
import SearchAppBar from "@/layout/component/appBar/AppBar";

type Props = {
    hasAppBar: boolean
    navigation: boolean
    children: React.ReactNode
}
const Layout = ({hasAppBar, children, navigation}: Props) => {
    return (
        <Container maxWidth="lg"
                   sx={{paddingY: '20px'}}>
            {hasAppBar ? (<SearchAppBar/>) : null}
            {children}
            <Box sx={{marginTop: '3rem'}}>
                {navigation ? (<Navigation/>) : null}
            </Box>
        </Container>
    )
}

export default Layout
