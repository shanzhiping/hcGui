

const historyTable = ({tradeHistory,onDetail}) => (

        <div className="omni-history-list">
            <div className="omni-history-list-header">
                <div>类型</div>
                <div>数量</div>
                <div>货币</div>
                <div>交易明细</div>
                <div>交易时间</div>
            </div>
            <div className="omni-history-list-body">
               {tradeHistory && tradeHistory.length>0?tradeHistory.map(item=><div>
                    <div>{item.type}</div>
                    <div>{item.amountforsale}</div>
                    <div>货币</div>
                    {/* <div>交易明细</div> */}
                    <div>{item.blocktime}}</div>
               </div>):<div className="omni-history-list-tips" onClick={()=>{
                   onDetail("11");
               }}>
                    没有历史记录
                </div>
                } 
                
            </div>
        </div>
    );

export default historyTable;