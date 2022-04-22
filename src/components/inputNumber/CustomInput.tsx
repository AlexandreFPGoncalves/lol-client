import React from 'react';
import StyledInputNumber from './CustomInput.styles';
import { Block } from '..';
import { images } from '../../assets';

interface CustomInputProps {
	label?: string;
	onChange?: (e: any) => void;
	horizontalAlign?: 'start' | 'center' | 'end';
	value: string | undefined;
	inputType: 'text' | 'password';
	isPasswordVisible?: boolean;
	handlePasswordVisibility?: () => void;
}

export const CustomInput: React.FC<CustomInputProps> = ({
	label,
	onChange,
	horizontalAlign,
	value,
	inputType,
	handlePasswordVisibility,
	isPasswordVisible,
}) => {
	return (
		<StyledInputNumber>
			<Block align={{ horizontal: horizontalAlign ? horizontalAlign : 'start' }}>
				<div className="form__group field">
					<input
						type={label}
						className="form__field"
						placeholder="‎"
						name={label}
						id={label}
						required
						onChange={onChange}
						value={value}
					/>
					<label htmlFor={label} className="form__label">
						{label}
					</label>
				</div>
			</Block>
		</StyledInputNumber>
	);
};
