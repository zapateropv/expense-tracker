import React, { useState } from 'react';

const useCustom = () => {

    // Start with empty array
    const [info, setInfo] = useState([]);
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");

    const submitBtn = () => {
        if (!text || !amount) {
            alert("Please fill the form");
            return;
        }

        setInfo(prev => [
            ...prev, 
            { 
                text, 
                amount, 
                isNegative: amount.includes('-'), 
                income: !amount.includes('-') 
            }
        ]);
        
        setText("");
        setAmount("");
    }

    console.log(info);

    return { text, setText, amount, setAmount, submitBtn, info }
}

export default useCustom;
