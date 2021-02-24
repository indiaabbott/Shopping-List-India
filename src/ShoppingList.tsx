import React, { useState } from "react";

//since each element in our shopping list has two properties, 
//aka each element is an object,
//we should define an interface that tells each element what properties
//it should expect and what their types are.

interface ShoppingItem {
    name: string,
    quantity: string,
};

function ShoppingList() {

    //newItemName stores what's in our input text box. Therefore we need to call
    //setNewItemName with whatever is in our input text box. We do this by doing input binding where
    // event = onChange, target = the text inputted by the user, value = the value of said text
    //its initial state is an empty string since the user has not typed anything yet
    const [newItemName, setNewItemName] = useState(""); 

    //newItemQuantity stores what's in our other input text box. It's initial state is also an empty string.
    const [newItemQuantity, setNewItemQuantity] = useState("")

    //itemList is an array of objects. However, because TS is awkward, we should define a variable whose type is
    //an array of objects - specifically an array of objects of type ShoppingItem
    let emptyList: ShoppingItem[] = []

    //stores list of shopping items (array of ShoppingItem objects). It's initial state is an empty array.
    const [itemList, setItemList] = useState(emptyList) 

    //this function tells the computer what to do when a user clicks the Add button. It tells it to add "newItem" to 
    //the itemList array, by calling setItemList, which in turn updates itemList (which is an array of objects).
    //"newItem" is a variable of type object, and specifically takes the keys "name" and "quantity" and assigns them values of
    //"newItemName" (the value in the input box at the time of pressing "Add" button) and "newItemQuantity" respectively.
    //It then empties both input text boxes.

    //tldr whenever you click the add button, store newItem and update itemList 

    function handleButtonClick() {
        let newItem: ShoppingItem = { name: newItemName, quantity: newItemQuantity }
        setItemList([...itemList,
            newItem
        ])
        //console.log(itemList)
        setNewItemName("")
        setNewItemQuantity("")
    }


//now we want to actually show the user their shopping list. We do this by mapping over the itemList elements that result when we click the
//"Add" button. We return a bullet pointed list where each item is assigned a key based on its index.

//as mentioned above, as you type into the input fields, newItemName and newItemQuantity are updated accordingly

//the add button has an onClick that executes the handleButtonClick function above.

    return ( 
        <div>
            <div>{itemList.map((item, index) => <li key={index}>{item.name} -- {item.quantity}</li>)}
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