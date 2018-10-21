import React from "react";
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { basename } from "path";

@autobind
export default class optionsButtion extends React.PureComponent{
    constructor(props) {
        super(props); 
        this.state = { menuOpen: false };
    }
    onMenuChanged(event, value) {
        console.log(value,'===================================');
    }

    onMenuRequestChange =(opening) => {
        this.setState({ menuOpen: opening });
    }
    render(){
        const { menuOpen } = this.state;

        return (
            <IconMenu
             className={"eye-filter-menu " + (menuOpen ? "menu-open" : "") }
            onChange={this.onMenuChanged}
            onRequestChange={this.onMenuRequestChange}
            open={menuOpen}
            iconButtonElement={
                <label>删除</label>
            }
          >
              <MenuItem
                className={"context-menu-item "}
                key='1'
                value="1"
                style={{fontSize: null, lineHeight: null, minHeight: null, padding: null}}
                primaryText={"从钱包中移除地址"} />
          </IconMenu>
            )
    }
}