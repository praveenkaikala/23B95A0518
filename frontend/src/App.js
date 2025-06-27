import logo from './logo.svg';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import URLShortenerForm from './pages/CreateShortUrlPage';
import ShowStatsPage from './pages/ShowStatsPage';
import { useGetUrls } from './hooks/useGetUrls';

function App() {
  const [data,refresh,setRefresh]=useGetUrls()
  return (
   <div>
        <Toaster/>
        <URLShortenerForm refresh={refresh} setRefresh={setRefresh}/>
        <ShowStatsPage data={data}/>
   </div>
  );
}

export default App;
