import React, { useState } from 'react';
import { rem } from '../../helpers';
import { Block } from '../../components';
export interface SocialMediaProps {
	icon?: string;
	backgroundColor?: string;
	onHoverBackgroundColor?: string;
	isBackgroundWhite?: boolean;
	onClick?: (e: any) => void;
}

export const SocialMediaButton: React.FC<SocialMediaProps> = ({
	icon,
	backgroundColor,
	onHoverBackgroundColor,
	isBackgroundWhite,
	onClick,
}) => {
	const [isMouseOverButton, setIsMouseOverButton] = useState<boolean>(false);

	const handleButtonFocusOnOver = () => {
		setIsMouseOverButton(true);
	};

	const handleButtonFocusOnLeave = () => {
		setIsMouseOverButton(false);
	};

	return (
		<button
			style={{
				marginRight: rem(8),
				backgroundColor: isMouseOverButton ? onHoverBackgroundColor : backgroundColor,
				border: !isBackgroundWhite ? 'none' : isMouseOverButton ? '2px solid #e9e9e9' : 'none',
				cursor: 'pointer',
				width: rem(78),
				height: rem(28),
				borderRadius: rem(4),
				boxShadow: isBackgroundWhite ? 'var(--shadow-2)' : 'none',
			}}
			onMouseOver={handleButtonFocusOnOver}
			onMouseLeave={handleButtonFocusOnLeave}
			onClick={onClick}
		>
			<Block align={{ horizontal: 'center', vertical: 'center' }}>
				<img style={{ width: rem(18) }} src={icon} />
			</Block>
		</button>
	);
};
