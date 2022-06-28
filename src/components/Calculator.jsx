import Button from "./Button"
import { deleteAll, deleteOne, addNumber, operation, showResult, addPoint } from "../helper"
import { useRef } from 'react'
import '../css/Calculator.css'

function Calculator() {
  const ref = useRef(null)

  return (
    <div className="calculator__container">
      <div className="screen">
        <div ref={ref} className="result">0</div>
      </div>
      <div className="buttons__container">
        <Button func={() => deleteAll(ref)} css="delete-btn">C</Button>
        <Button func={() => deleteOne(ref)} css="delete-btn">AC</Button>
        <Button func={() => operation(ref, "*")} css="function-btn">x</Button>
        <Button func={() => operation(ref, "/")} css="function-btn">/</Button>
        <Button func={() => addNumber(ref, 7)} css="function-btn">7</Button>
        <Button func={() => addNumber(ref, 8)} css="function-btn">8</Button>
        <Button func={() => addNumber(ref, 9)} css="function-btn">9</Button>
        <Button func={() => operation(ref, "-")} css="function-btn">-</Button>
        <Button func={() => addNumber(ref, 4)} css="function-btn">4</Button>
        <Button func={() => addNumber(ref, 5)} css="function-btn">5</Button>
        <Button func={() => addNumber(ref, 6)} css="function-btn">6</Button>
        <Button func={() => operation(ref, "+")} css="function-btn">+</Button>
        <Button func={() => addNumber(ref, 1)} css="function-btn">1</Button>
        <Button func={() => addNumber(ref, 2)} css="function-btn">2</Button>
        <Button func={() => addNumber(ref, 3)} css="function-btn">3</Button>
        <Button func={() => addNumber(ref, 0)} css="function-btn">0</Button>
        <Button func={() => addPoint(ref)} css="function-btn">.</Button>
        <Button func={() => operation(ref, "%")} css="function-btn">%</Button>
        <Button func={() => showResult(ref)} css="result-btn">=</Button>
      </div>
    </div>
  )
}

export default Calculator
