import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CoursesItem from '../CoursesItem'

import './index.css'

class Home extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const options = {
      method: 'GET',
    }
    const response = await fetch('https://apis.ccbp.in/te/courses', options)
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      logoUrl: eachItem.logo_url,
    }))
    this.setState({blogsData: formattedData, isLoading: false})
  }

  showResult = () => {
    const {blogsData} = this.state
    if (blogsData.length === 0) {
      return (
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
          alt="failure view"
        />
      )
    }
    return blogsData.map(item => <CoursesItem blogData={item} key={item.id} />)
  }

  render() {
    const {isLoading} = this.state
    console.log(isLoading)

    return (
      <div className="blog-list-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
            alt="website logo"
          />
        </Link>
        <h1>Courses</h1>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.showResult()
        )}
      </div>
    )
  }
}

export default Home
