export default function Time() {
  let date = new Date();
  return <p className="lead">This is the current time:{date.toLocaleDateString()} {date.toLocaleTimeString()}</p>;
}
