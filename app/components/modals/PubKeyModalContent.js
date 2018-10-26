 import "style/ReceivePage.less"; 

 export default ({addr,pubKey}) => (
  <div className="pubKeymodal-content">
    <div>
      <div>地址：</div>
      <div>{addr}</div></div>
    <div>
    <div>公钥：</div>
    <div>{pubKey} </div>
  </div>
</div>
);

 
