import React from 'react';
import { PlayButton } from './PlayButton';

export default {
  title: 'Example/PlayButton',
  component: PlayButton,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <PlayButton {...args} />;

export const PlayButtonDefault = Template.bind({});

