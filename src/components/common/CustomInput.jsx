import React from 'react'

const CustomInput = ({ inputClass, type, placeholder }) => {
    return (
        <>
            <input className={`sm:max-w-[400px] text-black  border-[1.5px] outline-0 w-full p-3 rounded-md font-mono font-bold ${inputClass}`} type={type} placeholder={placeholder} />
        </>
    )
}

export default CustomInput