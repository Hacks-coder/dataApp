<script>
	import Text from "../resuable/Text.svelte";

    const contactInfo = [
        {icon: "icon", text: "Email"},
        {icon: "icon", text: "Phone"},
        {icon: "icon", text: "Office"}
    ]
</script>


<section class="flex gap-10 mt-10">
    {#each contactInfo as item}
        <section class="flex flex-col ">
            <Text text = {item.icon} />
            <Text text = {item.text} />
        </section>
    {/each}
</section>
