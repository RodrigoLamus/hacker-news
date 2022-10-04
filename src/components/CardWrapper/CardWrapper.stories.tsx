import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardWrapper } from './CardWrapper';

export default {
  title: 'card/CardWrapper',
  component: CardWrapper,
} as ComponentMeta<typeof CardWrapper>;

const Component: ComponentStory<typeof CardWrapper> = (args) => (
  <CardWrapper {...args} />
);

export const Primary = Component.bind({});
Primary.args = {
  cardList: [
    {
      id: 1,
      author: 'story',
      createdAt: new Date(),
      title: 'Story Title',
      url: 'storybook.com',
    },
    {
      id: 2,
      author: 'story',
      createdAt: new Date(),
      title: 'Story Title',
      url: 'storybook.com',
    },
  ],
};

export const Secondary = Component.bind({});

Secondary.args = {
  cardList: [
    {
      id: 1,
      author: 'story',
      createdAt: new Date(),
      title: 'Story Title',
      url: 'storybook.com',
    },
    {
      id: 2,
      author: 'story',
      createdAt: new Date(),
      title: 'Story Title',
      url: 'storybook.com',
    },
    {
      id: 3,
      author: 'story',
      createdAt: new Date(),
      title: 'Story Title',
      url: 'storybook.com',
    },
  ],
};
