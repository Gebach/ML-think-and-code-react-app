import PromptInput from './PromptInput'
import PromptOutput from './PromptOutput'

export default function PromptHandler({ ready, output, prompt, setPrompt, sendPromptHandler, disabled }) {
  return (
    <div>
      <PromptInput
        prompt={prompt}
        setPrompt={setPrompt}
        placeholder={'Your prompt...'}
        sendPromptHandler={sendPromptHandler}
        disabled={disabled}
      />
      <PromptOutput output={output} ready={ready} />
    </div>
  )
}
