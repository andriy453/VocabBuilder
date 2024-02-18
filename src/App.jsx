import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import DictionaryPage from './pages/DictionaryPage/DictionaryPage';
import RecommendPage from './pages/RecommendPage/RecommendPage';
import TrainingPage from './pages/TrainingPage/TrainingPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import AuthPage from './pages/AuthPage/AuthPage';
import { useEffect } from "react";
import { useDispatch } from "react-redux";



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
        <Route path="/" element={<SharedLayout />}>
          <Route  path="/:id" index element={ <PublicRoute redirectTo="/dictionary" component={<AuthPage />} /> } />
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
