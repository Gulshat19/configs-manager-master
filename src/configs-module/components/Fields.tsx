import {
    Box,
    Paper, TableRow,
    TableHead,
    TableContainer,
    TableCell,
    tableCellClasses,
    TableBody,
    Table,
    styled,
} from '@mui/material';
import Field from './Field';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        boxShadow: 'none',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const TabContainer = (props: any) => {
    return (
        <>
            {props.children}
        </>
    );
}

const Fields = (props: any) => {

    const { tabs, onDelete, onChangeProp, tabValue } = props;

    const renderSections = () => {
        const sections = tabs.map((t: any, i: any) => {

            return (
                <TableBody>
                    {tabValue === i && <TabContainer>{t.fields.map((f: any) => {
                        const { _id, ...itemProps } = f;
                        return (
                            <Field
                                key={_id}
                                {...itemProps}
                                onDelete={() => onDelete(_id)}
                                onChangeProp={(prop: string, value: any) => onChangeProp(_id, prop, value)}
                            />
                        )
                    })}</TabContainer>}
                </TableBody>)
        })
        return sections;
    }

    const sections = renderSections();


    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            ml: 2
        }}>
            <TableContainer
                sx={{
                    width: '125ch',
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'
                }}
                component={Paper}
            >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Key</StyledTableCell>
                            <StyledTableCell align="right">Value</StyledTableCell>
                            <StyledTableCell align="right">Type</StyledTableCell>
                            <StyledTableCell align="right">Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    {sections}
                </Table>
            </TableContainer>
        </Box>
    );
}

export default Fields;