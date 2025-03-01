import React, { useEffect, useState } from 'react'
import './HomePageComponent.css'
import axios from 'axios'
import DisplayPageComponent from './DisplayPageComponent'
import Basic_Url from '../../../config'

const HomePageComponent = () => {
    const [news, setnews] = useState([])

    useEffect(() => {
      axios.get(`${Basic_Url}`)
        .then(response => {setnews(response.data)
          console.log(response.data)})
        .catch(error => console.log(error.response.data.message))
    }, [])
    return (
      <React.Fragment>
        {/* <div>GetAllnewssComponent</div> */}
        <div className='books'>
          {news && news.map((news, index) => (
            <DisplayPageComponent news={news} key={index} />
          ))}
        </div>
      </React.Fragment>
    )
}

export default HomePageComponent