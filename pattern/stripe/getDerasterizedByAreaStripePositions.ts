import { perStripe, StripePosition } from '../../../../src'
import * as to from '../../../../src/to'

const getDerasterizedByAreaStripePositions: () => StripePosition[] =
	(): StripePosition[] => perStripe({ getStripePosition: derasterizedByAreaStripePosition })

const derasterizedByAreaStripePosition: () => StripePosition =
	(): StripePosition => to.StripePosition(0)

export { getDerasterizedByAreaStripePositions }
