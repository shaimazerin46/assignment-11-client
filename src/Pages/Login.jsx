import Lottie from 'lottie-react';
import regiLottie from '../../public/lottie/regi.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const {login,registerWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email,password)
        .then(res=>
                {
                    console.log(res.user)
                
                    
                        Swal.fire({
                            title: "Good job!",
                            text: "You clicked the button!",
                            icon: "success"
                          });
                   navigate(location?.state? location.state : '/');
                })
         .catch(error=>{
                    Swal.fire({
                        icon: "error",
                        
                        text: (error.message),
                       
                      });
            })
       
    }
    const handleGoogleLogin = ()=>{
         registerWithGoogle()
                .then(res=>
                    {
                        console.log(res.user)
                        
                            Swal.fire({
                                title: "Good job!",
                                text: "You clicked the button!",
                                icon: "success"
                              });
                        navigate(location?.state? location.state : '/')
                    }
                    )
                    .catch(error=>{
                        Swal.fire({
                            icon: "error",
                            
                            text: (error.message),
                           
                          });
                    })
    }
    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <h3 className='text-3xl text-center font-bold'>Login</h3>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie animationData={regiLottie}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleLogin}>
                        
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <p>Don't have an account?<Link to='/register' className='text-blue-500'>register</Link></p>
                            </div>
                            <div className="mt-6 flex gap-5">
                                <button className="btn btn-primary">Login</button>
                                <button onClick={handleGoogleLogin}>
                                    <img src="https://img.icons8.com/?size=48&id=17949&format=png" className='w-10' alt=""/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;