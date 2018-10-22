import { QRCodeModalButton } from "buttons";
import { QRCodeModalContent } from "modals";

export default ({addr})=>(<QRCodeModalButton
    modalTitle={<h1>地址</h1>} 
    modalContent={<QRCodeModalContent addr={addr} />}
/>)

