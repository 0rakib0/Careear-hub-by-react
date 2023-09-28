
const Banner = () => {
    return (
        <div className="text-center mb-12">
            <div className="flex justify-center items-center">
                <div>
                    <h4 className="text-6xl font-bold text-start my-4">One Step Closer To Your <span className="text-[#7E90FE]">Dream Job</span></h4>
                    <p className="text-start">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <div className="flex justify-start">
                        <button className="text-start bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-2 px-6 text-white rounded mt-4">Get Started</button>
                    </div>

                </div>
                <div>
                    <img src="https://i.ibb.co/1v8CT93/user.png" className="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;