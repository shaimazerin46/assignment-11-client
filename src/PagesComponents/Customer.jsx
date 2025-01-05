import Lottie from 'lottie-react';
import customerLottie from '../../public/lottie/customer.json'

const Customer = () => {
    return (
        <div>
            <h3 className="text-center text-3xl font-bold">Why Our Customers Choose Us?</h3>
            <div className="mt-20 grid md:grid-cols-3 gap-20">
                <div>
                    <h3 className="font-bold text-2xl text-right">We Are Experts</h3>
                    <p className="my-10 text-sm text-right">and dominate the industry in scale and scope with an adaptable, extensive network that consistently delivers exceptional results.</p>
                    <h3 className="font-bold text-2xl text-right">We Are Committed</h3>
                    <p className="my-10 text-sm text-right">to our customers and are guided in all we do by their needs.</p>
                </div>
                <div>
                    <Lottie animationData={customerLottie} className='w-[300px]'></Lottie>
                </div>
                <div>
                    <h3 className="font-bold text-2xl text-left">We Are Complete</h3>
                    <p className="my-10 text-sm text-left">and seek to provide exceptional service and engage in proactive behavior.</p>
                    <h3 className="font-bold text-2xl text-left">We Are Driven</h3>
                    <p className="my-10 text-sm text-left">to pursue the highest standards and continuously improve in all aspects of our business.</p>
                </div>

            </div>
        </div>
    );
};

export default Customer;