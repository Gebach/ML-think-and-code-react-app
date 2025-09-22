import Header from './components/Header'
import PromtHandler from './components/PromtHandler'
import SectionWrapper from './components/SectionWrapper'

function App() {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 w-full">
        <Header title={'ENTER YOUR PROMT DOWN HERE'} />
        <PromtHandler />
      </div>
    </SectionWrapper>
  )
}

export default App
