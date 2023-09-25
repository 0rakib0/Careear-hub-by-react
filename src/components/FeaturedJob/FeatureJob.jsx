import PropTypes from 'prop-types';
import { BiCurrentLocation, BiDollarCircle } from "react-icons/bi";

const FeatureJob = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job
    return (
        <div className="card card-compact bg-base-100 shadow-xl p-2 m-2">
            <img src={logo} width='200px' className='rounded-lg ml-3 mt-3' alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title font-extrabold">{job_title}</h2>
                <p className='text-start'>{company_name}</p>
                <div className='text-start'>
                    <button className='px-5 py-1 font-bold border-2 rounded border-[#7E90FE] mr-4 text-lg text-[#7E90FE]'>{remote_or_onsite}</button>
                    <button className='px-5 py-1 font-bold border-2 rounded border-[#7E90FE] text-lg text-[#7E90FE]'>{job_type}</button>
                </div>
                <div className='flex gap-12 my-4'>
                    <div className='flex items-center'>
                        <BiCurrentLocation></BiCurrentLocation>
                        <p className='text-start ml-2'>{location}</p>
                    </div>
                    <div className='flex items-center'>
                        <BiDollarCircle></BiDollarCircle>
                        <p className='text-start ml-2'>Salery: {salary}</p>
                    </div>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

FeatureJob.propTypes = {
    job: PropTypes.object,
}

export default FeatureJob;