import { Route, Routes } from "react-router-dom";
import { RouterLayout } from "./common/RouterLayout";
import { LoginPage } from './pages/authentication/Login/Login';
import { SignupPage } from "./pages/authentication/Signup/Signup";
import { HomePage } from "./pages/home/Home";


export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route path="/home" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Route>
        </Routes>
    )
}