export function useDebounce(cb, delay = 1000) {
  let timerId
  return function (...args) {
    clearTimeout(timerId)
    timerId = setTimeout(function () {
      cb(...args)
    }, delay)
  }
}
