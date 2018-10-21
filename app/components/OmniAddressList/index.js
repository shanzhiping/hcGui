 
import React from "react" ;
import Row from "./Row" ;
import {omniAssetsList} from "connectors";

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
        return <Row></Row>
    }
}

export default omniAssetsList(index);