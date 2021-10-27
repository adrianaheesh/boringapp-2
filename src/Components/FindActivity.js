import React, { useState, useEffect } from 'react'
import TypeForm from './TypeForm'
import ParticipantsForm from './ParticipantsForm'
import PriceForm from './PriceForm'

// this is the page where a user will select how they would like to search for an acitivty
// options: by type, by participants or by price

const FindActivity = () => {
    // search by states
    const [ searchBy, setSearchBy ] = useState("")

    // search by options
    const [ type, setType ] = useState("")
    const [ participants, setParticipants ] = useState("")
    const [ price, setPrice ] = useState("")

    // API call results states
    const [ result, setResult ] = useState({})
    
    // updating our state value to reflect what the user opted to search by
    function onFormChange(event) {
        setSearchBy(event.target.value)
    }

    function searchParams() {
        switch(searchBy) {
            case "Type":
                return `activity?type=${type}`
            case "Participants":
                return `activity?participants=${participants}`
            case "Price":
                return `activity?minprice=0&maxprice=${price}`
            case "RandomActivity":
                return `activity/`
            default:
                return `activity/`
        }
    }

    // API call to get an activity
    async function getResult() {
        const apiResult = await fetch(`https://www.boredapi.com/api/${searchParams()}`)
        const activities = await apiResult.json()
        //update the state with api data
        setResult(activities)
    }

    function renderForm(searchByState) {
        let form 
        switch(searchByState) {
            case "Type": 
                form = <TypeForm setType={setType} setParticipants={setParticipants} setPrice={setPrice} />
                return form
            case "Participants": 
                form = <ParticipantsForm setType={setType} setParticipants={setParticipants} setPrice={setPrice} />
                return form
            case "Price": 
                form = <PriceForm setType={setType} setParticipants={setParticipants} setPrice={setPrice} />
                return form
        }
    }

     // handling data to make price readable
     function changePriceToDollars(scale) {
        if (scale === 0) {
           return "Free";
        } else if (scale <= 0.2) {
           return "$$";
        } else if (scale <= 0.4) {
           return "$$$";
        } else if (scale <= 0.6) {
           return "$$$";
        } else if (scale <= 0.8) {
           return "$$$$";
        } else if (scale <= 1) {
           return "$$$$$";
        }
     }

// assign my component to a variable, then do {variable} in render
    return (
        <>
            <h1>Activity Search</h1>
                <h3>Search by:</h3>
                <div onChange={onFormChange}>
                    <input type="radio" value="Type" name="searchBy" /> Type
                    <input type="radio" value="Participants" name="searchBy" /> Participants
                    <input type="radio" value="Price" name="searchBy" /> Price
                    <input type="radio" value="RandomSearch" name="searchBy" /> Pick for me!
                </div>

            {searchBy &&
            <div>
                {renderForm(searchBy)}
                <button onClick={getResult}>Release me from boredom prison</button>
                <div>
                    {result.activity}<br/>
                    {result.participants}<br/>
                    {changePriceToDollars(result.price)}<br/>
                </div>
            </div>
            }
        </>
    )
}

export default FindActivity