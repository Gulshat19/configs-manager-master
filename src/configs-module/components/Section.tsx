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
    Typography,
} from '@mui/material';
import { useState } from 'react';
import Field from './Field';

const Wrapper = {
    display: 'flex',
    alignItems: 'flex-start',
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
    borderBottom: `5px solid ${theme.palette.primary.dark}`,
}));

const NoElements = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '125ch',
    height: '50ch',
    borderRadius: '15px',
    margin: '0 10px',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'
}));

const Section = ({ fields, term, searchConfig }: { fields: Field[], term: string, searchConfig: Function }) => {
    const [customFields, setCustomFields] = useState(fields);

    const onChangeProp = (_id: string, prop: string, value: any) => {
        setCustomFields(
            customFields.map((f: Field) => {
                if (f._id === _id) {
                    return { ...f, [prop]: value }
                }
                return f;
            }))
    }

    const onDelete = (_id: string) => {
        setCustomFields(customFields.filter((f: Field) => f._id !== _id));
    }

    const visibleData = searchConfig(customFields, term);

    const elements = visibleData.map((f: Field) => {
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

    if (elements.length === 0) {
        return <NoElements>No items added yet, use the form to add them</NoElements>
    }

    return (
        <Box sx={Wrapper}>
            <TableContainer
                sx={{
                    width: '125ch',
                    boxShadow: 2
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
                        {elements}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default Section;