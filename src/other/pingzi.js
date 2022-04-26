// 一个饮料2块 俩个空瓶换一饮料 四瓶盖换一杯饮料 n元能买多少杯饮料
const test = (n) => {
  let ret = Math.floor(n / 2)
  let pCnt = ret
  let gCnt = ret
  while (pCnt >= 2 || gCnt >= 4) {
    let newCnt = Math.floor(pCnt / 2)
    pCnt = pCnt % 2

    newCnt = newCnt + Math.floor(gCnt / 4)
    gCnt = gCnt % 4

    ret = ret + newCnt
    pCnt = pCnt + newCnt
    gCnt = gCnt + newCnt
  }
  return ret
}

console.log(test(4))
