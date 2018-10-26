  
import React from "react";
import Details from './details'
import "style/OmniAssetsList.less"; 
import QRCodeButton from 'buttons/QRCodeButton';
import OptionsButton from 'buttons/OptionsButton'

class row extends React.PureComponent {
    constructor(props) {
        super(props);
    
        this.state = {  
           hasShow:false
        };
    }
    showDetails=()=>{
        this.setState({hasShow:!this.state.hasShow})
    } 

    render(){
        const {hasShow} = this.state;
        const headStyle=hasShow?'head row-show':'head row-hidden';
        const {onMenuChanged,menuItemDatas,data} =this.props;

        return <div className="Omni-addressList-row">
                        <div className={headStyle} onClick={this.showDetails}>
                            <div>
                                {data.address}   
                                <QRCodeButton addr={data.address} /> 
                            </div>
                            <div>
                                <OptionsButton btnClass="address-operation" { ...{onMenuChanged:onMenuChanged,
                                    menuItemDatas:menuItemDatas,
                                    btnText:'操作'
                                    } }/>
                            </div> 
                        </div>
                        {
                            hasShow?<Details assetsDatas={data.balances} />:null
                        }
                        
                </div>
    }
 
}
export default row;