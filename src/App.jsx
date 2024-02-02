import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import DictionaryPage from 'pages/DictionaryPage/DictionaryPage';
import SecondPage from 'pages/SecondPage/SecondPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import AuthPage from './pages/AuthPage/AuthPage';



import PublicRoute  from './routes/PublicRoute';
import PrivateRoute  from './routes/PrivateRoute';


function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route  path="/:id" index element={ <PublicRoute redirectTo="/dictionary" component={<AuthPage />} /> } />
          <Route path="/dictionary" element={<PrivateRoute redirectTo="/login" component={<DictionaryPage />} /> } />
          <Route path="/recommend" element={<PrivateRoute redirectTo="/login" component={<SecondPage />} /> }/>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
