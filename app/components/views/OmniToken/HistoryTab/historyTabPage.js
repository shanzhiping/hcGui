import Screen from './screen';

const HistoryTabPage = ({selectAddress,addressList,onAddressChanged})=>(
    <Aux>  
        <div className="tab-card"> 
            <Screen {...{
                addressList,
                onAddressChanged,
                selectAddress
            }}/>
            <div className="omni-history-list">
                开始做历史记录页面了
            </div>
        </div>
    </Aux>
)

export default HistoryTabPage;