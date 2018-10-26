import SignMessage from 'views/SecurityPage/SignMessage';
import InfoModal from "modals/InfoModal/Modal"; 

export default ({show, onCancelModal,address})=>(<InfoModal
    modalTitle={<h1>Sign Message</h1>} 
    show={show}
    onCancelModal={onCancelModal}
    modalContent={<SignMessage  address={address}/>}
/>)
