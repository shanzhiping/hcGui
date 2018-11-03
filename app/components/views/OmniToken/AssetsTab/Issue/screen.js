
import OptionsButton from 'buttons/OptionsButton';
import Screen from 'shared/screen';
import { FormattedMessage as T } from "react-intl"; 


const Index = ({ tabTitle, onEcosystemChanged, ecosystem, ecosystemDatas }) => (
    <Screen title={tabTitle}>
    <T id="omni.Ecosystem" m="Ecosystem"/> <OptionsButton btnClass="createAddress-operation" {...{
            onMenuChanged: onEcosystemChanged,
            menuItemDatas: ecosystemDatas,
            btnText: ecosystem.text
        }} />
    </Screen>

);

export default Index;