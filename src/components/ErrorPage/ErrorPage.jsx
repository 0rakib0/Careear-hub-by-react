import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-52">
            <h1 className="text-5xl">Opps!!</h1>
            <p className="my-4">Somethink Wrong</p>
            <p>Page Not Found</p>
            <Link to='/' className="btn btn-primary mt-4">Go Back</Link>
        </div>
    );
};

export default ErrorPage;