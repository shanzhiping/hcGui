  
import React from "react";
import Details from './details'
import "style/OmniAssetsList.less";
import { QRCodeModalButton } from "buttons";
import { QRCodeModalContent } from "modals";
import QCCodeButton from './qrCodeButton';
import OptionsButton from '../OmniAssetsList/optionsButton'

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
    showQrCode=(e)=>{
        console.log(e,'showQrCodeshowQrCodeshowQrCodeshowQrCode');
        e.stopPropagation();
    }

    render(){
        const {hasShow} = this.state;
        const headStyle=hasShow?'head row-show':'head row-hidden';
        const {onMenuChanged,menuItemDatas} =this.props;

        return <div className="Omni-addressList-row">
                        <div className={headStyle} onClick={this.showDetails}>
                            <div>
                                asdfasfasfasfafasdfasdfasdf   
                                <QCCodeButton addr="asdfasfasfasfafasdfasdfasdf"/> 
                            </div>
                            <div>
                                <OptionsButton btnClass="address-operation" { ...{onMenuChanged:onMenuChanged,
                                    menuItemDatas:menuItemDatas,
                                    btnText:'操作'
                                    } }/>
                            </div> 
                        </div>
                        {
                            hasShow?<Details />:null
                        }
                        
                </div>
    }
 
}
export default row;