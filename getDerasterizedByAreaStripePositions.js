import stripeUtilities from '../../src/utilities/stripeUtilities'

export default () => stripeUtilities.perStripe({ getStripePosition: derasterizedByAreaStripePosition })

const derasterizedByAreaStripePosition = () => 0
