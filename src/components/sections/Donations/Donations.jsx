// import React from 'react

const Donations = () => {
  return (
    <div className="bg-blue-50 py-16 px-8 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-primary mb-4">
          Play a Part in Empowering the Next Generation
        </h2>
        <p className="text-lg text-gray-500 mb-8">
          Join us in shaping the future of African youth by contributing your expertise, time, or resources. Every effort you make has a direct impact on their journey to success.
        </p>

        {/* Donation Options */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">

          {/* Option 1 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-2">Make a Donation</h3>
            <p className="text-sm text-gray-600">
              Support with a one-time or monthly contribution.
            </p>
            <button className="mt-4 px-6 py-2 bg-primary font-semibold text-white rounded-lg shadow-md transition-all hover:bg-blue-400 ">
              Donate Now
            </button>
          </div>

          {/* Option 2 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-2">Become a Partner</h3>
            <p className="text-sm text-gray-600">
              Partner with us to create more opportunities for African youth.
            </p>
            <button className="mt-4 px-6 py-2 bg-primary font-semibold text-white rounded-lg shadow-md transition-all hover:bg-blue-400 ">
              Learn More
            </button>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-gray-500">
          Together, we can build a brighter future for the next generation. Every contribution counts!
        </p>
      </div>
    </div>
  )
}

export default Donations
