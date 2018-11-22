import Screen from './screen';
import AssetsList from './assetsList';
import CrowdsaleList from "./crowdsaleList";
import { omniIssuanceList } from "connectors";
import { FormattedMessage as T, injectIntl, defineMessages } from "react-intl";

const messages = defineMessages({
    assetsTypeToIssueKey: {
        id: "omni.myAssets.Type.issue",
        defaultMessage: "Intelligent Assets"
    },
    assetsTypeToCrowdsaleKey: {
        id: "omni.myAssets.Type.crowdsale",
        defaultMessage: "Crowd Assets"
    },
    assetsTypeToManagedKey: {
        id: "omni.myAssets.Type.managed",
        defaultMessage: "Managed  Assets"
    }

})

class OverviewPage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            showListType: this.showListTypes()[0].value
        }
    }
    componentDidMount = () => {
        const {listpropertiesFunc}=this.props;
        // getActiveCrowdsales && getActiveCrowdsales();
        listpropertiesFunc && listpropertiesFunc(); 
    }
    onAssesTypesChanged = (value) => {
        this.props.router.push(`/omni/assets/${value}`)
    }

    onShowListTypesChanged=(value)=>{ 
        if(this.state.showListType!=value){
            this.setState({showListType:value});
        }
    }

    assetsTypes = () => [{
        text: this.props.intl.formatMessage(messages.assetsTypeToIssueKey),
        value: 'issue'
    }
    //     , {
    //     text: this.props.intl.formatMessage(messages.assetsTypeToCrowdsaleKey),
    //     value: 'crowdsale'
    // }
        , {
        text: this.props.intl.formatMessage(messages.assetsTypeToManagedKey),
        value: 'managed'
    }]

    showListTypes = () => [
        {
            text: "资产",
            value: "assets"
        }, {
            text: "众筹",
            value: "crowdsale"
        }
    ]


    render() {
        const {showListType } =this.state;
        const { listproperties,activeCrowdsales, router } = this.props;
        const properties = listproperties ? listproperties.filter((i) => i.isMine) : [];
        return (
            <div>
                <Screen {...{
                    showListTypes:this.showListTypes(),
                    assetsTypes: this.assetsTypes(),
                    onAssesTypesChanged: this.onAssesTypesChanged,
                    onShowListTypesChanged:this.onShowListTypesChanged
                }} />
                {showListType=="assets" ? <AssetsList {
                    ...{
                        listproperties: properties,
                        router
                    }
                } /> : <CrowdsaleList 
                {
                    ...{activeCrowdsales}
                }/>
                }
            </div>
        )
    }
}

export default omniIssuanceList(injectIntl(OverviewPage));