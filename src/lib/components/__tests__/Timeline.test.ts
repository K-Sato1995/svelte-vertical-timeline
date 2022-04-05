// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';

import Timeline from '../Timeline.svelte';

test('shows proper heading when rendered', () => {
	render(Timeline);
	console.log(screen);
	// expect(getByText('Hello World!')).toBeInTheDocument();
});
