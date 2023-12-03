import Header from "./componentes/Header"
import Categorias from './componentes/Categorias/index';


function App() {
  return (
    <div className="container flex flex-col items-center  mx-auto my-10 p-5">
      <Header></Header>
      <Categorias></Categorias>
    </div>
  )
}

export default App
