const FeaturesBox=(props)=>{
    return(
        <div className="hover:shadow-2xl hover:shadow-indigo-500 transition-[0.2s ease] bg-[#161618] rounded-xl  xl:w-1/5 px-[30px] py-[15px] mx-[15px] border-solid border-2 hover:rotate-2 hover:scale-[110%] hover:shadow-2xl shadow-indigo-300 border-sky-500 transition-all">
            <h1 className="text-white text-center font-semibold text-4xl">{props.heading}</h1>
            <img className="w-[600px] px-[12px] py-[30px] xl:w-[700px]" src={props.src}></img>
        </div>
    )
}
export default FeaturesBox