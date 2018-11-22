import { tsToDate } from "helpers";
import { FormattedMessage as T } from "react-intl";

const CrowdsaleList = ({ activeCrowdsales }) => (

    <div className="omni-history-list">
        <div className="omni-history-list-header">
            <div>
                众筹
            </div>
            <div>
                支持的货币
            </div>
            <div>
                最后期限
        </div>
            <div>
                已被购买的令牌
        </div>
            <div>
                已被创建的令牌
            </div>
        </div>
        <div className="omni-history-list-body">

            {
                activeCrowdsales ? activeCrowdsales.map(item => {
                    return <div >
                        <div>{item.name}</div>
                        <div>{`${assetsName}(${item.propertyiddesired})/Rate(${tokensperunit})`}</div>
                        <div><T id="transaction.timestamp"
                            m="{timestamp, date, medium} {timestamp, time, medium}"
                            values={{ timestamp: tsToDate(item.blocktime) }} /></div>
                        <div>0.00000000</div>
                        <div>0.00000000</div>
                    </div>
                }) : null
            }

        </div>
    </div>
);

export default CrowdsaleList;