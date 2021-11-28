import './index.css'

const FailureView = props => {
  const {retryAgain} = props

  const tryAgain = () => retryAgain()

  return (
    <div className="failure-container">
      <img
        src="https://image.freepik.com/free-vector/comic-speech-bubble-with-oops-text_1308-53484.jpg"
        alt="failure"
        className="failure-style"
      />
      <h1 className="failure-heading">
        The Page You Are Looking Could not Found
      </h1>
      <button type="button" onClick={tryAgain} className="button-style">
        Retry
      </button>
    </div>
  )
}

export default FailureView
