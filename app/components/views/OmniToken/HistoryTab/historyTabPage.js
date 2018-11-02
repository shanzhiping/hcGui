import Screen from './screen';
import HistoryList from './historyList';
import "style/OmnihistoryPage.less";

const HistoryTabPage = ({selectAddress,addressList,onAddressChanged,tradeHistory})=>(
    <Aux>  
        <div className="tab-card"> 
            <Screen {...{
                addressList,
                onAddressChanged,
                selectAddress
            }}/>
            <HistoryList {
                ...{
                    tradeHistory
                }
            }/>
        </div>
    </Aux>
)

export default HistoryTabPage;