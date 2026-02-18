import { motion } from 'framer-motion'
import { useState } from 'react'
import { FileText, TrendingUp, Shield, DollarSign, AlertTriangle, Clock } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

type InstrumentType = 'bond' | 'stock' | 'derivative' | null

export default function InstrumentComparisonAnimation() {
  const { language } = useLanguage()
  const [selected, setSelected] = useState<InstrumentType>(null)

  const instruments = {
    bond: {
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-50',
      title: language === 'fr' ? 'Obligation (Dette)' : 'Bond (Debt)',
      titleEn: 'Bond (Debt)',
      description: language === 'fr' 
        ? 'Vous prêtez de l\'argent à un émetteur'
        : 'You lend money to an issuer',
      characteristics: language === 'fr' ? [
        'Vous êtes créancier',
        'Remboursement à échéance fixe',
        'Coupons réguliers (intérêts)',
        'Priorité en cas de faillite',
        'Risque modéré',
        'Rendement prévisible'
      ] : [
        'You are a creditor',
        'Repayment at fixed maturity',
        'Regular coupons (interest)',
        'Priority in bankruptcy',
        'Moderate risk',
        'Predictable return'
      ],
      example: language === 'fr'
        ? 'Obligation Renault 5% à 3 ans : vous prêtez 1000€, recevez 50€/an pendant 3 ans, puis 1000€ à la fin.'
        : 'Renault 5% 3-year bond: you lend €1000, receive €50/year for 3 years, then €1000 at the end.',
      risk: language === 'fr' ? 'Modéré' : 'Moderate',
      return: language === 'fr' ? 'Fixe' : 'Fixed'
    },
    stock: {
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
      borderColor: 'border-green-500',
      bgColor: 'bg-green-50',
      title: language === 'fr' ? 'Action (Capital)' : 'Stock (Equity)',
      titleEn: 'Stock (Equity)',
      description: language === 'fr'
        ? 'Vous achetez une part de l\'entreprise'
        : 'You buy a share of the company',
      characteristics: language === 'fr' ? [
        'Vous êtes copropriétaire',
        'Pas de date de remboursement',
        'Dividendes variables (non garantis)',
        'Dernier en cas de faillite',
        'Risque élevé',
        'Gain potentiellement illimité'
      ] : [
        'You are a co-owner',
        'No repayment date',
        'Variable dividends (not guaranteed)',
        'Last in bankruptcy',
        'High risk',
        'Potentially unlimited gain'
      ],
      example: language === 'fr'
        ? 'Action Total : vous achetez 1 part à 50€. Si Total monte à 70€, vous gagnez 20€. Si elle baisse à 30€, vous perdez 20€.'
        : 'Total stock: you buy 1 share at €50. If Total rises to €70, you gain €20. If it falls to €30, you lose €20.',
      risk: language === 'fr' ? 'Élevé' : 'High',
      return: language === 'fr' ? 'Variable' : 'Variable'
    },
    derivative: {
      icon: Shield,
      color: 'from-purple-500 to-indigo-600',
      borderColor: 'border-purple-500',
      bgColor: 'bg-purple-50',
      title: language === 'fr' ? 'Dérivé (Risque)' : 'Derivative (Risk)',
      titleEn: 'Derivative (Risk)',
      description: language === 'fr'
        ? 'Contrat pour gérer ou transférer un risque'
        : 'Contract to manage or transfer risk',
      characteristics: language === 'fr' ? [
        'Dérive d\'un actif sous-jacent',
        'Protection contre les risques',
        'Effet de levier possible',
        'Complexité élevée',
        'Risque variable',
        'Usage : hedging ou spéculation'
      ] : [
        'Derives from underlying asset',
        'Protection against risks',
        'Leverage possible',
        'High complexity',
        'Variable risk',
        'Use: hedging or speculation'
      ],
      example: language === 'fr'
        ? 'Option Call sur Apple : droit d\'acheter à 150€. Si Apple monte à 180€, vous exercez et gagnez 30€ (moins la prime).'
        : 'Call option on Apple: right to buy at €150. If Apple rises to €180, you exercise and gain €30 (minus premium).',
      risk: language === 'fr' ? 'Variable' : 'Variable',
      return: language === 'fr' ? 'Variable' : 'Variable'
    }
  }

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl border-2 border-slate-200 p-6">
      {/* Title */}
      <div className="text-center mb-6">
        <h4 className="text-xl font-bold text-gray-900 mb-2">
          {language === 'fr' 
            ? 'Les 3 familles d\'instruments financiers' 
            : 'The 3 Families of Financial Instruments'
          }
        </h4>
        <p className="text-sm text-gray-600">
          {language === 'fr'
            ? 'Cliquez sur un instrument pour découvrir ses caractéristiques'
            : 'Click on an instrument to discover its characteristics'
          }
        </p>
      </div>

      {/* Instrument Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {(Object.keys(instruments) as InstrumentType[]).map((key) => {
          if (!key) return null
          const instrument = instruments[key]
          const Icon = instrument.icon
          const isSelected = selected === key

          return (
            <motion.button
              key={key}
              onClick={() => setSelected(key)}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              animate={{
                scale: isSelected ? 1.05 : 1,
                boxShadow: isSelected 
                  ? '0 20px 40px rgba(0, 0, 0, 0.15)'
                  : '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
              className={`relative bg-gradient-to-br ${instrument.color} text-white rounded-xl p-6 transition-all border-4 ${
                isSelected ? instrument.borderColor : 'border-transparent'
              }`}
            >
              <Icon className="h-12 w-12 mx-auto mb-3" />
              <div className="font-bold text-lg mb-2">{instrument.title}</div>
              <div className="text-sm opacity-90">{instrument.description}</div>
              
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-white text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-lg"
                >
                  ✓
                </motion.div>
              )}
            </motion.button>
          )
        })}
      </div>

      {/* Details Panel */}
      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${instruments[selected].bgColor} border-2 ${instruments[selected].borderColor} rounded-xl p-6`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Characteristics */}
            <div>
              <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-lg">📋</span>
                {language === 'fr' ? 'Caractéristiques' : 'Characteristics'}
              </h5>
              <ul className="space-y-2">
                {instruments[selected].characteristics.map((char, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start text-sm text-gray-700 bg-white rounded-lg p-2"
                  >
                    <span className="mr-2">{char}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right: Example & Metrics */}
            <div className="space-y-4">
              {/* Example */}
              <div>
                <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-lg">💡</span>
                  {language === 'fr' ? 'Exemple concret' : 'Concrete Example'}
                </h5>
                <div className="bg-white rounded-lg p-4 text-sm text-gray-700 leading-relaxed">
                  {instruments[selected].example}
                </div>
              </div>

              {/* Risk & Return Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-4 text-center">
                  <AlertTriangle className="h-6 w-6 mx-auto mb-2 text-orange-600" />
                  <div className="text-xs text-gray-600 mb-1">
                    {language === 'fr' ? 'Risque' : 'Risk'}
                  </div>
                  <div className="font-bold text-gray-900">
                    {instruments[selected].risk}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <DollarSign className="h-6 w-6 mx-auto mb-2 text-green-600" />
                  <div className="text-xs text-gray-600 mb-1">
                    {language === 'fr' ? 'Rendement' : 'Return'}
                  </div>
                  <div className="font-bold text-gray-900">
                    {instruments[selected].return}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Comparison Table */}
      {!selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-xl p-6 border-2 border-gray-200"
        >
          <h5 className="font-bold text-gray-900 mb-4 text-center">
            {language === 'fr' ? 'Tableau comparatif' : 'Comparison Table'}
          </h5>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left p-3 font-bold text-gray-700"></th>
                  <th className="text-center p-3 font-bold text-blue-700">
                    {language === 'fr' ? 'Obligation' : 'Bond'}
                  </th>
                  <th className="text-center p-3 font-bold text-green-700">
                    {language === 'fr' ? 'Action' : 'Stock'}
                  </th>
                  <th className="text-center p-3 font-bold text-purple-700">
                    {language === 'fr' ? 'Dérivé' : 'Derivative'}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-semibold text-gray-700">
                    {language === 'fr' ? 'Statut' : 'Status'}
                  </td>
                  <td className="p-3 text-center">
                    {language === 'fr' ? 'Créancier' : 'Creditor'}
                  </td>
                  <td className="p-3 text-center">
                    {language === 'fr' ? 'Propriétaire' : 'Owner'}
                  </td>
                  <td className="p-3 text-center">
                    {language === 'fr' ? 'Contractant' : 'Contractor'}
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-semibold text-gray-700">
                    {language === 'fr' ? 'Durée' : 'Duration'}
                  </td>
                  <td className="p-3 text-center">
                    {language === 'fr' ? 'Fixe' : 'Fixed'}
                  </td>
                  <td className="p-3 text-center">
                    {language === 'fr' ? 'Illimitée' : 'Unlimited'}
                  </td>
                  <td className="p-3 text-center">
                    {language === 'fr' ? 'Variable' : 'Variable'}
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-semibold text-gray-700">
                    {language === 'fr' ? 'Revenu' : 'Income'}
                  </td>
                  <td className="p-3 text-center">
                    {language === 'fr' ? 'Coupons fixes' : 'Fixed coupons'}
                  </td>
                  <td className="p-3 text-center">
                    {language === 'fr' ? 'Dividendes variables' : 'Variable dividends'}
                  </td>
                  <td className="p-3 text-center">
                    {language === 'fr' ? 'Selon contrat' : 'Per contract'}
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-gray-700">
                    {language === 'fr' ? 'Objectif' : 'Purpose'}
                  </td>
                  <td className="p-3 text-center">
                    {language === 'fr' ? 'Financement' : 'Financing'}
                  </td>
                  <td className="p-3 text-center">
                    {language === 'fr' ? 'Financement' : 'Financing'}
                  </td>
                  <td className="p-3 text-center">
                    {language === 'fr' ? 'Gestion risque' : 'Risk management'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      )}

      {/* Info Box */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-lg p-4"
      >
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-gray-700">
            {language === 'fr' ? (
              <>
                <strong>Complémentarité :</strong> Ces trois familles ne sont pas en concurrence.
                Une entreprise utilise souvent les trois : <strong>actions</strong> pour lever des fonds permanents,
                <strong> obligations</strong> pour emprunter à moindre coût, et <strong>dérivés</strong> pour
                gérer ses risques opérationnels.
              </>
            ) : (
              <>
                <strong>Complementarity:</strong> These three families are not competing.
                A company often uses all three: <strong>stocks</strong> to raise permanent funds,
                <strong> bonds</strong> to borrow at lower cost, and <strong>derivatives</strong> to
                manage its operational risks.
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
