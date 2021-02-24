import React, { useState } from "react";

function ShoppingList() {
    const [newItemName, setNewItemName] = useState(""); //newItem stores what's in our input text box. We need to update
    //setNewItem with whatever is in our input text box. We do this by doing input binding like in the demo
    // event = onChange, target = the text inputted by the user, value = the value of said text
    const [newItemQuantity, setNewItemQuantity] = useState("")
    let emptyList: string[] = []

    const [itemList, setItemList] = useState(emptyList) //stores list of shopping items

    function handleButtonClick() {
        setItemList([...itemList, newItemName])
        //console.log(itemList)
        setNewItemName("")
        setNewItemQuantity("")
    }



    return ( //whenever you click the add button, store newItem and update itemList and show result to user
        <div>
            <div>{itemList.map((item, index) => <li key={index}>{item}</li> )}
            </div>
            <input placeholder="your item here..."
                value={newItemName}
                onChange={event => { setNewItemName(event.target.value); }} />
            <input placeholder="your quantity here..."
                value={newItemQuantity}
                onChange={event => { setNewItemQuantity(event.target.value); }} />
            <button onClick={handleButtonClick}>Add!</button>
        </div>
    )
}


export default ShoppingList;