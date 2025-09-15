import Header from "../src/Header";
import ProfileContent from "../src/ProfileContent";
import SideBar from "../src/SideBar";
import Footer from "../src/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <ProfileContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
