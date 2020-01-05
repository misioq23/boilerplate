import del from 'del';

const remove = () => del(['build/**/*', 'dist/**/*']);

export default remove;
