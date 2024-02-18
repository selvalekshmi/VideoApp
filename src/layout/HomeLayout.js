import { Outlet } from "react-router"
import Header from "../core/header"
import { Container } from "@mui/material";
import "../components/video.css";


const HomeLayout = () => {
    return (
        <>
            <Header />
            <Container className='parent-layout'>
            {/* call child component */}
                <Outlet />  
            </Container>
        </>
    )
}

export default HomeLayout;