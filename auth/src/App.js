import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import SignIn from "./pages/SignIn";
import Signup from "./pages/SignUp";
import EmailVerification from "./pages/EmailVerification";
import VerifyAccount from "./pages/VerifyAccount";
import ForgotPasswordNumber from "./pages/ForgotPasswordNumber";
import AccountCreationSuccess from "./pages/AccountCreationSuccess";
import ImageUpload from "./pages/ImageUpload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/Sign-in" element={<SignIn />} />
      <Route path="/Sign-up" element={<Signup />} />
      <Route path="/Email-verification" element={<EmailVerification />} />
      <Route path="/Verify-account" element={<VerifyAccount />} />
      <Route path="/ForgotPassword-number" element={<ForgotPasswordNumber />} />
      <Route path="/AccountCreation-success" element={<AccountCreationSuccess />} />
      <Route path="/Image-upload" element={<ImageUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
