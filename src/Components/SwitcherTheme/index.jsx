import React from 'react';
import ThemeOn from '../../assets/images/themeOn.svg';
import ThemeOff from '../../assets/images/themeOff.svg';

import { Icone } from '../UI';

const light = <Icone src={ThemeOn} alt="Light Theme" />
const dark = <Icone src={ThemeOff} alt="Dark Theme" />

export default ({theme}) => (theme ? dark:light);