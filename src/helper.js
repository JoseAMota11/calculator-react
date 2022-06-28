const numbers = []
let innerSign = ""

export function deleteAll(ref) {
  ref.current.innerText = "0"
}

export function deleteOne(ref) {
  ref.current.innerText = ref.current.innerText.substring(1)
  if (ref.current.innerText.length === 0) ref.current.innerText = "0"
}

export function addNumber(ref, num) {
  if (ref.current.innerText === "0") ref.current.innerText = ""
  if (ref.current.innerText.length === 14) {}
  else ref.current.innerText += num.toString()
}

export function addPoint(ref) {
  ref.current.innerText += "."
}

export function operation(ref, sign) {
  let num1 = parseNumber(ref.current.innerText)
  ref.current.innerText = "0"
  numbers.push(num1)
  innerSign = sign
}

export function showResult(ref) {
  let result = 0
  let num2 = parseNumber(ref.current.innerText)
  numbers.push(num2)
  if (innerSign === "+") result = numbers[0] + numbers[1]
  else if (innerSign === "-") result = numbers[0] - numbers[1]
  else if (innerSign === "*") result = numbers[0] * numbers[1]
  else if (innerSign === "/") {
    if (num2 === 0) {
      ref.current.innerText = "Error"
      setTimeout(() => ref.current.innerText = "0", 2000)
      return
    } else result = numbers[0] / numbers[1]
  } else if (innerSign === "%") {
    result = numbers[0] * (numbers[1] / 100)
  }
  ref.current.innerText = fixed(result.toString())
  numbers.length = 0
}

function fixed(result) {
  if (result.includes(".")) {
    let newResult = parseNumber(result)
    let i = result.indexOf(".")
    let lengthAfterDot = result.substring(i + 1).length
    if (lengthAfterDot % 2 === 0) return newResult.toFixed(lengthAfterDot / 2)
    else return newResult.toFixed((lengthAfterDot + 1) / 2)
  } else return result
}

function parseNumber(ref) {
  if (ref.includes(".")) return parseFloat(ref)
  else return parseInt(ref)
}