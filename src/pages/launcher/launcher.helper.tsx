import React, { useMemo, useState } from 'react';
import { icons } from '../../assets';
import { SocialMediaProps } from '../../components';

interface LauncherProps {
	resources: LauncherScreenResources;
	handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	values: {
		username: string;
		password: string;
	};
	socialMediaButtons: {
		icon: string;
		backgroundColor: string;
		onHoverBackgroundColor: string;
		isBackgroundWhite: boolean;
		onClick: () => void;
	}[];
}
export interface LauncherScreenResources {
	title: string;
	usernameLabel: string;
	passwordLabel: string;
}

export const useLauncherHelper = (): LauncherProps => {
	const resources = useMemo((): LauncherScreenResources => {
		return {
			title: 'MockTitle',
			usernameLabel: 'USERNAME',
			passwordLabel: 'PASSWORD',
		};
	}, []);

	const [values, setValues] = useState({
		username: '',
		password: '',
	});

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.name === 'USERNAME') {
			setValues({
				...values,
				username: e.target.value,
			});
		} else {
			setValues({
				...values,
				password: e.target.value,
			});
		}

		console.log(values);
	};

	const socialMediaButtons = [
		{
			icon: icons.facebook,
			backgroundColor: '#406eeb',
			onHoverBackgroundColor: '#365ed5',
			isBackgroundWhite: false,
			onClick: () => alert('Apple'),
		},
		{
			icon: icons.google,
			backgroundColor: '#fff',
			onHoverBackgroundColor: '#f5f5f5',
			isBackgroundWhite: true,
			onClick: () => alert('Apple'),
		},
		{
			icon: icons.apple,
			backgroundColor: '#000000',
			onHoverBackgroundColor: '#151515',
			isBackgroundWhite: false,
			onClick: () => alert('Apple'),
		},
	];

	return {
		resources,
		handleOnChange,
		values,
		socialMediaButtons,
	};
};
