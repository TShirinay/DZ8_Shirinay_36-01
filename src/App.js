import UserPage from "./Pages/userPage/UserPage";
import {ModalProvider} from "./context/ModalContext";
import MainPage from "./Pages/mainPage/MainPage";
import AboutPage from "./Pages/aboutPage/AboutPage";


function App() {
    return (
        <div>
            <ModalProvider>
                <MainPage/>
                <AboutPage/>
            </ModalProvider>
            <h2>======================</h2>
            <UserPage/>
        </div>
    );
}

export default App;