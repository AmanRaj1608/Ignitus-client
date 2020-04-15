import styled from '@emotion/styled';
import {White, IgnitusBlue, GreyLight, boxShadowColor} from '../../../ignitus-Atoms/colors';
import {MD, Normal} from '../../../ignitus-Atoms/fonts';
import { flexibleColDiv } from '../../../shared';
import Icon from '../../../../ignitus-Utilities/Components/icon';


type Props = {
  border: boolean;
  marginTop: boolean;
  marginBottom: boolean;
};

export const SettingsContainer = styled(flexibleColDiv)`
  background: ${White};
  border-radius: 16px;
  box-shadow: 0 2px 4px 0 ${boxShadowColor};
  width: 12rem;
  height: 24rem;
`;

export const Layer = styled.div<Props>`
  border-bottom: ${props => (props.border ? `1px solid ${GreyLight}` : 'null')};
  color: ${IgnitusBlue};
  cursor: pointer;
  font-size: ${MD};
  font-weight: ${Normal};
  padding: 1rem;
  margin-top: ${props => (props.marginTop ? '0.5rem' : 'none')};
  margin-bottom: ${props => (props.marginBottom ? '0.5rem' : 'none')};
  display: flex;
  flex-direction: row;
  width: 100%;
  &:hover {
    background-color: ${IgnitusBlue};
    color: ${White};
    svg {
      fill: ${White};
    }
  }
`;

export const SideNavIcon = styled(Icon)`
  height: 1.5rem;
  width: 1.5rem;
  fill: ${IgnitusBlue};
`;

export const styledParagraph = styled.p`
  margin: 0;
  margin-left: 0.5rem;
`;
