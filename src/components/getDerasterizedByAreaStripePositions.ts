import { perStripe } from '../../../../src'

const getDerasterizedByAreaStripePositions = () => perStripe({ getStripePosition: derasterizedByAreaStripePosition })

const derasterizedByAreaStripePosition = () => 0

export default getDerasterizedByAreaStripePositions
