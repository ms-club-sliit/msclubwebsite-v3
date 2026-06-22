import React from 'react'

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="bg-slate-200/70 dark:bg-[#0e1a33] p-5 sm:p-6 rounded-lg transition-transform hover:transform hover:scale-105 duration-300 h-full border border-slate-300/50 dark:border-transparent">
      <div className="mb-3 sm:mb-4 text-blue-600 dark:text-blue-400">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-800 dark:text-white">{title}</h3>
      <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default BenefitCard
