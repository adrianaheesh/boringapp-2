import React from 'react'

const ParticipantsForm = ({setParticipants, setType, setPrice}) => {
    function onChange(event) {
        setParticipants(event.target.value)
        setType("")
        setPrice("")
    }
    
    return (
        <>
            <div>
                <select onChange={onChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
            </div>
        </>
    )
}

export default ParticipantsForm