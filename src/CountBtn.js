import React from "react";


export default function CountBtn(props) {

    const send = () => {
        props.updateCounter(props.value + props.count)
    }

    return (

        <button className={'btn'} onClick={send}>{props.value}</button>

    );
}
