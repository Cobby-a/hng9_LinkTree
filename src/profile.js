import profileImg from "./assets/prfimg.svg";
import shareWeb from "./assets/shareweb.svg";
import sharemobile from "./assets/sharemobile.svg";
import './css/profile.css';

const Profile = () =>{
    return(
        <section className="profile">
            <div className="share_button">
                <div className="tooltip">
                    <span className="tooltip_text">Share Link</span>
                </div>
                <div className='share_button_wrap'>
                    <img className="share shareWeb" src={shareWeb} alt="share icon"/>
                    <img className="share sharemobile" src={sharemobile} alt="share icon"/>
                </div>
            </div>
            <div className="profile_img">
                <img src={profileImg} alt="profile pic" id="profle_img" />
            </div>
            <h1 id="twitter">AduBoat1</h1>
            <h2 id="slack">boatengcobbina</h2>
        </section>
    );
}

export default Profile;