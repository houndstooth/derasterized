import { perStripe, StripePosition } from '../../../../src'

const getDerasterizedByAreaStripePositions: () => StripePosition[] = () =>
	perStripe({ getStripePosition: derasterizedByAreaStripePosition })

const derasterizedByAreaStripePosition: () => StripePosition = () => 0 as any

export default getDerasterizedByAreaStripePositions
