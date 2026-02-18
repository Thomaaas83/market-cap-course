import { motion } from 'framer-motion'
import { useState } from 'react'
import { Users, Building2, TrendingUp, ArrowRight, Wallet, FileText } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

export default function MarketFlowAnimation() {
  const { language } = useLanguage()
  const [activeStep, setActiveStep] = useState(0)

  const handleStepClick = (step: number) => {
    setActiveStep(step)
  }

  const steps = [
    {
      id: 0,
      title: language === 'fr' ? 'Vue d\'ensemble' : 'Overview',
      description: language === 'fr' 
        ? 'Le marché des capitaux met en relation épargnants et emprunteurs'
        : 'The capital market connects savers and borrowers'
    },
    {
      id: 1,
      title: language === 'fr' ? 'Agents en surplus' : 'Surplus agents',
      description: language === 'fr'
        ? 'Ménages, fonds de pension et assurances ont de l\'épargne à placer'
        : 'Households, pension funds and insurance have savings to invest'
    },
    {
      id: 2,
      title: language === 'fr' ? 'Flux d\'argent' : 'Money flow',
      description: language === 'fr'
        ? 'L\'épargne circule vers le marché des capitaux'
        : 'Savings flow to the capital market'
    },
    {
      id: 3,
      title: language === 'fr' ? 'Agents en déficit' : 'Deficit agents',
      description: language === 'fr'
        ? 'Entreprises et États reçoivent les fonds pour leurs projets'
        : 'Companies and governments receive funds for their projects'
    },
    {
      id: 4,
      title: language === 'fr' ? 'Échange de titres' : 'Securities exchange',
      description: language === 'fr'
        ? 'En retour, les épargnants reçoivent des titres financiers'
        : 'In return, savers receive financial securities'
    }
  ]

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-2xl border border-slate-200 p-8">
      {/* Title */}
      <div className="text-center mb-8">
        <h4 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
          {language === 'fr' 
            ? 'Comment circulent les capitaux ?' 
            : 'How does capital flow?'
          }
        </h4>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
          {language === 'fr'
            ? 'Cliquez sur les étapes ci-dessous pour comprendre le flux d\'argent'
            : 'Click on the steps below to understand the money flow'
          }
        </p>
      </div>

      {/* Main Visual - Simplified Layout */}
      <div className="bg-white/90 rounded-2xl p-8 mb-8 shadow-lg border border-slate-200">
        <div className="flex items-center justify-center gap-6">
          
          {/* Left: Surplus Agents */}
          <motion.div
            animate={{
              scale: activeStep === 1 ? 1.05 : 1,
              opacity: activeStep === 0 || activeStep === 1 || activeStep === 2 ? 1 : 0.4
            }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className={`relative rounded-2xl p-6 shadow-xl transition-all duration-500 ${
              activeStep === 1 
                ? 'bg-gradient-to-br from-emerald-500 to-green-600 ring-4 ring-emerald-300' 
                : 'bg-gradient-to-br from-emerald-400 to-green-500'
            }`}>
              <Users className="h-16 w-16 text-white mx-auto mb-2" />
              <div className="text-white font-bold text-center text-sm whitespace-nowrap">
                {language === 'fr' ? 'Épargnants' : 'Savers'}
              </div>
              
              {/* Money badge */}
              {(activeStep === 1 || activeStep === 2) && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-full px-3 py-1 shadow-lg border-2 border-emerald-500"
                >
                  <div className="flex items-center gap-1">
                    <Wallet className="h-4 w-4 text-emerald-600" />
                    <span className="text-xs font-bold text-emerald-900">
                      {language === 'fr' ? 'Épargne' : 'Savings'}
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Arrow 1: Money Flow */}
          <div className="flex flex-col items-center">
            <motion.div
              animate={{
                opacity: activeStep === 2 ? 1 : 0.3,
                x: activeStep === 2 ? [0, 10, 0] : 0
              }}
              transition={{
                opacity: { duration: 0.4 },
                x: { repeat: activeStep === 2 ? Infinity : 0, duration: 1.5 }
              }}
            >
              <ArrowRight className={`h-12 w-12 transition-colors duration-500 ${
                activeStep === 2 ? 'text-emerald-600' : 'text-gray-300'
              }`} />
            </motion.div>
            {activeStep === 2 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-semibold text-emerald-700 mt-2"
              >
                {language === 'fr' ? 'Argent' : 'Money'}
              </motion.div>
            )}
          </div>

          {/* Center: Market */}
          <motion.div
            animate={{
              scale: activeStep === 2 || activeStep === 4 ? 1.08 : 1,
              opacity: activeStep === 0 ? 1 : activeStep === 2 || activeStep === 4 ? 1 : 0.5
            }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className={`rounded-2xl p-8 shadow-2xl transition-all duration-500 ${
              activeStep === 2 || activeStep === 4
                ? 'bg-gradient-to-br from-indigo-600 to-purple-700 ring-4 ring-indigo-300'
                : 'bg-gradient-to-br from-indigo-500 to-purple-600'
            }`}>
              <TrendingUp className="h-20 w-20 text-white mx-auto mb-2" />
              <div className="text-white font-bold text-center whitespace-nowrap">
                {language === 'fr' ? 'Marché des' : 'Capital'}
              </div>
              <div className="text-white font-bold text-center whitespace-nowrap">
                {language === 'fr' ? 'Capitaux' : 'Market'}
              </div>
            </div>
          </motion.div>

          {/* Arrow 2: Money to Borrowers */}
          <div className="flex flex-col items-center">
            <motion.div
              animate={{
                opacity: activeStep === 3 ? 1 : 0.3,
                x: activeStep === 3 ? [0, 10, 0] : 0
              }}
              transition={{
                opacity: { duration: 0.4 },
                x: { repeat: activeStep === 3 ? Infinity : 0, duration: 1.5 }
              }}
            >
              <ArrowRight className={`h-12 w-12 transition-colors duration-500 ${
                activeStep === 3 ? 'text-orange-600' : 'text-gray-300'
              }`} />
            </motion.div>
            {activeStep === 3 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-semibold text-orange-700 mt-2"
              >
                {language === 'fr' ? 'Fonds' : 'Funds'}
              </motion.div>
            )}
          </div>

          {/* Right: Deficit Agents */}
          <motion.div
            animate={{
              scale: activeStep === 3 ? 1.05 : 1,
              opacity: activeStep === 0 || activeStep === 3 || activeStep === 4 ? 1 : 0.4
            }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className={`relative rounded-2xl p-6 shadow-xl transition-all duration-500 ${
              activeStep === 3
                ? 'bg-gradient-to-br from-orange-500 to-red-600 ring-4 ring-orange-300'
                : 'bg-gradient-to-br from-orange-400 to-red-500'
            }`}>
              <Building2 className="h-16 w-16 text-white mx-auto mb-2" />
              <div className="text-white font-bold text-center text-sm whitespace-nowrap">
                {language === 'fr' ? 'Emprunteurs' : 'Borrowers'}
              </div>
              
              {/* Securities badge */}
              {activeStep === 4 && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-full px-3 py-1 shadow-lg border-2 border-orange-500"
                >
                  <div className="flex items-center gap-1">
                    <FileText className="h-4 w-4 text-orange-600" />
                    <span className="text-xs font-bold text-orange-900">
                      {language === 'fr' ? 'Titres' : 'Securities'}
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Arrow 3: Securities Return */}
          <div className="flex flex-col items-center">
            <motion.div
              animate={{
                opacity: activeStep === 4 ? 1 : 0.3,
                x: activeStep === 4 ? [0, -10, 0] : 0
              }}
              transition={{
                opacity: { duration: 0.4 },
                x: { repeat: activeStep === 4 ? Infinity : 0, duration: 1.5 }
              }}
            >
              <ArrowRight className={`h-12 w-12 rotate-180 transition-colors duration-500 ${
                activeStep === 4 ? 'text-blue-600' : 'text-gray-300'
              }`} />
            </motion.div>
            {activeStep === 4 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-semibold text-blue-700 mt-2"
              >
                {language === 'fr' ? 'Titres' : 'Securities'}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Steps */}
      <div className="grid grid-cols-5 gap-3">
        {steps.map((step) => (
          <motion.button
            key={step.id}
            onClick={() => handleStepClick(step.id)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`rounded-xl p-4 text-left transition-all duration-300 ${
              activeStep === step.id
                ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg ring-2 ring-indigo-300'
                : 'bg-white/60 hover:bg-white text-gray-700 hover:shadow-md border border-slate-200/60'
            }`}
          >
            <div className={`text-2xl font-bold mb-2 ${
              activeStep === step.id ? 'text-white' : 'text-indigo-600'
            }`}>
              {step.id === 0 ? '○' : step.id}
            </div>
            <div className={`text-xs font-semibold mb-1 ${
              activeStep === step.id ? 'text-white' : 'text-gray-900'
            }`}>
              {step.title}
            </div>
            <div className={`text-xs ${
              activeStep === step.id ? 'text-indigo-100' : 'text-gray-600'
            }`}>
              {step.description}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Key Takeaway */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-5 border border-blue-200"
      >
        <div>
          <div className="font-bold text-indigo-900 mb-2">
            {language === 'fr' ? 'À retenir' : 'Key takeaway'}
          </div>
          <div className="text-sm text-gray-700 leading-relaxed">
            {language === 'fr' ? (
              <>
                Le marché des capitaux est un <strong>système d'échange</strong> : 
                les épargnants apportent leur argent et reçoivent des titres financiers, 
                tandis que les emprunteurs obtiennent les fonds nécessaires pour leurs projets.
              </>
            ) : (
              <>
                The capital market is an <strong>exchange system</strong>: 
                savers provide their money and receive financial securities, 
                while borrowers obtain the funds needed for their projects.
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
