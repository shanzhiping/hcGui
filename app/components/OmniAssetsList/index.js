 
import React from "react" 
import AssetsRow from "./Row" 
import {omniAssetsList} from "connectors" 


const listData=[
    {
        id:'1',
        currencyType:"比特币",
        currencyBalance:10000,
        currentValue:80000,
        details:[{
            id:"adsfasdfafdasfasfasasdfasdf",
            balance:300,
            currentValue:500
        },{
            id:"adsfgsdgfsdgdsgsdfgsdgdsggf",
            balance:400,
            currentValue:1000
        },{
            id:"asdgdagegqewgfasdfafaefew",
            balance:600,
            currentValue:900
        }]
    },
    {
        id:'2',
        currencyType:"HC",
        currencyBalance:5000,
        currentValue:50000,
        details:[{
            id:"adsfasdfafdasfasfasasdfasdf",
            balance:1000,
            currentValue:50000
        },{
            id:"adsfgsdgfsdgdsgsdfgsdgdsggf",
            balance:60,
            currentValue:300
        },{
            id:"asdgdagegqewgfasdfafaefew",
            balance:80,
            currentValue:400
        }]
    },
    {
        id:'3',
        currencyType:"OMNI",
        currencyBalance:1000,
        currentValue:2000,
        details:[{
            id:"adsfasdfafdasfasfasasdfasdf",
            balance:200,
            currentValue:500
        },{
            id:"adsfgsdgfsdgdsgsdfgsdgdsggf",
            balance:100,
            currentValue:200
        },{
            id:"asdgdagegqewgfasdfafaefew",
            balance:100,
            currentValue:200
        }]
    }
]

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
        const {walletAssetsBalances}  = this.props;

        const row=walletAssetsBalances.map(item=>{
            return <AssetsRow key={item.name} {
                ...{ 
                    data:item,
                    onShowAssetsItem:this.onShowAssetsItem,
                    onhideAssetsItem:this.onhideAssetsItem,
                    isShowAssetsItem:this.state.assetsItemNum==item.id,
                    assetsItemDetails:item.details
                }
            }/>
        })

        return row
    }
}

export default omniAssetsList(index);