export default ({ stripeCount, stripeIndex }) => {
	return 0
}

// let coordinates = []
//
// if (totalStripes === 3) {
// 	console.log('derasterized by area for stripe count 3 currently missing middle stripe')
// 	if (currentStripe === 0) {
// 		coordinates = [
// 			[
// 				origin[ 0 ],
// 				origin[ 1 ]
// 			],
// 			[
// 				origin[ 0 ] + (Math.sqrt(2) / 2) * sizedUnit,
// 				origin[ 1 ]
// 			],
// 			[
// 				origin[ 0 ],
// 				origin[ 1 ] + (Math.sqrt(2) / 2) * sizedUnit
// 			]
// 		]
// 	} else if (currentStripe === 2) {
// 		coordinates = [
// 			[
// 				origin[ 0 ] + sizedUnit,
// 				origin[ 1 ] + (1 - Math.sqrt(2) / 2) * sizedUnit
// 			],
// 			[
// 				origin[ 0 ] + sizedUnit,
// 				origin[ 1 ] + sizedUnit
// 			],
// 			[
// 				origin[ 0 ] + (1 - Math.sqrt(2) / 2) * sizedUnit,
// 				origin[ 1 ] + sizedUnit
// 			]
// 		]
// 	}
// } else {
// 	console.log('derasterized by area for stripe counts other than 3 not yet implemented')
// }
//
// return coordinates

//FROM "EXPERIMENTS" STYLE
// ctx.beginPath()
// ctx.moveTo(origin[ 0 ] * sizedUnit, origin[ 1 ] * sizedUnit)
// ctx.lineTo((origin[ 0 ] + Math.sqrt(6)/3) * sizedUnit, origin[ 1 ] * sizedUnit)
// ctx.lineTo(origin[ 0 ] * sizedUnit, (origin[ 1 ] + Math.sqrt(6)/3) * sizedUnit)
// ctx.closePath()
// ctx.fill()
//
// ctx.beginPath()
// ctx.moveTo((origin[ 0 ] + 1) * sizedUnit, (origin[ 1 ] + 1 - Math.sqrt(6)/3) * sizedUnit)
// ctx.lineTo((origin[ 0 ] + 1) * sizedUnit, (origin[ 1 ] + 1) * sizedUnit)
// ctx.lineTo((origin[ 0 ] + 1 - Math.sqrt(6)/3) * sizedUnit, (origin[ 1 ] + 1) * sizedUnit)
// ctx.closePath()
// ctx.fill()
//
// color = color === COLOR_A ? COLOR_B : COLOR_A
// ctx.fillStyle = color
//
// ctx.beginPath()
// ctx.moveTo(origin[ 0 ] * sizedUnit, origin[ 1 ] * sizedUnit)
// ctx.lineTo((origin[ 0 ] + Math.sqrt(2)/3) * sizedUnit, origin[ 1 ] * sizedUnit)
// ctx.lineTo(origin[ 0 ] * sizedUnit, (origin[ 1 ] + Math.sqrt(2)/3) * sizedUnit)
// ctx.closePath()
// ctx.fill()
//
// ctx.beginPath()
// ctx.moveTo((origin[ 0 ] + 1) * sizedUnit, (origin[ 1 ] + 1 - Math.sqrt(2)/3) * sizedUnit)
// ctx.lineTo((origin[ 0 ] + 1) * sizedUnit, (origin[ 1 ] + 1) * sizedUnit)
// ctx.lineTo((origin[ 0 ] + 1 - Math.sqrt(2)/3) * sizedUnit, (origin[ 1 ] + 1) * sizedUnit)
// ctx.closePath()
// ctx.fill()


//BY STRIPE WIDTH
// ctx.beginPath()
// ctx.moveTo(origin[ 0 ] * sizedUnit, origin[ 1 ] * sizedUnit)
// ctx.lineTo((origin[ 0 ] + (2/3)) * sizedUnit, origin[ 1 ] * sizedUnit)
// ctx.lineTo(origin[ 0 ] * sizedUnit, (origin[ 1 ] + (2/3)) * sizedUnit)
// ctx.closePath()
// ctx.fill()
//
// ctx.beginPath()
// ctx.moveTo((origin[ 0 ] + 1) * sizedUnit, (origin[ 1 ] + 1 - (2/3)) * sizedUnit)
// ctx.lineTo((origin[ 0 ] + 1) * sizedUnit, (origin[ 1 ] + 1) * sizedUnit)
// ctx.lineTo((origin[ 0 ] + 1 - (2/3)) * sizedUnit, (origin[ 1 ] + 1) * sizedUnit)
// ctx.closePath()
// ctx.fill()
