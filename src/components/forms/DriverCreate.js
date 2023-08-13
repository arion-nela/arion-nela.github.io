import { React, useState } from 'react'
import countriesData from './../../Data/iso-3166-1.json'
import DivisionInput from './DivisionInput'
import { firestore } from '../../utils/firebase'
import * as firestoreLite from '@firebase/firestore/lite'
const db = firestore
// Selects driver using
/*
    Selects driver using:
    Name
    Team
    Nationality
    Driver Number
    Division: Division
    Reserve Driver: Boolean

    Form will be:
    Text Box, Name
    Text Box, Team
    Text Box, Nationality
    Number Box, Driver Number
    Select/Dropdown, Divisions
    Tick Box, Reverse Driver
    Button to submit
*/

const FormDriverCreate = (props) => {
  const countries = JSON.parse(countriesData)
  const defaultCountry = 'GB'
  const defaultIsReserve = false
  const [formStatusText, setFormStatusText] = useState('')
  const [driverName, setDriverName] = useState()
  const [driverNumber, setDriverNumber] = useState()
  const [teamName, setTeamName] = useState()
  const [driverCountry, setDriverCountry] = useState(defaultCountry)
  const [division, setDivision] = useState()
  const [isReserve, setIsReserve] = useState(defaultIsReserve)
  const onFormSubmit = async (e) => {
    setFormStatusText('Submitting form')
    const validation = {
      status: true,
      message: ''
    }
    const driverNumberValue = parseInt(driverNumber)
    if (driverNumberValue < 1 || driverNumberValue > 99) {
      validation.message = 'Invalid driver number'
      validation.status = false
    }

    const newDriverData = {
      name: driverName,
      team: teamName,
      driver_number: parseInt(driverNumberValue),
      division,
      is_reserve: isReserve,
      nationality: driverCountry
    }
    console.log(newDriverData)

    if (validation.status) {
      // Now submit to firestore
      const driverCollectionRef = firestoreLite.collection(db, 'f1-tournaments', 'foo', 'drivers')
      const newDriverDocRef = await firestoreLite.addDoc(driverCollectionRef, newDriverData)
      console.log(`Submmited with doc id: ${newDriverDocRef.id}`)
      setFormStatusText('Submitted form')
    } else {
      setFormStatusText(validation.message)
      console.log(validation)
    }
  }
  const onDivisionInputChange = (e) => {
    setDivision(e)
  }

  // useEffect(() => {
  //     console.log('First time?')

  // }, [])
  return (
        <div className='form-driver-create-container'>
            <h3>New Driver:</h3>
            <form className='form-driver-create' onSubmit={(e) => { e.preventDefault(); onFormSubmit(e) }}>
                <div>
                    <label htmlFor='form-driver-input-driver-name'>
                        Driver name
                    </label>
                    <input id='form-driver-input-driver-name' type='text' name='driver-name' onChange={(e) => setDriverName(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor='form-driver-input-driver-number'>
                        Driver number
                    </label>
                    <input id='form-driver-input-driver-number' type='number' name='driver-number' onChange={(e) => setDriverNumber(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor='form-driver-input-team-name'>
                        Team name
                    </label>
                    <input id='form-driver-input-team-name' type='text' name='team-name' onChange={(e) => setTeamName(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor='form-driver-input-country'>
                        Country
                    </label>
                    <select id='form-driver-input-country' onChange={(e) => setDriverCountry(e.target.value)} defaultValue={defaultCountry} required>
                        {countries.map(country => {
                          // Map array of countries to option tags
                          return (<option value={country.code} key={country.code}>{country.name}  </option>)
                        })}
                    </select>
                </div>
                < DivisionInput onChange={onDivisionInputChange} firestore={db} firestoreLite={firestoreLite} />
                <div>
                    <label htmlFor='form-driver-input-reserve'>
                        Is reserve?
                    </label>
                    <input id='form-driver-input-reserve' type='checkbox' onChange={(e) => setIsReserve(e.target.checked)} checked={isReserve}></input>
                </div>
                <div>
                    <button id='form-driver-button' type='submit' >Submit</button>
                    <p id='form-status-text'>{formStatusText}</p>
                </div>

            </form>
        </div>
  )
}

export default FormDriverCreate
