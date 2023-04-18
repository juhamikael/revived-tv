import AudioForm from "./AudioForm";
import ImageForm from "./ImageForm";
import SayHi from "./SayHi";
import { Tabs, TabsProps, rem } from "@mantine/core";
import { Icon } from "@iconify/react";
const Contact: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="w-2/4">
        <StyledTabs defaultValue="say-hi" className="w-full">
          <Tabs.List>
            <Tabs.Tab
              value="say-hi"
              icon={<Icon icon="ri:file-music-fill" />}
              className="w-full"
            >
              Say Hi
            </Tabs.Tab>
            {/* <Tabs.Tab
            value="music-submission"
            icon={<Icon icon="ri:file-music-fill" />}
            className="w-60"
          >
            Music Submission
          </Tabs.Tab>
          <Tabs.Tab
            value="image-submission"
            icon={<Icon icon="ri:file-music-fill" />}
            className="w-60"
          >
            Image Submission
          </Tabs.Tab> */}
          </Tabs.List>
          <Tabs.Panel value="say-hi" pt="xs">
            <SayHi />
          </Tabs.Panel>
          {/* 
        <Tabs.Panel value="music-submission" pt="xs">
          <AudioForm />
        </Tabs.Panel> */}

          {/* <Tabs.Panel value="image-submission" pt="xs">
          <ImageForm />
        </Tabs.Panel> */}
        </StyledTabs>
      </div>
    </div>
  );
};

export default Contact;

function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      unstyled
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[0]
              : theme.colors.orange[4],
          border: `${rem(1)} solid ${
            theme.colorScheme === "dark"
              ? theme.colors.orange[4]
              : theme.colors.orange[4]
          }`,
          padding: `${theme.spacing.xs} ${theme.spacing.md}`,
          cursor: "pointer",
          fontSize: theme.fontSizes.sm,
          display: "flex",
          alignItems: "center",

          "&:disabled": {
            opacity: 0.5,
            cursor: "not-allowed",
          },

          "&:not(:first-of-type)": {
            borderLeft: 0,
          },

          "&:first-of-type": {
            borderTopLeftRadius: theme.radius.md,
            borderBottomLeftRadius: theme.radius.md,
          },

          "&:last-of-type": {
            borderTopRightRadius: theme.radius.md,
            borderBottomRightRadius: theme.radius.md,
          },

          "&[data-active]": {
            backgroundColor: theme.colors.orange[7],
            borderColor: theme.colors.orange[7],
            color: theme.white,
          },
        },

        tabIcon: {
          marginRight: theme.spacing.xs,
          display: "flex",
          alignItems: "center",
        },

        tabsList: {
          display: "flex",
        },
      })}
      {...props}
    />
  );
}
