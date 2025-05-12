/** @format */
import AppLayout from './pages/AppLayout';
import { Header, SideBar } from './ui';

function App() {
  return (
    <div className='flex'>
      <SideBar />
      <div className='flex flex-col flex-1'>
        <Header />
        <AppLayout />
      </div>
    </div>
  );
}

export default App;
