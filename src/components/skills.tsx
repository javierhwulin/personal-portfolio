import { Brain, Server, Cloud, Workflow } from "lucide-react"

const skillCategories = [
  // Top row - Primary skills
  {
    title: "ML / Data Science",
    icon: Brain,
    subtitle: "Shipped 4 PyTorch microservices to prod (>1M req/mo)",
    isPrimary: true,
    skills: {
      core: ["Python", "PyTorch", "Deep Learning", "Computer Vision", "NLP", "Neural Networks"],
      proficient: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Hugging Face", "PyTorch Lightning"],
      familiar: ["Keras", "OpenAI", "Anthropic", "Gemini", "Llama", "Reinforcement Learning"]
    }
  },
  {
    title: "Backend & APIs",
    icon: Server,
    subtitle: "Built scalable REST/GraphQL APIs serving 10K+ concurrent users",
    isPrimary: true,
    skills: {
      core: ["FastAPI", "JavaScript/TypeScript", "Vue.js", "PostgreSQL", "REST APIs"],
      proficient: ["Django", "Java", "Express", "MySQL", "GraphQL"],
      familiar: ["Flask", "Nuxt.js", "C/C++", "Rust", "MongoDB"]
    }
  },
  // Bottom row - Supporting skills
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    subtitle: "Automated CI/CD pipelines with 99.9% uptime",
    isPrimary: false,
    skills: {
      core: ["Docker", "GCP", "CI/CD", "Kubernetes", "Terraform", "GitHub Actions"],
      proficient: ["Firebase", "Supabase", "Cloudflare", "Monitoring"],
      familiar: []
    }
  },
  {
    title: "Data Engineering",
    icon: Workflow,
    subtitle: "Processed 100TB+ datasets with distributed computing",
    isPrimary: false,
    skills: {
      core: ["Apache Spark", "Hadoop", "Data Pipelines"],
      proficient: ["Model Serving", "A/B Testing"],
      familiar: ["MLOps", "ETL"]
    }
  }
]

const SkillPill = ({ skill, tier }: { skill: string; tier: 'core' | 'proficient' | 'familiar' }) => {
  const tierStyles = {
    core: "bg-primary text-primary-foreground border-primary",
    proficient: "bg-muted text-muted-foreground border-muted",
    familiar: "bg-background text-foreground border-border"
  }
  
  const tierIcons = {
    core: "●●●",
    proficient: "●●○", 
    familiar: "●○○"
  }

  return (
    <span className={`
      inline-flex items-center gap-xs px-md py-sm rounded-lg font-body text-small font-medium 
      border transition-all hover:scale-105 ${tierStyles[tier]}
    `}>
      <span className="text-xs opacity-60">{tierIcons[tier]}</span>
      {skill}
    </span>
  )
}

const SkillCategory = ({ category }: { category: typeof skillCategories[0] }) => (
  <div className={`
    bg-card text-card-foreground rounded-lg shadow-2 hover-lift overflow-hidden
    ${category.isPrimary ? 'p-lg' : 'p-md'}
  `}>
    <div className="flex items-start gap-md mb-md">
      <div className={`
        ${category.isPrimary ? 'w-14 h-14' : 'w-12 h-12'} 
        bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0
      `}>
        <category.icon className="text-primary" size={category.isPrimary ? 28 : 24} />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className={`
          font-display font-bold text-primary mb-xs
          ${category.isPrimary ? 'text-h3' : 'text-h4'}
        `}>
          {category.title}
        </h3>
        <p className="font-body text-small text-muted-foreground line-clamp-2">
          {category.subtitle}
        </p>
      </div>
    </div>

    {/* Desktop/Tablet View */}
    <div className="hidden sm:block space-y-md">
      {Object.entries(category.skills).map(([tier, skills]) => (
        <div key={tier}>
          <div className="flex flex-wrap gap-xs">
            {skills.map((skill, index) => (
              <SkillPill key={index} skill={skill} tier={tier as any} />
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Mobile Accordion View */}
    <div className="sm:hidden">
      <details className="group">
        <summary className="flex items-center justify-between py-sm cursor-pointer list-none">
          <span className="font-body text-small text-primary font-medium">
            {category.skills.core.length + category.skills.proficient.length + category.skills.familiar.length} skills
          </span>
          <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <div className="pt-sm space-y-sm">
          {Object.entries(category.skills).map(([tier, skills]) => (
            <div key={tier} className="overflow-x-auto">
              <div className="flex gap-xs pb-xs min-w-max">
                {skills.map((skill, index) => (
                  <SkillPill key={index} skill={skill} tier={tier as any} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </details>
    </div>
  </div>
)

export default function Skills() {
  return (
    <section id="skills" className="py-xl bg-white">
      <div className="container mx-auto px-lg max-w-6xl">
        <div className="text-center mb-xl animate-fade-in">
          <h2 className="font-display text-h2 font-bold text-primary mb-md">Technical Expertise</h2>
          <p className="font-body text-deep-brown/70 max-w-2xl mx-xl md:mx-auto text-balance">
            Comprehensive skill set spanning the entire AI/ML pipeline from research to production
          </p>
        </div>

        {/* Tiered Grid Layout */}
        <div className="stagger-animation space-y-lg mx-xxl xl:mx-auto">
          {/* Primary Skills - Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
            {skillCategories.filter(cat => cat.isPrimary).map((category, index) => (
              <SkillCategory key={index} category={category} />
            ))}
          </div>

          {/* Supporting Skills - Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {skillCategories.filter(cat => !cat.isPrimary).map((category, index) => (
              <SkillCategory key={index + 2} category={category} />
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-lg flex flex-wrap justify-center gap-md text-small">
          <div className="flex items-center gap-xs">
            <span className="text-xs">●●●</span>
            <span className="font-body text-muted-foreground">Core (Daily use)</span>
          </div>
          <div className="flex items-center gap-xs">
            <span className="text-xs">●●○</span>
            <span className="font-body text-muted-foreground">Proficient (Weekly)</span>
          </div>
          <div className="flex items-center gap-xs">
            <span className="text-xs">●○○</span>
            <span className="font-body text-muted-foreground">Familiar (Exploring)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
