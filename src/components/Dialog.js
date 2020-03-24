import React from 'react'
import './dialog.css'

function FancyBorder(props) {
    return (
        <div className={'fancyBorder fancyBorder-'+ props.color}>
            {props.children}
        </div>
    )
}


function Dialog (props) {
    return (
        <FancyBorder color="green">
            <h1>
                {props.title}
            </h1>
            <p>
                {props.message}
            </p>
        </FancyBorder>
    )
}
export default function WelcomeDialog() {
return (
    <Dialog
    title="Composition"
    message="Nice pattern create component from schema"
    />
)
}

