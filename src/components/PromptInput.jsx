export default function PromptInput({ placeholder, prompt, setPrompt, sendPromptHandler, disabled }) {
  return (
    <div
      className={
        'border-2 rounded-2xl border-emerald-600 focus:border-emerald-800 min-h-[128px] h-auto field-sizing-content flex items-center justify-center gap-3 px-3 duration-200 transition-all ' +
        (disabled && 'opacity-30')
      }
    >
      <textarea
        className="text-base outline-none py-5 w-full min-h-full h-full resize-none"
        placeholder={placeholder}
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
      ></textarea>
      <i
        onClick={sendPromptHandler}
        className={
          'fa-solid fa-paper-plane text-emerald-700 text-2xl cursor-pointer hover:text-emerald-900 duration-200 ' +
          (disabled ? 'pointer-events-none' : '')
        }
      ></i>
    </div>
  )
}
