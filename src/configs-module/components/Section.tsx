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
import { useState } from 'react';
import Field from './Field';

const Wrapper = {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    ml: 2
}

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

const StyledTableHead = styled(TableHead)(({ theme }) => ({
    borderBottom: `5px solid ${theme.palette.primary.dark}`
}));

const Section = (props: any) => {
    const { fields, term, configure, setConfigure, tabValue } = props;
    const [customFields, setCustomFields] = useState(fields);

    const onChangeProp = (_id: string, prop: any, value: any) => {
        setCustomFields(
            customFields.map((f: any) => {
                if (f._id === _id) {
                    return { ...f, [prop]: value }
                }
                return f;
            }))
    }

    const onDelete = (_id: string) => {
        setCustomFields(customFields.filter((f: any) => f._id !== _id));
    }

    const searchConfig = (items: any, term: any) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item: any) => {
            return item.name.toLowerCase().indexOf(term) > -1
        })
    }

    const visibleData = searchConfig(customFields, term);

    const elements = visibleData.map((f: any) => {
        const { _id, ...itemProps } = f;
        return (
            <Field
                key={_id}
                {...itemProps}
                onDelete={() => onDelete(_id)}
                onChangeProp={(prop: string, value: any) => onChangeProp(_id, prop, value)}
            />
        )
    })

    return (
        <Box sx={Wrapper}>
            <TableContainer
                sx={{
                    width: '125ch',
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'
                }}
                component={Paper}
            >
                <Table aria-label="simple table">
                    <StyledTableHead>
                        <TableRow>
                            <StyledTableCell>Key</StyledTableCell>
                            <StyledTableCell align="right">Value</StyledTableCell>
                            <StyledTableCell align="right">Type</StyledTableCell>
                            <StyledTableCell align="right">Actions</StyledTableCell>
                        </TableRow>
                    </StyledTableHead>
                    <TableBody>
                        {customFields.length !== 0 ? elements : <TableRow>No items added yet, use the form to add them</TableRow>}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default Section;