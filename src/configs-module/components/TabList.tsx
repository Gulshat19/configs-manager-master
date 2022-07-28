import {
    Tabs,
    Tab,
    Box,
    styled
} from '@mui/material';
import TabAdd from './TabAdd';
import TabEdit from './TabEdit';

const StyledTab = styled(Tab)(({ theme }) => ({
    color: theme.palette.primary.light,
    '&.Mui-selected': {
        color: `white !important`,
    },
}))

const WrapperStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 240,
    mt: 4,
}

const TabsContainer = {
    maxWidth: { xs: 320, sm: 620 },
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
    ml: 5,
    bgcolor: 'primary.main',
    color: 'primary.dark'
}

const TabList = ({ tabValue, setTabValue, setConfigure, configure }: { tabValue: number, setTabValue: Function, setConfigure: Function, configure: Config }) => {

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={WrapperStyle}>
            <Box sx={TabsContainer}>
                <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    TabIndicatorProps={{ style: { background: 'white' } }}
                >
                    {configure.sections.length !== 0 ? configure.sections.map((s: Section, i: number) => {
                        return <StyledTab
                            key={i}
                            label={s.name}
                        />
                    }) : <StyledTab label='No sections' sx={{ width: 250 }} />}
                </Tabs>
            </Box>
            <TabAdd configure={configure} setConfigure={setConfigure} />
            <TabEdit configure={configure} setConfigure={setConfigure} />
        </Box>

    );
}


export default TabList;