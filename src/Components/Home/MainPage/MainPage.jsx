import "./MainPage.scss";
import facebookIcon from "../../../Resources/Icons/FacebookIcon.png";
import Instagram from "../../../Resources/Icons/InstagramIcon.png";
import LinkedIn from "../../../Resources/Icons/LinkedInIcon.png";
import WhatsUp from "../../../Resources/Icons/WhatsAppIcon.png";
import Profile from "../../../Resources/Imgs/Profile.png";
import elipse from "../../../Resources/Imgs/Ellipse.png";
import Typed from 'react-typed';

const MainPage = () => {
    return (
        <div id="MainPageMainContainer" className="BgColor-Thertiary">
            {/*InfoSection*/}
            <div id="MainPageInfo">
                <p id="MainPageInfoWelcome" className="Barlow Text-Primary">Hello, I'm</p>
                <p id="MainPageInfoName" className="Barlow Text-Secondary">Armando Hernández {" "}
                    {<Typed className="Text-Primary"
                        strings={['.Net full stack','Backend developer','Frontend developer']}
                        typeSpeed={80}
                        backSpeed={80}
                        startDelay={1000}
                        backDelay={2000}
                        loop/>
                    }</p>
                <p id="MainPageInfoDescription" className="Text-Secondary BarlowRegular">Hello, my Name is Armando and i love the web design  and make incredible pages with my abilities  using my knowlage about the web development.</p>
                <div id="MainPageInfoButtons">
                    <button id="DownLoadButton" className="BgColor-Thertiary Text-Secondary Barlow">Download my cv</button>
                    <button id="AboutButton" className="BgColor-Secondary Text-Thertiary Barlow">More about me</button>
                </div>
                <div id="MainPageInfoSocialMedia">
                    <img src={WhatsUp} alt="WhatsAppIcon" />
                    <img src={Instagram} alt="InstagramIcon" />
                    <img src={facebookIcon} alt="FacebookIcon" />
                    <img src={LinkedIn} alt="LinkedInIcon" />
                </div>
            </div>
            {/*End of this section*/}
            <div id="MainPagePhoto">
                <div id="ProfilePictureDotBorder">
                    <img src={elipse} alt="ElipseDotPattern" id="ElipseDotPattern" />
                    <img src={Profile} alt="ProfilPicture" id="ProfilePictureMainPage" />
                </div>
            </div>
            {/*Photo Section*/}
        </div>
    );
}

export default MainPage;