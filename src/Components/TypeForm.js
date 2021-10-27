import React from 'react'

const TypeForm = ({setType, setParticipants, setPrice}) => {
    function onChange(event) {
        setType(event.target.value)
        setParticipants("")
        setPrice("")
    }

    return (
        <div>
            <select onChange={onChange}>
                <option value="education">Education</option>
                <option value="recreational">Recreational</option>
                <option value="social">Social</option>
                <option value="charity">Charity</option>
                <option value="cooking">Cooking</option>
                <option value="relaxation">Relaxation</option>
                <option value="music">Music</option>
                <option value="busywork">Busywork</option>
            </select>
        </div>
    )
}

export default TypeForm