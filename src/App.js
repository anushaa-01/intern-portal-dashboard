import './style.css';
import Navbar from './components/Navbar'; 
import InternInfo from './components/InternInfo';
import CreateGroup from './components/CreateGroup';
import GroupList from './components/GroupList';
import Payment from './components/Payment';
import OTPVerification from './components/OTPVerification';
import Rewards from './components/Rewards';

function App() {
  return (
    <div className="container">
      <h1>Intern Portal Dashboard</h1>

      <section className="card">
        <InternInfo />
      </section>

      <div className="flex-row">
        <section className="card half">
          <CreateGroup />
        </section>
        <section className="card half">
          <GroupList />
        </section>
      </div>

      <section className="card">
        <Payment />
      </section>

      <section className="card">
        <Rewards />
      </section>

      <section className="card">
        <OTPVerification />
      </section>
    </div>
  );
}

export default App;
