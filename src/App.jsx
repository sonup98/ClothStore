import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import SideBarMenu from "./components/SideBarMenu"

const App = () => {
  return (
<div class=" bg-[#f3f3f1]">
 
  <main class="col-span-5 p-6 mx-10 ">
    <NavBar />
    <SideBarMenu />
    
    <Hero />
  </main>
</div>
  )
}

export default App