import Thubmnails from "./Thubmnails"
const results=[
    {
        id:"1"
    },
    {
        id:"2"
    },{
        id:"3"
    },{
        id:"4"
    },

]
function Results() {
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {results.map(result=>(
                <Thubmnails result={result} key={result.id}/>
            ))}
        </div>
    )
}

export default Results
