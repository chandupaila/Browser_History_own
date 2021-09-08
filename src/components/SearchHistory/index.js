import './index.css'

const SearchHistory = props => {
  const {searchDetails, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = searchDetails

  const deleteIcon = () => {
    onDeleteItem(id)
  }

  return (
    <li className="list-item">
      <div className="first-two">
        <div className="time-container">
          <p className="time">{timeAccessed}</p>
        </div>

        <div className="content-container">
          <img src={logoUrl} className="logo" alt="domain logo" />

          <div className="title-domain">
            <p className="title">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
        </div>
      </div>

      <div className="delete-container">
        <button
          className="button"
          type="button"
          onClick={deleteIcon}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default SearchHistory
