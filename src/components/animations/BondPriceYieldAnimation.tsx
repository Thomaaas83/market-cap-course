import { motion } from 'framer-motion'
import { useState } from 'react'
import { TrendingUp, TrendingDown, DollarSign, Percent } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

interface BondPriceYieldAnimationProps {
  config: {
    faceValue: number
    couponRate: number
    title?: string
    titleEn?: string
  }
}

export default function BondPriceYieldAnimation({ config }: BondPriceYieldAnimationProps) {
  const { language } = useLanguage()
  const { faceValue, couponRate } = config
  const [marketPrice, setMarketPrice] = useState(faceValue)

  // Calculate yield: (Coupon / Market Price) * 100
  const couponPayment = (faceValue * couponRate) / 100
  const currentYield = (couponPayment / marketPrice) * 100

  const handlePriceChange = (newPrice: number) => {
    setMarketPrice(newPrice)
  }

  const priceChange = ((marketPrice - faceValue) / faceValue) * 100
  const isPriceUp = marketPrice > faceValue
  const isPriceDown = marketPrice < faceValue

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border-2 border-slate-200 p-6">
      {/* Title */}
      <div className="text-center mb-6">
        <h4 className="text-xl font-bold text-gray-900 mb-2">
          {language === 'fr' 
            ? 'Relation inverse : Prix ↔ Rendement' 
            : 'Inverse Relationship: Price ↔ Yield'
          }
        </h4>
        <p className="text-sm text-gray-600">
          {language === 'fr'
            ? 'Déplacez le curseur pour voir comment le prix et le rendement évoluent en sens inverse'
            : 'Move the slider to see how price and yield move in opposite directions'
          }
        </p>
      </div>

      {/* Bond Info */}
      <div className="bg-white rounded-lg p-4 mb-6 border-2 border-gray-200">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-sm text-gray-600 mb-1">
              {language === 'fr' ? 'Valeur nominale' : 'Face Value'}
            </div>
            <div className="text-lg font-bold text-gray-900">{faceValue}€</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">
              {language === 'fr' ? 'Coupon fixe' : 'Fixed Coupon'}
            </div>
            <div className="text-lg font-bold text-gray-900">{couponRate}% ({couponPayment}€)</div>
          </div>
        </div>
      </div>

      {/* Visual Representation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Price Card */}
        <motion.div
          animate={{
            scale: isPriceUp ? [1, 1.05, 1] : isPriceDown ? [1, 0.95, 1] : 1,
            borderColor: isPriceUp ? '#10b981' : isPriceDown ? '#ef4444' : '#6366f1'
          }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl p-6 border-4 shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-indigo-600" />
              <h5 className="font-bold text-gray-900">
                {language === 'fr' ? 'Prix du marché' : 'Market Price'}
              </h5>
            </div>
            {isPriceUp && <TrendingUp className="h-6 w-6 text-green-600" />}
            {isPriceDown && <TrendingDown className="h-6 w-6 text-red-600" />}
          </div>
          
          <div className="text-center">
            <motion.div
              key={marketPrice}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`text-4xl font-bold mb-2 ${
                isPriceUp ? 'text-green-600' : isPriceDown ? 'text-red-600' : 'text-indigo-600'
              }`}
            >
              {marketPrice.toFixed(0)}€
            </motion.div>
            <div className={`text-sm font-semibold ${
              isPriceUp ? 'text-green-600' : isPriceDown ? 'text-red-600' : 'text-gray-600'
            }`}>
              {priceChange > 0 && '+'}
              {priceChange.toFixed(1)}% {language === 'fr' ? 'vs nominal' : 'vs face value'}
            </div>
          </div>

          {/* Price Arrow */}
          <div className="mt-4 flex justify-center">
            {isPriceUp && (
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: -5 }}
                transition={{ duration: 0.5 }}
                className="text-green-600 text-2xl"
              >
                ↑
              </motion.div>
            )}
            {isPriceDown && (
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: 5 }}
                transition={{ duration: 0.5 }}
                className="text-red-600 text-2xl"
              >
                ↓
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Yield Card */}
        <motion.div
          animate={{
            scale: isPriceDown ? [1, 1.05, 1] : isPriceUp ? [1, 0.95, 1] : 1,
            borderColor: isPriceDown ? '#10b981' : isPriceUp ? '#ef4444' : '#f59e0b'
          }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl p-6 border-4 shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Percent className="h-6 w-6 text-orange-600" />
              <h5 className="font-bold text-gray-900">
                {language === 'fr' ? 'Rendement actuel' : 'Current Yield'}
              </h5>
            </div>
            {isPriceDown && <TrendingUp className="h-6 w-6 text-green-600" />}
            {isPriceUp && <TrendingDown className="h-6 w-6 text-red-600" />}
          </div>
          
          <div className="text-center">
            <motion.div
              key={currentYield}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`text-4xl font-bold mb-2 ${
                isPriceDown ? 'text-green-600' : isPriceUp ? 'text-red-600' : 'text-orange-600'
              }`}
            >
              {currentYield.toFixed(2)}%
            </motion.div>
            <div className="text-sm text-gray-600">
              {couponPayment}€ / {marketPrice.toFixed(0)}€
            </div>
          </div>

          {/* Yield Arrow */}
          <div className="mt-4 flex justify-center">
            {isPriceDown && (
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-green-600 text-2xl"
              >
                ↑
              </motion.div>
            )}
            {isPriceUp && (
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-red-600 text-2xl"
              >
                ↓
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Price Slider */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          {language === 'fr' ? 'Ajuster le prix du marché' : 'Adjust Market Price'}
        </label>
        <input
          type="range"
          min={faceValue * 0.7}
          max={faceValue * 1.3}
          step="1"
          value={marketPrice}
          onChange={(e) => handlePriceChange(parseFloat(e.target.value))}
          className="w-full h-3 bg-gradient-to-r from-red-200 via-gray-200 to-green-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>{(faceValue * 0.7).toFixed(0)}€</span>
          <span className="font-semibold text-indigo-600">{faceValue}€ (nominal)</span>
          <span>{(faceValue * 1.3).toFixed(0)}€</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePriceChange(faceValue * 0.8)}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 rounded-lg text-sm"
        >
          {language === 'fr' ? 'Prix bas' : 'Low Price'}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePriceChange(faceValue)}
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-3 rounded-lg text-sm"
        >
          {language === 'fr' ? 'Au pair' : 'At Par'}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePriceChange(faceValue * 1.2)}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-3 rounded-lg text-sm"
        >
          {language === 'fr' ? 'Prix élevé' : 'High Price'}
        </motion.button>
      </div>

      {/* Explanation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-lg p-4"
      >
        <div className="font-bold text-blue-900 mb-2">
          {language === 'fr' ? 'Pourquoi cette relation inverse ?' : 'Why this inverse relationship?'}
        </div>
        <div className="text-sm text-gray-700">
          {language === 'fr' ? (
            <>
              Le coupon est <strong>fixe</strong> ({couponPayment}€). Si le prix du marché <strong>baisse</strong>,
              vous payez moins cher pour recevoir le même coupon → le rendement <strong>augmente</strong>.
              Inversement, si le prix <strong>monte</strong>, vous payez plus cher pour le même coupon → 
              le rendement <strong>diminue</strong>.
            </>
          ) : (
            <>
              The coupon is <strong>fixed</strong> (€{couponPayment}). If the market price <strong>falls</strong>,
              you pay less to receive the same coupon → yield <strong>increases</strong>.
              Conversely, if the price <strong>rises</strong>, you pay more for the same coupon → 
              yield <strong>decreases</strong>.
            </>
          )}
        </div>
      </motion.div>
    </div>
  )
}
