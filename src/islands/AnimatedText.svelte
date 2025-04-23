<script lang="ts">
  const { text, animationSpeed = 90, staticText = "" } = $props();

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  let currentText = $state("");
  let resolved = 0;

  function scrambleText() {
    let output = "";

    for (let i = 0; i < text.length; i++) {
      if (i < resolved) {
        output += text[i];
      } else {
        output += chars[Math.floor(Math.random() * chars.length)];
      }
    }

    currentText = output;

    if (resolved < text.length) {
      setTimeout(() => {
        resolved++;
        scrambleText();
      }, animationSpeed);
    }
  }

  $effect(() => {
    scrambleText();
  });
</script>

{`${currentText}${staticText}`}
<!-- In case of no JS, the text can still be shown -->
<noscript>{text}{staticText}</noscript>
