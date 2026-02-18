import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Wallet, Building2, TrendingUp, Factory, Cog, DollarSign, CheckCircle, ArrowRight } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

interface Step {
  id: string
  label: string
  labelEn: string
  icon: string
  amount?: string
}

interface CapitalCycleAnimationProps {
  config: {
    steps: Step[]
    cyclic: boolean
  }
}

const iconMap: Record<string, any> = {
  '💰': Wallet,
  '🏢': Building2,
  '📈': TrendingUp,
  '🏭': Factory,
  '⚙️': Cog,
  '💵': DollarSign,
  '✅': CheckCircle
}

export default function CapitalCycleAnimation({ config }: CapitalCycleAnimationProps) {
  const { language } = useLanguage()
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [cycleCount, setCycleCount] = useState(0)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= config.steps.length - 1) {
          if (config.cyclic) {
            setCycleCount(c => c + 1)
            return 0
          } else {
            setIsPlaying(false)
            return prev
          }
        }
        return prev + 1
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [isPlaying, config.steps.length, config.cyclic])

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handleReset = () => {
    setCurrentStep(0)
    setCycleCount(0)
    setIsPlaying(true)
  }

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-green-50 rounded-xl border-2 border-slate-200 p-8">
      {/* Title */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {language === 'fr' ? 'Le Cycle Complet du Capital' : 'The Complete Capital Cycle'}
        </h3>
        <p className="text-sm text-gray-600">
          {language === 'fr' 
            ? 'De l\'épargne à l\'investissement, puis retour sous forme de rendement' 
            : 'From savings to investment, then return as yield'
          }
        </p>
        {cycleCount > 0 && (
          <div className="mt-2 inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold">
            {language === 'fr' ? 'Cycle' : 'Cycle'} #{cycleCount + 1}
          </div>
        )}
      </div>

      {/* Vertical Steps */}
      <div className="space-y-4 mb-8">
        {config.steps.map((step, index) => {
          const Icon = iconMap[step.icon] || Wallet
          const isActive = index <= currentStep || (config.cyclic && currentStep < index && cycleCount > 0)
          const isCurrent = index === currentStep

          return (
            <motion.div
              key={`${step.id}-${cycleCount}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isActive ? 1 : 0.3,
                x: 0
              }}
              transition={{ delay: index * 0.2 }}
            >
              <div className={`
                flex items-center gap-4 p-4 rounded-lg transition-all duration-500 relative
                ${isCurrent 
                  ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg scale-105' 
                  : isActive
                  ? 'bg-white text-gray-700 shadow-md'
                  : 'bg-gray-50 text-gray-400'
                }
              `}>
                {/* Step Number */}
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0
                  ${isCurrent 
                    ? 'bg-yellow-400 text-gray-900' 
                    : isActive
                    ? 'bg-green-100 text-green-600'
                    : 'bg-gray-200 text-gray-400'
                  }
                `}>
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`
                  w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0
                  ${isCurrent 
                    ? 'bg-white/20' 
                    : isActive
                    ? 'bg-green-50'
                    : 'bg-gray-100'
                  }
                `}>
                  <Icon className={`h-6 w-6 ${isCurrent ? 'text-white' : isActive ? 'text-green-600' : 'text-gray-400'}`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="font-bold text-lg">
                    {language === 'fr' ? step.label : step.labelEn}
                  </div>
                  {step.amount && (
                    <motion.div 
                      animate={isCurrent ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className={`text-sm font-mono font-semibold mt-1 ${isCurrent ? 'text-white' : 'text-green-600'}`}
                    >
                      {step.amount}
                    </motion.div>
                  )}
                </div>

                {/* Money Animation */}
                {isCurrent && (
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      duration: 2,
                      ease: 'easeInOut'
                    }}
                    className="text-3xl absolute -right-4"
                  >
                    💰
                  </motion.div>
                )}

                {/* Arrow */}
                {index < config.steps.length - 1 && (
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ 
                      repeat: isCurrent ? Infinity : 0, 
                      duration: 1,
                      ease: 'easeInOut'
                    }}
                    className="flex-shrink-0"
                  >
                    <ArrowRight className={`h-6 w-6 rotate-90 ${isCurrent ? 'text-white' : isActive ? 'text-green-400' : 'text-gray-300'}`} />
                  </motion.div>
                )}

                {/* Cycle Arrow */}
                {index === config.steps.length - 1 && config.cyclic && (
                  <motion.div
                    animate={{ rotate: isCurrent ? [0, 360] : 0 }}
                    transition={{ 
                      repeat: isCurrent ? Infinity : 0, 
                      duration: 2,
                      ease: 'linear'
                    }}
                    className="flex-shrink-0"
                  >
                    <div className={`w-8 h-8 rounded-full border-2 border-dashed ${isCurrent ? 'border-white' : 'border-green-400'} flex items-center justify-center`}>
                      <ArrowRight className={`h-4 w-4 ${isCurrent ? 'text-white' : 'text-green-600'}`} />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Money Trail */}
              {isCurrent && index < config.steps.length - 1 && (
                <motion.div
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: 60, opacity: 0 }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: 'easeOut'
                  }}
                  className="absolute left-6 text-2xl"
                >
                  💸
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handleTogglePlay}
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          {isPlaying 
            ? (language === 'fr' ? 'Pause' : 'Pause')
            : (language === 'fr' ? 'Reprendre' : 'Resume')
          }
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          {language === 'fr' ? 'Recommencer' : 'Restart'}
        </button>
      </div>

      {/* Key Insight */}
      {currentStep === config.steps.length - 1 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-6"
        >
          <div className="flex items-start gap-3">
            <div className="bg-yellow-400 text-gray-900 rounded-lg p-2 flex-shrink-0">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <div className="font-bold text-yellow-900 mb-2">
                {language === 'fr' ? 'Comprendre le cycle' : 'Understanding the cycle'}
              </div>
              <p className="text-gray-700">
                {language === 'fr' 
                  ? 'La finance n\'est pas un système fermé : votre épargne finance l\'économie réelle, qui génère des rendements qui vous reviennent. C\'est un cycle vertueux.'
                  : 'Finance is not a closed system: your savings finance the real economy, which generates returns that come back to you. It\'s a virtuous cycle.'
                }
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
