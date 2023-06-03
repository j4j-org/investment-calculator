'use client';
import { Button } from '@/features/core';
import { currentUserChoiceState } from '@/store';
import { submitUserChoice } from '@/utils';
import { useRecoilValue } from 'recoil';

export const Form = () => {
	const currentUserChoice = useRecoilValue(currentUserChoiceState);

	const handleSubmit = () => {
		submitUserChoice(currentUserChoice);
	};

	return (
		<Button variant='contained' onClick={handleSubmit}>
			Submit
		</Button>
	);
};
