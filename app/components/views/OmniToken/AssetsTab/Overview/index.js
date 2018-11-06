import Screen from './screen';
import AssetsList from './assetsList';
import {omniIssuanceList} from "connectors";
import { FormattedMessage as T, injectIntl, defineMessages } from "react-intl";
 
const messages=defineMessages({
    assetsTypeToIssueKey:{
        id:"omni.myAssets.Type.issue",
        defaultMessage:"Intelligent assets"
    },
    assetsTypeToCrowdsaleKey:{
        id:"omni.myAssets.Type.crowdsale",
        defaultMessage:"Crowd-funding"
    },
    assetsTypeToManagedKey:{
        id:"omni.myAssets.Type.managed",
        defaultMessage:"Management assets"
    }

})

class OverviewPage extends React.Component {
    constructor(props) {
        super(props); 
    }
    onAssesTypesChanged = (value) => { 
        this.props.router.push(`/omni/assets/${value}`)
    }

    assetsTypes =()=> [{
        text: this.props.intl.formatMessage(messages.assetsTypeToIssueKey),
        value: 'issue'
    }, {
        text: this.props.intl.formatMessage(messages.assetsTypeToCrowdsaleKey),
        value: 'crowdsale'
    }, {
        text:  this.props.intl.formatMessage(messages.assetsTypeToManagedKey),
        value: 'managed'
    }]

    render() {
        const {listproperties} =this.props;
        return (
            <div>
                <Screen {...{
                    assetsTypes:this.assetsTypes(),
                    onAssesTypesChanged:this.onAssesTypesChanged
                }} />
                <AssetsList {
                   ...{listproperties}
                }/>
            </div>
        )
    }
}

export default omniIssuanceList(injectIntl(OverviewPage));