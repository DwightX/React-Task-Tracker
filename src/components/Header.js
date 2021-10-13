import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button 
                color={showAdd ? 'green' : 'red'} 
                onClick={onAdd} 
                text={showAdd ? 'Close' : 'Add'}
                />
            )}
        </header>
    )
}

Header.defaultProps = {
    title: "YOURBIGBROTHER®",
  }

  Header.propTypes = {
      title: PropTypes.string.isRequired
  }

export default Header