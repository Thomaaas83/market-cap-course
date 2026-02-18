import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { User, Users2, TrendingUp, Shield, Building2, ArrowRight, Lightbulb } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

interface Step {
  id: string
  label: string
  labelEn: string
  icon: string
  role?: string
  roleEn?: string
}

interface ValueChainAnimationProps {
  config: {
    steps: Step[]
    highlight: string
  }
}

const iconMap: Record<string, any> = {
  'user': User,
  'users': Users2,
  'chart': TrendingUp,
  'shield': Shield,
  'building': Building2
}

export default function ValueChainAnimation({ config }: ValueChainAnimationProps) {
  const { language } = useLanguage()
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= config.steps.length - 1) {
          setIsPlaying(false)
          return prev
        }
        return prev + 1
      })
    }, 1500)

    return () => clearInterval(interval)
  }, [isPlaying, config.steps.length])

  const handleReset = () => {
    setCurrentStep(0)
    setIsPlaying(true)
  }

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl border-2 border-slate-200 p-8">
      {/* Title */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {language === 'fr' ? 'Parcours d\'1€ investi' : 'Journey of €1 invested'}
        </h3>
        <p className="text-sm text-gray-600">
          {language === 'fr' 
            ? 'Suivez le chemin de votre investissement à travers l\'organisation' 
            : 'Follow the path of your investment through the organization'
          }
        </p>
      </div>

      {/* Horizontal Steps */}
      <div className="space-y-6">
        {config.steps.map((step, index) => {
          const Icon = iconMap[step.icon] || User
          const isActive = index <= currentStep
          const isCurrent = index === currentStep

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isActive ? 1 : 0.3,
                x: 0
              }}
              transition={{ delay: index * 0.3 }}
              className="relative"
            >
              <div className={`
                flex items-center gap-4 p-4 rounded-lg transition-all duration-500
                ${isCurrent 
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg scale-105' 
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
                    ? 'bg-indigo-100 text-indigo-600'
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
                    ? 'bg-indigo-50'
                    : 'bg-gray-100'
                  }
                `}>
                  <Icon className={`h-6 w-6 ${isCurrent ? 'text-white' : isActive ? 'text-indigo-600' : 'text-gray-400'}`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="font-bold text-lg mb-1">
                    {language === 'fr' ? step.label : step.labelEn}
                  </div>
                  {step.role && (
                    <div className={`text-sm ${isCurrent ? 'text-white/90' : 'text-gray-600'}`}>
                      {language === 'fr' ? step.role : step.roleEn}
                    </div>
                  )}
                </div>

                {/* Money Animation */}
                {isCurrent && (
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      ease: 'easeInOut'
                    }}
                    className="text-3xl"
                  >
                    💰
                  </motion.div>
                )}

                {/* Arrow */}
                {index < config.steps.length - 1 && (
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      repeat: isCurrent ? Infinity : 0, 
                      duration: 1,
                      ease: 'easeInOut'
                    }}
                    className="flex-shrink-0"
                  >
                    <ArrowRight className={`h-6 w-6 ${isCurrent ? 'text-white' : isActive ? 'text-indigo-400' : 'text-gray-300'}`} />
                  </motion.div>
                )}
              </div>

              {/* Money Trail */}
              {isCurrent && index < config.steps.length - 1 && (
                <motion.div
                  initial={{ x: 0, opacity: 1 }}
                  animate={{ x: 100, opacity: 0 }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: 'easeOut'
                  }}
                  className="absolute left-full top-1/2 transform -translate-y-1/2 text-2xl"
                >
                  💸
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Highlight Box */}
      {currentStep === config.steps.length - 1 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-6"
        >
          <div className="flex items-start gap-3">
            <div className="bg-yellow-400 text-gray-900 rounded-lg p-2 flex-shrink-0">
              <Lightbulb className="h-6 w-6" />
            </div>
            <div>
              <div className="font-bold text-yellow-900 mb-2">
                {language === 'fr' ? 'Point clé' : 'Key Point'}
              </div>
              <p className="text-gray-700">
                {language === 'fr' 
                  ? 'Séparation des fonctions : ceux qui décident ne sont pas ceux qui contrôlent. Cette séparation protège les investisseurs.'
                  : 'Separation of functions: those who decide are not those who control. This separation protects investors.'
                }
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Controls */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          {language === 'fr' ? 'Rejouer l\'animation' : 'Replay animation'}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / config.steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
          />
        </div>
        <div className="text-center text-sm text-gray-600 mt-2">
          {language === 'fr' ? 'Étape' : 'Step'} {currentStep + 1} / {config.steps.length}
        </div>
      </div>
    </div>
  )
}
