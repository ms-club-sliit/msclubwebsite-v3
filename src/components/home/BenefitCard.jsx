import React from 'react'

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#0e1a33] p-6 rounded-lg transition-transform hover:transform hover:scale-105 duration-300">
      <div className="mb-4 text-blue-400">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}

export default BenefitCard
