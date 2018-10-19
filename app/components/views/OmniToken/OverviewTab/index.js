import ValueCombination from './ValueCombination';
import AsssetsList from 'OmniAssetsList';
import "style/OmniOverviewTab.less"

const OverviewPage = ( ) => (
    <Aux>
        <div className="tab-card">
            <div className="overview-transactions-ticket-wrapper">
                <AsssetsList/>   
                {/* <div className="recent-transactions omni-overviewTab-asstesList">
                     
                </div> */}
                {/* <div className="ticket-activity clearfix omni-overviewTab-valueCombination">
                    <ValueCombination />
                </div> */}
            </div>
        </div>
    </Aux>
  );
  
  export default OverviewPage;