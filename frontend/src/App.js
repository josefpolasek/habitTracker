import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import Welcome from 'components/Welcome';
import MyHabits from 'components/MyHabits';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} exact={true} />
        <Route path="/habits" element={<MyHabits />} exact={true} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
