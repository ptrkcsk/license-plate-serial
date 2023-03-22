import randomItem from 'random-item';
import {
	alabama,
	alaska,
	arizona,
	arkansas,
	california,
	colorado,
	connecticut,
	delaware,
	florida,
	georgia,
	hawaii,
	idaho,
	illinois,
	indiana,
	iowa,
	kansas,
	kentucky,
	louisiana,
	maine,
	maryland,
	massachusetts,
	michigan,
	minnesota,
	mississippi,
	missouri,
	montana,
	nebraska,
	nevada,
	newHampshire,
	newJersey,
	newMexico,
	newYork,
	northCarolina,
	northDakota,
	ohio,
	oklahoma,
	oregon,
	pennsylvania,
	rhodeIsland,
	southCarolina,
	southDakota,
	tennessee,
	texas,
	utah,
	vermont,
	virginia,
	washington,
	washingtonDc,
	westVirginia,
	wisconsin,
	wyoming,
} from '../states/index.js';

const states: Array<() => string> = [
	alabama,
	alaska,
	arizona,
	arkansas,
	california,
	colorado,
	connecticut,
	delaware,
	florida,
	georgia,
	hawaii,
	idaho,
	illinois,
	indiana,
	iowa,
	kansas,
	kentucky,
	louisiana,
	maine,
	maryland,
	massachusetts,
	michigan,
	minnesota,
	mississippi,
	missouri,
	montana,
	nebraska,
	nevada,
	newHampshire,
	newJersey,
	newMexico,
	newYork,
	northCarolina,
	northDakota,
	ohio,
	oklahoma,
	oregon,
	pennsylvania,
	rhodeIsland,
	southCarolina,
	southDakota,
	tennessee,
	texas,
	utah,
	vermont,
	virginia,
	washington,
	washingtonDc,
	westVirginia,
	wisconsin,
	wyoming,
];

/**
 * Generates random serial for a random [US state](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_the_United_States)
 *
 * ```
 * import { random } from 'license-plate-serial-generator'
 *
 * random() // AHU-B86
 * ```
 */
export default function random(): string {
	return randomItem(states)();
}