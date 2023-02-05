import { Route, Routes } from "react-router-dom";
import './styles/index.scss'
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";



const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/'}>
                Главная страница
            </Link>
            <Link to={'/about'}>
                О чем то
            </Link>
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/about'} element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App