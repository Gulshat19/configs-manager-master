import { Box, ListItem, ListItemText, TextField } from '@mui/material';
import { alpha, styled, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.primary.dark, 1),
    '&:hover': {
        backgroundColor: alpha(theme.palette.primary.dark, 0.75),
    },
    marginLeft: 0,
}));

const SearchInputBase = styled(TextField)(({ theme }) => ({
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
    boxShadow: 3,
    p: 2,
    bgcolor: 'primary.main',
}

const SearchForm = ({ handleUpdateSearch, configure, setTabValue }: { handleUpdateSearch: Function, configure: Config, setTabValue: Function }) => {

    const handleUpdate = (value: string) => {
        handleUpdateSearch(value)
    }

    const changeSection = (_id: string) => {
        //eslint-disable-next-line
        configure.sections.map((s: Section, i: number) => {
            //eslint-disable-next-line
            s.fields.map((f: Field) => {
                if (Object.values(f).includes(_id)) {
                    setTabValue(i);
                }
            })
        })
    }

    const options = [].concat.apply([], configure.sections.map((s: any) => {
        return s.fields.map((f: Field) => {
            return { ...f, sectionName: s.name };
        });
    }));

    return (
        <Box sx={Header}>
            <Autocomplete
                freeSolo
                size='small'
                sx={{ width: 250 }}
                options={options}
                getOptionLabel={(option) => option.name}
                onChange={(event, value) => handleUpdate(value.name)}
                renderOption={(props: Object, option: any) => (
                    <li {...props}>
                        <ListItem key={option._id} sx={{ height: 0, p: 2.5 }} onClick={() => changeSection(option._id)}>
                            <ListItemText
                                primary={option.name}
                                secondary={option.sectionName}
                            />
                        </ListItem>
                    </li>
                )}
                renderInput={(params) => (
                    <Search onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdate(e.target.value)}>
                        <SearchInputBase
                            placeholder="Search…"
                            {...params}
                            InputProps={{
                                'aria-label': 'search',
                                ...params.InputProps,
                            }}
                        />
                    </Search>
                )}
            />
            <Typography variant="h5" color='common.white'>
                Configuration Manager
            </Typography>
        </Box>
    )
}

export default SearchForm;
