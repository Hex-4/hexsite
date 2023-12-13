<script>
  import SidebarIcon from "./SidebarIcon.svelte";
  import FaHome from "svelte-icons/fa/FaHome.svelte";
  import FaGamepad from "svelte-icons/fa/FaGamepad.svelte";
  import FaCode from "svelte-icons/fa/FaCode.svelte";
  import FaGithub from "svelte-icons/fa/FaGithub.svelte";
</script>

<div
  class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-base shadow-2xl border-r-2 border-primary"
>
  <SidebarIcon text="Home">
    <FaHome />
  </SidebarIcon>

  <SidebarIcon text="Play">
    <FaGamepad />
  </SidebarIcon>

  <SidebarIcon text="Code">
    <FaCode />
  </SidebarIcon>

  <SidebarIcon text="Contribute">
    <FaGithub />
  </SidebarIcon>
</div>
