import { useEffect, useState } from "react";
import FeatureJob from "../FeaturedJob/FeatureJob";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className="text-center">
            <h4 className="text-5xl font-semibold">Featured Jobs: {jobs.length}</h4>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid md:grid-cols-2 gap-5">
                {
                  jobs.slice(0, dataLength).map(job =><FeatureJob key={job.id} job={job}></FeatureJob>)  
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
            <button onClick={()=>setDataLength(jobs.length)} className="btn btn-primary my-4">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;