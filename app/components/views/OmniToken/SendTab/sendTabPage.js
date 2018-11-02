import { compose } from "fp";
import { FormattedMessage as T, injectIntl, defineMessages } from "react-intl";
import { AddressInput, InputSelect, FloatInput } from "inputs";
import { PassphraseModalButton } from "buttons";
import 'style/OmniSendPage.less';

const messages = defineMessages({
    destinationAddrPlaceholder: {
        id: "send.destinationAddrPlaceholder",
        defaultMessage: "Destination Address"
    },
    amountPlaceholder: {
        id: "send.amountPlaceholder",
        defaultMessage: "Amount"
    }
});

const SendTabPage = ({
    addressList,
    onAddressChange,
    assetsList,
    onAssetsChange,
    addressError,
    amountError,
    destination,
    amount,
    getOnChangeOutputDestination,
    getOnChangeOutputAmount,
    address,
    asset,
    intl,
    isValid,
    onSubmit
}) => (
        <Aux>
            <div className="tab-card">
                <div className="omni-sendForm">
                    <div className="sendForm-panel">
                        <div>选择货币</div>
                        <div><InputSelect className="send-select-account-input" {...{
                            datas: assetsList,
                            onChange: onAssetsChange,
                            labelKey: "name",
                            valueKey: "name",
                        }} /></div>
                    </div>
                    <div className="sendForm-panel">
                        <div>发送地址</div>
                        <div><InputSelect className="send-select-account-input" {...{
                            datas: addressList,
                            onChange: onAddressChange,
                            labelKey: "address",
                            valueKey: "address"
                        }} /></div>
                    </div>
                </div>
                <div className="omni-sendForm">
                    <div className="sendForm-panel">
                        <div>发送 {asset ? asset.name : ""} (有效的: {asset ? asset.name : ""} )</div>
                        <div>
                            <FloatInput
                                showErrors={!!amountError}
                                invalid={!!amountError}
                                invalidMessage={amountError}
                                hidden={false}
                                value={amount}
                                className="send-address-input-amount"
                                placeholder={intl.formatMessage(messages.amountPlaceholder)}
                                onChange={getOnChangeOutputAmount}
                                maxFracDigits={8}
                            />
                        </div>
                    </div>
                    <div className="sendForm-panel">
                        <div>接收地址</div>
                        <div>
                            <AddressInput
                                autoFocus={true}
                                showErrors={!!addressError}
                                invalid={!!addressError}
                                invalidMessage={addressError}
                                value={destination}
                                className="send-address-hash-to"
                                placeholder={intl.formatMessage(messages.destinationAddrPlaceholder)}
                                onChange={compose(getOnChangeOutputDestination, e => e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="omni-send-button-area">
                    <div>
                        {/* <p>全部交易费用: 0.00025 HC </p> */}

                        <p>从可用地址:  {address.balance} {asset ? asset.name : ""}</p>

                        {parseFloat(amount) > parseFloat(address.balance) ? <p className="omni-send-error"> 您的“发件人地址”没有足够的BTC完成此交易。请至少发送 {asset ? asset.name : ""}覆盖估计总交易成本。</p> : null}
                    </div>
                    <div>
                        <PassphraseModalButton
                            modalTitle={<T id="send.sendConfirmations" m="Transaction Confirmation" />}
                            modalDescription={<Aux><T id="send.confirmAmountLabel" m="Please confirm your transaction for" />:  {amount} {asset ? asset.name : ""}</Aux>}
                            disabled={!isValid}
                            className="content-send"
                            onSubmit={onSubmit}
                            loading={false}
                            buttonLabel={<T id="send.sendBtn" m="Send" />}
                        />
                    </div>

                </div>

            </div>
        </Aux>
    );

export default injectIntl(SendTabPage);