import { perStripe } from '../../../../src'

export default () => perStripe({ getStripePosition: derasterizedByAreaStripePosition })

const derasterizedByAreaStripePosition = () => 0
