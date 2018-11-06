
import {ConfirmAssetsModalContent,ConfirmModal} from "modals"

export default ({ show, onCancelModal, name,
    category,
    subCategory,
    url,
    description,
    address,
    amount,
    onSubmit }) => (<ConfirmModal
        modalTitle="确认资产创建"
        show={show}
        onCancelModal={onCancelModal}
        onSubmit={onSubmit}
        modalContent={<ConfirmAssetsModalContent {...{
            name,
            category,
            subCategory,
            url,
            description,
            address,
            amount
        }} />}
    />)