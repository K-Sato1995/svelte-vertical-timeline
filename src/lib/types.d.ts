type TimelinePosition = 'right' | 'left' | 'alternate';

type ParentPosition = 'right' | 'left';

type TimelineConfig = {
	rootPosition: TimelinePosition;
};

export { TimelinePosition, ParentPosition, TimelineConfig };
