import axios from "axios";

interface IDiscordServiceProps {
  data: {
    name?: string;
    email?: string;
    message?: string;
    subject?: string;
  };
}

const getTodayDate = () => {
  const now = new Date();
  const date = now.toLocaleDateString("en-GB");
  const time = now.toLocaleTimeString("en-GB");
  return `${date} - ${time}`;
};

const DiscordService = (props: IDiscordServiceProps) => {
  const { data } = props;
  const discordWebhookToken = import.meta.env.DISCORD_WEBHOOK;

  // Check if any required fields are empty
  if (!data) {
    return {
      Send: () => Promise.reject(new Error("Required fields are missing")),
    };
  }

  // All required fields are present, construct the payload
  //   const title = `${artistName} - ${songTitle}`;
  //   const threadName = `Audio Submission - [${title}]`;

  const body = {
    content: "New Audio submission from https://revived.tv",
    thread_name: threadName,
    embeds: [
      {
        title: title,
        description: getTodayDate(),
        fields: [
          {
            name: "Name",
            value: data.name,
          },
          {
            name: "Email",
            value: data.email,
          },
          {
            name: "Message",
            value: data.message,
          },
        ],
      },
    ],
    attachments: [],
  };

  const Send = async () => {
    try {
      const response = await axios.post(discordWebhookToken, body);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return { Send };
};

export default DiscordService;
