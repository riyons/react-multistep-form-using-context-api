import React from "react";

function TextInput({ name, value, placeholder, onChange }) {
    return (
        <input
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            type="text"
            className="form-control"
        />
    )
}

export default TextInput;