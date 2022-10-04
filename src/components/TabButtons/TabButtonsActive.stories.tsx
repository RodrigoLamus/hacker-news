import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withReactContext } from 'storybook-react-context';
import { TabButtons } from './TabButtons';
import { GlobalContext } from '../../context/context';

export default {
  title: 'tab/TabButtons active',
  component: TabButtons,
  decorators: [
    withReactContext({
      Context: GlobalContext,
      initialState: { tab: { state: true } },
    }),
  ],
} as ComponentMeta<typeof TabButtons>;

const Component: ComponentStory<typeof TabButtons> = () => <TabButtons />;

export const Primary = Component.bind({});
