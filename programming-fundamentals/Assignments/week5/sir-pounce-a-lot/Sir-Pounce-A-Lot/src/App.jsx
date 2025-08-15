import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import appStyles from './App.module.css';
import './style.css';

function App() {
  return (
  
    <div className={appStyles.wrapper}>
      
      <Header className="header"/>

      <main className={`container ${appStyles.grow}`} >
        <div className="row">
          <div className="col-8">
            <ProfileCard />
          </div>
          <div className="col-4">
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer className="footer"/>
    </div>
  
  )
}

export default App;