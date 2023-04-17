const mapList = (list: string[]) => {
  let completed = "";
  list.forEach((genre, index) => {
    if (index === list.length - 1) {
      completed += genre;
    } else {
      completed += genre + ", ";
    }
  });
  return completed;
};

const parseSpotifyUrl = (url: string) => {
  return url.split("/").pop();
};

export { mapList, parseSpotifyUrl };
