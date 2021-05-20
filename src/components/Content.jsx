import React from "react"


const Content = props =>{
    const {
        item,selectedTab
    }=props
    console.log(selectedTab)
    return(
    <div className="box">
    <ul>
        {
            item[selectedTab.currentTab].map((item) => {
                return <li>{item}</li>
            })
        }
    </ul>
</div>
    )
}




export default Content