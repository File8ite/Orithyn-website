import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { 
  FileText, 
  Database, 
  Users, 
  MessageSquareOff, 
  BarChart3, 
  AlertOctagon, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface Challenge {
  icon: typeof FileText;
  title: string;
  problem: string;
  solution: string;
}

const challenges: Challenge[] = [
  {
    icon: FileText,
    title: "Manual Processes & Repetitive Admin",
    problem: "Valuable staff hours lost to routine data entry, manual paperwork, and tedious copy-pasting across disconnected spreadsheets.",
    solution: "We build custom workflow automations and digital forms that eliminate repetitive manual steps and reduce costly human errors.",
  },
  {
    icon: Database,
    title: "Disorganised Records & Information",
    problem: "Operational data, customer records, and invoices scattered across file folders, informal messaging, and conflicting spreadsheets.",
    solution: "We centralize your business data into secure, structured relational databases providing a single, reliable source of truth.",
  },
  {
    icon: Users,
    title: "Difficulty Managing Customers & Orders",
    problem: "Missed sales leads, delayed customer follow-ups, and booking confusion leading to lost revenue and customer frustration.",
    solution: "We develop dedicated client portals, booking engines, and operational tools that streamline every customer touchpoint.",
  },
  {
    icon: MessageSquareOff,
    title: "Inefficient Team Coordination",
    problem: "Important task handoffs stalled in email threads or chat groups without clear status ownership or accountability.",
    solution: "We deploy multi-user management platforms featuring clear role-based permissions, status tracking, and automated task alerts.",
  },
  {
    icon: BarChart3,
    title: "Limited Visibility Into Operations",
    problem: "Leadership making strategic decisions without real-time insight into daily sales, current inventory, or team throughput.",
    solution: "We design custom administrative dashboards with live operational metrics and automated reporting to inform your decisions.",
  },
  {
    icon: AlertOctagon,
    title: "Outdated & Rigid Systems",
    problem: "Off-the-shelf software packages that fail to fit your business workflows, accompanied by escalating subscription license fees.",
    solution: "We engineer bespoke software tailored precisely to how your business operates, with full contracted code ownership.",
  },
];

export default function BusinessChallenges() {
  return (
    <Section id="challenges" className="py-16 md:py-24 border-y border-zinc-800/80 bg-zinc-950/70">
      <div className="max-w-3xl space-y-4 mb-12 md:mb-16 text-center mx-auto px-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
          Business Challenges We Solve
        </span>
        <Heading level={2} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Practical Problems We Help You Overcome
        </Heading>
        <Text className="text-base sm:text-lg text-zinc-300">
          Before recommending a technology stack, we look at the operational friction slowing your business down. We build software to turn disorganised workflows into reliable, productive systems.
        </Text>
      </div>

      {/* Grid of Challenges */}
      <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {challenges.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.title}
              className="p-6 sm:p-7 bg-zinc-900/60 border-zinc-800/90 shadow-xl flex flex-col justify-between hover:border-amber-500/40 transition duration-300"
            >
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.problem}
                </p>

                <div className="pt-3 border-t border-zinc-800/70 space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" /> How We Solve It
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Bottom Bridge CTA */}
      <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="space-y-1">
          <h4 className="text-base font-bold text-white">Recognise these challenges in your business?</h4>
          <p className="text-xs sm:text-sm text-zinc-400">
            Tell us about your current operational workflow. We will recommend a practical software roadmap.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 text-xs sm:text-sm font-extrabold transition shrink-0 shadow-lg shadow-amber-500/20"
        >
          Discuss Your Challenges <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
