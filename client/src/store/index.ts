import { SubmitDataType } from '@/types';
import { atom } from 'recoil';

export const currentUserChoiceState = atom({
	key: 'currentUserChoiceState',
	default: {
		years_ago: 10,
		ticket: 'SCHD',
		initial_investment: 1000,
		monthly_contribution: 1000,
		dividend_reinvestment: true,
	} as SubmitDataType,
});
