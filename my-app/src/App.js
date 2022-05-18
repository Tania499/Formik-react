import Card from '@mui/material/Card';
import './App.css';
import { ShowForm } from './components/form/ShowForm';

function App() {
  return <>
    <Card variant="outlined" sx={{ margin: 3, padding: 2, width:300}}>
      <ShowForm/>
    </Card>
  </>
}

export default App;
