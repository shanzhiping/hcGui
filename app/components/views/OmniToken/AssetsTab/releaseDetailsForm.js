import { compose } from "fp";
import Card from "card";
import { InputSelect, FloatInput } from "inputs";
import { omniAssetsForm } from "connectors";
import "style/omniForm.less";


class ReleaseDetailForm extends React.PureComponent {
    render() {
        const { tokenNumber,
            tokenNumberError,
            onTokenNumberChange, 
            onAddressChange,
            amountError,
            amount,
            onAmountChange, walletAddressBalances} = this.props;

        return <Card title="发行明细">
            <div className="omni-form-row">
                <div className="col col-sm-6">
                    <div>令牌数量 (输入期望的数量)</div>
                    <div> <FloatInput
                        showErrors={!!tokenNumberError}
                        invalid={!!tokenNumberError}
                        invalidMessage={tokenNumberError}
                        hidden={false}
                        value={tokenNumber}
                        className="send-address-input-amount"
                        onChange={compose(onTokenNumberChange, e => e.target.value)}
                        maxFracDigits={8}
                        required={true}
                    />
                    </div>
                </div>
            </div>

            <div className="omni-form-row">
                <div className="col col-sm-6">
                    <div>发行地址</div>
                    <div><InputSelect className="send-select-account-input" {...{
                        datas: walletAddressBalances,
                        onChange: onAddressChange,
                        labelKey: "address",
                        valueKey: "address",
                    }} /></div>
                </div>
                <div className="col col-sm-6">
                    <div>Miner Fees (HC) ( HC 有效的)</div>
                    <div>
                        <FloatInput
                            showErrors={!!amountError}
                            invalid={!!amountError}
                            invalidMessage={amountError}
                            hidden={false}
                            value={amount}
                            className="send-address-input-amount"
                            placeholder={0.002}
                            onChange={compose(onAmountChange, e => e.target.value)}
                            maxFracDigits={8}
                        />
                    </div>
                </div>

            </div>
        </Card>
    }
}

export default omniAssetsForm(ReleaseDetailForm);