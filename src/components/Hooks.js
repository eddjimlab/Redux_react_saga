import React, {useEffect, useState} from 'react'

export default function Timer({interval, title}) {

    const ticks = () => new Date()

    const [time, setTime] = useState(ticks)
    useEffect(() => {
        const elements = setInterval(() => {
            setTime(ticks)
        }, interval)
        return () => clearInterval(elements)
    })

    return (
        <div>
            <h2 className="text-secondary">{title}</h2>
            <h4 className="text-secondary">This timer : {time.toLocaleTimeString()}</h4>
        </div>
    )
}
