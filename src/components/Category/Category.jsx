const Category = ({category}) =>{
    const {icons, name, title} = category;
    console.log(category)
    return (
        <div className="border bg-gray-100 py-6 px-4 my-8 text-center">
            <img src={icons} className="mx-auto" alt="" />
            <h4 className="text-xl font-semibold py-2">{name}</h4>
            <p>{title}</p>
        </div>
    )
}


export default Category