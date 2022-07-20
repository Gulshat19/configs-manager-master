import {
    Tabs,
    Tab,
    Box,
} from '@mui/material';
import TabAdd from './TabAdd';
import TabDelete from './TabDelete';

const TabList = (props: any) => {
    const { tabValue, setTabValue, tabs, setTabs } = props;

    const handleChange = (event: React.SyntheticEvent, newValue: any) => {
        setTabValue(newValue);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: 240,
                mt: 4,
            }}
        >
            <Box
                sx={{
                    maxWidth: { xs: 320, sm: 620 },
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: '15px',
                    ml: 5,
                    bgcolor: 'primary.light',
                    color: 'common.white'
                }}
            >
                <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    TabIndicatorProps={{ style: { background: 'white' } }}
                >
                    {tabs.map((t: any, i: any) => {
                        return <Tab
                            key={i}
                            label={t.name}
                        />
                    })}
                </Tabs>
            </Box>
            <TabAdd tabs={tabs} setTabs={setTabs} />
            <TabDelete tabs={tabs} setTabs={setTabs} />
        </Box>

    );
}


export default TabList;