/** @format */
import { Provider } from 'react-redux';
import AppLayout from './pages/AppLayout';
import { store } from './Redux/store';
import { Header, SideBar } from './ui';

function App() {
  return (
    <Provider store={store}>
      <div className='flex'>
        <SideBar />
        <div className='flex flex-col flex-1'>
          <Header />
          <AppLayout />
        </div>
      </div>
    </Provider>
  );
}

export default App;
