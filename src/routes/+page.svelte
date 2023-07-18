<script>
  import Skinview3d from "$lib/Skinview3d.svelte";
  let uuid = "1279b4d9-cd87-487a-b812-dee3c7aae15b";
  $: skinUrl = `https://skins.xenyria.net/skins/${uuid}`;

  let width = 300;
  let height = 600;
</script>

<h1>svelte-skinview3d</h1>
<Skinview3d
  {width}
  {height}
  {skinUrl}
  options={{
    background: "#ddd"
  }}
/>
<button on:click={() => (uuid = "1279b4d9-cd87-487a-b812-dee3c7aae15b")}>CRUGG</button>
<button on:click={() => (uuid = "f883d0cd-917c-4843-8078-fe176e3f9a9e")}>_Trasher</button>
<input type="number" bind:value={width} />
x
<input type="number" bind:value={height} />
