import slack from './assets/slack.svg'
import github from './assets/github.svg'
import './css/styles.css'
const Styles =()=>{
    return(
        <div className='social'>
                <a href="slack.com">
                <img src={slack} alt="slack"/>
                </a>
                <a href="https://github.com/Cobby-a">
                <img src={github} alt="github"/>
                </a>
        </div>
    )
}

export default Styles;