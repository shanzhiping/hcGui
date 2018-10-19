 
import {Card } from 'material-ui/Card';
import React from "react"   
import OptionsButton from './optionsButton'

const details=({  
    addressData
       })=>(
        <div className="Omni-asstesList-row-table">
            <div className="asstesList-table-row asstesList-table-header">
                    <div>地址</div>
                    <div>余额</div>
                    {/* <div>价值</div> */}
                    <div>操作</div>
            </div>
            {
                addressData.map(item=>{
                    return  <div key={item.address} className="asstesList-table-row asstesList-table-body">
                                <div>{item.address}</div>
                                <div>{item.balance}</div>
                                {/* <div>${item.currentValue}</div> */}
                                <div>
                                   <OptionsButton />
                                </div>
                        </div>
                })
            }
        </div>
    )


    export default details; 