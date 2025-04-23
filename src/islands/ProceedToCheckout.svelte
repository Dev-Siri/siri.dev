<script lang="ts">
  const RICKROLL_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
</script>

<button
  type="button"
  class="bg-white text-black p-2 px-4 rounded-full my-4 hover:bg-gray-200 duration-200"
  on:click={() => window.open(RICKROLL_URL)}
>
  Proceed to Checkout
</button>
