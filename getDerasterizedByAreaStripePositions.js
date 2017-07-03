import stripeUtilities from '../../utilities/stripeUtilities'

export default () => stripeUtilities.perStripe({ getStripePosition: derasterizedByAreaStripePosition })

const derasterizedByAreaStripePosition = () => 0
