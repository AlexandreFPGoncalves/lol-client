import React from 'react';
import CustomStyledCheckbox from './customCheckbox.styles';
import { Block } from '..';
import { rem } from '../../helpers';
interface NumberInputProps {
	label?: string;
	isChecked?: boolean;
	onClick?: () => void;
}

export const CustomCheckbox: React.FC<NumberInputProps> = ({ label, isChecked, onClick }) => {
	return (
		<Block align={{ vertical: 'start' }}>
			<input className={''} type={'checkbox'} onClick={onClick} checked={true} />
			<p style={{ fontSize: rem(12), fontWeight: 600, margin: 0 }}>{label}</p>
		</Block>
	);
};
