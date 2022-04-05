// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';

import Timeline from './__testMocks__/Timeline.svelte';

const options = {
	position: 'left',
	title: 'title',
	oppositeContent: 'oppositeContent',
	description: 'desc',
}
test('it renderes', () => {
	const { getByText } = render(Timeline, { options });
	expect(getByText('title')).toBeInTheDocument();
});
