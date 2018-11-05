import { compose } from "fp";
import Card from "card";
import { Input, InputSelect, TextArea, FloatInput } from "inputs";
import { KeyBlueButton, FormButton } from "buttons";
import AssetsInfoForm from "../assetsInfoForm";
import ReleaseDetailForm from "../releaseDetailsForm";
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
    onCategoryChange,
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
            <AssetsInfoForm {
                ...{
                    onDivisibleEnumchanged,
                    divisibleEnum,
                    nameError,
                    name,
                    onNameChange,
                    onAssetAddressChange,
                    assetAddress,
                    assetAddressError,
                    onAssetDescriptionChange,
                    description,
                    descriptionMaxLength,
                    tips,
                    onCategoryChange,
                    onSubCategoryChange,
                }
            } />
            <ReleaseDetailForm {
                ...{
                    tokenNumber,
                    tokenNumberError,
                    onTokenNumberChange,
                    addressList,
                    onAddressChange,
                    amountError,
                    amount,
                    onAmountChange,
                }
            }
            />
            <FormButton {
                ...{
                    router,
                    onNextStep: onNextStep,
                    disabled
                }
            } />
        </div>
    )
};

export default Form;