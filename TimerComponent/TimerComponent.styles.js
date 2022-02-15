import makeStyles from '@mui/styles/makeStyles';
import styled from 'styled-components';
import FormLabel from 'components/FormLabel';

export const StyledFormLabel = styled(FormLabel)`
	margin: 10px;
	color: ${({ theme }) => theme.getShade(60)};
	font-size: ${({ theme }) => `${theme.typography.body2.fontSize}`}px;
	font-weight: ${({ theme }) => `${theme.typography.fontWeightMedium}`};
`;
