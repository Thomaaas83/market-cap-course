import { motion } from 'framer-motion'
import { useState } from 'react'
import { TrendingUp, TrendingDown, DollarSign, Factory, ShoppingCart, Flame } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

export default function InterestRateImpactAnimation() {
  const { language } = useLanguage()
  const [rate, setRate] = useState(2.5)

  // Calculate economic indicators based on rate
  const borrowingCost = rate
  const investments = Math.max(0, 100 - rate * 15) // Inversely proportional
  const consumption = Math.max(0, 100 - rate * 12)
  const inflation = Math.max(0, 5 - (rate - 2) * 0.8)
  const growth = Math.max(0, 4 - (rate - 2) * 0.6)

  const getRateLevel = () => {
    if (rate < 1.5) return { label: language === 'fr' ? 'Très bas' : 'Very Low', color: 'text-green-600' }
    if (rate < 2.5) return { label: language === 'fr' ? 'Bas' : 'Low', color: 'text-blue-600' }
    if (rate < 3.5) return { label: language === 'fr' ? 'Modéré' : 'Moderate', color: 'text-orange-600' }
    return { label: language === 'fr' ? 'Élevé' : 'High', color: 'text-red-600' }
  }

  const rateLevel = getRateLevel()

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-purple-50 rounded-xl border-2 border-slate-200 p-6">
      {/* Title */}
      <div className="text-center mb-6">
        <h4 className="text-xl font-bold text-gray-900 mb-2">
          {language === 'fr' 
            ? 'Impact des taux directeurs sur l\'économie' 
            : 'Impact of Key Interest Rates on the Economy'
          }
        </h4>
        <p className="text-sm text-gray-600">
          {language === 'fr'
            ? 'Déplacez le curseur pour voir comment les taux influencent l\'économie'
            : 'Move the slider to see how rates influence the economy'
          }
        </p>
      </div>

      {/* Central Bank Rate Display */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl p-6 mb-6 text-center">
        <div className="text-sm opacity-90 mb-2">
          {language === 'fr' ? 'Taux directeur de la Banque Centrale' : 'Central Bank Key Rate'}
        </div>
        <motion.div
          key={rate}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-5xl font-bold mb-2"
        >
          {rate.toFixed(2)}%
        </motion.div>
        <div className={`text-lg font-semibold ${rateLevel.color} bg-white px-4 py-1 rounded-full inline-block`}>
          {rateLevel.label}
        </div>
      </div>

      {/* Rate Slider */}
      <div className="mb-8">
        <input
          type="range"
          min="0"
          max="5"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
          className="w-full h-3 bg-gradient-to-r from-green-200 via-blue-200 via-orange-200 to-red-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>0%</span>
          <span>1%</span>
          <span>2%</span>
          <span>3%</span>
          <span>4%</span>
          <span>5%</span>
        </div>
      </div>

      {/* Economic Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Borrowing Cost */}
        <motion.div
          animate={{ scale: rate > 3 ? [1, 1.05, 1] : 1 }}
          transition={{ repeat: rate > 3 ? Infinity : 0, duration: 1 }}
          className="bg-white rounded-xl p-4 border-2 border-gray-200"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-red-600" />
              <span className="font-bold text-gray-900">
                {language === 'fr' ? 'Coût d\'emprunt' : 'Borrowing Cost'}
              </span>
            </div>
            {rate > 3 && <TrendingUp className="h-5 w-5 text-red-600" />}
            {rate < 2 && <TrendingDown className="h-5 w-5 text-green-600" />}
          </div>
          <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: `${borrowingCost * 20}%` }}
              className={`h-full ${
                borrowingCost > 3 ? 'bg-red-500' : borrowingCost > 2 ? 'bg-orange-500' : 'bg-green-500'
              }`}
            />
          </div>
          <div className="text-right text-sm font-bold text-gray-700 mt-1">
            {borrowingCost.toFixed(2)}%
          </div>
        </motion.div>

        {/* Investments */}
        <motion.div
          animate={{ scale: rate < 2 ? [1, 1.05, 1] : 1 }}
          transition={{ repeat: rate < 2 ? Infinity : 0, duration: 1 }}
          className="bg-white rounded-xl p-4 border-2 border-gray-200"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Factory className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-gray-900">
                {language === 'fr' ? 'Investissements' : 'Investments'}
              </span>
            </div>
            {rate > 3 && <TrendingDown className="h-5 w-5 text-red-600" />}
            {rate < 2 && <TrendingUp className="h-5 w-5 text-green-600" />}
          </div>
          <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: `${investments}%` }}
              className={`h-full ${
                investments > 70 ? 'bg-green-500' : investments > 40 ? 'bg-orange-500' : 'bg-red-500'
              }`}
            />
          </div>
          <div className="text-right text-sm font-bold text-gray-700 mt-1">
            {investments.toFixed(0)}%
          </div>
        </motion.div>

        {/* Consumption */}
        <motion.div
          animate={{ scale: rate < 2 ? [1, 1.05, 1] : 1 }}
          transition={{ repeat: rate < 2 ? Infinity : 0, duration: 1 }}
          className="bg-white rounded-xl p-4 border-2 border-gray-200"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-6 w-6 text-purple-600" />
              <span className="font-bold text-gray-900">
                {language === 'fr' ? 'Consommation' : 'Consumption'}
              </span>
            </div>
            {rate > 3 && <TrendingDown className="h-5 w-5 text-red-600" />}
            {rate < 2 && <TrendingUp className="h-5 w-5 text-green-600" />}
          </div>
          <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: `${consumption}%` }}
              className={`h-full ${
                consumption > 70 ? 'bg-green-500' : consumption > 40 ? 'bg-orange-500' : 'bg-red-500'
              }`}
            />
          </div>
          <div className="text-right text-sm font-bold text-gray-700 mt-1">
            {consumption.toFixed(0)}%
          </div>
        </motion.div>

        {/* Inflation */}
        <motion.div
          animate={{ scale: inflation > 3 ? [1, 1.05, 1] : 1 }}
          transition={{ repeat: inflation > 3 ? Infinity : 0, duration: 1 }}
          className="bg-white rounded-xl p-4 border-2 border-gray-200"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Flame className="h-6 w-6 text-orange-600" />
              <span className="font-bold text-gray-900">
                {language === 'fr' ? 'Inflation' : 'Inflation'}
              </span>
            </div>
            {rate > 3 && <TrendingDown className="h-5 w-5 text-green-600" />}
            {rate < 2 && <TrendingUp className="h-5 w-5 text-red-600" />}
          </div>
          <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: `${inflation * 20}%` }}
              className={`h-full ${
                inflation < 2 ? 'bg-green-500' : inflation < 3 ? 'bg-orange-500' : 'bg-red-500'
              }`}
            />
          </div>
          <div className="text-right text-sm font-bold text-gray-700 mt-1">
            {inflation.toFixed(1)}%
          </div>
        </motion.div>
      </div>

      {/* Growth Indicator */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-6 mb-6">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">
            {language === 'fr' ? 'Croissance économique estimée' : 'Estimated Economic Growth'}
          </div>
          <motion.div
            key={growth}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`text-4xl font-bold ${
              growth > 3 ? 'text-green-600' : growth > 2 ? 'text-blue-600' : growth > 1 ? 'text-orange-600' : 'text-red-600'
            }`}
          >
            {growth.toFixed(1)}%
          </motion.div>
        </div>
      </div>

      {/* Scenario Explanation */}
      <motion.div
        key={rate}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`rounded-xl p-4 border-2 ${
          rate < 1.5 
            ? 'bg-green-50 border-green-300'
            : rate < 2.5
            ? 'bg-blue-50 border-blue-300'
            : rate < 3.5
            ? 'bg-orange-50 border-orange-300'
            : 'bg-red-50 border-red-300'
        }`}
      >
        <div className="font-bold text-gray-900 mb-2">
          {rate < 1.5 && (language === 'fr' ? '🚀 Taux très bas : Stimulation économique' : '🚀 Very Low Rates: Economic Stimulus')}
          {rate >= 1.5 && rate < 2.5 && (language === 'fr' ? '✅ Taux bas : Croissance soutenue' : '✅ Low Rates: Sustained Growth')}
          {rate >= 2.5 && rate < 3.5 && (language === 'fr' ? '⚖️ Taux modérés : Équilibre' : '⚖️ Moderate Rates: Balance')}
          {rate >= 3.5 && (language === 'fr' ? '❄️ Taux élevés : Refroidissement' : '❄️ High Rates: Cooling Down')}
        </div>
        <div className="text-sm text-gray-700">
          {rate < 1.5 && (language === 'fr' ? (
            <>Emprunter est très bon marché. Les entreprises investissent massivement, les ménages consomment.
            Risque : l'inflation peut s'emballer si l'économie surchauffe.</>
          ) : (
            <>Borrowing is very cheap. Companies invest heavily, households consume.
            Risk: inflation can spiral if the economy overheats.</>
          ))}
          {rate >= 1.5 && rate < 2.5 && (language === 'fr' ? (
            <>Conditions favorables à la croissance. L'économie se développe sans surchauffe excessive.
            L'inflation reste sous contrôle autour de 2%.</>
          ) : (
            <>Favorable conditions for growth. The economy develops without excessive overheating.
            Inflation remains under control around 2%.</>
          ))}
          {rate >= 2.5 && rate < 3.5 && (language === 'fr' ? (
            <>La banque centrale cherche l'équilibre entre croissance et inflation.
            Les investissements ralentissent légèrement, l'inflation est maîtrisée.</>
          ) : (
            <>The central bank seeks balance between growth and inflation.
            Investments slow down slightly, inflation is controlled.</>
          ))}
          {rate >= 3.5 && (language === 'fr' ? (
            <>Emprunter coûte cher. Les entreprises réduisent leurs investissements, les ménages leur consommation.
            L'économie ralentit, mais l'inflation baisse. Risque de récession si maintenu trop longtemps.</>
          ) : (
            <>Borrowing is expensive. Companies reduce investments, households their consumption.
            The economy slows down, but inflation decreases. Risk of recession if maintained too long.</>
          ))}
        </div>
      </motion.div>

      {/* Quick Scenarios */}
      <div className="mt-6 grid grid-cols-3 gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setRate(0.5)}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-3 rounded-lg text-sm"
        >
          {language === 'fr' ? 'Crise → Stimuler' : 'Crisis → Stimulate'}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setRate(2.0)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-3 rounded-lg text-sm"
        >
          {language === 'fr' ? 'Normal' : 'Normal'}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setRate(4.5)}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 rounded-lg text-sm"
        >
          {language === 'fr' ? 'Inflation → Freiner' : 'Inflation → Cool'}
        </motion.button>
      </div>
    </div>
  )
}
