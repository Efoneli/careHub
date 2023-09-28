import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const FeedbackForm = ({ onSubmitReview }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleSubmitReview = (e) => {
    e.preventDefault();

    // this would Check if both rating and reviewText are provided
    if (rating === 0 || reviewText.trim() === '') {
      alert('Please provide both a rating and a review text.');
      return;
    }

    // Create a feedback object
    const feedbackData = {
      rating,
      reviewText,
    };

    // Call the onSubmitReview callback function with the feedback data
    onSubmitReview(feedbackData);

    // Clears the form fields after submission
    setRating(0);
    setReviewText('');
  };

  return (
    <form onSubmit={handleSubmitReview}>
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          Share your feedback or suggestions*
        </h3>

        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;

            return (
              <button
                key={index}
                type="button"
                className={`${
                  index <= (rating || hover) ? 'text-yellowColor' : 'text-gray-400'
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          How would you rate the overall experience?*
        </h3>

        <textarea
          className="border border-solid border-[#0066ff34] focus:outline outline outline-primaryColor w-full px-4"
          rows="5"
          placeholder="Write your message"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn">
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
