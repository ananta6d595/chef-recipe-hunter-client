import React from 'react';

const ReviewCard = ({ reviewInfo }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">
                        {reviewInfo.name}
                        <div className="badge badge-secondary">
                            {reviewInfo.summary}
                        </div>
                    </h2>
                    <p>{reviewInfo.review}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">
                            {reviewInfo.badge1}
                        </div>
                        <div className="badge badge-outline">
                            {reviewInfo.badge2}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;