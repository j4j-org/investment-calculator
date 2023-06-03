'use client';
import { RecoilRoot } from 'recoil';

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
	return <RecoilRoot>{children}</RecoilRoot>;
};
