import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () =>{
    const {jobId} = useParams()
    const jobs = useLoaderData()
    const job = jobs.find(job => job.id == jobId)

    console.log(job);
    return (
        <div className="grid md:grid-cols-4 mx-auto gap-2">
            <div className="col-span-3 bg-red-200">
                <h1>Jobs Details About: {jobId}</h1>
            </div>
            <div className="bg-red-600">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur natus aliquam asperiores dignissimos obcaecati odio unde inventore dolorum aperiam labore?</p>
            </div>
        </div>
    )
}

export default JobDetails;