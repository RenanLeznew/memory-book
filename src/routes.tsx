import Cover from './Cover';
import App from './App';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Cover />} />
                <Route path='/book' element={<App />} />
            </Routes>
        </Router>
    );
}