import DotNet from "../../Commons/Svg/DotNet";
import Git from "../../Commons/Svg/Git";
import Javascript from "../../Commons/Svg/Javascript";
import React from "../../Commons/Svg/React";
import SqlServer from "../../Commons/Svg/SqlServer";
import VisualStudio from "../../Commons/Svg/VisualStudio";
import Video from "../../../Resources/Media/BackGround-Video.mp4";
import "./Summary.scss"

const Summary = () => {
    return (
        <div id="SummaryMainContainer" className="BgColor-Thertiary">
            <p id="SummaryTechnologiesTittle" className="Text-Primary Barlow">CORE <span className="Text-Secondary">TECHNOLOGIES</span></p>
            <div id="CoreToolsHeader">
                <div id="iconsBarSummary1" className="iconsBarSummary">
                    <div id="VsiaulStudioLogoContainer">
                        <VisualStudio></VisualStudio>
                    </div>
                    <div id="ReactLogoContainer">
                        <React></React>
                    </div>
                    <div id="GitLogoContainer">
                        <Git></Git>
                    </div>
                    <div id="DotNetLogoContainer">
                        <DotNet></DotNet>
                    </div>
                    <div id="SqlServerContainer">
                        <SqlServer></SqlServer>
                    </div>
                    <div id="JavascriptContainer">
                        <Javascript></Javascript>
                    </div>
                    <div id="VsiaulStudioLogoContainer">
                        <VisualStudio></VisualStudio>
                    </div>
                    <div id="ReactLogoContainer">
                        <React></React>
                    </div>
                    <div id="GitLogoContainer">
                        <Git></Git>
                    </div>
                    <div id="DotNetLogoContainer">
                        <DotNet></DotNet>
                    </div>
                    <div id="SqlServerContainer">
                        <SqlServer></SqlServer>
                    </div>
                    <div id="JavascriptContainer">
                        <Javascript></Javascript>
                    </div>
                </div>
            </div>
            <div id="SummaryInfoMainConatiner">
                <div id="SummaryVideoMainContainer">
                    <p id="SummaryVideoTittle" className="Barlow Text-Primary">BACKG<span className="Text-Secondary">ROUND</span></p>
                    <div id="videoContainer">
                        <div id="PlayButton" className="BgColor-Primary">
                            <p className="Text-Secondary">▶</p>
                        </div>
                        <video id="SummaryVideo" muted autostart autoPlay loop src={Video} type="video/mp4" />
                    </div>
                </div>
                <div id="SummaryTextMainContainer">
                    <p id="SummaryTextTittle" className="Barlow Text-Secondary">SUMMARY</p>
                    <p className="BarlowRegular Text-Secondary SummaryText">
                        <span className="Text-Primary">I’m a developer</span>: specialized in web applications  focused in frontend and backend areas using JavaScript frameworks
                        like React or Node.js and even .net to making backend applications like Apis using entity framework and Sql server.
                    </p>
                    <p className="BarlowRegular Text-Secondary SummaryText">
                        <span className="Text-Primary">My skillset is</span>: Figma,  React, .net, HTML, CSS, JavaScript, SASS, Bootstrap, Entity framework,  Git, GitHub, 
                        GitLab, MySQL, Sql server and basic knowledge in Node, Express and unity.
                        like React or Node.js and even .net to making backend applications like Apis using entity framework and Sql server.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Summary;