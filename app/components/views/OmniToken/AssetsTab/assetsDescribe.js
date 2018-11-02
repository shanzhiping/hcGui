import { compose } from "fp";
import Card from "card";
import { Input, InputSelect, TextArea } from "inputs"; 
import "style/omniForm.less";
import {omniAssetsForm} from "connectors";



const divisibleEnum=[
    {
        text:"是",
        value:"yes",
    }, {
        text:"否",
        value:"no",
    }
]


const categoryFirst=[{
    categoryName: "选择",
    isNull:true, 
}]


 class AssetsDescribe extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = { 
            categories:null,
            category:null,
            subCategorise:null,
            subCategory:null, 
            descriptionMaxLength:255,
            tips:"255剩余字符", 
        }
    }

    componentWillMount=()=>{
        this.props.getCategories().then(categories=>{
            const groupCategories=[...categoryFirst,...categories]
            this.setState({
                categories:groupCategories,
                category:groupCategories[0],  
            })
        });
       
    }

    onCategoryChange=(data)=>{
        if(!data.isNull){
            if(data.subCategories !== this.state.subCategorise){
                const groupSubCategories=[...categoryFirst,...data.subCategories]
                this.setState({
                    subCategorise:groupSubCategories,
                    category:null,  
                })
            }
        }else{

        }
    }

    onSubCategoryChange=(data)=>{
        if(!data.isNull){

        }else{
            
        }
    }
     render(){
         const {tips,descriptionMaxLength,categories,subCategorise} =this.state;
         return (
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
                        datas: subCategorise,
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
         )
     }
 }


 export default omniAssetsForm(AssetsDescribe);