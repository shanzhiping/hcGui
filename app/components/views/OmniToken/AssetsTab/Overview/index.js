import Screen from './screen';
import AssetsList from './assetsList';

const assetsTypes = [{
    text: "智能资产",
    value: 'issue'
}, {
    text: "众筹",
    value: 'crowdsale'
}, {
    text: "管理资产",
    value: 'managed'
}]

class Overview extends React.Component {
    constructor(props) {
        super(props); 
    }
    onAssesTypesChanged = (value) => { 
        this.props.router.push(`/omni/assets/${value}`)
    }
    render() {
        return (
            <div>
                <Screen {...{
                    assetsTypes,
                    onAssesTypesChanged:this.onAssesTypesChanged
                }} />
                <AssetsList />
            </div>
        )
    }
}

export default Overview;