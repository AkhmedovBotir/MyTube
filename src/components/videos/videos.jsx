import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard, Loader } from "..";
import { Fragment } from "react";

const Videos = ({ videos }) => {

  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"space-between"}
      alignItems={"stretch"}
      gap={5}
    >
      {videos.map((item, idx) => (
        <Fragment key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard video={item} />}
        </Fragment>
      ))}
    </Stack>
  );
};

export default Videos;
