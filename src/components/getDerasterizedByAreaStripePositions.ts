import { perStripe, StripePosition, to } from '../../../../src'

const getDerasterizedByAreaStripePositions: () => StripePosition[] = () =>
	perStripe({ getStripePosition: derasterizedByAreaStripePosition })

const derasterizedByAreaStripePosition: () => StripePosition = () => to.StripePosition(0)

export { getDerasterizedByAreaStripePositions }
