type TimelinePosition = 'right' | 'left' | 'alternate';

type ParentPosition = 'right' | 'left';

type TimelineConfig = {
	rootPosition: TimelinePosition;
	center: boolean;
};

export { TimelinePosition, ParentPosition, TimelineConfig };
