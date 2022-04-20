import {useRouter} from 'next/router'

function ProductReview(){
    const router=useRouter()
    const reviewId=router.query.reviewId
    return <h1>Review about product {reviewId}</h1>
}
export default ProductReview