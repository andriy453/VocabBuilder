import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import DictionaryPage from './pages/DictionaryPage/DictionaryPage';
import RecommendPage from './pages/RecommendPage/RecommendPage';
import TrainingPage from './pages/TrainingPage/TrainingPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import LoginPage from './pages/AuthPage/LoginPage';
import RegisterPage from './pages/AuthPage/RegisterPage';
import { AppWrapper } from './App.styled';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from 'react-router-dom';



import PublicRoute  from './routes/PublicRoute';
import PrivateRoute  from './routes/PrivateRoute';

import { refreshUser } from "./redux/Auth/operations";


function App() {
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(refreshUser());
}, [dispatch]);
  return (
    <AppWrapper> 
      <Routes>
        <Route element={<SharedLayout /> }>
          <Route index element={<Navigate to="login" />}/>
          <Route  path="/login"  element={ <PublicRoute redirectTo="/dictionary" component={<LoginPage />} /> } />
          <Route  path="/register"  element={ <PublicRoute redirectTo="/dictionary" component={<RegisterPage />} /> } />
          <Route path="/dictionary" element={<PrivateRoute redirectTo="/login" component={<DictionaryPage />} /> } />
          <Route path="/recommend" element={<PrivateRoute redirectTo="/login" component={<RecommendPage />} /> }/>
          <Route path="/training" element={<PrivateRoute redirectTo="/login" component={<TrainingPage />} /> }/>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
