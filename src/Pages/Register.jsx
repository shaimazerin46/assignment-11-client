import Lottie from 'lottie-react';
import regiLottie from '../../public/lottie/regi.json'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';


const Register = () => {
    const {registerWithEmailPassword,registerWithGoogle,updateUser} = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogin = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(email,photo,name,password);
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(!regex.test(password)){
            Swal.fire({
                icon: "error",
                
                text: "Invalid password",
               
              });
              return;
        }
        registerWithEmailPassword(email,password)
        .then(res=>
        {
            console.log(res.user)
            updateUser(name,photo)
            
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
            navigate('/')
        }
        )
        .catch(error=>{
            Swal.fire({
                icon: "error",
                
                text: (error.message),
               
              });
        })
        
    }
    const handleGoogleRegi = () =>{
        
        registerWithGoogle()
        .then(res=>
            {
                console.log(res.user)
                
                    Swal.fire({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success"
                      });
                navigate('/')
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
                <title>Register</title>
            </Helmet>
            <h3 className='text-3xl text-center font-bold'>Register</h3>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie animationData={regiLottie}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name='photo' type="url" placeholder="enter your photo URL" className="input input-bordered" required />
                            </div>
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
                                <p>Already have an account?<Link to='/login' className='text-blue-500'>login</Link></p>
                            </div>
                            <div className="mt-6 flex gap-5">
                                <button className="btn btn-primary">Register</button>
                                <button onClick={handleGoogleRegi}>
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

export default Register;