import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Welcome to our world of vintage charm and timeless memories!
                        </h2>
                        <p className="mt-6 text-gray-600">
                            At Cameras.com, we are passionate about preserving the art of traditional photography. Our collection of old cameras is a testament to the golden era of photography, where every click was deliberate, meaningful, and filled with character.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Whether you’re a seasoned photographer, a hobbyist, or someone who cherishes the nostalgia of film photography, we’re here to help you relive the beauty of analog experiences. From iconic camera models to insightful tips on getting the most out of vintage gear, we are your trusted companions on this creative journey.
                            <br />
                            Rediscover the joy of slowing down, framing your perfect shot, and savoring the anticipation of a developed photograph. Let’s make memories that last a lifetime.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}