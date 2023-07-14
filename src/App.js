import { Hedaer } from "./pages/Hedaer";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Register from "./pages/Rigster";
import Contact from "./pages/Contact";
import TodoPage from "./pages/TOdo/Todopage";
import { Routes ,Route, Navigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Hedaer />
     <Routes>
      <Route index element={<Login />} />
      <Route path="SignUp" element={<SignUp />} />
      <Route path="Register" element={<Register />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="TodoPage" element={<TodoPage />} />
      <Route path="*" element={<h1 style={{
        textAlign: 'center',
        fontSize:'2rem',
        color:"red",
        marginTop:'120px'

      }}>Page No Found error 404</h1>} />

      <Route path="404" element={<Navigate to='/404' replace={true}  ></Navigate>} />
      


     </Routes>
     <Footer />
    </div>
  );
}

export default App;
