import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating, outOf = 5, size }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = outOf - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className='d-flex align-items-center'>
            {[...Array(fullStars)].map((_, i) => (
                <FaStar size={size} key={`full-${i}`} color='gold'/>
            ))}
            {hasHalfStar && <FaStarHalfAlt size={size} color='gold'/>}
            {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar size={size} key={`empty-${i}`} color='gold'/>
            ))}
        </div>
    );
};

export default StarRating;
