import React from 'react'

function ShowTemp({data }) {
  console.log(data)
  return (
    <>
    <div >{`Description: ${data.description}`}</div>
    <div >{`temp_max: ${data.temp_max} .C`}</div>
    <div >{`temp_min: ${data.temp_min} .C`}</div>
    <div >{`sunrise: ${data.sunrise}`}</div>
    <div >{`country: ${data.country}`}</div>
    </>
  )
}

export default ShowTemp