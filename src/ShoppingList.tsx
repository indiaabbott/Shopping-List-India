import React, { useState } from "react";

function ShoppingList() {
    const [list, setList] = useState([""]);

    const updateListOnClick = (newItem: string) => {
        return () => 
        setList(prevList => [
            ...prevList, newItem
        ])

    };

    return (
        <div>
        <input value={list} onChange={event => {setList([event.target.value]);}} />
        <button>Add!</button>
        </div>
    )
}


export default ShoppingList;