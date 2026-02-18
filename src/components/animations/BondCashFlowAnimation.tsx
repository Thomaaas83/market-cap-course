import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { DollarSign, TrendingUp, Calendar, ArrowRight } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

interface BondCashFlowAnimationProps {
  config: {
    faceValue: number
    couponRate: number
    maturity: number
    title?: string
    titleEn?: string
  }
}

export default function BondCashFlowAnimation({ config }: BondCashFlowAnimationProps) {
  const { language } = useLanguage()
  const { faceValue, couponRate, maturity } = config
  const [currentYear, setCurrentYear] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [totalReceived, setTotalReceived] = useState(0)

  const couponPayment = (faceValue * couponRate) / 100
  const years = Array.from({ length: maturity + 1 }, (_, i) => i)

  useEffect(() => {
    if (isPlaying && currentYear <= maturity) {
      const timer = setTimeout(() => {
        if (currentYear === 0) {
          setTotalReceived(0)
        } else if (currentYear < maturity) {
          setTotalReceived(prev => prev + couponPayment)
        } else if (currentYear === maturity) {
          setTotalReceived(prev => prev + couponPayment + faceValue)
        }
        
        if (currentYear < maturity) {
          setCurrentYear(prev => prev + 1)
        } else {
          setIsPlaying(false)
        }
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [isPlaying, currentYear, maturity, couponPayment, faceValue])

  const handlePlay = () => {
    setCurrentYear(0)
    setTotalReceived(0)
    setIsPlaying(true)
  }

  const handleReset = () => {
    setCurrentYear(0)
    setTotalReceived(0)
    setIsPlaying(false)
  }

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-purple-50 rounded-xl border-2 border-slate-200 p-6">
      {/* Title */}
      <div className="text-center mb-6">
        <h4 className="text-xl font-bold text-gray-900 mb-2">
          {language === 'fr' 
            ? 'Flux de paiement d\'une obligation' 
            : 'Bond Cash Flow Timeline'
          }
        </h4>
        <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <DollarSign className="h-4 w-4" />
            <span>{language === 'fr' ? 'Nominal' : 'Face Value'}: {faceValue}€</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="h-4 w-4" />
            <span>{language === 'fr' ? 'Coupon' : 'Coupon'}: {couponRate}%</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{language === 'fr' ? 'Maturité' : 'Maturity'}: {maturity} {language === 'fr' ? 'ans' : 'years'}</span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative mb-8">
        {/* Timeline line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -translate-y-1/2" />
        
        {/* Year markers */}
        <div className="relative flex justify-between items-center">
          {years.map((year) => {
            const isActive = currentYear >= year
            const isCurrent = currentYear === year

            return (
              <div key={year} className="flex flex-col items-center relative z-10">
                {/* Payment amount */}
                {year > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0 }}
                    animate={isActive ? { 
                      opacity: 1, 
                      y: 0, 
                      scale: isCurrent ? [1, 1.2, 1] : 1 
                    } : { opacity: 0, y: -20, scale: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`mb-4 px-3 py-2 rounded-lg font-bold text-sm shadow-md ${
                      year === maturity 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                        : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                    }`}
                  >
                    {year === maturity ? (
                      <div className="text-center">
                        <div>{couponPayment.toFixed(0)}€</div>
                        <div className="text-xs opacity-90">+ {faceValue}€</div>
                      </div>
                    ) : (
                      `${couponPayment.toFixed(0)}€`
                    )}
                  </motion.div>
                )}

                {/* Year 0 investment */}
                {year === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0 }}
                    animate={isActive ? { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1 
                    } : { opacity: 0, y: 20, scale: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 px-3 py-2 rounded-lg font-bold text-sm shadow-md bg-gradient-to-r from-red-500 to-pink-600 text-white"
                  >
                    -{faceValue}€
                  </motion.div>
                )}

                {/* Year marker */}
                <motion.div
                  animate={{
                    scale: isCurrent ? [1, 1.3, 1] : 1,
                    backgroundColor: isActive ? '#6366f1' : '#d1d5db'
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 rounded-full border-4 border-white shadow-md"
                />
                
                {/* Year label */}
                <div className={`mt-2 text-sm font-semibold ${
                  isActive ? 'text-indigo-600' : 'text-gray-500'
                }`}>
                  {year === 0 
                    ? (language === 'fr' ? 'Achat' : 'Purchase')
                    : `${language === 'fr' ? 'An' : 'Year'} ${year}`
                  }
                </div>

                {/* Arrow */}
                {year < maturity && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0.3 }}
                    className="absolute top-1/2 -translate-y-1/2 left-full ml-2"
                  >
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-lg p-4 shadow-sm border-2 border-gray-200"
        >
          <div className="text-sm text-gray-600 mb-1">
            {language === 'fr' ? 'Année actuelle' : 'Current Year'}
          </div>
          <div className="text-2xl font-bold text-indigo-600">
            {currentYear === 0 ? (language === 'fr' ? 'Achat' : 'Purchase') : currentYear}
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 shadow-sm border-2 border-green-300"
        >
          <div className="text-sm text-gray-600 mb-1">
            {language === 'fr' ? 'Total reçu' : 'Total Received'}
          </div>
          <div className="text-2xl font-bold text-green-600">
            {totalReceived.toFixed(0)}€
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 shadow-sm border-2 border-blue-300"
        >
          <div className="text-sm text-gray-600 mb-1">
            {language === 'fr' ? 'Gain total' : 'Total Gain'}
          </div>
          <div className="text-2xl font-bold text-blue-600">
            {currentYear === maturity 
              ? `+${(totalReceived - faceValue).toFixed(0)}€`
              : '...'
            }
          </div>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="flex gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePlay}
          disabled={isPlaying}
          className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {language === 'fr' ? '▶ Lancer l\'animation' : '▶ Play Animation'}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleReset}
          className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md"
        >
          {language === 'fr' ? '↺ Réinitialiser' : '↺ Reset'}
        </motion.button>
      </div>

      {/* Explanation */}
      {currentYear === maturity && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-4"
        >
          <div className="font-bold text-green-900 mb-2">
            {language === 'fr' ? 'Obligation arrivée à maturité !' : 'Bond reached maturity!'}
          </div>
          <div className="text-sm text-gray-700">
            {language === 'fr' ? (
              <>
                Vous avez investi {faceValue}€ et reçu {totalReceived.toFixed(0)}€ au total.
                Votre gain est de {(totalReceived - faceValue).toFixed(0)}€ sur {maturity} ans,
                soit un rendement de {((totalReceived / faceValue - 1) * 100).toFixed(1)}%.
              </>
            ) : (
              <>
                You invested €{faceValue} and received €{totalReceived.toFixed(0)} in total.
                Your gain is €{(totalReceived - faceValue).toFixed(0)} over {maturity} years,
                which is a return of {((totalReceived / faceValue - 1) * 100).toFixed(1)}%.
              </>
            )}
          </div>
        </motion.div>
      )}
    </div>
  )
}
