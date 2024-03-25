import ReactModal from 'react-modal';
import { CamperDetails } from "../CamperDetails/CamperDetails.jsx";


const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 999,
    },
    content: {
        width: '982px',
        height: '720px',
        padding: '40px 16px 40px 40px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        borderRadius: '20px',
        transform: 'translate(-50%, -50%)',
    },
};

ReactModal.setAppElement('#root');
export const Modal = ({ isOpen, onClose, camper }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel="car details"
        >
            <CamperDetails item={camper} onClose={onClose}/>
        </ReactModal>
    );
};
