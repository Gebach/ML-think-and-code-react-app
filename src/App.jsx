import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import PromptHandler from './components/PromptHandler'
import SectionWrapper from './components/SectionWrapper'
import Progress from './components/Progress'

function App() {
  const [ready, setReady] = useState(true)
  const [disabled, setDisabled] = useState(false)
  const [progressItems, setProgressItems] = useState([])

  const [prompt, setPrompt] = useState('')
  const [output, setOutput] = useState('')

  const worker = useRef(null)

  useEffect(() => {
    worker.current ??= new Worker(new URL('./utils/worker.js', import.meta.url), {
      type: 'module',
    })

    const onMessageRecieved = async e => {
      console.log(e.data)
      switch (e.data.status) {
        case 'initiate':
          setReady(false)
          setDisabled(true)

          console.log('init')
          break

        case 'complete':
          setReady(true)
          setDisabled(false)
          setOutput(e.data.output)
          break
      }
    }

    worker.current.addEventListener('message', onMessageRecieved)
    console.log(worker.current)

    return () => worker.current.removeEventListener('message', onMessageRecieved)
  }, [])

  function sendPromptHandler() {
    setOutput('')
    worker.current.postMessage({
      prompt,
    })
  }

  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 w-full">
        <Header title={'ENTER YOUR PROMPT DOWN HERE'} />
        <PromptHandler
          output={output}
          ready={ready}
          setReady={setReady}
          prompt={prompt}
          setPrompt={setPrompt}
          sendPromptHandler={sendPromptHandler}
          disabled={disabled}
        />
        <div className="progress-bars-container">
          {!ready && <label>Loading models...</label>}
          {progressItems.map(data => (
            <div key={data.file}>
              <Progress text={data.file} percentage={data.progress} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default App
