import derasterizedSquare from '../components/derasterizedSquare'
import { SQUARE_SIZE, GRID_SIZE } from '../../shared/common/customize'
import calculateSquareType from '../../shared/utilities/calculateSquareType'
import iterator from '../../shared/utilities/iterator'

export default () => {
	iterator(GRID_SIZE).forEach(x => {
		iterator(GRID_SIZE).forEach(y => {
			const { originColor, otherColor } = calculateSquareType({ x, y })
			derasterizedSquare({
				origin: [ x * SQUARE_SIZE, y * SQUARE_SIZE ],
				size: SQUARE_SIZE,
				originColor,
				otherColor
			})
		})
	})
}