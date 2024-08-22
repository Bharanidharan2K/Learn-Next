export default function ProductDetail({params} : {params: {productId : string}}){
    return(
        <>
            <h1>Detail of the Product {params.productId}</h1>
        </>
    )
}