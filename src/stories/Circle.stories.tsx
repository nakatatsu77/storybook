import { Meta, StoryObj } from "@storybook/react";
import Circle from "./Circle";

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "Example/Circle",
  argTypes: {
    variant: {
      control: { type: "select" },
      option: ["orange", "green", "yellow"],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

/** オレンジ色の円です */
export const BaseCircle: Story = {
  args: {
    variant: "orange",
  },
};

export const GreenCircle: Story = {
  args: {
    variant: "green",
  },
};

export const Yellowircle: Story = {
  args: {
    variant: "yellow",
  },
};

export const GroupedCircle: Story = {
  render: () => (
    <div style={{ padding: 10 }}>
      <Circle variant="orange" />
      <Circle variant="green" />
      <Circle variant="yellow" />
    </div>
  ),
};
