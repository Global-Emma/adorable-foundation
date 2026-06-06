"use client"
import CountUp from "react-countup"

const Counter = ({number}: {number: number}) => {
  return (
    <div>
      <CountUp end={number} duration={2} />+
    </div>
  )
}

export default Counter
