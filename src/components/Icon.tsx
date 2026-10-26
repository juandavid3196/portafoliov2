import {
  AppWindow,
  ArrowRight,
  ArrowUpRight,
  Box,
  Calendar,
  ChartColumn,
  CircleCheck,
  Code,
  FileText,
  GitBranch,
  Globe,
  House,
  Key,
  Landmark,
  Layers,
  LayoutGrid,
  Lightbulb,
  List,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  PenLine,
  Route,
  Search,
  Send,
  Shield,
  Sparkles,
  Sprout,
  Tag,
  User,
  Users,
  Wrench,
  X,
  type LucideIcon,
} from 'lucide-react';

// Dictionaries refer to icons by these keys (see `ic` fields in src/content).
const icons: Record<string, LucideIcon> = {
  search: Search,
  pen: PenLine,
  code: Code,
  check: CircleCheck,
  send: Send,
  chart: ChartColumn,
  layers: Layers,
  users: Users,
  user: User,
  shield: Shield,
  window: AppWindow,
  bulb: Lightbulb,
  sparkle: Sparkles,
  box: Box,
  building: Landmark,
  file: FileText,
  calendar: Calendar,
  mail: Mail,
  sprout: Sprout,
  globe: Globe,
  home: House,
  tag: Tag,
  message: MessageSquare,
  key: Key,
  grid: LayoutGrid,
  wrench: Wrench,
  pin: MapPin,
  git: GitBranch,
  list: List,
  route: Route,
  menu: Menu,
  x: X,
  'arrow-up-right': ArrowUpRight,
  'arrow-right': ArrowRight,
};

type IconProps = {
  name: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export function Icon({ name, size = 24, strokeWidth = 1.4, className }: IconProps) {
  const Cmp = icons[name];
  if (!Cmp) return null;
  return (
    <Cmp
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    />
  );
}
