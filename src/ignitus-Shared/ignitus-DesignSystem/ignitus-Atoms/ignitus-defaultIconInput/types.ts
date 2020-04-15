import {AppIcon} from '../../../types/iconsTypes/iconEnums';

export type DefaultIconInputProperties = {
  type: string;
  name: AppIcon;
  placeholder: string;
  state: string;
  handleClick?: ((value: string) => void) | ((value: string) => null);
  handleChange: (value: string) => void;
};

export type DefaultPasswordInputProperties = {
  state: string;
  placeholder: string;
  handleChange: (value: string) => void;
};
