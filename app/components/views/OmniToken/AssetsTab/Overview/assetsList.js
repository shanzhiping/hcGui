import { shell } from "electron";
import { FormattedMessage as T } from "react-intl";

const AssetsList = ({ listproperties }) => (

    <div className="omni-history-list">
        <div className="omni-history-list-header">
            <div><T id="omni.myAssets.Field.PropertyId" m="PropertyId" /></div>
            <div><T id="omni.myAssets.Field.Assets" m="Assets" /></div>
            <div>
                <T id="omni.myAssets.Field.TotalTokens" m="TotalTokens" />
            </div>
            <div>
                <T id="omni.myAssets.Field.URL" m="URL" />
            </div>
        </div>
        <div className="omni-history-list-body">

            {listproperties ? listproperties.map(item => (
                <div key={item.propertyid}>
                    <div>{item.propertyid} (Manage)</div>
                    <div>{item.name}</div>
                    <div>{item.detail.totaltokens}</div>
                    <div><a className="stakepool-link" onClick={function (x) { shell.openExternal(x); }.bind(null, item.url)}>{item.url}</a></div>
                </div>
            )) : <div className="omni-history-list-tips"> 
                    <T id="omni.tables.noData" m="no data" />
            </div>}

        </div>
    </div>
);

export default AssetsList;