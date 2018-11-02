
import OptionsButton from 'buttons/OptionsButton';

const Screen = ({ assetsTypes,
    onAssesTypesChanged }) => (

        <div className="omni-address-operation-area">
            <div>我的资产</div>
            <div>
                <OptionsButton btnClass="createAddress-operation" {...{
                    onMenuChanged: onAssesTypesChanged,
                    menuItemDatas: assetsTypes,
                    btnText: "创建"
                }} />
            </div>
        </div>
    );

export default Screen;