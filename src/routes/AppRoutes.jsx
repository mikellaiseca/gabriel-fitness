import { Route, Routes } from "react-router-dom"
import AboutPage from "../pages/AboutPage/AboutPage"
import ContactPage from "../pages/ContactPage/ContactPage"
import IndexPage from "../pages/IndexPage/IndexPage"
import TrainingProgramsPage from "../pages/TrainingProgramsPage/TrainingProgramsPage"

const AppRoutes = () => {

    return (

        <Routes>

            <Route path="/" element={<IndexPage />} />
            <Route path="/tienda" element={<TrainingProgramsPage />} />
            <Route path="/sobre-mi" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />

        </Routes>
    )

}

export default AppRoutes