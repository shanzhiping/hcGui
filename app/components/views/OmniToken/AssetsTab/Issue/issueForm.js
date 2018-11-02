import { compose } from "fp";
import Card from "card";
import { Input, InputSelect, TextArea, FloatInput } from "inputs";
import {KeyBlueButton,FormButton} from "buttons";
import "style/omniForm.less";

const Form = ({
    onDivisibleEnumchanged,
    divisibleEnum,
    nameError,
    name,
    onNameChange,
    onAssetAddressChange,
    assetAddress,
    assetAddressError,
    categories,
    onCategoryChange,
    subCategories,
    onSubCategoryChange,
    onAssetDescriptionChange,
    description,
    descriptionMaxLength,
    tips,
    tokenNumber,
    tokenNumberError,
    onTokenNumberChange,
    addressList,
    onAddressChange,
    amountError,
    amount,
    onAmountChange,
    router,
    onNextStep,
    disabled
}) => {
    return (
        <div>
            <Card title="智能资产描述">
                <div className="omni-form-row">
                    <div className="col col-sm-6">
                        <div>姓名 (ex. Bobcoin)</div>
                        <div>
                            <Input
                                autoFocus={true}
                                showErrors={!!nameError}
                                invalid={!!nameError}
                                invalidMessage={nameError}
                                value={name}
                                className="send-address-hash-to"
                                onChange={compose(onNameChange, e => e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col col-sm-6">
                        <div>可分割</div>
                        <div><InputSelect className="send-select-account-input" {...{
                            datas: divisibleEnum,
                            onChange: onDivisibleEnumchanged,
                            labelKey: "text",
                            valueKey: "value",
                        }} /></div>
                    </div>
                </div>
                <div className="omni-form-row">
                    <div className="col col-sm-6">
                        <div>分类</div>
                        <div><InputSelect className="send-select-account-input" {...{
                            datas: categories,
                            onChange: onCategoryChange,
                            labelKey: "categoryName",
                            valueKey: "categoryName",
                        }} /></div>
                    </div>
                    <div className="col col-sm-6">
                        <div>子分类</div>
                        <div><InputSelect className="send-select-account-input" {...{
                            datas: subCategories,
                            onChange: onSubCategoryChange,
                            labelKey: "categoryName",
                            valueKey: "categoryName",
                        }} /></div>
                    </div>
                </div>
                <div className="omni-form-row">
                    <div className="col col-sm-6">
                        <div>资产网址 (输入相关网址以帮助用户了解更多关于智能资产的信息)</div>
                        <div>
                            <Input
                                autoFocus={true}
                                showErrors={!!assetAddressError}
                                invalid={!!assetAddressError}
                                invalidMessage={assetAddressError}
                                value={assetAddress}
                                placeholder="ex: http://my.property.url"
                                className="send-address-hash-to"
                                onChange={compose(onAssetAddressChange, e => e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="omni-form-row">
                    <div className="col col-sm-12">
                        <div>智能资产描述</div>
                        <div>
                            <TextArea
                                tips={tips}
                                maxlength={descriptionMaxLength}
                                value={description}
                                onChange={compose(onAssetDescriptionChange, e => e.target.value)}
                            />
                        </div>
                    </div>
                </div>

            </Card>
            <Card title="发行明细">
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
                        />
                        </div>
                    </div>
                </div>

                <div className="omni-form-row">
                    <div className="col col-sm-6">
                        <div>发行地址</div>
                        <div><InputSelect className="send-select-account-input" {...{
                            datas: addressList,
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
            <FormButton {
                ...{router,
                    onNextStep:onNextStep,
                    disabled
                }
        }/> 
        </div>
    )
};

export default Form;