import { motion } from 'framer-motion'
import { useState, useMemo, useCallback } from 'react'
import { TrendingUp, TrendingDown, DollarSign, Info } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

interface OptionPayoffChartProps {
  strikePrice: number
  premium: number
  title?: string
  titleEn?: string
}

export default function OptionPayoffChart({ 
  strikePrice, 
  premium,
  title,
  titleEn 
}: OptionPayoffChartProps) {
  const { language } = useLanguage()
  const [optionType, setOptionType] = useState<'call' | 'put'>('call')
  const [currentPrice, setCurrentPrice] = useState(strikePrice)
  const [isAnimating, setIsAnimating] = useState(false)

  // Calculate profit/loss - mémorisé
  const calculatePayoff = useMemo(() => {
    return (stockPrice: number) => {
      if (optionType === 'call') {
        // Buy Call: max(0, S - K) - Premium
        return Math.max(0, stockPrice - strikePrice) - premium
      } else {
        // Buy Put: max(0, K - S) - Premium
        return Math.max(0, strikePrice - stockPrice) - premium
      }
    }
  }, [optionType, strikePrice, premium])

  const currentPayoff = useMemo(() => calculatePayoff(currentPrice), [calculatePayoff, currentPrice])
  const breakEven = useMemo(() => 
    optionType === 'call' ? strikePrice + premium : strikePrice - premium,
    [optionType, strikePrice, premium]
  )

  // Generate chart points - mémorisé pour éviter recalculs
  const { minPrice, maxPrice, points } = useMemo(() => {
    const min = strikePrice * 0.7
    const max = strikePrice * 1.3
    const pts: Array<{ price: number; payoff: number }> = []
    for (let price = min; price <= max; price += (max - min) / 50) {
      pts.push({
        price,
        payoff: calculatePayoff(price)
      })
    }
    return { minPrice: min, maxPrice: max, points: pts }
  }, [strikePrice, calculatePayoff])

  // Convert to SVG coordinates
  const chartWidth = 400
  const chartHeight = 300
  const padding = 40

  const priceToX = (price: number) => {
    return padding + ((price - minPrice) / (maxPrice - minPrice)) * (chartWidth - 2 * padding)
  }

  const payoffToY = (payoff: number) => {
    const maxPayoff = Math.max(...points.map(p => p.payoff))
    const minPayoff = Math.min(...points.map(p => p.payoff))
    const range = maxPayoff - minPayoff
    
    // Correction : Y augmente vers le haut (convention mathématique)
    // Plus le payoff est élevé, plus Y est petit (car SVG a Y=0 en haut)
    return padding + ((maxPayoff - payoff) / range) * (chartHeight - 2 * padding)
  }

  // Create SVG path
  const pathData = points.map((point, i) => {
    const x = priceToX(point.price)
    const y = payoffToY(point.payoff)
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
  }).join(' ')

  const handleAnimate = useCallback((direction: 'up' | 'down') => {
    setIsAnimating(true)
    const targetPrice = direction === 'up' ? strikePrice * 1.2 : strikePrice * 0.8
    const steps = 30
    const increment = (targetPrice - currentPrice) / steps
    
    let step = 0
    const interval = setInterval(() => {
      step++
      setCurrentPrice(prev => prev + increment)
      
      if (step >= steps) {
        clearInterval(interval)
        setIsAnimating(false)
      }
    }, 50)
  }, [strikePrice, currentPrice])

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl border-2 border-slate-200 p-6">
      {/* Title */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {language === 'fr' 
            ? title || 'Graphique Profit/Perte - Options'
            : titleEn || 'Profit/Loss Chart - Options'
          }
        </h3>
        <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <DollarSign className="h-4 w-4" />
            <span>Strike: {strikePrice}€</span>
          </div>
          <div className="flex items-center gap-1">
            <Info className="h-4 w-4" />
            <span>{language === 'fr' ? 'Prime' : 'Premium'}: {premium}€</span>
          </div>
        </div>
        
        {/* Option Type Selector */}
        <div className="flex items-center justify-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOptionType('call')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              optionType === 'call'
                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md'
                : 'bg-white text-gray-600 border-2 border-gray-300 hover:border-green-400'
            }`}
          >
            {language === 'fr' ? 'Achat Call' : 'Buy Call'}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOptionType('put')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              optionType === 'put'
                ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md'
                : 'bg-white text-gray-600 border-2 border-gray-300 hover:border-red-400'
            }`}
          >
            {language === 'fr' ? 'Achat Put' : 'Buy Put'}
          </motion.button>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg p-4 shadow-md mb-6">
        <svg width="100%" height="300" viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width={chartWidth} height={chartHeight} fill="url(#grid)" />

          {/* Axes */}
          {/* X axis with arrow */}
          <defs>
            <marker
              id="arrowX"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L0,6 L9,3 z" fill="#374151" />
            </marker>
            <marker
              id="arrowY"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L0,6 L9,3 z" fill="#374151" />
            </marker>
          </defs>
          
          {/* X axis */}
          <line
            x1={padding}
            y1={chartHeight - padding}
            x2={chartWidth - padding + 10}
            y2={chartHeight - padding}
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowX)"
          />
          {/* Y axis */}
          <line
            x1={padding}
            y1={chartHeight - padding}
            x2={padding}
            y2={padding - 10}
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowY)"
          />

          {/* X axis graduations */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
            const price = minPrice + ratio * (maxPrice - minPrice)
            const x = priceToX(price)
            return (
              <g key={`x-grad-${ratio}`}>
                <line
                  x1={x}
                  y1={chartHeight - padding}
                  x2={x}
                  y2={chartHeight - padding + 5}
                  stroke="#374151"
                  strokeWidth="1"
                />
                <text
                  x={x}
                  y={chartHeight - padding + 18}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#6b7280"
                >
                  {price.toFixed(0)}
                </text>
              </g>
            )
          })}

          {/* Y axis graduations */}
          {(() => {
            const maxPayoff = Math.max(...points.map(p => p.payoff))
            const minPayoff = Math.min(...points.map(p => p.payoff))
            const range = maxPayoff - minPayoff
            const step = range / 4
            
            return [0, 1, 2, 3, 4].map((i) => {
              const payoff = minPayoff + i * step
              const y = payoffToY(payoff)
              return (
                <g key={`y-grad-${i}`}>
                  <line
                    x1={padding - 5}
                    y1={y}
                    x2={padding}
                    y2={y}
                    stroke="#374151"
                    strokeWidth="1"
                  />
                  <text
                    x={padding - 10}
                    y={y + 4}
                    textAnchor="end"
                    fontSize="10"
                    fill="#6b7280"
                  >
                    {payoff.toFixed(0)}
                  </text>
                </g>
              )
            })
          })()}

          {/* Zero line */}
          <line
            x1={padding}
            y1={payoffToY(0)}
            x2={chartWidth - padding}
            y2={payoffToY(0)}
            stroke="#9ca3af"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <text
            x={chartWidth - padding + 5}
            y={payoffToY(0) + 4}
            fontSize="10"
            fill="#9ca3af"
            fontWeight="bold"
          >
            0
          </text>

          {/* Break-even line (only one important line) */}
          <line
            x1={priceToX(breakEven)}
            y1={padding}
            x2={priceToX(breakEven)}
            y2={chartHeight - padding}
            stroke="#f59e0b"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.7"
          />

          {/* Profit/Loss areas */}
          {optionType === 'call' ? (
            <>
              {/* Loss area (red) - left of break-even */}
              <path
                d={`
                  M ${priceToX(minPrice)} ${payoffToY(0)}
                  ${points.filter(p => p.price < breakEven).map(p => 
                    `L ${priceToX(p.price)} ${payoffToY(p.payoff)}`
                  ).join(' ')}
                  L ${priceToX(breakEven)} ${payoffToY(0)}
                  Z
                `}
                fill="rgba(239, 68, 68, 0.1)"
                stroke="none"
              />

              {/* Profit area (green) - right of break-even */}
              <path
                d={`
                  M ${priceToX(breakEven)} ${payoffToY(0)}
                  ${points.filter(p => p.price >= breakEven).map(p => 
                    `L ${priceToX(p.price)} ${payoffToY(p.payoff)}`
                  ).join(' ')}
                  L ${priceToX(maxPrice)} ${payoffToY(0)}
                  Z
                `}
                fill="rgba(34, 197, 94, 0.1)"
                stroke="none"
              />
            </>
          ) : (
            <>
              {/* Profit area (green) - left of break-even for PUT */}
              <path
                d={`
                  M ${priceToX(minPrice)} ${payoffToY(0)}
                  ${points.filter(p => p.price <= breakEven).map(p => 
                    `L ${priceToX(p.price)} ${payoffToY(p.payoff)}`
                  ).join(' ')}
                  L ${priceToX(breakEven)} ${payoffToY(0)}
                  Z
                `}
                fill="rgba(34, 197, 94, 0.1)"
                stroke="none"
              />

              {/* Loss area (red) - right of break-even for PUT */}
              <path
                d={`
                  M ${priceToX(breakEven)} ${payoffToY(0)}
                  ${points.filter(p => p.price > breakEven).map(p => 
                    `L ${priceToX(p.price)} ${payoffToY(p.payoff)}`
                  ).join(' ')}
                  L ${priceToX(maxPrice)} ${payoffToY(0)}
                  Z
                `}
                fill="rgba(239, 68, 68, 0.1)"
                stroke="none"
              />
            </>
          )}

          {/* Main payoff line */}
          <motion.path
            d={pathData}
            fill="none"
            stroke="#6366f1"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />

          {/* Current price indicator - Optimisé : pulse non infini */}
          <motion.g
            animate={{ 
              x: priceToX(currentPrice),
              y: payoffToY(currentPayoff)
            }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <circle
              r="6"
              fill={currentPayoff >= 0 ? '#10b981' : '#ef4444'}
              stroke="white"
              strokeWidth="2"
            />
            <circle
              r="8"
              fill="none"
              stroke={currentPayoff >= 0 ? '#10b981' : '#ef4444'}
              strokeWidth="2"
              opacity="0.5"
            />
          </motion.g>

          {/* Axes labels */}
          <text 
            x={chartWidth / 2} 
            y={chartHeight - 5} 
            textAnchor="middle" 
            fontSize="12" 
            fill="#374151"
            fontWeight="600"
          >
            {language === 'fr' ? 'Prix de l\'action (€)' : 'Stock Price (€)'}
          </text>
          <text 
            x="10" 
            y={chartHeight / 2} 
            textAnchor="middle" 
            fontSize="12" 
            fill="#374151"
            fontWeight="600"
            transform={`rotate(-90, 10, ${chartHeight / 2})`}
          >
            {language === 'fr' ? 'Profit/Perte (€)' : 'Profit/Loss (€)'}
          </text>

          {/* Break-even label with background */}
          <g>
            <rect
              x={priceToX(breakEven) - 40}
              y={padding - 25}
              width="80"
              height="18"
              fill="white"
              stroke="#f59e0b"
              strokeWidth="1.5"
              rx="4"
              opacity="0.95"
            />
            <text 
              x={priceToX(breakEven)} 
              y={padding - 12} 
              textAnchor="middle" 
              fontSize="10" 
              fill="#f59e0b" 
              fontWeight="bold"
            >
              Break-even: {breakEven.toFixed(1)}€
            </text>
          </g>
        </svg>
      </div>

      {/* Current Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-lg p-4 shadow-sm border-2 border-gray-200"
        >
          <div className="text-sm text-gray-600 mb-1">
            {language === 'fr' ? 'Prix actuel' : 'Current Price'}
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {currentPrice.toFixed(2)}€
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`rounded-lg p-4 shadow-sm border-2 ${
            currentPayoff >= 0 
              ? 'bg-green-50 border-green-300' 
              : 'bg-red-50 border-red-300'
          }`}
        >
          <div className="text-sm text-gray-600 mb-1">
            {language === 'fr' ? 'Profit/Perte' : 'Profit/Loss'}
          </div>
          <div className={`text-2xl font-bold flex items-center gap-2 ${
            currentPayoff >= 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            {currentPayoff >= 0 ? <TrendingUp className="h-6 w-6" /> : <TrendingDown className="h-6 w-6" />}
            {currentPayoff >= 0 ? '+' : ''}{currentPayoff.toFixed(2)}€
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-lg p-4 shadow-sm border-2 border-gray-200"
        >
          <div className="text-sm text-gray-600 mb-1">
            {language === 'fr' ? 'Seuil de rentabilité' : 'Break-even'}
          </div>
          <div className="text-2xl font-bold text-orange-600">
            {breakEven.toFixed(2)}€
          </div>
        </motion.div>
      </div>

      {/* Interactive Controls */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {language === 'fr' ? 'Simuler le prix de l\'action' : 'Simulate Stock Price'}
          </label>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            step="0.5"
            value={currentPrice}
            onChange={(e) => setCurrentPrice(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>{minPrice.toFixed(0)}€</span>
            <span>{maxPrice.toFixed(0)}€</span>
          </div>
        </div>

        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleAnimate('down')}
            disabled={isAnimating}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <TrendingDown className="h-5 w-5" />
            {language === 'fr' ? 'Baisse' : 'Down'}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPrice(strikePrice)}
            disabled={isAnimating}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {language === 'fr' ? 'Reset' : 'Reset'}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleAnimate('up')}
            disabled={isAnimating}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <TrendingUp className="h-5 w-5" />
            {language === 'fr' ? 'Hausse' : 'Up'}
          </motion.button>
        </div>
      </div>

      {/* Explanation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-4"
      >
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-gray-700">
            {optionType === 'call' ? (
              language === 'fr' ? (
                <>
                  <span className="font-semibold">Achat de Call :</span> Vous gagnez si le prix monte au-dessus du break-even ({breakEven.toFixed(2)}€). 
                  Perte maximale = prime payée ({premium}€). Gain potentiellement illimité.
                </>
              ) : (
                <>
                  <span className="font-semibold">Buy Call:</span> You profit if price rises above break-even ({breakEven.toFixed(2)}€). 
                  Maximum loss = premium paid ({premium}€). Potentially unlimited gain.
                </>
              )
            ) : (
              language === 'fr' ? (
                <>
                  <span className="font-semibold">Achat de Put :</span> Vous gagnez si le prix baisse en-dessous du break-even ({breakEven.toFixed(2)}€). 
                  Perte maximale = prime payée ({premium}€). Protection contre la baisse.
                </>
              ) : (
                <>
                  <span className="font-semibold">Buy Put:</span> You profit if price falls below break-even ({breakEven.toFixed(2)}€). 
                  Maximum loss = premium paid ({premium}€). Protection against decline.
                </>
              )
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
