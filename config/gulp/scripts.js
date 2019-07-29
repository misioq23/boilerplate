import { rollup } from 'rollup';
import configRollup from '../rollup/rollup.config';

const input = {
	input: configRollup.input,
	plugins: configRollup.plugins
};

const rollupBundle = async () => {
	const bundle = await rollup(input);
	return bundle.write(configRollup.output);
};

export default rollupBundle;
