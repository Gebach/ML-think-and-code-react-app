export default function SectionWrapper({ children }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center max-w-4xl w-full mx-auto">
      {children}
    </section>
  )
}
