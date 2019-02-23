import { rollup } from 'rollup';

import configRollup from '../rollup/default';

const jsBundle = () => {
	return rollup({
		input: configRollup.input,
		plugins: configRollup.plugins
	}).then((bundle) => {
		return bundle.write(configRollup.output);
	});
};

export default jsBundle;
