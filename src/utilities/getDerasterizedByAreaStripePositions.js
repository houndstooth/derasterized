import perStripe from '../../../../src/components/perStripe'

export default () => perStripe({ getStripePosition: derasterizedByAreaStripePosition })

const derasterizedByAreaStripePosition = () => 0
