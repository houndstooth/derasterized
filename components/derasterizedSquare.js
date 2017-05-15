import derasterizedStripedSquare from './derasterizedStripedSquare'
import drawSolidSquare from '../../shared/render/drawSolidSquare'
import { COLOR_A, COLOR_B } from '../../shared/common/customize'

export default ({ origin, size, squareType, scaleFromCenter }) => {
	size = size || 1
	if (squareType == "STRIPED_A") {
		derasterizedStripedSquare({ origin, size, originColor: COLOR_A, otherColor: COLOR_B, scaleFromCenter })
	} else if (squareType == "STRIPED_B") {
		derasterizedStripedSquare({ origin, size, originColor: COLOR_B, otherColor: COLOR_A, scaleFromCenter })
	} else {
		drawSolidSquare({ origin, size, color: squareType, scaleFromCenter })
	}
}