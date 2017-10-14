import { perStripe, StripePosition } from '../../../../src'

const getDerasterizedByAreaStripePositions: {(): StripePosition[]} = () => {
	return perStripe({ getStripePosition: derasterizedByAreaStripePosition })
}

const derasterizedByAreaStripePosition: {(): StripePosition } = () => 0

export default getDerasterizedByAreaStripePositions
