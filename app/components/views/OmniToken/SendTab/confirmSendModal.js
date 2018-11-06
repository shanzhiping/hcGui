import {ConfirmModal} from "modals";
import { FormattedMessage as T } from "react-intl";

export default ({ show, onCancelModal,
    amount,
    name,
    onSubmit }) => (<ConfirmModal
        modalTitle={<T id="omni.send.confirmSendTitle" m="Confirm the transaction" />}
        show={show}
        onCancelModal={onCancelModal}
        onSubmit={onSubmit}
        modalContent={<Aux><T id="send.confirmAmountLabel" m="Please confirm your transaction for" />:  {amount} {name}</Aux>}
    />)