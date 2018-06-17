// Spec, as of 2018-06-05:
// - Format: `ABC1234`
// - Range:
//   - `AAA0001` to `CJJ9999`

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const arizona = (): string => {
    const letters: string = Bb26.randomString('aaa', 'cjj')
    const numbers: string = randomNumericString(letters === 'aaa' ? 1 : 0, 9999)

    return letters.toUpperCase() + numbers
}

export default arizona
