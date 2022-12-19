import React from 'react';

const ToDOList=(props)=>{

    return (
        <>
        <div className='todo_style' >
            <button className='dlt_button' onClick={()=>{
                props.onSelect(props.id);
            }}>x</button>
            <li> {props.text} </li>
        </div>
        </>
    );
}
export default ToDOList;