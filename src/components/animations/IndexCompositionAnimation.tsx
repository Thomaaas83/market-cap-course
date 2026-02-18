import { motion } from 'framer-motion'
import { useState } from 'react'
import { TrendingUp, TrendingDown, BarChart3 } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

interface Stock {
  name: string
  weight: number
  price: number
  change: number
}

export default function IndexCompositionAnimation() {
  const { language } = useLanguage()
  const [selectedStock, setSelectedStock] = useState<number | null>(null)
  const [priceChanges, setPriceChanges] = useState<number[]>([0, 0, 0, 0, 0])

  const stocks: Stock[] = [
    { name: 'LVMH', weight: 15, price: 800, change: priceChanges[0] },
    { name: 'Total', weight: 12, price: 60, change: priceChanges[1] },
    { name: 'Sanofi', weight: 10, price: 95, change: priceChanges[2] },
    { name: 'BNP Paribas', weight: 8, price: 65, change: priceChanges[3] },
    { name: 'Airbus', weight: 7, price: 140, change: priceChanges[4] }
  ]

  // Calculate index value (simplified)
  const baseIndexValue = 7000
  const indexChange = stocks.reduce((sum, stock) => sum + (stock.weight * stock.change / 100), 0)
  const indexValue = baseIndexValue + (baseIndexValue * indexChange / 100)

  const handleStockChange = (index: number, change: number) => {
    const newChanges = [...priceChanges]
    newChanges[index] = change
    setPriceChanges(newChanges)
  }

  const resetAll = () => {
    setPriceChanges([0, 0, 0, 0, 0])
    setSelectedStock(null)
  }

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-green-50 rounded-xl border-2 border-slate-200 p-6">
      {/* Title */}
      <div className="text-center mb-6">
        <h4 className="text-xl font-bold text-gray-900 mb-2">
          {language === 'fr' 
            ? 'Composition d\'un indice boursier (CAC 40)' 
            : 'Stock Index Composition (CAC 40)'
          }
        </h4>
        <p className="text-sm text-gray-600">
          {language === 'fr'
            ? 'Modifiez le prix d\'une action pour voir l\'impact sur l\'indice'
            : 'Change a stock price to see the impact on the index'
          }
        </p>
      </div>

      {/* Index Value Display */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl p-6 mb-6 text-center">
        <div className="text-sm opacity-90 mb-2">
          {language === 'fr' ? 'Valeur de l\'indice CAC 40' : 'CAC 40 Index Value'}
        </div>
        <motion.div
          key={indexValue}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-5xl font-bold mb-2"
        >
          {indexValue.toFixed(2)}
        </motion.div>
        <div className="flex items-center justify-center gap-2">
          {indexChange !== 0 && (
            <>
              {indexChange > 0 ? (
                <TrendingUp className="h-6 w-6 text-green-300" />
              ) : (
                <TrendingDown className="h-6 w-6 text-red-300" />
              )}
              <span className={`text-xl font-semibold ${
                indexChange > 0 ? 'text-green-300' : 'text-red-300'
              }`}>
                {indexChange > 0 ? '+' : ''}{indexChange.toFixed(2)}%
              </span>
            </>
          )}
        </div>
      </div>

      {/* Stocks List */}
      <div className="space-y-3 mb-6">
        {stocks.map((stock, index) => {
          const isSelected = selectedStock === index
          const contribution = (stock.weight * stock.change / 100)

          return (
            <motion.div
              key={stock.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl p-4 border-2 transition-all ${
                isSelected ? 'border-indigo-500 shadow-lg' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white ${
                    stock.change > 0 ? 'bg-green-500' : stock.change < 0 ? 'bg-red-500' : 'bg-gray-400'
                  }`}>
                    {stock.name.substring(0, 2)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{stock.name}</div>
                    <div className="text-sm text-gray-600">
                      {language === 'fr' ? 'Pondération' : 'Weight'}: {stock.weight}%
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">
                    {(stock.price * (1 + stock.change / 100)).toFixed(2)}€
                  </div>
                  {stock.change !== 0 && (
                    <div className={`text-sm font-semibold flex items-center justify-end gap-1 ${
                      stock.change > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stock.change > 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                      {stock.change > 0 ? '+' : ''}{stock.change.toFixed(1)}%
                    </div>
                  )}
                </div>
              </div>

              {/* Price Control */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>{language === 'fr' ? 'Variation du prix' : 'Price change'}</span>
                  {contribution !== 0 && (
                    <span className={`font-semibold ${
                      contribution > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {language === 'fr' ? 'Impact indice' : 'Index impact'}: {contribution > 0 ? '+' : ''}{contribution.toFixed(2)}%
                    </span>
                  )}
                </div>
                <input
                  type="range"
                  min="-10"
                  max="10"
                  step="0.5"
                  value={stock.change}
                  onChange={(e) => handleStockChange(index, parseFloat(e.target.value))}
                  onFocus={() => setSelectedStock(index)}
                  onBlur={() => setSelectedStock(null)}
                  className="w-full h-2 bg-gradient-to-r from-red-200 via-gray-200 to-green-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>-10%</span>
                  <span>0%</span>
                  <span>+10%</span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Weight Visualization */}
      <div className="bg-white rounded-xl p-6 border-2 border-gray-200 mb-6">
        <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-indigo-600" />
          {language === 'fr' ? 'Pondération dans l\'indice' : 'Index Weighting'}
        </h5>
        <div className="space-y-2">
          {stocks.map((stock, index) => (
            <div key={stock.name} className="flex items-center gap-3">
              <div className="w-24 text-sm font-semibold text-gray-700">
                {stock.name}
              </div>
              <div className="flex-1 relative h-8 bg-gray-100 rounded-lg overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${stock.weight * 5}%` }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`h-full flex items-center justify-end pr-2 text-white text-xs font-bold ${
                    stock.change > 0 ? 'bg-green-500' : stock.change < 0 ? 'bg-red-500' : 'bg-indigo-500'
                  }`}
                >
                  {stock.weight}%
                </motion.div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-xs text-gray-600 bg-gray-50 rounded-lg p-3">
          {language === 'fr' ? (
            <>
              <strong>Note :</strong> Les 5 plus grandes entreprises représentent 52% de l'indice.
              Une variation de LVMH (15%) a plus d'impact qu'une variation d'Airbus (7%).
            </>
          ) : (
            <>
              <strong>Note:</strong> The 5 largest companies represent 52% of the index.
              A change in LVMH (15%) has more impact than a change in Airbus (7%).
            </>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-3 mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setPriceChanges([5, 3, -2, 4, -1])
          }}
          className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md text-sm"
        >
          {language === 'fr' ? 'Marché haussier' : 'Bull Market'}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setPriceChanges([-4, -3, -5, -2, -6])
          }}
          className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md text-sm"
        >
          {language === 'fr' ? '📉 Marché baissier' : '📉 Bear Market'}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={resetAll}
          className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md text-sm"
        >
          {language === 'fr' ? '↺ Réinitialiser' : '↺ Reset'}
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
          {language === 'fr' ? 'Comment fonctionne un indice ?' : 'How does an index work?'}
        </div>
        <div className="text-sm text-gray-700 space-y-2">
          <p>
            {language === 'fr' ? (
              <>
                Un indice boursier comme le <strong>CAC 40</strong> est une moyenne pondérée des prix
                des 40 plus grandes entreprises françaises. Chaque entreprise a un <strong>poids</strong> dans
                l'indice proportionnel à sa capitalisation boursière.
              </>
            ) : (
              <>
                A stock index like the <strong>CAC 40</strong> is a weighted average of the prices
                of the 40 largest French companies. Each company has a <strong>weight</strong> in
                the index proportional to its market capitalization.
              </>
            )}
          </p>
          <p>
            {language === 'fr' ? (
              <>
                Plus une entreprise est grande (poids élevé), plus son impact sur l'indice est important.
                C'est pourquoi une variation de <strong>LVMH</strong> (15%) affecte plus l'indice
                qu'une variation d'<strong>Airbus</strong> (7%).
              </>
            ) : (
              <>
                The larger a company (higher weight), the greater its impact on the index.
                That's why a change in <strong>LVMH</strong> (15%) affects the index more
                than a change in <strong>Airbus</strong> (7%).
              </>
            )}
          </p>
        </div>
      </motion.div>
    </div>
  )
}
