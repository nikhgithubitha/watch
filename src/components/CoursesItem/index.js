import {Link} from 'react-router-dom'

import './index.css'

const CoursesItem = props => {
  const {blogData} = props
  const {id, logoUrl, name} = blogData

  return (
    <Link to={`/courses/${id}`} className="item-link">
      <div className="item-container">
        <img className="item-image" src={logoUrl} alt={`item${id}`} />
        <p>{name}</p>
      </div>
    </Link>
  )
}

export default CoursesItem
