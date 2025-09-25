export default function PromptOutput({ output, ready }) {
  return (
    <div className="w-full pt-2 flex flex-col items-center gap-2">
      <p className="text-xl">Output:</p>
      {ready ? (
        <textarea
          className="outline-none resize-none w-full border-3 border-emerald-600 rounded-2xl"
          value={output}
          disabled
          readOnly
        ></textarea>
      ) : (
        <i className="fa-solid fa-circle-notch animate-spin text-2xl"></i>
      )}
    </div>
  )
}
