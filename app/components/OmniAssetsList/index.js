 
import React from "react" ;
import AssetsRow from "./Row" ;
import {omniAssetsList} from "connectors";
 

//   const menuItemDatas=[{
//       value:'',
//       text:'从钱包中移除'
//     }]

 class index extends React.PureComponent {
  
    constructor(props) {
        super(props);
    
        this.state = { 
           // isShowAssetsItems:false,
           assetsItemNum:0
        };
    }

    componentDidMount=()=>{
        this.props.getwalletaddressbalances();
    }

     
    onShowAssetsItem=(itemNum)=>{
        this.setState({assetsItemNum:itemNum});

    }

    onhideAssetsItem=()=>{
        this.setState({assetsItemNum:null});
    }

    onMenuChanged=(address)=>(value)=>{
        //todo  从钱包中移除
    }
 
    render() {  
        const {walletAssetsBalances}  = this.props;

        let row=null;
        if(walletAssetsBalances){
             row = walletAssetsBalances.map(item=>{
                return <AssetsRow key={item.name} {
                    ...{ 
                        data:item,
                        onShowAssetsItem:this.onShowAssetsItem,
                        onhideAssetsItem:this.onhideAssetsItem,
                        isShowAssetsItem:this.state.assetsItemNum==item.name,
                        onMenuChanged:this.onMenuChanged,
                        menuItemDatas:null     //暂时没有移除地址操作
                    }
                }/>
            })
        }else{
            row = <div>没有数据</div>
        }

        return row
    }
}

export default omniAssetsList(index);