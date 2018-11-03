
import OptionsButton from 'buttons/OptionsButton';
import Screen from 'shared/screen';
import { FormattedMessage as T } from "react-intl"; 

const Index = ({ assetsTypes,
    onAssesTypesChanged }) => (
        <Screen title="我的资产">
            <OptionsButton btnClass="createAddress-operation" {...{
                onMenuChanged: onAssesTypesChanged,
                menuItemDatas: assetsTypes,
                btnText: "创建"
            }} />
        </Screen>

    );

export default Index;