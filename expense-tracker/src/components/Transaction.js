import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

function Transaction({text, amount, id}){
    const {deleteTransaction} = useContext(GlobalContext)

    const result = amount < 0 ? 'minus' : "plus"
    return (
        <li className={result}>
            {text} <span>{result=== 'minus' ?  '-' : '+'}R${Math.abs(amount)}</span>
            <button onClick={()=> deleteTransaction(id)} className="delete-btn">x</button>
        </li>
    )
}

export default Transaction