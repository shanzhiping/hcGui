import Screen from './screen';
import HistoryTable from './historyTable';
import "style/OmnihistoryPage.less";

const HistoryList = ({selectAddress,addressList,onAddressChanged,tradeHistory,onDetail})=>(
    <div>
        <Screen {...{
                addressList,
                onAddressChanged,
                selectAddress
            }}/>
            <HistoryTable {
                ...{
                    tradeHistory,
                    onDetail
                }
            }/>
    </div>
)

export default HistoryList;