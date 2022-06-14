export default function Loader({ message }) {
  return (
    <div className="loader">
    <div className="loader__spinner" />
    <p className="loader__text">{message}</p>
  </div>
  )
}