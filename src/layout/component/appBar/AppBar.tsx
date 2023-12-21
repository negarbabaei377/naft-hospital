import * as React from 'react';
import {styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {Button, Stack} from "@mui/material";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import {theme} from "@/theme/theme";

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.secondary.main,
    marginLeft: 3,
    width: '80%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '90%',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: theme.palette.text.secondary,
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 5, 1, 0),

        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width')
    },
}));

const ButtonStyle = styled(Button)(({theme}) => ({
    backGroundColor: theme.palette.primary.main
}));

export default function SearchAppBar() {
    return (
        <Box sx={{marginBottom:'4rem'}}>
            <AppBar position="fixed"
                    sx={{backgroundColor:theme.palette.primary.light, boxShadow: '0px 2px 2px 0px #d4d4d4'}}>
                <Toolbar>
                    <Search sx={{borderRadius:'8px'}}>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="جستجوی نام، کد پذیرش و ..."
                            inputProps={{'aria-label': 'search'}}
                        />
                    </Search>
                    <Stack direction="row"
                           spacing={2}>
                        <ButtonStyle
                            variant="contained"
                            endIcon={<TuneOutlinedIcon sx={{marginRight: '1rem'}}/>}>
                            فیلتر
                        </ButtonStyle>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}