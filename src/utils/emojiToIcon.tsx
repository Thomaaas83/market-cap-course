import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Shield, 
  RefreshCw, 
  AlertTriangle, 
  BarChart3, 
  Coins, 
  Calendar, 
  Building2, 
  FileText, 
  Palette, 
  Search, 
  Lightbulb, 
  Dices, 
  Package, 
  CheckCircle2, 
  Globe, 
  Droplets, 
  Wheat, 
  Rocket, 
  X,
  Users,
  Home,
  Briefcase,
  Flag,
  Clock
} from 'lucide-react'
import { LucideIcon } from 'lucide-react'

// Mapping des émojis vers les icônes Lucide
export const emojiToIconMap: Record<string, LucideIcon> = {
  '💰': DollarSign,
  '📈': TrendingUp,
  '📉': TrendingDown,
  '🎯': Target,
  '🛡️': Shield,
  '🔄': RefreshCw,
  '⚠️': AlertTriangle,
  '📊': BarChart3,
  '💵': Coins,
  '📅': Calendar,
  '🏢': Building2,
  '🏛️': Building2,
  '📜': FileText,
  '🌈': Palette,
  '🔍': Search,
  '💡': Lightbulb,
  '🎲': Dices,
  '📦': Package,
  '✅': CheckCircle2,
  '🌍': Globe,
  '🇫🇷': Flag,
  '🇺🇸': Flag,
  '🇪🇺': Flag,
  '💧': Droplets,
  '🌾': Wheat,
  '🚀': Rocket,
  '❌': X,
  '👴': Users,
  '🏠': Home,
  '💼': Briefcase,
  '🏦': Building2,
  '⏱️': Clock,
  '⏳': Clock,
}

// Fonction pour extraire l'émoji du début d'une chaîne
export function extractEmoji(text: string): { emoji: string | null; rest: string } {
  // Regex pour détecter les émojis au début de la chaîne (y compris les émojis composés)
  const emojiRegex = /^([\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E0}-\u{1F1FF}\u{FE0F}]+)\s*/u
  const match = text.match(emojiRegex)
  
  if (match) {
    return {
      emoji: match[1],
      rest: text.slice(match[0].length)
    }
  }
  
  return {
    emoji: null,
    rest: text
  }
}

// Composant pour afficher une icône à la place d'un émoji
export function EmojiIcon({ emoji, className = '' }: { emoji: string; className?: string }) {
  const IconComponent = emojiToIconMap[emoji]
  
  if (!IconComponent) {
    // Si l'émoji n'est pas mappé, on retourne l'émoji original
    return <span className={className}>{emoji}</span>
  }
  
  return <IconComponent className={className} />
}

// Fonction pour remplacer les émojis par des icônes dans un texte
export function replaceEmojisWithIcons(text: string, iconClassName: string = 'h-5 w-5 inline-block mr-2'): JSX.Element {
  const { emoji, rest } = extractEmoji(text)
  
  if (emoji) {
    return (
      <span className="flex items-start w-full">
        <EmojiIcon emoji={emoji} className={`${iconClassName} flex-shrink-0`} />
        <span className="flex-1">{rest}</span>
      </span>
    )
  }
  
  return <span className="w-full">{text}</span>
}
