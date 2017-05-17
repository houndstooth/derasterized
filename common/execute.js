import derasterizedSquare from '../components/derasterizedSquare'
import { SQUARE_SIZE, GRID_SIZE } from '../../shared/common/customize'
import calculateColors from '../../shared/utilities/calculateColors'
import iterator from '../../shared/utilities/iterator'

export default () => {
	iterator(GRID_SIZE).forEach(x => {
		iterator(GRID_SIZE).forEach(y => {
			const { originColor, otherColor } = calculateColors({ x, y })
			derasterizedSquare({
				origin: [ x * SQUARE_SIZE, y * SQUARE_SIZE ],
				size: SQUARE_SIZE,
				originColor,
				otherColor
			})
		})
	})
}