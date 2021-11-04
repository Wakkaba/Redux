import Counter from './components/Counter';
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";


const App = () => {
  const isAuthed = useSelector((state) => state.auth.isAuth)
  return (
    <div>
      <Header/>
      {!isAuthed && <Auth/>}
      <Counter />
    </div>
  );
}

export default App;
