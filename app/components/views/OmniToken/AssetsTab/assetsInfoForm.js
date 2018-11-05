import { compose } from "fp";
import Card from "card";
import { Input, InputSelect, TextArea } from "inputs";
import { omniAssetsForm } from "connectors";
import "style/omniForm.less";



class AssetsInfoForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            categories: null, 
            subCategorise: null, 
            subCategory:null,
        }
    }

    firstCategory=()=>{
        return [
            {
                default:true,
                subCategories:[],
                categoryName:"请选择"
            }
        ]
    }

    onCategoryChange = (category) => {
        if (category !== this.state.category) { 
            this.setState({ category,subCategorise:[...this.firstCategory(),...category.subCategories] });
            this.props.onCategoryChange && this.props.onCategoryChange(category.default?null:category); 
        }
    }

    onSubCategoryChange = (subCategory) => { 
        if (subCategory !== this.state.subCategory) {
            this.setState({ subCategory });
            this.props.onSubCategoryChange && this.props.onSubCategoryChange(subCategory.default?null:subCategory); 
        }
    }

    componentWillMount = () => {
        this.props.getCategories().then(categories => {
            categories=[...this.firstCategory(),...categories];
            this.setState({
                categories
            })
        }); 
    }



    render() {
        const { onDivisibleEnumchanged,
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
            tips } = this.props;

            const {categories,subCategorise}=this.state;
        return <Card title="智能资产描述">
            <div className="omni-form-row">
                <div className="col col-sm-6">
                    <div>姓名 (ex. Bobcoin)</div>
                    <div>
                        <Input
                            required={true}
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
                        onChange: this.onCategoryChange,
                        labelKey: "categoryName",
                        valueKey: "categoryName",
                    }} /></div>
                </div>
                <div className="col col-sm-6">
                    <div>子分类</div>
                    <div><InputSelect className="send-select-account-input" {...{
                        datas: subCategorise,
                        onChange: this.onSubCategoryChange,
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
                            required={true}
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
    }
}

export default omniAssetsForm(AssetsInfoForm);