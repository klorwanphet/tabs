import React, { useState } from "react"
import Content from "./Content"


const Item = props => {
    const tabs = [0,1,2,3]
    // const [tabs, setTabs] = useState([["main"], ["tab 1"], ["tab 2"], ["tab 3"]])
    const [selectedTab, setSelectedTab] = useState({currentTab:0})
    const [item, setItem] = useState([["item 1", "item2", "item 3"],["1 item","2 item","3 item"],["1tem","i2em","it3m"],["ITEM","ITEM","ITEM"]])
    const handleOnClick = (e,val) => {
        console.log(val)
        setSelectedTab({
            currentTab: val
        })
        console.log(selectedTab)
    }
    return (
        <div className="col-7">
            {
                tabs.map((val,i) => {
                    return <button key={i} selected={selectedTab.currentTab===val} onClick={(e)=>handleOnClick(e, val)}>Tab {val+1}</button>
                })
            }
            <Content selectedTab={selectedTab} item={item}></Content>
        </div>
    )

}


export default Item;