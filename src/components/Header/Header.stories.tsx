import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'head/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Component: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Component.bind({});
Primary.args = {
  title: 'STORY BOOKS',
};
