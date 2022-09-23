import "./Review.module.css";

interface reviewProperties {
    name: string;
    rating: number;
    review: string;
}

const Review = (props: reviewProperties) => {
    return (
        <div className="review">
            <div className="image">
                
            </div>
            <div className="name">
                {props.name}
            </div>
            <div className="rating">
                {props.rating}
            </div>
            <div className="review">
                {props.review}
            </div>
        </div>
    )
}

export default Review;