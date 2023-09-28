import { useState } from 'react';
import avatar from '../../assets/images/avatar-icon.png';
import { formateDate } from '../../utils/formateDate';
import { AiFillStar } from 'react-icons/ai';
import FeedbackForm from './FeedbackForm';

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedbackData, setFeedbackData] = useState(null);

  // Callback function to handle form submissions
  const handleFeedbackSubmit = (data) => {
    setFeedbackData(data);
    setShowFeedbackForm(false); // Closes the form after submission
  };

  return (
    <div className="mb-[50px]">
      <h4 className="text-[20px] leading font-bold text-headingColor mb-[30px]">
        All reviews (272)
      </h4>

      <div className="flex justify-between gap-10 mb-[30px]">
        <div className="flex gap-3">
          <figure className="w-10 h-10 rounded-full">
            <img src={avatar} alt="" className="w-full" />
          </figure>

          <div>
            <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
              Ali Zachariah
            </h5>
            <p className="text-[14px] leading-6 text-textColor">
              {formateDate('09-29-2023')}
            </p>
            <p className="text__para mt-3 font-medium text-[15px]">
              {feedbackData ? feedbackData.reviewText : 'No feedback yet'}
            </p>
          </div>
        </div>

        <div className="flex gap-1">
          {[...Array(5).keys()].map((_, index) => (
            <AiFillStar key={index} color="gray-50" />
          ))}
        </div>
      </div>

      {!showFeedbackForm && (
        <div className="text-center">
          <button
            className="btn"
            onClick={() => setShowFeedbackForm(true)}
          >
            Give feedback
          </button>
        </div>
      )}

      {showFeedbackForm && <FeedbackForm onSubmitReview={handleFeedbackSubmit} />}
    </div>
  );
};

export default Feedback;