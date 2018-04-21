'use strict'

function simpleAverage () {
  const averager = {
    avg: 0.0,
    count: 0
  }

  averager.reset = function reset () {
    averager.avg = 0.0
    averager.count = 0
    return averager
  }

  averager.add = function add (samples) {
    [].concat(samples).forEach(function (sample) {
      ++averager.count
      averager.avg += (sample - averager.avg) / averager.count
    })
    return averager
  }

  return averager
}

module.exports = simpleAverage
