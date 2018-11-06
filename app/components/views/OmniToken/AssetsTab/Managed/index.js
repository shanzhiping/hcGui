import IssuancePage from '../IssuancePage';
import { FormattedMessage as T} from "react-intl"; 

const ManagedPage = ({ router}) => (
    <IssuancePage 
        {
            ...{
                tabTitle:<T id="omni.managePage.title" m="Creating management assets"/>,
                formType:"managed",
                router
            }
        }
    />
);
export default ManagedPage;