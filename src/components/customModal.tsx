import React from 'react'

const CustomModal = () => {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center`}>
      {/* Light background overlay */}
      <div className="fixed inset-0 bg-gray-600 opacity-50" />

      {/* Modal content */}
      <div
        className={`bg-white mx-5 sm:mx-auto w-full max-w-[600px] rounded-lg shadow-2xl z-50 opacity-100 px-4 sm:px-8 lg:px-12 relative pt-6 pb-4 sm:pb-8 flex flex-col`}
      >
        <div className="bg-white rounded-lg flex items-center flex-col gap-4">
         
          <div className=" w-full flex flex-col gap-6 justify-center items-center">
            <p className="uppercase text-[#443A39] text-base"> Modal Opened</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomModal