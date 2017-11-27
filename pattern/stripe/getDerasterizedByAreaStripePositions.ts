import { perStripe, StripePosition, to } from '../../../../src'

const getDerasterizedByAreaStripePositions: () => StripePosition[] =
	(): StripePosition[] => perStripe.default({ getStripePosition: derasterizedByAreaStripePosition })

const derasterizedByAreaStripePosition: () => StripePosition =
	(): StripePosition => to.StripePosition(0)

export default getDerasterizedByAreaStripePositions
