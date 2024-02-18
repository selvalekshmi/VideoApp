import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { VideoPlayer, PlayList } from '../components';
import HomeLayout from '../layout/HomeLayout';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {/* wrap the component */}
                <Route element={<HomeLayout />}>  
                    <Route path="/" element={<PlayList />} />
                    <Route path="/videoPlay" element={<VideoPlayer />} >
                        <Route path=":url" element={<VideoPlayer />} ></Route>
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRouter;
