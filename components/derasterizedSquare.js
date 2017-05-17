import derasterizedStripedSquare from './derasterizedStripedSquare'
import drawSolidSquare from '../../shared/render/drawSolidSquare'
import { COLOR_A, COLOR_B } from '../../shared/common/customize'

export default ({ origin, size, squareType, scaleFromGridCenter }) => {
	size = size || 1
	if (squareType == "STRIPED_A") {
		derasterizedStripedSquare({ origin, size, originColor: COLOR_A, otherColor: COLOR_B, scaleFromGridCenter })
	} else if (squareType == "STRIPED_B") {
		derasterizedStripedSquare({ origin, size, originColor: COLOR_B, otherColor: COLOR_A, scaleFromGridCenter })
	} else {
		drawSolidSquare({ origin, size, color: squareType, scaleFromGridCenter })
	}
}