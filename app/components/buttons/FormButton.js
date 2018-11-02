import Card from "card";
import {KeyBlueButton} from "buttons";

 

const FormButton = ({ router,onNextStep,disabled }) => (
    <Card> 
    <div className="hc-card-buttons">
        {router?<KeyBlueButton 
            size="large"
            className="hc-card-buttons-exit"
            onClick={()=>{
                router.goBack()
            }}
            block={false} >
            退出
        </KeyBlueButton>:null}
        <KeyBlueButton
            disabled={disabled}
            size="large"
            onClick={onNextStep}
            block={false} >
            下一步
        </KeyBlueButton>
    </div>
</Card>
  );

  export default FormButton; 