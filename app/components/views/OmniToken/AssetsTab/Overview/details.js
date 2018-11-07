import { shell } from "electron";
import { FormattedMessage as T } from "react-intl";
import Card from "card";
import { omniassetsDetails } from "connectors"
import "style/omniAssetsDetails.less";

class Index extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => { 
        this.props.getproperty(parseInt(this.props.params.propertyid));
    }

    render() {
        const { property,isTestNet } = this.props;
        return (<div>{property ? <div className="omni-asstes-details">
            <Card title={<div>{property.name} <span>(#{property.propertyid})</span></div>}>
                <div className="omni-asstes-details-Basics">
                    <div>
                        {property.data}
                        </div>
                    <div><T id="omni.assets.details.visitUrl" m="For more information please visit:" />
                        <a className="stakepool-link" onClick={function (x) { shell.openExternal(x); }.bind(null, property.url)}> {property.url}</a>  
                    </div>
                   
                    <div>
                        <T id="omni.assets.infoForm.issueAddress" m="Issue address"/>:<a href="#"> </a><a className="stakepool-link" onClick={function (x) { shell.openExternal(x); }.bind(null, `https://${isTestNet?"testnet-":""}hcomni-explorer.h.cash/address/${property.issuer}`)}> {property.issuer}</a>  
                    </div>
                </div>
            </Card>
            {/* <Card title="Asset History">
                <div className="omni-asstes-details-history">
                    <div>
                        <div>
                            <div>3 几天前</div>
                            <div>T1104153701 被创建</div>

                        </div>
                        <div>Nov 04, 2018 (03:43PM)</div>
                    </div>
                    <div>
                        <div>
                            <div>3 几天前</div>
                            <div>T1104153701 被创建</div>

                        </div>
                        <div>Nov 04, 2018 (03:43PM)</div>
                    </div> <div>
                        <div>
                            <div>3 几天前</div>
                            <div>T1104153701 被创建</div>

                        </div>
                        <div>Nov 04, 2018 (03:43PM)</div>
                    </div> <div>
                        <div>
                            <div>3 几天前</div>
                            <div>T1104153701 被创建</div>

                        </div>
                        <div>Nov 04, 2018 (03:43PM)</div>
                    </div> <div>
                        <div>
                            <div>3 几天前</div>
                            <div>T1104153701 被创建</div>

                        </div>
                        <div>Nov 04, 2018 (03:43PM)</div>
                    </div> <div>
                        <div>
                            <div>3 几天前</div>
                            <div>T1104153701 被创建</div>

                        </div>
                        <div>Nov 04, 2018 (03:43PM)</div>
                    </div>
                </div>
            </Card> */}
        </div> : null}
        </div>
        );
    }
}


export default omniassetsDetails(Index);