import './css/footer.css'
import Zuri from './assets/zuri.svg'
import Ingressive from './assets/ingressive.svg'


const Footer=()=>{
    return(
        <div className="footer">
            <img src={Zuri}/>
            <p>HNG Internship 9 Frontend Task</p>
            <img src={Ingressive}/>
        </div>
    )
}

export default Footer;