import NabVar from "../Commons/NavVar/NavBar";
import MainPage from "./MainPage/MainPage";
import Summary from "./Summary/Summary";

const Home = (props) => {
    return (
        <div>
            <NabVar handleTransition={props.handleTransition}></NabVar>
            <MainPage></MainPage>
            <Summary></Summary>
        </div>
    );
}

export default Home;