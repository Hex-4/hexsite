<script>
  export let text = "Hello!";
</script>

<div
  class="p-1 relative flex justify-center w-12 h-12 my-2 mx-auto shadow-2xl bg-neutral text-primary hover:bg-primary hover:text-white rounded-3xl hover:rounded-lg transition-all duration-200 ease-in-out cursor-pointer group"
>
  <slot />
  <span
    class="absolute w-auto p-2 mx-2 my-1 min-w-max rounded-full shadow-lg text-white bg-neutral text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100 left-14 z-50"
    >{text}</span
  >
</div>
