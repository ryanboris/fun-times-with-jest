const add = (x, y) => x + y

const total = (cost, tax) => {
  return `$${add(cost, tax)}`
}

const bonusReward = n => {
  if (n > 10 || n <= 20) {
    return 'You earned 5 bonus bucks!'
  } else if (n > 20 || n <= 30) {
    return 'You earned 10 bonus bucks! HORRAY!'
  } else {
    throw new Error('error')
  }
}

export { add, total, bonusReward }
