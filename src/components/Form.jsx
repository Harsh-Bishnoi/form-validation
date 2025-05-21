import React from 'react'
import CustomInput from './common/CustomInput'
import CustomButton from './common/CustomButton'

const Form = () => {
    return (
        <>
            <div className="flex min-h-screen items-center justify-center">
                <div className="max-w-[1140px] w-full px-4 mt-4">
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <CustomInput type="text" placeholder="First Name" />
                        <CustomInput type="text" placeholder="Last Name" />
                    </div>
                    <CustomInput inputClass="sm:max-w-[816px] mx-auto flex mt-4" type="email" placeholder="Email" />
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
                        <CustomInput type="Password" placeholder="Password" />
                        <CustomInput type="Password" placeholder="Confirm Password" />
                    </div>
                    <CustomButton type="Submit" text="Submit" />
                </div>
            </div>
        </>
    )
}

export default Form