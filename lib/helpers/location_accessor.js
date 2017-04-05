/**
 * location - { left, top } on 9 * 9 array
 */

const {
  floor
} = Math
const isNumber = value => typeof value === 'number'

export const idFrom = ({ top, left }) => ({
  sectionIdx: floor(left / 3) + floor(top / 3) * 3,
  cellIdx: left % 3 + (top % 3) * 3
})

const _locationFrom = ({ sectionIdx, cellIdx }) => ({
  top: floor(sectionIdx / 3) * 3 + floor(cellIdx / 3),
  left: (sectionIdx % 3) * 3 + (cellIdx % 3)
})

export const locationFrom = ({ top: _top, left: _left, sectionIdx, cellIdx }) => {
  let location
  if (isNumber(_top) && isNumber(_left)) {
    location = {
      top: _top,
      left: _left
    }
  }
  if (isNumber(sectionIdx) && isNumber(cellIdx)) {
    location = _locationFrom({ sectionIdx, cellIdx })
  }
  if (!location) {
    throw new Error('Invalid arg')
  }
  return location
}

export default {
  locationFrom,
  idFrom
}
