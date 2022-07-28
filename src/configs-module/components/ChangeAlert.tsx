import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';


const ChangeAlert = ({ open, setOpen }: { open: boolean, setOpen: Function }) => {

    return (
        <Collapse in={open} sx={{ position: 'absolute', bottom: '0.5ch' }}>
            <Alert
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
                severity="info"
            >
                <AlertTitle>Pay attention</AlertTitle>
                After changing the data type, the value of the <strong>'value'</strong> field may be <strong>completely deleted!</strong>
            </Alert>
        </Collapse>
    )
}

export default ChangeAlert;