import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

function HomePage() {
    return (
        <div>
            <PageNav />
            <AppNav />
            WorldWise
            <Link to="/app">Go to the app</Link>
        </div>
    );
}

export default HomePage