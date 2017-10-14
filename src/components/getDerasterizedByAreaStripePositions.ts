import { perStripe } from '../../../../src'

const getDerasterizedByAreaStripePositions: {(): number[]} = () => {
	return perStripe({ getStripePosition: derasterizedByAreaStripePosition })
}

const derasterizedByAreaStripePosition: {(): number } = () => 0

export default getDerasterizedByAreaStripePositions
