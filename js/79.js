const exist = (board, word) => {
  if (word.length > board.length * board[0].length) {
    return false
  }
  const resultList = board.reduce(
    (result, rows, x) => {
      rows.forEach((el, y) => {
        if (el === word[0]) {
          result[0].push({
            x,
            y,
          })
        }
      })
      return result
    },
    [[]],
  )
  if (resultList[0].length === 0) {
    return false
  }
  const directionList = [
    {
      x: 1,
      y: 0,
    },
    {
      x: -1,
      y: 0,
    },
    {
      x: 0,
      y: 1,
    },
    {
      x: 0,
      y: -1,
    },
  ]

  const checkNext = (now, step) => {
    directionList.forEach((el) => {
      const next = {
        x: el.x + now.x,
        y: el.y + now.y,
      }
      if (
        board[next.x] &&
        board[next.x][next.y] &&
        board[next.x][next.y] === word[step] &&
        resultList.every((step) => step[0].x !== next.x || step[0].y !== next.y)
      ) {
        if (step === resultList.length) {
          resultList.push([next])
        } else {
          resultList[step].push(next)
        }
      }
    })
  }

  let nowStep = 0

  const back = () => {
    if (resultList[nowStep].length > 1) {
      resultList[nowStep].shift()
    } else {
      resultList.pop()
      nowStep -= 1
      if (nowStep !== -1) {
        back(nowStep)
      }
    }
  }
  while (nowStep !== word.length - 1 && resultList.length !== 0) {
    checkNext(resultList[nowStep][0], resultList.length)
    if (resultList[nowStep + 1] && resultList[nowStep + 1].length > 0) {
      nowStep++
    } else {
      back()
    }
    if (nowStep === word.length - 1 || resultList.length === 0) {
      break
    }
  }
  return resultList.length === word.length
}

module.exports = exist
