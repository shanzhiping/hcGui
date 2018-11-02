import "style/OptionsButton.less";

class Detail extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
                <div>
                    <button className="send-operation-btn" onClick={() => { }}>后退</button>
                </div>
                <div>
                    核对交易
                </div>
                <div className="omni-history-list">
                    <div className="omni-history-list-header">
                        <div>字段名称</div>
                        <div>详细信息</div>
                    </div>
                    <div className="omni-history-list-body">
                        <div>
                            <div>asdfasdfasdf</div>
                            <div>sadfasdfadfasfsdfdsfsfasfsfasd</div>
                        </div>
                        <div>
                            <div>asdfasdfasdf</div>
                            <div>sadfasdfadfasfsdfdsfsfasfsfasd</div>
                        </div>
                        <div>
                            <div>asdfasdfasdf</div>
                            <div>sadfasdfadfasfsdfdsfsfasfsfasd</div>
                        </div>
                        <div>
                            <div>asdfasdfasdf</div>
                            <div>sadfasdfadfasfsdfdsfsfasfsfasd</div>
                        </div>
                        <div>
                            <div>asdfasdfasdf</div>
                            <div>sadfasdfadfasfsdfdsfsfasfsfasd</div>
                        </div>
                        <div>
                            <div>asdfasdfasdf</div>
                            <div>sadfasdfadfasfsdfdsfsfasfsfasd</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail;