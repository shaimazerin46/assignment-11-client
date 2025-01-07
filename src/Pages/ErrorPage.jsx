import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  const handleGoHome = () => {
    navigate('/'); 
  };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <Helmet>
            <title>Error</title>
          </Helmet>
      
      <img className="w-20" src="https://img.icons8.com/?size=48&id=80923&format=png" alt=""/>
      <h2 className="mt-4 text-3xl font-semibold text-red-500">
        Oops! Page not found.
      </h2>
      <p className="mt-2 text-lg text-gray-600 text-center">
        The page you're looking for might have been unavailable.
      </p>
      <div className="mt-6 space-x-4">
        <button
          onClick={handleGoBack}
          className="px-4 py-2 text-white bg-gray-800 rounded-md shadow hover:bg-gray-700"
        >
          Go Back
        </button>
        <button
          onClick={handleGoHome}
          className="px-4 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-500"
        >
          Go Home
        </button>
      </div>
    </div>
    );
};

export default ErrorPage;