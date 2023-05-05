import React from 'react';

const Spinner = () => {
    return (
        <div>
            <div className="flex h-96 w-full">
                <div className="relative mx-auto my-auto">
                    {/* <!-- Outer Ring--> */}
                    <div
                        className="w-12 h-12 rounded-full absolute
                            border-4 border-dashed border-gray-200"></div>

                    {/* <!-- Inner Ring --> */}
                    <div
                        className="w-12 h-12 rounded-full animate-spin absolute
                            border-4 border-dashed border-green-500 border-t-transparent"></div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;<div className="flex h-96 w-full">
                <div className="relative mx-auto my-auto">
                    {/* <!-- Outer Ring--> */}
                    <div
                        className="w-12 h-12 rounded-full absolute
                            border-4 border-dashed border-gray-200"></div>

                    {/* <!-- Inner Ring --> */}
                    <div
                        className="w-12 h-12 rounded-full animate-spin absolute
                            border-4 border-dashed border-green-500 border-t-transparent"></div>
                </div>
            </div>