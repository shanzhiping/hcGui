 
import React from "react" ;
import Row from "./Row" ;
import {omniAssetsList} from "connectors";

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
    }

    onMenuChanged=(value)=>{
        console.log(value,'------onMenuChanged---------------')
    }
    render() {  
        // const {walletAssetsBalances}  = this.props;

        // let row=null;
        // if(walletAssetsBalances){
        //      row = walletAssetsBalances.map(item=>{
        //         return <AssetsRow key={item.name} {
        //             ...{ 
        //                 data:item,
        //                 onShowAssetsItem:this.onShowAssetsItem,
        //                 onhideAssetsItem:this.onhideAssetsItem,
        //                 isShowAssetsItem:this.state.assetsItemNum==item.id,
        //                 assetsItemDetails:item.details
        //             }
        //         }/>
        //     })
        // }else{
        //     row = <div>没有数据</div>
        // } 
        return [<Row key='1' {...{ onMenuChanged:this.onMenuChanged,
            menuItemDatas:menuItemDatas }}/>,<Row key='2'  {...{ onMenuChanged:this.onMenuChanged,
                menuItemDatas:menuItemDatas }}/>]
    }
}

export default omniAssetsList(index);