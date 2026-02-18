import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Users, User, DollarSign, ChevronRight, TrendingUp, FileText } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

interface DecisionFlowAnimationProps {
  config: {
    nodes: Array<{
      id: string
      label: string
      labelEn: string
      type: 'decision' | 'execution' | 'financial' | 'fork' | 'option'
    }>
    interactive: boolean
    toggleOptions: string[]
  }
}

export default function DecisionFlowAnimation({ config: _config }: DecisionFlowAnimationProps) {
  const { language } = useLanguage()
  const [selectedOption, setSelectedOption] = useState<'equity' | 'debt' | null>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  const equityAdvantages = language === 'fr' 
    ? ['Pas d\'obligation de remboursement', 'Renforce le bilan', 'Pas de charges fixes']
    : ['No repayment obligation', 'Strengthens balance sheet', 'No fixed charges']
  
  const equityDisadvantages = language === 'fr'
    ? ['Dilution du contrôle', 'Dividendes incertains', 'Coût élevé']
    : ['Dilution of control', 'Uncertain dividends', 'High cost']

  const debtAdvantages = language === 'fr'
    ? ['Pas de dilution', 'Coût prévisible', 'Déductible fiscalement']
    : ['No dilution', 'Predictable cost', 'Tax deductible']
  
  const debtDisadvantages = language === 'fr'
    ? ['Obligation de remboursement', 'Charges fixes', 'Risque financier accru']
    : ['Repayment obligation', 'Fixed charges', 'Increased financial risk']

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-purple-50 rounded-xl border-2 border-slate-200 p-8">
      {/* Flow Chart */}
      <div className="flex flex-col items-center gap-6 mb-8">
        {/* Board */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onHoverStart={() => setHoveredNode('board')}
          onHoverEnd={() => setHoveredNode(null)}
          className="relative"
        >
          <div className={`
            bg-gradient-to-br from-blue-500 to-blue-600 text-white
            rounded-xl p-6 shadow-lg transition-all duration-300
            ${hoveredNode === 'board' ? 'scale-110 shadow-2xl' : ''}
          `}>
            <Users className="h-8 w-8 mx-auto mb-2" />
            <div className="font-bold text-center">
              {language === 'fr' ? 'Conseil d\'Administration' : 'Board of Directors'}
            </div>
          </div>
          <motion.div
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronRight className="h-6 w-6 text-blue-500 rotate-90" />
          </motion.div>
        </motion.div>

        {/* CEO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          onHoverStart={() => setHoveredNode('ceo')}
          onHoverEnd={() => setHoveredNode(null)}
          className="relative"
        >
          <div className={`
            bg-gradient-to-br from-purple-500 to-purple-600 text-white
            rounded-xl p-6 shadow-lg transition-all duration-300
            ${hoveredNode === 'ceo' ? 'scale-110 shadow-2xl' : ''}
          `}>
            <User className="h-8 w-8 mx-auto mb-2" />
            <div className="font-bold text-center">CEO</div>
          </div>
          <motion.div
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
          >
            <ChevronRight className="h-6 w-6 text-purple-500 rotate-90" />
          </motion.div>
        </motion.div>

        {/* CFO */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          onHoverStart={() => setHoveredNode('cfo')}
          onHoverEnd={() => setHoveredNode(null)}
          className="relative"
        >
          <div className={`
            bg-gradient-to-br from-green-500 to-green-600 text-white
            rounded-xl p-6 shadow-lg transition-all duration-300
            ${hoveredNode === 'cfo' ? 'scale-110 shadow-2xl' : ''}
          `}>
            <DollarSign className="h-8 w-8 mx-auto mb-2" />
            <div className="font-bold text-center">CFO</div>
          </div>
          <motion.div
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 1 }}
          >
            <ChevronRight className="h-6 w-6 text-green-500 rotate-90" />
          </motion.div>
        </motion.div>

        {/* Choice */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: 'spring' }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-4 shadow-lg">
            <div className="font-bold">
              {language === 'fr' ? 'Choix de financement' : 'Financing choice'}
            </div>
          </div>
        </motion.div>

        {/* Options */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-6 mt-4"
        >
          {/* Equity */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedOption(selectedOption === 'equity' ? null : 'equity')}
            className={`
              rounded-xl p-6 shadow-lg transition-all duration-300
              ${selectedOption === 'equity' 
                ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white ring-4 ring-blue-300' 
                : 'bg-white text-gray-700 hover:shadow-xl'
              }
            `}
          >
            <TrendingUp className="h-10 w-10 mx-auto mb-3" />
            <div className="font-bold text-lg mb-1">
              {language === 'fr' ? 'Actions' : 'Equity'}
            </div>
            <div className="text-sm opacity-90">ECM</div>
          </motion.button>

          {/* Debt */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedOption(selectedOption === 'debt' ? null : 'debt')}
            className={`
              rounded-xl p-6 shadow-lg transition-all duration-300
              ${selectedOption === 'debt' 
                ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white ring-4 ring-purple-300' 
                : 'bg-white text-gray-700 hover:shadow-xl'
              }
            `}
          >
            <FileText className="h-10 w-10 mx-auto mb-3" />
            <div className="font-bold text-lg mb-1">
              {language === 'fr' ? 'Obligations' : 'Debt'}
            </div>
            <div className="text-sm opacity-90">DCM</div>
          </motion.button>
        </motion.div>
      </div>

      {/* Details Panel */}
      <AnimatePresence mode="wait">
        {selectedOption && (
          <motion.div
            key={selectedOption}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className={`
              rounded-xl p-6 mt-6
              ${selectedOption === 'equity' 
                ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300' 
                : 'bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300'
              }
            `}>
              <h4 className="font-bold text-lg mb-4 text-gray-900">
                {selectedOption === 'equity' 
                  ? (language === 'fr' ? 'Financement par Actions' : 'Equity Financing')
                  : (language === 'fr' ? 'Financement par Dette' : 'Debt Financing')
                }
              </h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                {/* Advantages */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                    {language === 'fr' ? 'Avantages' : 'Advantages'}
                  </div>
                  <ul className="space-y-2">
                    {(selectedOption === 'equity' ? equityAdvantages : debtAdvantages).map((adv, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-sm text-gray-700 flex items-start gap-2"
                      >
                        <span className="text-green-500 mt-0.5">•</span>
                        {adv}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Disadvantages */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                    {language === 'fr' ? 'Inconvénients' : 'Disadvantages'}
                  </div>
                  <ul className="space-y-2">
                    {(selectedOption === 'equity' ? equityDisadvantages : debtDisadvantages).map((dis, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-sm text-gray-700 flex items-start gap-2"
                      >
                        <span className="text-red-500 mt-0.5">•</span>
                        {dis}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instruction */}
      {!selectedOption && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-gray-500 text-sm mt-6"
        >
          {language === 'fr' 
            ? 'Cliquez sur une option pour voir les détails' 
            : 'Click on an option to see details'
          }
        </motion.div>
      )}
    </div>
  )
}
