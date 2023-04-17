---
const { videoUrl } = Astro.props;
---

<iframe
  class="rounded-3xl w-full"
  width="300"
  height="100"
  src={`https://www.youtube.com/embed/${videoUrl}`}
  {/** Redirect to src*/}
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen></iframe>
