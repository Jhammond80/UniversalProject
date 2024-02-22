import { useNavigate } from 'react-router-dom'
import '../styles/Header.css'




const Header = (props) => {
    const{title, title2} = props
    const navigate = useNavigate()



    return (
        <div className='header-wrapper'>
            <div className='header-title-box'>
                <h1 className='header-title'>{title}</h1>
                <h2 className='header-title'>{title2}</h2>
            </div>
            <div className='header-buttons'>
                <button onClick={()=> navigate('/')}>Dashboard</button>
                <button onClick={()=> navigate('/create')}>Add New</button>
            </div>
        </div>
    )
}

export default Header