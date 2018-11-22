
import OptionsButton from 'buttons/OptionsButton';
import Screen from 'shared/screen';
import { FormattedMessage as T } from "react-intl"; 

const Index = ({ showListTypes,assetsTypes,
    onAssesTypesChanged,onShowListTypesChanged }) => (
        <Screen title={<T id="omni.myAssetsPage.title" m="My Assets"/>}>
 {/* <OptionsButton btnClass="createAddress-operation" {...{
                onMenuChanged: onShowListTypesChanged,
                menuItemDatas: showListTypes,
                btnText: <T id="omni.myAsset.createButton" m="Create"/>
            }} /> */}

            <OptionsButton btnClass="createAddress-operation" {...{
                onMenuChanged: onAssesTypesChanged,
                menuItemDatas: assetsTypes,
                btnText: <T id="omni.myAsset.createButton" m="Create"/>
            }} />
        </Screen>

    );

export default Index;