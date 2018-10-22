import React from "react";
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { basename } from "path";

@autobind
export default class OptionsButtion extends React.PureComponent{
    constructor(props) {
        super(props); 
        this.state = { menuOpen: false };
    } 
    onMenuRequestChange =(opening,e) => {
        this.setState({ menuOpen: opening });
        return false;
    }


    _menuItemComponent=(menuItemDatas)=>{
        return menuItemDatas.map((item)=>{
            return <MenuItem
            className={"context-menu-item "}
            key={item.value}
            value={item.value}
            style={{fontSize: null, lineHeight: null, minHeight: null, padding: null}}
            primaryText={item.text} />
        })
    }

    render(){
        const { menuOpen } = this.state; 
        const {btnClass,onMenuChanged,menuItemDatas,btnText} = this.props; 


        return (
            <IconMenu
                className={"eye-filter-menu " + (menuOpen ? "menu-open" : "") }
                onChange={(event, value)=>{ this.props.onMenuChanged(value) }}
                onRequestChange={this.onMenuRequestChange}
                open={menuOpen}
                iconButtonElement={
                    <div className={btnClass}>{btnText}</div>
                }
            >
            {this._menuItemComponent(menuItemDatas)} 
            </IconMenu>
            )
    }
}