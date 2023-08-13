/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const DivisionInput = (props) => {
  const firestoreLite = props.firestoreLite
  const db = props.firestore

  const [divisionList, setDivisionList] = useState([])
  const [division, setDivision] = useState('')
  useEffect(() => {
    props.onChange(division)
  }, [division, props])

  useEffect(() => {
    const getDivisions = async () => {
      const divisionDocsSnapshot = await firestoreLite.getDocs(firestoreLite.collection(db, 'f1-tournaments', 'foo', 'divisions'))
      const divisionDocs = []
      divisionDocsSnapshot.forEach((doc) => {
        const docData = doc.data()
        docData.id = doc.id
        divisionDocs.push(docData)
        console.log(docData)
      })
      setDivisionList(divisionList.concat(divisionDocs))

      // Set default divisions
      setDivision(divisionDocs[0].id)
    }
    getDivisions()
  }, [])

  // If there is no divisions in the list
  if (divisionList.length <= 0) {
    return (
            <div>
                Add a division...
            </div>
    )
  }
  // If there are divisions in the list
  return (
        <div>
        <label htmlFor='form-division-input'>
                        Division
                    </label>
                    <select id='form-division-input' onChange={(e) => setDivision(e.target.value)} defaultValue={divisionList[0].id} required>
                        {divisionList.map(item => {
                          // Map array of all divisions
                          return (<option value={item.id} key={item.id}>{`(s: ${item.season} t: ${item.tier}) ${item.name}`}</option>)
                        })}

                    </select>

        </div>
  )
}

DivisionInput.propTypes = {
  name: PropTypes.string.isRequired
}

export default DivisionInput
