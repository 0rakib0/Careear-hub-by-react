import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categorys = () => {

    const category = [
        {
            icons: 'https://i.ibb.co/sqw9jS7/accounts.png',
            name: 'Account & Finance',
            title: '300 Jobs Available'
        },
        {
            icons: 'https://i.ibb.co/VMTf7ct/creative.png',
            name: 'Creative Design',
            title: '100+ Jobs Available'
        },
        {
            icons: 'https://i.ibb.co/bsVTsBJ/marketing.png',
            name: 'Marketing & Sales',
            title: '150 Jobs Available'
        },
        {
            icons: 'https://i.ibb.co/h1kXzqD/chip.png',
            name: 'Engineering Job',
            title: '224 Jobs Available'
        },
    ]

    // const [cat, setCategory] = useState([])

    // useEffect(()=>{
    //     fetch(category)
    //     .then(res => res.json())
    //     .then(data => setCategory(data))
    // },[])

    
    return (
        <div>
            <div className='text-center'>
                <h4 className='text-5xl font-semibold'>Job Category List</h4>
                <p className="my-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid grid-cols-4 gap-4 ">
                    {
                       category.map(cat => <Category category={cat}></Category>) 
                    }
                </div>
            </div>
        </div>
    );
};

export default Categorys;