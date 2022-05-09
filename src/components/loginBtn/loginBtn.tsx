import React from 'react';
import { icons } from '../../assets';
import { rem } from '../../helpers';
interface LoginBtnProps {
	horizontalAlign?: 'start' | 'center' | 'end';
	style?: React.CSSProperties;
	onClick?: any;
	canLogin?: boolean;
}

export const LoginBtn: React.FC<LoginBtnProps> = ({ onClick, canLogin }) => {
	return (
		<button
			style={{
				backgroundColor: canLogin ? '##b23d35' : 'Transparent',
				border: canLogin ? '2px solid ##b23d35' : '2px solid #e4e4e4',
				width: rem(64),
				height: rem(64),
				borderRadius: rem(20),
			}}
			onClick={onClick}
		>
			<img src={canLogin ? icons.rightArrowWhite : icons.rightArrow} alt="Right arrow icon" />
		</button>
	);
};
