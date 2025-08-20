import { global } from "styled-jsx/css"

export default function Top () {
  return (
    <div>
    <div className="relative size-32 ...">
    <div className="absolute inset-x-0 fontsize 100px top-0 h-16 ...">Hello!</div>
  </div>
      <div className="flex flex-row">
      <button className="basis-md">Home</button>
      <button className="basis-md">Showroom</button>
      <button className="basis-md">contact</button>
      </div>

  </div>
  )
}
