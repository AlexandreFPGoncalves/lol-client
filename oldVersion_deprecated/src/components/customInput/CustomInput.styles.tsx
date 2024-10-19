import styled from 'styled-components';

const StyledCustomInput = styled.div`
	align-self: 'end';
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	.form__group {
		position: relative;
		display: flex;
		margin-top: 16px;
		width: 99%;
	}

	.form__field {
		display: flex;
		z-index: 1;
		width: 250px;
		border: 0;
		padding: 12px 0 12px 10px;

		font-family: 'Barlow';
		font-size: 1rem;
		font-weight: 700;
		color: var(--black);

		background: #ebebeb;
		border-radius: 3px;

		&:placeholder-shown ~ .form__label {
			top: 12px;
		}
		&:not(:placeholder-shown) ~ .form__label {
			padding-left: 10px;
		}
		:hover {
			background: #e4e4e4;
		}
	}

	.form__label {
		position: absolute;
		padding-left: 18px;
		top: 0;
		z-index: 2;
		font-size: 10px;
		font-family: 'Barlow';
		font-weight: 800;
		color: #909090;

		transition: 0.2s;
	}
	.passwordVisibility {
		visibility: hidden;
		width: 15px;
		height: 15px;
		margin-left: -40px;
		top: 40px;
		cursor: pointer;
		z-index: 1;
	}
	.form__field:focus {
		~ .form__label {
			top: 0;
			display: block;
			transition: 0.2s;
			font-weight: 700;
			padding-left: 10px;
		}
		~ .passwordVisibility {
			visibility: visible;
			margin-top: 12px;
			z-index: 1;
		}
		background-color: var(--white);
		font-weight: 700;
		color: var(--black);
	}
`;

export default StyledCustomInput;
