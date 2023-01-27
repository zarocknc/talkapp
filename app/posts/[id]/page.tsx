
export default function Posts( {params} : any ) {
    const { id } = params

    console.log(typeof params)
    return (
        <h1>El id es : {id}</h1>
    )
}