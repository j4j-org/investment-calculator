'use client';
import {
	Button as MuiButton,
	ButtonProps as MuiButtonProps,
} from '@mui/material';

type ButtonProps = MuiButtonProps;

export const Button = (props: ButtonProps) => {
	return <MuiButton {...props} />;
};
