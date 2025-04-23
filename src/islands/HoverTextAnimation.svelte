<script>
  import AnimatedText from "./AnimatedText.svelte";

  const { defaultText, replaceText, staticText = "" } = $props();

  let showingDefault = $state(true);
  let hoveredOnce = $state(false);

  function handleMouseEnter() {
    showingDefault = false;
    hoveredOnce = true;
  }
</script>

<span role="presentation" onmouseenter={handleMouseEnter} onmouseleave={() => (showingDefault = true)}>
  {#if showingDefault}
    {#if !hoveredOnce}
      {`${defaultText}${staticText}`}
    {:else}
      <AnimatedText text={defaultText} {staticText} animationSpeed={20} />
    {/if}
  {:else}
    <AnimatedText text={replaceText} {staticText} animationSpeed={20} />
  {/if}
</span>
