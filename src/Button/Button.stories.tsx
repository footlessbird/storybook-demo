/** @jsx jsx */
import Button from "./Button";
import { jsx, css } from "@emotion/core";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Icon from "../Icon/Icon";

export default {
  title: "components|Button",
  component: Button,
  decorators: [withKnobs],
};

export const button = () => {
  const label = text("children", "BUTTON");
  const size = select("size", ["small", "medium", "big"], "medium");
  const theme = select(
    "theme",
    ["primary", "secondary", "tertiary"],
    "primary"
  );
  const disabled = boolean("disabled", false);
  const width = text("width", "");
  //   return <Button>BUTTON</Button>;
  return (
    <Button
      size={size}
      theme={theme}
      disabled={disabled}
      width={width}
      onClick={action("onClick")}
    >
      {label}
    </Button>
  );
};

export const withIcon = () => {
  return (
    <div>
      <ButtonGroup>
        <Button size="small">
          <Icon icon="heart" /> Like
        </Button>
        <Button>
          <Icon icon="heart" /> Like
        </Button>
        <Button size="big">
          <Icon icon="heart" /> Like
        </Button>
      </ButtonGroup>
    </div>
  );
};

export const iconOnly = () => {
  return (
    <div>
      <ButtonGroup>
        <Button iconOnly size="small">
          <Icon icon="heart" />
        </Button>
        <Button iconOnly>
          <Icon icon="heart" />
        </Button>
        <Button iconOnly size="big">
          <Icon icon="heart" />
        </Button>
      </ButtonGroup>
    </div>
  );
};

button.story = {
  name: "Default",
};
