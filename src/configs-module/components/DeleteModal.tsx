import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import { styled } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: 400,
    height: 320,
    bgcolor: 'background.paper',
    borderRadius: '12px',
    boxShadow: 10,
    p: 4,
};

const ModalButton = styled(Button)(({ theme }) => ({
    mt: 2.5
}));

const ModalCancelIcon = styled(CancelIcon)(({ theme }) => ({
    fontSize: 50
}))

const ModalCaptionText = styled(Typography)(({ theme }) => ({
    fontSize: 15
}))

const ModalWarningText = styled(Typography)(({ theme }) => ({
    fontSize: 25
}))

const DeleteModal = (props: any) => {
    const { open, onClose, onDelete } = props
    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ModalCancelIcon color='primary' />
                    <ModalWarningText variant="h5">
                        Are you sure?
                    </ModalWarningText>
                    <ModalCaptionText variant="caption">
                        Do you really want to delete this section? This process cannot be undone
                    </ModalCaptionText>
                    <ModalButton
                        onClick={onDelete}
                        color='primary'
                        variant='contained'
                    >
                        Submit
                    </ModalButton>
                </Box>
            </Modal>
        </div>
    );
}

export default DeleteModal;
