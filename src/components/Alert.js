import React from 'react'

function Alert(props) {
    // const capitalize = (word)=>{
    //     const lower = word.toLowercase();
    //     return lower.charAt(0).toUppercase() + lower.slice(1);
    // }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {/* <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg} */}
            <strong>{props.alert.type}</strong> {props.alert.msg}
            {/* <h1>{capitalize("hello")}</h1> */}
        </div>
    )
}

export default Alert