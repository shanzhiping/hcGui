 
import React from "react" ;
import AssetsRow from "./Row" ;
import {omniAssetsList} from "connectors";


let itemData=[{
    name:'HC',
    balance:'2000',
    addressData:[
      {
        address:'sfasdfasfasfadfasdfasdf',
        balance:'3151',
      }
    ]
  },{
    name:'HC2',
    balance:'2000',
    addressData:[
      {
        address:'dfdfdfdfdfdfddadfsfsfa',
        balance:'3151',
      }
    ]
  }];

  const menuItemDatas=[{
      value:1,
      text:'从钱包中移除地址'
  },
  {
    value:2,
    text:'从钱包中移除地址2'
}]

 class index extends React.PureComponent {
  
    constructor(props) {
        super(props);
    
        this.state = { 
           // isShowAssetsItems:false,
           assetsItemNum:0
        };
    }

     
    onShowAssetsItem=(itemNum)=>{
        this.setState({assetsItemNum:itemNum});

    }

    onhideAssetsItem=()=>{
        this.setState({assetsItemNum:null});
    }

    onMenuChanged=(value)=>{
        console.log(value,'------onMenuChanged---------------')
    }
 
    render() {  
        const {walletAssetsBalances}  = this.props;

        let row=null;
        if(itemData){
             row = itemData.map(item=>{
                return <AssetsRow key={item.name} {
                    ...{ 
                        data:item,
                        onShowAssetsItem:this.onShowAssetsItem,
                        onhideAssetsItem:this.onhideAssetsItem,
                        isShowAssetsItem:this.state.assetsItemNum==item.name,
                        onMenuChanged:this.onMenuChanged,
                        menuItemDatas:menuItemDatas 
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