import { Box } from '@mui/material';
import { alpha, styled, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.primary.dark, 1),
    '&:hover': {
        backgroundColor: alpha(theme.palette.primary.dark, 0.75),
    },
    marginLeft: 0,
    width: '20%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'white',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '100%',
    },
}));

const Header = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 0px 15px',
    p: 2,
    bgcolor: 'primary.main',
}

const SearchForm = (props: { handleUpdateSearch: any }) => {

    const handleUpdateSearch = (e: any) => {
        props.handleUpdateSearch(e.target.value)
    }

    return (
        <Box sx={Header}>
            <Search onChange={handleUpdateSearch}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <Typography variant="h5" color='common.white'>
                Configuration Manager
            </Typography>
        </Box>
    )
}

export default SearchForm;