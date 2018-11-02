import Screen from './screen';
import IssueForm from './issueForm';
import {omniAssetsForm} from "connectors";


const ecosystemDatas = [{
    text: "产品",
    value: 'project'
}, {
    text: "测试",
    value: 'test'
}];

const divisibleEnum=[
    {
        text:"是",
        value:"yes",
    }, {
        text:"否",
        value:"no",
    }
]

 

class Issue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ecosystem: ecosystemDatas[0],
            divisible:divisibleEnum[0],
            nameError:"",
            name:"", 
            assetAddressError:"",
            assetAddress:"",
            categories:null,
            category:null,
            subCategorise:null,
            subCategory:null,
            description:"",
            descriptionMaxLength:255,
            tips:"255剩余字符",
            tokenNumber:"",
            tokenNumberError:"",
            address:props.walletAssetsBalances?props.walletAssetsBalances[0].addressData[0]:null,
            amountError:"",
            amount:"",   
            disabled:true
        }
    }
    componentWillMount=()=>{
        this.props.getCategories().then(categories=>{
            this.setState({
                categories,
                category:categories[0], 
                subCategory:categories[0].subCategories[0]
            })
        });
       
    }

    onEcosystemChanged = (value) => {
        const ecosystem = ecosystemDatas.find(item => item.value == value);
        this.setState({ ecosystem })
    }
    onDivisibleEnumchanged=(divisible)=>{
        if(divisible !== this.state.divisible){
            this.setState({divisible})
        }
    }
    onNameChange=(value)=>{
        if(value){
            this.setState({nameError:"",name:value})
        }else{ 
            this.setState({nameError:"字段不能为空",name:value})
        }
    }
    onAssetAddressChange=(value)=>{
        if(value){
            this.setState({assetAddressError:"",assetAddress:value})
        }else{
            this.setState({assetAddressError:"字段不能为空",assetAddress:value})
        }
    }
    onCategoryChange=(category)=>{
        if(category !== this.state.category){
            this.setState({category, subCategory:category.subCategories[0], })
        }
    }
    onSubCategoryChange=(subCategory)=>{
        if(subCategory !== this.state.subCategory){
            this.setState({subCategory})
        }
    }
    onAssetDescriptionChange=(value)=>{ 
        this.setState({description:value,tips:`${255-value.length}剩余字符`})
    }
    onTokenNumberChange=(value)=>{ 
        if(value){
            this.setState({tokenNumber:value,tokenNumberError:""})
        }else{
            this.setState({tokenNumberError:"字段不能为空",tokenNumber:value})
        }
    }
    onAddressChange = (address)=>{


    } 
    onAmountChange=(value)=>{
        if(value){
            this.setState({amount:value,amountError:""})
        }else{
            this.setState({amountError:"字段不能为空",amount:value})
        }
    }
    componentWillReceiveProps=(nextProps)=>{ 
        if (nextProps.walletAssetsBalances != this.props.walletAssetsBalances) {
          this.setState(this.getInitialState(nextProps),this.onAttemptConstructTransaction);
        }
      }
      onNextStep=()=>{
          console.log("下一步");
      }
    render() {
        const { ecosystem,divisible,name,nameError,assetAddress,assetAddressError,description,descriptionMaxLength,tips,
            tokenNumber,tokenNumberError,amount,amountError,disabled,categories,category } = this.state; 
            const {router} =this.props;  
        return (
            <div>
                <Screen {
                    ...{
                        tabTitle:"创建智能资产",
                        ecosystemDatas,
                        onEcosystemChanged: this.onEcosystemChanged,
                        ecosystem
                    }
                } />
                <IssueForm {
                    ...{
                        onDivisibleEnumchanged:this.onDivisibleEnumchanged,
                        divisibleEnum, 
                        onNameChange:this.onNameChange,
                        name,
                        nameError,
                        onAssetAddressChange:this.onAssetAddressChange,
                        assetAddress,
                        assetAddressError,
                        categories,
                        onCategoryChange:this.onCategoryChange,
                        subCategories:category?category.subCategories:null,
                        onAssetDescriptionChange:this.onAssetDescriptionChange,
                        description,
                        descriptionMaxLength,
                        tips,
                        tokenNumber,
                        tokenNumberError,
                        onTokenNumberChange:this.onTokenNumberChange,
                        addressList:null,   //  待定
                        onAddressChange:this.onAddressChange,
                        amount,
                        amountError,
                        onAmountChange:this.onAmountChange,
                        router,
                        onNextStep:this.onNextStep,
                        disabled
                    }
                }/>
            </div>
        )
    }
}

export default omniAssetsForm(Issue);