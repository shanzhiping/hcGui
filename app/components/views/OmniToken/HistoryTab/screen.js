
import OptionsButton from 'buttons/OptionsButton';

const Screen = ({ addressList,
    onAddressChanged,
    selectAddress }) => (

        <div className="omni-address-operation-area">
            <div>历史记录</div>
            <div>
                钱包完整记录  <OptionsButton btnClass="browseType-operation" {...{
                    onMenuChanged: onAddressChanged,
                    menuItemDatas: addressList,
                    btnText: selectAddress
                }} />
            </div>
        </div>
    );

export default Screen;