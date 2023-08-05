import Button from '../components/button/button';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export const Apply = {
  args: {
    children: '応募する',
    color: 'green',
    size: 'medium',
    disabled: false,
    onclick: () => { console.log('応募しました'); },
  },
};

export const Delete = {
  args: {
    children: '削除する',
    color: 'red',
    size: 'small',
    disabled: false,
    onclick: () => { alert('削除しました'); },
  },
};

export const DeleteDisabled = {
  args: {
    children: '削除する',
    color: 'red',
    size: 'small',
    disabled: true,
    onclick: () => { alert('削除しました'); },
  },
};
