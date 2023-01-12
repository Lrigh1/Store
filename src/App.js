import {Route, Routes} from "react-router-dom";
import Home from "./Routes/Home/Home.component";
import Navigation from "./Routes/Navigation/Navigation";

const Shop = () => {
  return <h1>I am the shop page</h1>
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        {/* index means index={true} */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;