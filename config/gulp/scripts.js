import { rollup } from 'rollup';

import configRollup from '../rollup/default';

const jsBundle = async () => {
	const bundle = await rollup({
		input: configRollup.input,
		plugins: configRollup.plugins
	});
	return bundle.write(configRollup.output);
};

export default jsBundle;
