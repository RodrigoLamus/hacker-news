import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';

export default {
  title: 'dropdown/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Component: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Component.bind({});
Primary.args = {
  options: ['test1', 'test2', 'test3', 'test4'],
};
