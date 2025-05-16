/** @format */
import { Provider } from 'react-redux';
import AppLayout from './pages/AppLayout';
import { store } from './Redux/store';
import { Header, SideBar } from './ui';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Provider store={store}>
      <div className='flex'>
        <SideBar />
        <div className='flex flex-col flex-1 px-4 py-2'>
          <Header />
          <AppLayout />
        </div>
      </div>
      <Toaster position='top-center' toastOptions={{ success: { duration: 3000 }, error: { duration: 3000 } }} />
    </Provider>
  );
}

export default App;
