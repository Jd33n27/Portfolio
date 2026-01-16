import Seo from "@/components/Seo";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Reusable Components

const SectionHeader = ({ title }: { title: string }) => (
  <motion.h2
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="text-3xl font-bold mb-8 text-white border-l-4 border-chelsea pl-4"
  >
    {title}
  </motion.h2>
);

const TechCard = ({
  name,
  iconPath,
  color,
}: {
  name: string;
  iconPath: string;
  color: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
    className="bg-white/5 border border-white/10 rounded-xl p-4 transition-all duration-300 group cursor-pointer"
  >
    <div className="flex items-center gap-3">
      <div
        className="p-2 rounded-lg bg-white/5 group-hover:scale-110 transition-transform duration-300"
        style={{ color: color }}
      >
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={iconPath} />
        </svg>
      </div>
      <span className="font-medium text-lg text-gray-200 group-hover:text-white">
        {name}
      </span>
    </div>
  </motion.div>
);

const ExperienceCard = ({
  role,
  company,
  date,
  desc,
}: {
  role: string;
  company: string;
  date: string;
  desc: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-chelsea/30 transition-all duration-300 group"
  >
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
      <h3 className="text-xl font-bold text-white group-hover:text-chelsea transition-colors">
        {role}
      </h3>
      <span className="text-gray-400 text-sm mt-1 sm:mt-0 bg-white/5 px-3 py-1 rounded-full">
        {date}
      </span>
    </div>
    <h4 className="text-chelsea-light mb-3 font-medium">{company}</h4>
    <p className="text-gray-300 leading-relaxed">{desc}</p>
  </motion.div>
);

// Main Page Component

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20 md:px-32 lg:px-48">
      <Seo 
        title="About Musa Jamaldeen | Software Engineer" 
        description="Learn more about Musa Jamaldeen, a software engineer and frontend developer based in Lagos, Nigeria."
      />
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-chelsea/20">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </div>
            Back to Home
          </Link>
        </motion.div>

        {/* Hero Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight">
                Musa Jamaldeen
              </h1>
              <div className="text-2xl text-chelsea-light mb-8 font-medium">
                Frontend Developer
              </div>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
                <p>
                  I'm a Developer bridging the gap between complex engineering
                  and intuitive design. I don't just write code; I build
                  products that solve real problems.
                </p>
                <p>
                  Specializing in the React ecosystem, I build scalable,
                  high-performance web applications. My work focuses on creating
                  seamless user experiences, robust architectures, and clean,
                  maintainable codebases.
                </p>
              </div>
            </motion.div>

            {/* Profile Image Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-64 h-64 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5">
                {/* Placeholder for your actual image */}
                <div className="absolute inset-0 bg-linear-to-br from-chelsea/20 to-purple-500/20" />
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold">
                  [Your Photo Here]
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack Grid */}
        <section className="mb-24">
          <SectionHeader title="Tools & Technologies" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* JavaScript */}
            <TechCard
              name="JavaScript"
              color="#F7DF1E"
              iconPath="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
            />
            {/* TypeScript */}
            <TechCard
              name="TypeScript"
              color="#3178C6"
              iconPath="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
            />
            {/* React */}
            <TechCard
              name="React"
              color="#61DAFB"
              iconPath="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565z"
            />
            {/* Next.js */}
            <TechCard
              name="Next.js"
              color="#ffffff"
              iconPath="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"
            />
            {/* Tailwind */}
            <TechCard
              name="Tailwind"
              color="#06B6D4"
              iconPath="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
            />
            {/* Firebase */}
            <TechCard
              name="Firebase"
              color="#FFCA28"
              iconPath="M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371"
            />
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-24">
          <SectionHeader title="Experience" />
          <div className="space-y-6">
            <ExperienceCard
              role="Freelance Developer"
              company="Self Employed"
              date="2023 - Present"
              desc="Building high-converting landing pages, e-commerce dashboards, and custom web applications for international clients."
            />
            <ExperienceCard
              role="Frontend Intern"
              company="Tech Studio Academy"
              date="2022 - 2023"
              desc="Collaborated with senior engineers to build responsive UIs, optimized page load times, and implemented new features using React."
            />
          </div>
        </section>
      </div>
    </div>
  );
}
