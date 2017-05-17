import render from '../../shared/render/render'
import tile from '../../shared/components/tile'
import { UNIT } from '../../shared/common/customize'
import scalePoint from '../../shared/utilities/scalePoint'

export default ({ originColor, otherColor, size, origin, scaleFromGridCenter }) => {
	origin = scalePoint({ point: origin, scaleFromGridCenter })
	const sizedUnit = size * UNIT

	tile({ origin, size, originColor: otherColor, otherColor });

	// BY AREA STYLE
	let coordinates = [
		[
			origin[ 0 ],
			origin[ 1 ]
		],
		[
			origin[ 0 ] + (Math.sqrt(2) / 2) * sizedUnit,
			origin[ 1 ]
		],
		[
			origin[ 0 ],
			origin[ 1 ] + (Math.sqrt(2) / 2) * sizedUnit
		]
	]
	render({ color: originColor, coordinates })
	coordinates = [
		[
			origin[ 0 ] + sizedUnit,
			origin[ 1 ] + (1 - Math.sqrt(2) / 2) * sizedUnit
		],
		[
			origin[ 0 ] + sizedUnit,
			origin[ 1 ] + sizedUnit
		],
		[
			origin[ 0 ] + (1 - Math.sqrt(2) / 2) * sizedUnit,
			origin[ 1 ] + sizedUnit
		]
	]
	render({ color: originColor, coordinates })

	//FROM "EXPERIMENTS" STYLE
	// ctx.beginPath();
	// ctx.moveTo(origin[ 0 ] * sizedUnit, origin[ 1 ] * sizedUnit);
	// ctx.lineTo((origin[ 0 ] + Math.sqrt(6)/3) * sizedUnit, origin[ 1 ] * sizedUnit);
	// ctx.lineTo(origin[ 0 ] * sizedUnit, (origin[ 1 ] + Math.sqrt(6)/3) * sizedUnit);
	// ctx.closePath();
	// ctx.fill();
	//
	// ctx.beginPath();
	// ctx.moveTo((origin[ 0 ] + 1) * sizedUnit, (origin[ 1 ] + 1 - Math.sqrt(6)/3) * sizedUnit);
	// ctx.lineTo((origin[ 0 ] + 1) * sizedUnit, (origin[ 1 ] + 1) * sizedUnit);
	// ctx.lineTo((origin[ 0 ] + 1 - Math.sqrt(6)/3) * sizedUnit, (origin[ 1 ] + 1) * sizedUnit);
	// ctx.closePath();
	// ctx.fill();
	//
	// color = color === COLOR_A ? COLOR_B : COLOR_A;
	// ctx.fillStyle = color;
	//
	// ctx.beginPath();
	// ctx.moveTo(origin[ 0 ] * sizedUnit, origin[ 1 ] * sizedUnit);
	// ctx.lineTo((origin[ 0 ] + Math.sqrt(2)/3) * sizedUnit, origin[ 1 ] * sizedUnit);
	// ctx.lineTo(origin[ 0 ] * sizedUnit, (origin[ 1 ] + Math.sqrt(2)/3) * sizedUnit);
	// ctx.closePath();
	// ctx.fill();
	//
	// ctx.beginPath();
	// ctx.moveTo((origin[ 0 ] + 1) * sizedUnit, (origin[ 1 ] + 1 - Math.sqrt(2)/3) * sizedUnit);
	// ctx.lineTo((origin[ 0 ] + 1) * sizedUnit, (origin[ 1 ] + 1) * sizedUnit);
	// ctx.lineTo((origin[ 0 ] + 1 - Math.sqrt(2)/3) * sizedUnit, (origin[ 1 ] + 1) * sizedUnit);
	// ctx.closePath();
	// ctx.fill();


	//BY STRIPE WIDTH
	// ctx.beginPath();
	// ctx.moveTo(origin[ 0 ] * sizedUnit, origin[ 1 ] * sizedUnit);
	// ctx.lineTo((origin[ 0 ] + (2/3)) * sizedUnit, origin[ 1 ] * sizedUnit);
	// ctx.lineTo(origin[ 0 ] * sizedUnit, (origin[ 1 ] + (2/3)) * sizedUnit);
	// ctx.closePath();
	// ctx.fill();
	//
	// ctx.beginPath();
	// ctx.moveTo((origin[ 0 ] + 1) * sizedUnit, (origin[ 1 ] + 1 - (2/3)) * sizedUnit);
	// ctx.lineTo((origin[ 0 ] + 1) * sizedUnit, (origin[ 1 ] + 1) * sizedUnit);
	// ctx.lineTo((origin[ 0 ] + 1 - (2/3)) * sizedUnit, (origin[ 1 ] + 1) * sizedUnit);
	// ctx.closePath();
	// ctx.fill();
}