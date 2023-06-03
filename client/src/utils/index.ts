import { SubmitDataType } from '@/types';

export const submitUserChoice = (data: SubmitDataType) => {
	const {
		years_ago,
		ticket,
		initial_investment,
		monthly_contribution,
		dividend_reinvestment,
	} = data;
	console.log(`years_ago: ${years_ago}`);
	console.log(`ticket: ${ticket}`);
	console.log(`initial_investment: ${initial_investment}`);
	console.log(`monthly_contribution: ${monthly_contribution}`);
	console.log(`dividend_reinvestment: ${dividend_reinvestment}`);
};
