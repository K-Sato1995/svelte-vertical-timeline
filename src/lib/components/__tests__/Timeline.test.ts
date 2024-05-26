import { render } from '@testing-library/svelte';
import Timeline from './__testMocks__/Timeline.svelte';
import { expect, test } from 'vitest';

const options = (position) => {
	return {
		position: position,
		title: 'title',
		oppositeContent: 'oppositeContent',
		description: 'desc'
	};
};

test('it renderes', () => {
	const { getByText } = render(Timeline, { options: options('left') });
	expect(getByText('title')).toBeInTheDocument();
	expect(getByText('oppositeContent')).toBeInTheDocument();
	expect(getByText('desc')).toBeInTheDocument();
});

test('it renderes with position right', () => {
	const { getByText } = render(Timeline, { options: options('right') });
	expect(getByText('title')).toBeInTheDocument();
});

test('it renderes with position alternate', () => {
	const { getByText } = render(Timeline, { options: options('alternate') });
	expect(getByText('title')).toBeInTheDocument();
});
