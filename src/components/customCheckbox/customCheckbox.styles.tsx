import styled from 'styled-components';

const CustomStyledCheckbox = styled.input`
	background-color: 'red';
	cursor: pointer;
	width: 1rem;
	height: 1rem;
	accent-color: '#fff';
	::before {
		accent-color: 'red';
	}
`;

export default CustomStyledCheckbox;
