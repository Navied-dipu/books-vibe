import React from 'react'

export default function Banner() {
    return (
        <div><div className="hero bg-base-200 min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full px-10">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className='space-y-5'>
                    <h1 className="text-5xl font-bold">Book to Freshen up
                        <br />
                        to your bookshelf!
                    </h1>

                    <button className="btn btn-success">View the List</button>
                </div>
            </div>
        </div></div>
    )
}
