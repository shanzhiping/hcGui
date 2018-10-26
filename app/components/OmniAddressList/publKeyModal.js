 
import QRCodeModal from "modals/QRCodeModal";
import PubKeyModalContent from "modals/PubKeyModalContent"

export default ({show, onCancelModal,addr,pubKey})=>(<QRCodeModal
    modalTitle={<h1>公钥</h1>} 
    show={show}
    onCancelModal={onCancelModal}
    modalContent={<PubKeyModalContent {...{addr,pubKey}} />}
/>)