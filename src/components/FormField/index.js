import React from 'react'

function FormField({label, type, value, name, onChange, textarea}) {
    if (!textarea){
        return (
            <div>
                <label>
                    {label}
                    <input 
                        type={type}
                        value={value} 
                        name={name} 
                        onChange={onChange}
                    />
                </label>
            </div>
        )
    } else {
        return (
            <div>
                <label>
                    {label}
                    <textarea 
                        value={value}
                        name={name}
                        onChange={onChange}
                    >
                    </textarea>
                </label>
            </div>
        )
    }


}

export default FormField