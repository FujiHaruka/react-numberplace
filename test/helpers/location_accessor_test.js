import { locationFrom, idFrom } from '../../lib/helpers/location_accessor'
import { Range } from 'immutable'
import { equal } from 'assert'

describe('location_accessor', () => {
  it('locationFrom', () => {
    {
      let id = {
        sectionIdx: 0,
        cellIdx: 0
      }
      let { left, top } = locationFrom(id)
      equal(left, 0)
      equal(top, 0)
    }

    {
      let id = {
        sectionIdx: 3,
        cellIdx: 5
      }
      let { left, top } = locationFrom(id)
      equal(left, 2)
      equal(top, 4)
    }

    {
      let id = {
        sectionIdx: 8,
        cellIdx: 8
      }
      let { left, top } = locationFrom(id)
      equal(left, 8)
      equal(top, 8)
    }
  })

  it('idFrom', () => {
    {
      let location = {
        top: 0,
        left: 0
      }
      let { sectionIdx, cellIdx } = idFrom(location)
      equal(sectionIdx, 0)
      equal(cellIdx, 0)
    }

    {
      let location = {
        top: 5,
        left: 7
      }
      let { sectionIdx, cellIdx } = idFrom(location)
      equal(sectionIdx, 5)
      equal(cellIdx, 7)
    }

    {
      let location = {
        top: 8,
        left: 8
      }
      let { sectionIdx, cellIdx } = idFrom(location)
      equal(sectionIdx, 8)
      equal(cellIdx, 8)
    }
  })

  it('both', () => {
    for (let sectionIdx of Range(0, 9)) {
      for (let cellIdx of Range(0, 9)) {
        let location = locationFrom({sectionIdx, cellIdx})
        let id = idFrom(location)
        equal(id.sectionIdx, sectionIdx)
        equal(id.cellIdx, cellIdx)
      }
    }
  })
})

/* global describe it */
