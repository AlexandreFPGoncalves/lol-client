import React, { useCallback, useMemo, useState } from 'react';
import { icons } from '../../assets';

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
	handleIsCheckedOnClick: () => void;
	isCheckboxChecked: boolean;
	handleCanLogin: () => void;
	canLogin: boolean;
}
export interface LauncherScreenResources {
	title: string;
	usernameLabel: string;
	passwordLabel: string;
	checkboxLabel: string;
	signinLabel: string;
}

export const useLauncherHelper = (): LauncherProps => {
	const resources = useMemo((): LauncherScreenResources => {
		return {
			title: 'mockTitle',
			signinLabel: 'Sign in',
			usernameLabel: 'USERNAME',
			passwordLabel: 'PASSWORD',
			checkboxLabel: 'Stay signed in',
		};
	}, []);

	const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(false);
	const [canLogin, setCanLogin] = useState<boolean>(false);
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

		if (values.username.length > 2 && values.password.length > 2) {
			setCanLogin(true);
		} else {
			setCanLogin(false);
		}
		console.log('###', canLogin);
	};

	const handleIsCheckedOnClick = () => {
		setIsCheckboxChecked(!isCheckboxChecked);
		console.log('###', isCheckboxChecked);
	};

	const handleCanLogin = useCallback(() => {
		if (values.username.length > 2 && values.password.length > 2) {
			setCanLogin(true);
			console.log('###', canLogin);
		} else {
			setCanLogin(false);
			console.log('###', canLogin);
		}
	}, [values]);

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
		handleIsCheckedOnClick,
		isCheckboxChecked,
		handleCanLogin,
		canLogin,
	};
};
