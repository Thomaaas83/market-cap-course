import { motion } from 'framer-motion'
import { useState } from 'react'
import { Building2, Users, TrendingUp, Landmark, Factory, Building, Shield, Scale } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

interface Agent {
  id: string
  label: string
  labelEn: string
  type: 'supplier' | 'intermediary' | 'platform' | 'demander' | 'regulator'
  delay: number
  icon: any
}

interface Flow {
  from: string
  to: string
  label: string
  labelEn: string
  type: 'money' | 'securities' | 'supervision'
}

interface EcosystemAnimationProps {
  config: {
    agents: Agent[]
    flows: Flow[]
  }
}

const iconMap: Record<string, any> = {
  investors: Users,
  assetManagers: Building2,
  markets: TrendingUp,
  banks: Landmark,
  corporates: Factory,
  governments: Building,
  centralBank: Shield,
  regulators: Scale
}

export default function EcosystemAnimation({ config }: EcosystemAnimationProps) {
  const { language } = useLanguage()
  const [activeAgent, setActiveAgent] = useState<string | null>(null)

  const getAgentColor = (type: string) => {
    switch (type) {
      case 'supplier': return 'from-blue-500 to-blue-600'
      case 'intermediary': return 'from-purple-500 to-purple-600'
      case 'platform': return 'from-green-500 to-green-600'
      case 'demander': return 'from-orange-500 to-orange-600'
      case 'regulator': return 'from-gray-600 to-gray-700'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border-2 border-slate-200 p-8">
      {/* Title */}
      <div className="text-center mb-8">
        <h4 className="text-lg font-bold text-gray-900 mb-2">
          {language === 'fr' ? 'Écosystème des Agents Économiques' : 'Economic Agents Ecosystem'}
        </h4>
        <p className="text-sm text-gray-600">
          {language === 'fr' 
            ? 'Cliquez sur un agent pour voir son rôle' 
            : 'Click on an agent to see its role'
          }
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Left Column - Suppliers */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
            {language === 'fr' ? 'Offreurs de Capitaux' : 'Capital Suppliers'}
          </div>
          {config.agents.filter(a => a.type === 'supplier').map((agent, index) => {
            const Icon = iconMap[agent.id] || Building2
            const isActive = activeAgent === agent.id
            
            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                onHoverStart={() => setActiveAgent(agent.id)}
                onHoverEnd={() => setActiveAgent(null)}
                className="cursor-pointer"
              >
                <div className={`
                  bg-gradient-to-br ${getAgentColor(agent.type)}
                  text-white rounded-lg p-4 shadow-md
                  ${isActive ? 'shadow-xl scale-105 ring-2 ring-blue-300' : ''}
                  transition-all duration-300
                `}>
                  <Icon className="h-6 w-6 mb-2" />
                  <div className="text-sm font-semibold">
                    {language === 'fr' ? agent.label : agent.labelEn}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Middle Column - Intermediaries & Platform */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
            {language === 'fr' ? 'Intermédiaires & Marchés' : 'Intermediaries & Markets'}
          </div>
          {config.agents.filter(a => a.type === 'intermediary' || a.type === 'platform').map((agent, index) => {
            const Icon = iconMap[agent.id] || Building2
            const isActive = activeAgent === agent.id
            
            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
                onHoverStart={() => setActiveAgent(agent.id)}
                onHoverEnd={() => setActiveAgent(null)}
                className="cursor-pointer"
              >
                <div className={`
                  bg-gradient-to-br ${getAgentColor(agent.type)}
                  text-white rounded-lg p-4 shadow-md
                  ${isActive ? 'shadow-xl scale-105 ring-2 ring-purple-300' : ''}
                  transition-all duration-300
                `}>
                  <Icon className="h-6 w-6 mb-2" />
                  <div className="text-sm font-semibold">
                    {language === 'fr' ? agent.label : agent.labelEn}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Right Column - Demanders */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
            {language === 'fr' ? 'Demandeurs de Capitaux' : 'Capital Demanders'}
          </div>
          {config.agents.filter(a => a.type === 'demander').map((agent, index) => {
            const Icon = iconMap[agent.id] || Building2
            const isActive = activeAgent === agent.id
            
            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                onHoverStart={() => setActiveAgent(agent.id)}
                onHoverEnd={() => setActiveAgent(null)}
                className="cursor-pointer"
              >
                <div className={`
                  bg-gradient-to-br ${getAgentColor(agent.type)}
                  text-white rounded-lg p-4 shadow-md
                  ${isActive ? 'shadow-xl scale-105 ring-2 ring-orange-300' : ''}
                  transition-all duration-300
                `}>
                  <Icon className="h-6 w-6 mb-2" />
                  <div className="text-sm font-semibold">
                    {language === 'fr' ? agent.label : agent.labelEn}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Regulators Row */}
      <div className="border-t-2 border-gray-200 pt-6">
        <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
          {language === 'fr' ? 'Supervision & Régulation' : 'Supervision & Regulation'}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {config.agents.filter(a => a.type === 'regulator').map((agent, index) => {
            const Icon = iconMap[agent.id] || Building2
            const isActive = activeAgent === agent.id
            
            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.2 }}
                onHoverStart={() => setActiveAgent(agent.id)}
                onHoverEnd={() => setActiveAgent(null)}
                className="cursor-pointer"
              >
                <div className={`
                  bg-gradient-to-br ${getAgentColor(agent.type)}
                  text-white rounded-lg p-4 shadow-md
                  ${isActive ? 'shadow-xl scale-105 ring-2 ring-gray-400' : ''}
                  transition-all duration-300
                `}>
                  <Icon className="h-6 w-6 mb-2" />
                  <div className="text-sm font-semibold">
                    {language === 'fr' ? agent.label : agent.labelEn}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Interactive Flow Visualization - Optimisé : animations non infinies */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="mt-6 space-y-4"
      >
        {/* Money Flow */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border-2 border-green-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="text-2xl">💰</div>
            <div className="font-bold text-green-900">
              {language === 'fr' ? 'Flux d\'argent' : 'Money Flow'}
            </div>
          </div>
          <div className="text-sm text-gray-700 flex items-center gap-2">
            <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">Investisseurs</span>
            <span>→</span>
            <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-semibold">Gestionnaires</span>
            <span>→</span>
            <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">Marchés</span>
            <span>→</span>
            <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">Entreprises</span>
          </div>
        </div>

        {/* Securities Flow */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border-2 border-blue-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="text-2xl">📄</div>
            <div className="font-bold text-blue-900">
              {language === 'fr' ? 'Flux de titres' : 'Securities Flow'}
            </div>
          </div>
          <div className="text-sm text-gray-700 flex items-center gap-2">
            <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">Entreprises</span>
            <span>←</span>
            <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">Marchés</span>
            <span>←</span>
            <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-semibold">Gestionnaires</span>
            <span>←</span>
            <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">Investisseurs</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
