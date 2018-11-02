
import OptionsButton from 'buttons/OptionsButton';
 

const Screen = ({tabTitle,onEcosystemChanged,ecosystem,ecosystemDatas }) => (

        <div className="omni-address-operation-area">
            <div>{tabTitle}</div>
            <div>
               生态系统 <OptionsButton btnClass="createAddress-operation" {...{
                    onMenuChanged: onEcosystemChanged,
                    menuItemDatas: ecosystemDatas,
                    btnText: ecosystem.text
                }} />
            </div>
        </div>
    );

export default Screen;