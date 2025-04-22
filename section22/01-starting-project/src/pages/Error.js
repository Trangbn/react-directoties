import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";
import {Outlet} from "react-router-dom";

function ErrorPage(){
    return <>
        <MainNavigation/>
        <main className={classes.content}>
            <Outlet/>
            <h1>404 page not found</h1>
        </main>
    </>
}

export default ErrorPage;