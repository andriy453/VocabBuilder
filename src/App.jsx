import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import DictionaryPage from './pages/DictionaryPage/DictionaryPage';
import SecondPage from 'pages/SecondPage/SecondPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import AuthPage from './pages/AuthPage/AuthPage';
import { useEffect } from "react";
import { useDispatch } from "react-redux";



import PublicRoute  from './routes/PublicRoute';
import PrivateRoute  from './routes/PrivateRoute';

import { refreshUser } from "./redux/auth/operations";


function App() {
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(refreshUser());
}, [dispatch]);

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
