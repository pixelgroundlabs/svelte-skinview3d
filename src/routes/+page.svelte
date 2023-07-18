<script>
  import Skinview3d from "$lib/Skinview3d.svelte";
  import { WalkingAnimation } from "skinview3d";
  let uuid = "1279b4d9-cd87-487a-b812-dee3c7aae15b";
  $: skinUrl = `https://skins.xenyria.net/skins/${uuid}`;
</script>

<h1>svelte-skinview3d</h1>
<Skinview3d
  width="300"
  height="600"
  {skinUrl}
  options={{
    animation: new WalkingAnimation()
  }}
/>
<button on:click={() => (uuid = "1279b4d9-cd87-487a-b812-dee3c7aae15b")}>CRUGG</button>
<button on:click={() => (uuid = "f883d0cd-917c-4843-8078-fe176e3f9a9e")}>_Trasher</button>
