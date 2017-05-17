import derasterizedStripedSquare from './derasterizedStripedSquare'

export default ({ origin, size, originColor, otherColor, scaleFromGridCenter }) => {
	size = size || 1
	derasterizedStripedSquare({ origin, size, originColor, otherColor, scaleFromGridCenter })
}