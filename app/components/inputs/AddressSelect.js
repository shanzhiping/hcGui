import Select from "react-select";
import { accountsSelect } from "connectors";
import { injectIntl, defineMessages, intlShape } from "react-intl";
import { Balance, LinkToAccounts } from "shared";

const messages = defineMessages({
  placeholder: {
    id: "accountsSelect.placeholder",
    defaultMessage: "Select account"
  },
});

@autobind
class AddressSelect extends React.Component {

  static propTypes = { 
    intl: intlShape.isRequired,
    className: PropTypes.string,  
  };

  constructor(props) {
    super(props);
    
    this.state = {
      address:{}
    };
  }

  render() {
    const { formatMessage } = this.props.intl;
    const { className, showAccountsButton,addressList } = this.props;
    return (
      <div className={className}>
        <Select
          clearable={false}
          style={{zIndex:"9"}}
          placeholder={formatMessage(messages.placeholder)}
          multi={false}
          value={this.state.address}
          valueKey="address"
          labelKey="address"
          options={addressList}
          valueRenderer={this.valueRenderer}
          optionRenderer={this.valueRenderer}
          onChange={this.onChangeAccount}
          className="accounts-select"
        />
        { showAccountsButton && <LinkToAccounts /> }
      </div>
    );
  }

  valueRenderer(option) {
    //return <span><span>{option.name}</span></span>;
    return (
      <div className="accounts-select-value">
        <div className="address-select-name">{option.address}</div> 
      </div>
    );
  }

  onChangeAccount(address) {
    if(address!==this.state.address){
        this.setState({address:address})
    }
    this.props.onChange && this.props.onChange(address);
  }
}

export default injectIntl(AddressSelect);
