import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'card/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Component: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Component.bind({});
Primary.args = {
  card: {
    id: 1,
    author: 'story',
    createdAt: new Date(),
    title: 'Story Title',
    url: 'storybook.com',
  },
  fav: true,
};

export const Secondary = Component.bind({});

Secondary.args = {
  card: {
    id: 1,
    author: 'story',
    createdAt: new Date(),
    title: 'Story Title',
    url: 'storybook.com',
  },
  fav: false,
};
